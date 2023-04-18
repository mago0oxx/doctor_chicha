import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Style from './loginButton.module.css'
function LoginButton() {
  const { isLoading, isAuthenticated, error, user, loginWithPopup, logout } =
    useAuth0();
  return <button className={Style.btnlog} onClick={() => loginWithPopup()}>Entrar / registrate </button>;
}

export default LoginButton;
