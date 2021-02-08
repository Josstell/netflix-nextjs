import { useState, useEffect } from "react"
import { auth } from "../../firebase/firebase"
import { useDispatch, useSelector } from "react-redux"
import { signIn, signout } from "../../redux/actions"
import { useRouter } from "next/router"

const Header = props => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const { user } = useSelector(state => state.user)

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth)
        dispatch(
          signIn({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      } else {
        dispatch(signout())
        router.push("/login")
      }
    })
    return unsuscribe
  }, [dispatch])

  const transitionHeaderBar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionHeaderBar)
    return () => window.removeEventListener("scroll", transitionHeaderBar)
  }, [])

  return (
    <div className={`header ${show && "header_black"}`}>
      <div className="header_contents">
        <img
          onClick={() => router.push("/")}
          className="header_logo"
          src="https://static.wikia.nocookie.net/logopedia/images/5/5d/Netflix_2014.svg"
          alt=""
        />
        <img
          onClick={() => router.push("/profile")}
          className="header_avatar"
          src="https://i.pinimg.com/originals/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a.png"
          alt=""
        />
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          padding: 20px;
          width: 100%;
          height: 40px;
          z-index: 1;

          transition-timing-function: ease-in;
          transition: all 0.5s;
        }

        .header_black {
          background-color: #111;
        }
        .header_contents {
          display: flex;
          justify-content: space-between;
        }
        .header_logo {
          position: fixed;
          top: 5px;
          left: 0;
          width: 80px;
          padding-left: 20px;
          cursor: pointer;
        }
        .header_avatar {
          cursor: pointer;
          position: fixed;
          top: 5px;

          right: 20px;
          width: 30px;
        }
      `}</style>
    </div>
  )
}

export default Header
