import {Link} from "react-router-dom";

function Card({social}) {

    return (
        <div className="card">
            <Link className="link" to={`/social/${social.id}`}>
                <span className="title">{social.title}</span>
                <img src={social.img} alt="" className="picture1" />
                <p className="desc">{social.desc}</p>
                <button className="cardButton">Click here</button>
            </Link>
        </div>
    )
}

export default Card;