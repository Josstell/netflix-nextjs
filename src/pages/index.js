import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Link from "next/link"
import { startClock } from "../redux/actions"

import HomeScreen from "@components/HomeScreen"

const Index = () => {
  return (
    <div className="app">
      <HomeScreen />
      <style jsx>{`
        .app {
          background-color: #111;
           {
            /* height: 100vh; */
          }
        }
      `}</style>
    </div>
  )
}

export default Index
