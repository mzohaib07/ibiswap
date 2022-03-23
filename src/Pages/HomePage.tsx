import Card from "../components/CardWrapper/CardWrapper"
import DrawerWrapper from "../components/common/Drawer/DrawerWrapper"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import NavBar from "../components/NavBar/NavBar"

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Card />
      <Footer />
      <DrawerWrapper />
    </>
  )
}

export default HomePage