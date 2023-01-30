import "../styles/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const mapPin = (
    <FontAwesomeIcon icon={faLocationDot} className="text-travel-red" />
  );
  return (
    <div className="card--wrapper mb-9 flex">
      <div className="card--image_wrapper">
        <img src={props.imgUrl} />
      </div>
      <div className="card--info_wrapper ml-5">
        <p className="font-normal">
          <span className="card--info_country pr-3 uppercase">
            {mapPin}&nbsp;{props.country}
          </span>
          <span>
            <a className="card--info_map" href={props.mapUrl} target="_blank">
              View on Google Maps
            </a>
          </span>
        </p>
        <h1 className="card--info_location font-bold">{props.location}</h1>
        <p className="card-info_dates font-bold pt-3 pb-2">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--info_description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
