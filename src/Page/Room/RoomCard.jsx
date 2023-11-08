import { Link } from "react-router-dom";

const RoomCard = ({ data }) => {
  const { room_img, room_description, _id } = data;
  return (
    <Link to={`/roomshowDetails/${_id}`}>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={room_img} className="h-72" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{room_description}</h2>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
