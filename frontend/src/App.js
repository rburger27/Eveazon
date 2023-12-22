import React from 'react';
import './App.css'; // Import the default App.css file for basic styling
import axios from 'axios';  
import ssoButtonImage from './assets/images/eve-sso-login-black-large.png'; // importing your CCP SSO login button image


function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    // Replace with your backend API endpoint
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/example`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSSOLogin = () => {
    // Replace with your EVE Online Developer Application details
    const clientId = 'your_client_id';
    const redirectUri = 'your_redirect_uri';
    const responseType = 'code';

    // Construct the EVE Online SSO URL
    const ssoUrl = `https://login.eveonline.com/v2/oauth/authorize/?response_type=${responseType}&redirect_uri=${redirectUri}&client_id=${clientId}`;

    // Redirect the user to the EVE Online SSO page
    window.location.href = ssoUrl;
  };

  return (
    <div className="app">
      <header className="app-header">
        <img src={ssoButtonImage} className="sso-button" alt="EVE Online SSO" onClick={handleSSOLogin} />
        <h1>Welcome to EVEAzon</h1>
        <p>Your go-to marketplace in the EVE Online universe!</p>
        <h1>{data}</h1>
      </header>
    </div>
  );
}

export default App;
