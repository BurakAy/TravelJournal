const Card = (props) => {
  console.log(props);
  return (
    <div className="card--wrapper flex">
      <div className="card--image_wrapper">
        <img src={props.imgUrl} />
      </div>
      <div className="card--info_wrapper">
        <p>
          <span>{props.country}</span>
          <span>
            <a href={props.mapURL} target="_blank">
              View on Google Maps
            </a>
          </span>
        </p>
        <h1>{props.location}</h1>
        <p>
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
