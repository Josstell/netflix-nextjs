import Header from "@components/Header"
import HomeScreen from "@components/HomeScreen"

const Index = () => {
  return (
    <div className="app">
      <Header />
      <HomeScreen />
      <style jsx>{`
        .app {
          background-color: #111;
        }
      `}</style>
    </div>
  )
}

export default Index
