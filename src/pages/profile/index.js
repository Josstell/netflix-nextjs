import { useSelector } from "react-redux"

import Header from "@components/Header"
import { auth } from "src/firebase/firebase"

const Profile = () => {
  const { email, uid } = useSelector(state => state.user)

  return (
    <div className="profile">
      <Header />
      <div className="profile_body">
        <h1>Edit profile</h1>
        <div className="profile_info">
          <img
            src="https://i.pinimg.com/originals/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a.png"
            alt=""
          />
          <div className="profile_details">
            <h2>{email}</h2>
            <div className="profile_plans">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profile_signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .profile {
          background-color: #111;
          height: 100vh;
          color: white;
        }
        .profile_body {
          display: flex;
          flex-direction: column;
          width: 50%;
          margin-left: auto;
          margin-right: auto;
          padding-top: 8%;
          max-width: 800px;
        }
        .profile_info {
          display: flex;
        }
        .profile_details {
          color: white;
          margin-left: 25px;
          flex: 1;
        }

        .profile_plans {
          margin-top: 20px;
        }

        h3 {
          border-bottom: 1px solid #282c2d;
          padding-bottom: 10px;
        }
        .profile_details > h2 {
          background-color: gray;
          padding: 15px;
          font-size: 15px;
        }

        .profile_body > h1 {
          font-size: 60px;
          font-weight: 400;
          border-bottom: 1px solid #282c2d;
          margin-bottom: 20px;
        }
        .profile_info > img {
          height: 100px;
        }

        .profile_signout {
          padding: 10px 20px;
          font-size: 1rem;
          margin-top: 5%;
          width: 100%;
          color: white;
          background-color: #c50914;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default Profile
