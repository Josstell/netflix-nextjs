import React from "react"

import Footer from "@components/Footer"
import Header from "@components/Header"

const Layout = ({ setCurrentUser, children, currentUser }) => {
  return (
    <>
      <Header currentUser={currentUser} />

      {children}
      <Footer />
    </>
  )
}

export default Layout
