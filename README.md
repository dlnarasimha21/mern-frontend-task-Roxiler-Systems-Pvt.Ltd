# mern-frontend-task-Roxiler-Systems-Pvt.Ltd
This project creates a transactions dashboard using React and APIs. It features a transactions table that filters by month and allows for searching. Additionally, it displays monthly transaction statistics, including total sales and items sold, alongside a bar chart visualizing item counts across price ranges for better insights into the data.
# Transactions Dashboard

This project is a transactions dashboard built using React, integrating with a MERN stack backend to display transaction data, statistics, and visualizations. Users can filter transactions by month, search for specific entries, and view statistics and charts for better insights.

## Features

- **Transactions Table**: 
  - Displays transactions with pagination and search functionality.
  - Filters transactions by the selected month (default: March).

- **Statistics Display**:
  - Shows total sales, total sold items, and total not sold items for the selected month.

- **Bar Chart Visualization**:
  - Illustrates item counts across defined price ranges for the selected month.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Axios**: Library for making HTTP requests.
- **Chart.js**: Library for creating charts and visualizations.
- **React-Chartjs-2**: React wrapper for Chart.js.

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dlnarasimha21/mern-backend-task-roxiler-systems.git

Navigate to the project directory:
cd mern-backend-task-roxiler-systems

Install dependencies:
npm install

Start the application:
npm start
API Integration

This project interacts with the following API endpoints:
Transactions Table: Fetches transactions based on selected month and search criteria.
Statistics API: Retrieves sales and item statistics for the selected month.
Bar Chart API: Fetches item distribution based on price ranges for the selected month.

## Environment Variables

This project requires the following environment variables to be set up for proper functioning:

**REACT_APP_API_URL**: The base URL for your backend API. For example:
REACT_APP_API_URL=http://localhost:5000/api

### Setting Up the Environment Variables

1. Create a file named `.env` in the root of your project.
2. Add the following line to the `.env` file:
REACT_APP_API_URL=http://localhost:5000/api
3. Save the file and ensure it is included in your `.gitignore` to prevent it from being pushed to your repository.

> **Note:** Replace the URL with your actual backend API URL when deploying or sharing your application.
