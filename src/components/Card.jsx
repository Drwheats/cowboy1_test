const Card = ({social}) => {
  return (
      <div className="card">
          <span className="title">{social.title}</span>
          <img src={social.img} alt="" className="picture1" />
          <p className="desc">{social.desc}</p>
          <button className="cardButton">Click here</button>
      </div>
  )
}

export default Card;