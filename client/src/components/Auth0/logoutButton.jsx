import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  <button onClick={() => logout({ returnTo: window.location.origin })}>
    Logout
  </button>;
}

export default LogoutButton;
