import Card from "../../components/common/CardWrapper/CardWrapper"
import Hero from "../../components/Hero/Hero"

const HomePage:React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' , justifyContent:'center' }}>
      <Hero />
      <Card />
    </div>
  )
}

export default HomePage