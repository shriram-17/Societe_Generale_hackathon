from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from joblib import load
import pandas as pd
import psycopg2
import json
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this list with the actual origins you want to allow
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database connection
conn = psycopg2.connect(os.getenv('postgres_url'))

# Loading models
maintenance_model = load("../server/src/models/best_Random Forest Regressor_model.pkl")
acquisition_model = load("../server/src/models/acquisition_model.joblib")
retirement_model = load("../server/src/models/retirement_model.pkl")

# Reading CSV data
df_read = pd.read_csv("../server/src/synthetic_it_asset_data.csv")

# Request models
class PredictionRequest(BaseModel):
    Age_of_Asset: int
    Maintenance_Cost: float
    Replacement_Cost: float
    Asset_Type: str
    Lifecycle_Status: str

class RetirementRequest(BaseModel):
    Age_of_Asset: int
    Maintenance_Cost: float
    Replacement_Cost: float
    Asset_Type: str

class NetworkRequest(BaseModel):
    Component_Type: str
    Manufacturer: str
    Traffic_Load: float
    CPU_Usage: float
    Memory_Usage: float
    Temperature: float
    Failure_Duration_Hours: int
    Maintenance_Activity: str
    Maintenance_Cost: float

@app.get("/")
def home_page():
    return {"Message": "Hello World"}

@app.get("/asset")
def get_assets():
    assets_json = df_read.to_json(orient="records")
    return JSONResponse(content=json.loads(assets_json))

@app.post("/predict/maintenance")
def predict_maintenance(data:PredictionRequest):
    maintenance_cost_ratio = data.Maintenance_Cost / data.Replacement_Cost
    input_data = pd.DataFrame([{
        'Age of Asset': data.Age_of_Asset,
        'Maintenance Cost Ratio':maintenance_cost_ratio,
        'Asset Type': data.Asset_Type,
        'Lifecycle Status': data.Lifecycle_Status
    }])
    
    prediction = maintenance_model.predict(input_data)[0]
    return {"predicted_maintenance_cost": prediction}

@app.post("/predict/acquisition")
def predict_acquisition(data: PredictionRequest):
    query = "SELECT * FROM maintenance_table WHERE asset_type = %s"
    cur = conn.cursor()
    cur.execute(query, (data.Asset_Type,))
    rows = cur.fetchall()
    
    input_data = pd.DataFrame([{
        'Age of Asset': data.Age_of_Asset,
        'Maintenance Cost Ratio': data.Maintenance_Cost / data.Replacement_Cost,
        'Avg Maintenance Cost': rows[0][2],
        'Maintenance Cost Trend': rows[0][3]
    }])
    
    prediction = acquisition_model.predict(input_data)[0]
    
    return {"predicted_acquisition_cost": prediction}

@app.post("/predict/retirement")
def predict_retirement(data:PredictionRequest):
    query = "SELECT * FROM maintenance_table WHERE asset_type = %s"
    cur = conn.cursor()
    cur.execute(query, (data.Asset_Type,))
    rows = cur.fetchall()
    
    sample_data = {
        'Age of Asset': data.Age_of_Asset,
        'Maintenance Cost Ratio': data.Maintenance_Cost / data.Replacement_Cost,
        'Avg Maintenance Cost': rows[0][2],
        'Maintenance Cost Trend': rows[0][3]
    }
    
    labels = {
        0: 'Retired',
        1: 'In Maintenance',
        2: 'Active',
        3: 'Disposed'
    }
    
    df = pd.DataFrame([sample_data])
    prediction = retirement_model.predict(df)[0]
    
    return {"predicted_retirement_time": labels[int(prediction)]}


@app.post("/predict/network")
def predict_newtork(data:NetworkRequest):
    return {"message": "Data received successfully", "data": data.dict()}