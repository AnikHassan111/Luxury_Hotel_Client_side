const Banner = () => {
  return (
    <div className="flex items-center ">
      <div>
        <h1 className="text-4xl font-bold">
          Exclusive Hotel{" "}
          <span className="text-yellow-400 text-5xl">Discounts</span> for Your
          Next Getaway
        </h1>
        <p>
          Are you dreaming of a memorable vacation but worried about your
          budget? Look no further! We are excited to offer you exclusive hotel
          discounts that will make your next getaway even more affordable and
          enjoyable
        </p>
      </div>
      <div>
        <img
          src="https://i.ibb.co/QmCXNy0/francesca-saraco-d-S27-XGg-Ry-Q-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
