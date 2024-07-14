import pandas as pd
from faker import Faker
import random


fake = Faker()
num_records = 10000

asset_types = ['Laptop', 'Desktop', 'Server', 'Printer', 'Router', 'Switch']
lifecycle_statuses = ['Active', 'In Maintenance', 'Retired', 'Disposed']


data = []

for i in range(num_records):
    asset_id = f"A{i+1}"
    asset_type = random.choice(asset_types)
    purchase_date = fake.date_between(start_date='-5y', end_date='today')
    lifecycle_status = random.choice(lifecycle_statuses)
    maintenance_cost = round(random.uniform(100, 5000), 2)
    replacement_cost = round(random.uniform(500, 10000), 2)
    
    data.append([asset_id, asset_type, purchase_date, lifecycle_status, maintenance_cost, replacement_cost])


df = pd.DataFrame(data, columns=['Asset ID', 'Asset Type', 'Purchase Date', 'Lifecycle Status', 'Maintenance Cost', 'Replacement Cost'])

df.to_csv('synthetic_it_asset_data.csv', index=False)

print("Synthetic dataset generated and saved to 'synthetic_it_asset_data.csv'.")
