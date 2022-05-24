import {Link} from "react-router-dom";

const navigatorBar = ({user}) => {
  return (
      <div className="navigatorBar">
          <span className="logo">
              <Link className="link" to="/">Cowboy App</Link>
          </span>{
          user ? (
          <ul className="list">
              <li className="listItem">
                  <img src='../media/cowboytwo.jpg' alt="avatar" className="avatar" />
              </li>
              <li className="listItem>">User Man</li>
              <li className="listItem">Logout</li>
          </ul>
          ) : (<Link className="link" to="login">Login</Link>)
      }
      </div>
  );
};

export default navigatorBar;