import {socials} from "../data";
import Card from "../components/Card";

const Home = () => {
  return (
      <div className="home">
          {socials.map(social=>(
              <Card key={social.id} social={social}/>
          ))}
      </div>

  )
}

export default Home;