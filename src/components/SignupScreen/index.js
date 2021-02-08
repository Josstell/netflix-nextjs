import React, { useRef } from "react"
import { auth } from "src/firebase/firebase"
import { useRouter } from "next/router"

const SignupScreen = () => {
  const router = useRouter()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = e => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        // console.log(authUser)
        router.push("/")
      })
      .catch(err => alert(err.message))
  }

  const signIn = e => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        router.push("/")
      })
      .catch(err => alert(err.message))
  }
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="sigupScreen_gray">New to Netflx? </span>
          <span className="sigupScreen_link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
      <style jsx>{`
        .signupScreen {
          max-width: 300px;
          padding: 50px;
          margin-left: auto;
          margin-right: auto;
          background: rgba(0, 0, 0, 0.85);
        }
        .signupScreen > form {
          display: grid;
          flex-direction: column;
        }

        .signupScreen > form > h4 {
          font-size: 12px;
          font-weight: 400;
          text-align: left;
          margin-top: 30px;
        }
        .sigupScreen_gray {
          color: gray;
        }
        .sigupScreen_link:hover {
          cursor: pointer;
          text-decoration: underline;
        }
        .signupScreen > form > h1 {
          text-align: left;
          margin-bottom: 25px;
        }

        .signupScreen > form > input {
          outline-width: 0;
          height: 40px;
          margin-bottom: 14px;
          border-radius: 5px;
          border: none;
          padding: 5px 15px;
        }

        .signupScreen > form > button {
          padding: 16px 20px;
          font-size: 1rem;
          color: #fff;
          border-radius: 5px;
          background-color: #e50914;
          font-weight: 600;
          border: none;
          cursor: pointer;
          margin-top: 20px;
        }
      `}</style>
    </div>
  )
}

export default SignupScreen
