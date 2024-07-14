# IT Asset and Network Management System

This project aims to create an AI-driven system to manage IT assets, optimize resource utilization, and lifecycle management, as well as implement an AI-based network monitoring system. Additionally, it includes developing a user-friendly dashboard to provide a comprehensive overview of IT operations, asset management, and network performance.

## Use Case 1: AI-Driven IT Asset Management System

### Data Features Utilization
1. **Age of Asset**: Understanding the lifecycle stage for predictive maintenance and retirement planning.
2. **Maintenance Cost Ratio**: Insights into cost-effectiveness of maintaining an asset relative to its replacement cost.
3. **Avg Maintenance Cost**: Identifying trends and patterns for optimal maintenance schedules.
4. **Maintenance Cost Trend**: Visualizing cost variations and predicting future maintenance expenses.

### Model Selection and Usage
1. **Linear Regression**
   - **Purpose**: Understand linear relationships between variables.
   - **Usage**: Predicting continuous variables such as replacement costs.

2. **Ridge and Lasso Regression**
   - **Purpose**: Managing multicollinearity and overfitting.
   - **Usage**: Enhancing model stability with a large number of features.

3. **Random Forest Regressor**
   - **Purpose**: Capturing nonlinear relationships and interactions.
   - **Usage**: Predicting complex relationships in maintenance costs and lifecycle predictions.

4. **Random Forest Classifier**
   - **Purpose**: Predicting categorical outcomes like lifecycle status.
   - **Usage**: Providing insights into asset health and operational status.

5. **Logistic Regression**
   - **Purpose**: Classifying binary outcomes.
   - **Usage**: Quick assessments of asset status.

6. **Support Vector Machine (SVM)**
   - **Purpose**: Handling complex decision boundaries.
   - **Usage**: Clear boundaries between lifecycle stages or asset health conditions.

### Benefits of Model Integration
- **Predictive Accuracy**: Accurate predictions of maintenance needs and costs.
- **Operational Efficiency**: Streamlining maintenance schedules and reducing costs.
- **Decision Support**: Actionable insights for IT administrators and stakeholders.
- **Scalability**: Handling large datasets and diverse features.
- **Continuous Improvement**: Refining predictive models with historical data.

## Use Case 2: AI-Based Network Monitoring System

### Data Preprocessing
- **Handling Missing Data**: Using forward fill method.
- **Label Encoding**: Encoding categorical columns for model compatibility.
- **Feature Scaling**: Standardizing numerical features.

### Exploratory Data Analysis (EDA)
- **Feature Importances**: Using Random Forest Classifier.
- **Correlation Analysis**: Exploring relationships affecting failure types.
- **Variance Inflation Factor (VIF)**: Ensuring model robustness.

### Feature Engineering
- **Derived Features**: Calculating metrics like Installation_Age, Time_Since_Last_Maintenance, and others.
- **One-Hot Encoding**: Converting categorical variables into binary features.

### Model Selection and Training
- **Initial Model**: Using RandomForestClassifier.
- **Hyperparameter Tuning**: Optimizing parameters with RandomizedSearchCV.
- **Model Evaluation**: Using accuracy score and classification report.

### Comparison with Other Models
- **Alternative Classifiers**: Logistic Regression, SVM, Gradient Boosting.
- **Performance Metrics**: Comparing accuracy scores and classification reports.

### Conclusion and Recommendations
- **Insights Gained**: Identifying key factors influencing network failure types.
- **Model Selection**: RandomForestClassifier recommended.
- **Future Steps**: Continuous model refinement and real-time data integration.

## Use Case 3: User-Friendly Dashboard for IT Operations

### Backend (FastAPI)
1. **Database Connection**: Use connection pooling and error handling.
2. **Model Loading**: Load models during startup for efficiency.
3. **Endpoint Optimization**: Optimize database queries and consider caching.
4. **Environment Variables**: Manage securely using dotenv.

### Frontend (React)
1. **State Management**: Using useState and useEffect hooks.
2. **Component Structure**: Well-structured components.
3. **Error Handling**: Implementing meaningful feedback for users.
4. **Component Reusability**: Extract common functionalities.
5. **Styling**: Using Tailwind CSS for consistent UI.

### Widgets
- **Overview Widget**: Charts for asset distribution, lifecycle status, costs.
- **Age of Managed Assets Widget**: Line chart for asset ages.
- **Network Performance Widget**: Charts for network metrics.
- **IT Operations Widget**: Operational metrics and activities.

## Logic Implementation

### Acquisition: Optimize Purchasing Decisions
- **Feature Engineering**: Metrics for asset condition.
- **Predictive Model**: Predict when to buy new assets.
- **Decision Rule**: Establish rules based on model predictions.

### Maintenance: Implement Predictive Maintenance Schedules
- **Feature Engineering**: Insights into asset condition.
- **Predictive Model**: Predict maintenance needs.
- **Scheduling**: Proactively schedule maintenance activities.

### Retirement: Plan Asset Retirement
- **Feature Engineering**: Indicators for end-of-life.
- **Predictive Model**: Predict optimal retirement time.
- **Decision Rule**: Inform decisions on asset retirement.

## Conclusion
Integrating these models and data features enhances operational efficiency and cost-effectiveness, empowering stakeholders with actionable insights for strategic asset management. Each model and data feature plays a crucial role in different aspects of the asset lifecycle, ensuring optimized resource utilization and proactive maintenance planning.

## GitHub Repository
For more details, please visit the [GitHub repository](https://github.com/shriram-17/Societe_Generale_hackathon).

---

By implementing these strategies, organizations can enhance operational efficiency, reduce costs associated with asset management, and make informed decisions that align with both financial and sustainability goals.
