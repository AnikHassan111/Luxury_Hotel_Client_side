const GellaryCard = ({ data }) => {
  return (
    <div>
      <div>
        <img src={data.image} alt="" className="rounded-md" />
      </div>
    </div>
  );
};

export default GellaryCard;
