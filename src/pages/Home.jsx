import {socialsHolder} from "../data";
import Card from "../components/Card";

const Home = () => {
    function reload(){
        console.log('Home reloaded!')
        this.setState({
            'state': 0
        });
    }
    reload();
    return (

      <div className="home">
          {socialsHolder.map(social=>(
              <Card key={social.id} social={social}/>
          ))}
      </div>
  )
}

export default Home;