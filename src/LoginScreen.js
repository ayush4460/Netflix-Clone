import React from "react";
import "./LoginScreen.css";
import { useState } from "react";
import SignInScreen from "./SignupScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="LoginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient"></div>
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
