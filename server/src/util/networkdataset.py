import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Number of samples
num_samples = 20000  # Adjusted to 20,000

# Lists to store data
ids = []
components = []
manufacturers = []
installation_dates = []
traffic_load = []
cpu_usage = []
memory_usage = []
temperature = []
failure_events = []
failure_timestamps = []
failure_durations = []
maintenance_activities = []
maintenance_dates = []
maintenance_costs = []

# Generate synthetic data iteratively
for i in range(1, num_samples + 1):
    # Generate ID
    network_id = f"N{i}"
    ids.append(network_id)
    
    # Generate random network component data
    component_type = np.random.choice(['router', 'switch', 'firewall', 'load balancer'])
    components.append(component_type)
    
    manufacturer = np.random.choice(['Cisco', 'Juniper', 'HP', 'Dell'])
    manufacturers.append(manufacturer)
    
    installation_date = datetime(2010, 1, 1) + timedelta(days=np.random.randint(1, 3000))
    installation_dates.append(installation_date)
    
    # Generate operational conditions data
    traffic_load.append(np.random.uniform(0, 100))
    cpu_usage.append(np.random.uniform(0, 100))
    memory_usage.append(np.random.uniform(0, 100))
    temperature.append(np.random.uniform(0, 50))
    
    # Generate failure events data
    failure_type = np.random.choice(['hardware', 'software', 'configuration'])
    failure_events.append(failure_type)
    
    failure_timestamp = datetime(2023, 1, 1) + timedelta(days=np.random.randint(-365, 365))
    failure_timestamps.append(failure_timestamp)
    
    failure_duration = np.random.randint(1, 24)
    failure_durations.append(failure_duration)
    
    # Generate maintenance and repair data
    maintenance_activity = np.random.choice(['inspection', 'repair', 'upgrade'])
    maintenance_activities.append(maintenance_activity)
    
    maintenance_date = datetime(2023, 1, 1) + timedelta(days=np.random.randint(-365, 365))
    maintenance_dates.append(maintenance_date)
    
    maintenance_cost = np.random.uniform(100, 1000)
    maintenance_costs.append(maintenance_cost)

# Create DataFrame
data = pd.DataFrame({
    'ID': ids,
    'Component_Type': components,
    'Manufacturer': manufacturers,
    'Installation_Date': installation_dates,
    'Traffic_Load': traffic_load,
    'CPU_Usage': cpu_usage,
    'Memory_Usage': memory_usage,
    'Temperature': temperature,
    'Failure_Type': failure_events,
    'Failure_Timestamp': failure_timestamps,
    'Failure_Duration_Hours': failure_durations,
    'Maintenance_Activity': maintenance_activities,
    'Maintenance_Date': maintenance_dates,
    'Maintenance_Cost': maintenance_costs
})

# Save as CSV with index
data.to_csv('network_failure_systems_data_with_id.csv', index=True)

print(f"Generated and saved 20,000 synthetic datasets with ID and index as 'network_failure_systems_data_with_id.csv'.")
