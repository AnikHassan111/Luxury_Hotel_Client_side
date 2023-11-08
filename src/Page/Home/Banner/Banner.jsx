import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="gird grid-cols-1 md:grid-cols-2 items-center gap-5 my-5 ">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">
          Exclusive Hotel{" "}
          <span className="text-yellow-400 text-5xl">20%Discounts</span> for
          Your Next Getaway
        </h1>
        <p>
          Are you dreaming of a memorable vacation but worried about your
          budget? Look no further! We are excited to offer you exclusive hotel
          discounts that will make your next getaway even more affordable and
          enjoyable
        </p>
        <Link to={"/room"}>
          <button className="btn btn-outline btn-warning mt-3">
            Booked Now
          </button>
        </Link>
      </div>
      <div>
        <img
          src="https://i.ibb.co/QmCXNy0/francesca-saraco-d-S27-XGg-Ry-Q-unsplash.jpg"
          alt=""
          className="rounded-lg mt-6 md:mt-0"
        />
      </div>
    </div>
  );
};

export default Banner;
