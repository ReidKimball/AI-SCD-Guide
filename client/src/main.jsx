import './output.css' // Compiled Tailwind CSS file, needs to be first
import './index.css' // main.jsx index.css file
import React from 'react'
import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
import { useNavigate } from 'react-router'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Add onRedirectCallback function
const onRedirectCallback = (appState) => {
  const navigate = useNavigate();
  navigate('/profile'); 
}

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/*
    <Auth0Provider
        domain='dev-6d3mh8z30vz0bte5.us.auth0.com'
        clientId='2oBF1gZ7ZgAoNYBgqey15WCfny9jExgx'
        useRefreshTokens={true}
        cacheLocation='localstorage'
        onRedirectCallback={onRedirectCallback}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
    >
      <App />
    </Auth0Provider>,
     */}
     <App />
  </StrictMode>,
)