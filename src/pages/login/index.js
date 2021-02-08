import React, { useState } from "react"

import SignupScreen from "@components/SignupScreen"

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          Sign in
        </button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
              perferendis?
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
      <style jsx>{`
        .loginScreen {
          position: relative;
          height: 100%;
          background: url("https://mediaincanada.com/wp/wp-content/uploads/2020/09/netflix-banner.png")
            center no-repeat;
          background-size: cover;
        }

        .loginScreen_gradient {
          width: 100%;
          z-index: 1;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }
        .loginScreen_logo {
          position: fixed;
          left: 0;
          width: 150px;
          object-fit: contain;
          padding-left: 20px;
        }
        .loginScreen_button {
          position: fixed;
          right: 20px;
          top: 20px;
          padding: 10px 20px;
          font-size: 1rem;
          color: #fff;
          background-color: #e50914;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }

        .loginScreen_body > h1 {
          font-size: 3.125rem;
          margin-bottom: 20px;
        }

        .loginScreen_body {
          position: absolute;
          top: 30%;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          z-index: 1;
          color: #fff;
          padding: 20px;
        }
        .loginScreen_body > h2 {
          font-size: 2rem;
          font-weight: 400;
          margin-bottom: 30px;
        }
        .loginScreen_body > h2 {
          font-size: 1.3rem;
          font-weight: 400;
        }
        .loginScreen_input {
          margin: 20px;
        }
        .loginScreen_input > form > input {
          padding: 10px;
          outline-width: 0;
          height: 50px;
          width: 65%;
          border: none;
          max-width: 600px;
        }
        .loginScreen_getStarted {
          padding: 16px 20px;
          font-size: 1rem;
          color: #fff;
          background-color: #e50914;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default LoginScreen
