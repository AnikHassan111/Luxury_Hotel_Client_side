const FeaturedCard = ({ data }) => {
  const { room_img, room_description, description, specialty } = data;

  return (
    <div className="card   shadow-xl image-full">
      <figure>
        <img src={room_img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{room_description}</h2>
        <p>{description.slice(0, 90)}</p>
        <p className="text-yellow-400 font-semibold">{specialty}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
