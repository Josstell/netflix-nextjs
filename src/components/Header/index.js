import { useState, useEffect } from "react"

const Header = props => {
  const [show, setShow] = useState(false)

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
          className="header_logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt=""
        />
        <img
          className="header_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png"
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
