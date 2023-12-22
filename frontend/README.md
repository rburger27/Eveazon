# EVEAzon Web App

EVEAzon is a web application designed for EVE Online players to streamline the process of placing purchase orders and interacting with a dedicated team of haulers.

## Features

- **SSO Authentication:** Securely log in with EVE Online Single Sign-On.
- **Purchase Orders:** Place and manage purchase orders.
- **Shipping Calculator:** Calculate shipping costs for your orders.
- **Price Checker:** Check prices for items in the EVE Online universe.
- **Buyback Contract Generator:** Generate contracts for selling items back to the corporation.

## Installation



## Usage

### 1. Set up EVE Online Developer Application:

Before running the EVEAzon web app, you need to set up a developer application on the EVE Online Developer Portal to obtain the necessary credentials.

- Go to [EVE Online Developers](https://developers.eveonline.com/).
- Create a new application and note the Client ID and Secret Key.
- Set the Redirect URI to the route where your web app will handle EVE Online SSO callbacks.

### 2. Configure Environment Variables:

In the `backend` directory, create a `.env` file with the following content:

//```plaintext
# MongoDB URI (replace with your actual MongoDB URI)
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database

Replace your_username, your_password, your_cluster, your_database, your_eve_sso_client_id, and your_eve_sso_client_secret with your actual MongoDB and EVE Online SSO credentials.

## EVE Online SSO credentials:
EVE_SSO_CLIENT_ID=your_eve_sso_client_id
EVE_SSO_CLIENT_SECRET=your_eve_sso_client_secret
EVE_SSO_REDIRECT_URI=http://localhost:5000/auth/callback  # Adjust to match your redirect URI

### 3. Run the APPlication:

# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Run the backend server
npm start

# Open a new terminal and navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run the frontend app
npm start

The application will be accessible at http://localhost:3000. Click the "Log in with EVE Online" button to initiate the EVE Online SSO login process.

# Contributing:

If you'd like to contribute to this project, please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE.md) - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Special thanks to CCP, The EVE ONLINE COMUNITY, My Corp (C5 FLight (C5-F))
