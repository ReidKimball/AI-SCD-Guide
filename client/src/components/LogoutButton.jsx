import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button className="cta-button bg-blue-800 shadow-sm hover:shadow-md" onClick={() => {
      logout({ 
        logoutParams: {
          returnTo: window.location.origin
        }
      });
    }}>Log out</button>
  );
}

export default LogoutButton;