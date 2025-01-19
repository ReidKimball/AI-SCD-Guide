import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <button className="cta-button bg-blue-800 shadow-sm hover:shadow-md" onClick={loginWithRedirect}>Create Account or Log in</button>
  );
}

export default LoginButton;