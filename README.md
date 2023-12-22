# EVEAzon Web App

EVEAzon is a web application designed for EVE Online players to streamline the process of placing purchase orders and interacting with a dedicated team of haulers.

## Features

- **SSO Authentication:** Securely log in with EVE Online Single Sign-On.
- **Purchase Orders:** Place and manage purchase orders.
- **Shipping Calculator:** Calculate shipping costs for your orders.
- **Price Checker:** Check prices for items in the EVE Online universe.
- **Buyback Contract Generator:** Generate contracts for selling items back to the corporation.

## Installation

Follow these steps to set up and run the EVEAzon web app locally.

### 1. Clone the Repository:

```bash
git clone https://github.com/rburger27/eveazon.git
cd eveazon

### 2. Set up EVE Online Developer Application:
Before running the EVEAzon web app, you need to create a developer application on the EVE Online Developer Portal to obtain the necessary credentials:

Go to EVE Online Developers.
Create a new application and note the Client ID and Secret Key.
Set the Redirect URI to the route where your web app will handle EVE Online SSO callbacks.

### 3. Configure Environment Variables:
In the backend directory, create a .env file with the following content:

# MongoDB URI (replace with your actual MongoDB URI)
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database

# EVE Online SSO credentials:
EVE_SSO_CLIENT_ID=your_eve_sso_client_id
EVE_SSO_CLIENT_SECRET=your_eve_sso_client_secret
EVE_SSO_REDIRECT_URI=http://localhost:5000/auth/callback  # Adjust to match your redirect URI

Replace your_username, your_password, your_cluster, your_database, your_eve_sso_client_id, and your_eve_sso_client_secret with your actual MongoDB and EVE Online SSO credentials.

###4. Install Dependencies:
Backend:

# Navigate to the backend directory
cd backend

# Install dependencies
npm install

Frontend:

# Open a new terminal and navigate to the frontend directory
cd frontend

# Install dependencies
npm install

### 5. Run the Application:
Backend:

# Return to the main project directory
cd ..

# Run the backend server
cd backend
npm start

Frontend:

# Open a new terminal and navigate to the frontend directory
cd frontend

# Run the frontend app
npm start

The application will be accessible at http://localhost:3000. Click the "Log in with EVE Online" button to initiate the EVE Online SSO login process.


Feel free to use or modify this Markdown content for your README.md. If you have any further questions or adjustments, let me know!

## Usage

EVEAzon simplifies the process of placing purchase orders and interacting with dedicated haulers in the EVE Online universe. Follow these steps to navigate and utilize the app effectively:

### 1. Home Page:

Upon accessing the application at [http://localhost:3000](http://localhost:3000), you will land on the home page. Here, you will find an overview of EVEAzon's features and a prominent "Log in with EVE Online" button.

### 2. EVE Online SSO Login:

Click the "Log in with EVE Online" button to initiate the EVE Online Single Sign-On (SSO) login process. This ensures secure authentication for accessing EVEAzon's features.

### 3. Dashboard:

After a successful login, you will be redirected to the dashboard. The dashboard provides quick access to essential features:

- **Purchase Orders:** Place and manage your purchase orders.
- **Shipping Calculator:** Calculate shipping costs for your orders.
- **Price Checker:** Check prices for items in the EVE Online universe.
- **Buyback Contract Generator:** Generate contracts for selling items back to the corporation.

### 4. Placing Purchase Orders:

Navigate to the "Purchase Orders" section to place new orders. Fill in the necessary details, including item names, quantities, and delivery preferences.

### 5. Shipping Calculator:

Use the "Shipping Calculator" to estimate shipping costs for your purchase orders. Enter the source and destination information to get accurate calculations.

### 6. Price Checker:

The "Price Checker" allows you to verify the current prices of items in the EVE Online universe. Enter the item details to get up-to-date market information.

### 7. Buyback Contract Generator:

Generate buyback contracts easily using the dedicated "Buyback Contract Generator" section. Enter the item details and preferences for a smooth selling process.

### 8. Logging Out:

Click the "Log Out" button when you're done using the app to securely log out of your EVE Online account.


### Set up EVE Online Developer Application

Before running the EVEAzon web app, you need to create a developer application on the EVE Online Developer Portal to obtain the necessary credentials:

#### Step 1: Visit EVE Online Developers Portal

1. Go to [EVE Online Developers](https://developers.eveonline.com/).

#### Step 2: Create a New Application

2. Log in with your EVE Online account.

3. Once logged in, navigate to the "Applications" tab.

4. Click on "Create Application."

#### Step 3: Configure Application Details

5. Fill in the application details:

   - **Name:** EVEAzon (or your preferred name).
   - **Description:** A brief description of your application.
   - **Website:** Enter the URL where users can access your application (e.g., `http://localhost:3000` for local development).
   - **Redirect URI:** Set the redirect URI to the route where your web app will handle EVE Online SSO callbacks. For local development, use `http://localhost:5000/auth/callback`. If deploying, use the appropriate production URL.

6. Click on "Save Changes."

#### Step 4: Note Client ID and Secret Key

7. After saving, you will see your new application listed. Note the following details:

   - **Client ID:** This is your unique identifier for the application.
   - **Secret Key:** This key must be kept secure and should not be shared.

#### Step 5: Set Redirect URI

8. Go back to the "Details" tab of your application and ensure the Redirect URI matches the one you specified earlier.

9. Click on "Save Changes."

These credentials (Client ID and Secret Key) will be used to configure environment variables in the next steps.


### 2. Configure Environment Variables

### 3. Configure Environment Variables:

In order for the EVEAzon web app to connect to the EVE Online Developer API and MongoDB, you need to set up environment variables. Follow these steps to configure the necessary variables:

#### Step 1: Create a `.env` File

1. In the `backend` directory of your EVEAzon project, create a file named `.env`.

#### Step 2: Add MongoDB URI

2. Inside the `.env` file, add your MongoDB URI in the following format:

   ```plaintext
   MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database

Replace your_username, your_password, your_cluster, and your_database with your actual MongoDB credentials.

Step 3: Add EVE Online SSO Credentials
Continue in the .env file and add your EVE Online SSO credentials:
EVE_SSO_CLIENT_ID=your_eve_sso_client_id
EVE_SSO_CLIENT_SECRET=your_eve_sso_client_secret
EVE_SSO_REDIRECT_URI=http://localhost:5000/auth/callback

Replace your_eve_sso_client_id and your_eve_sso_client_secret with the respective values obtained from the EVE Online Developer Portal. Ensure the EVE_SSO_REDIRECT_URI matches the Redirect URI specified during application setup.

Step 4: Save the File
Save the .env file.
Now, your backend server will use these environment variables to establish connections with MongoDB and the EVE Online Developer API during runtime.

### 4. Run the Application:

Now that you have cloned the repository, set up the EVE Online Developer Application, and configured environment variables, it's time to run the EVEAzon web app. Follow these steps to start the backend and frontend servers:

#### Step 1: Navigate to the Backend Directory

1. Open a terminal.

2. Navigate to the `backend` directory:

   ```bash
   cd backend

#### Step 2: Install Backend Dependencies
Install the backend dependencies:

npm install

#### Step 3: Run the Backend Server
Start the backend server:

npm start

The backend server will run at http://localhost:5000.

Step 4: Open a New Terminal for the Frontend
Open a new terminal window (keep the previous one running the backend server).

Navigate to the frontend directory:

cd ../frontend

Step 5: Install Frontend Dependencies
Install the frontend dependencies:

npm install

Step 6: Run the Frontend App
Start the frontend app:

npm start

The frontend app will be accessible at http://localhost:3000.

Step 7: Access the Application
Open your web browser and go to http://localhost:3000.
Step 8: Log in with EVE Online SSO
Click the "Log in with EVE Online" button to initiate the EVE Online Single Sign-On (SSO) login process.
Now, you should have the EVEAzon web app up and running locally. Explore the features, place purchase orders, and interact with the app securely using EVE Online SSO.


# Contributing


Feel free to customize the details or add more context based on specific requirements in your project. If you have additional information you'd like to include or if you have any specific preferences, let me know!

## License

This project is licensed under the [MIT License](LICENSE.md). See the [LICENSE.md](LICENSE.md) file for details.

# Acknowledgments

- Special thanks to CCP, The EVE ONLINE COMUNITY, My Corp (C5 FLight (C5-F))
