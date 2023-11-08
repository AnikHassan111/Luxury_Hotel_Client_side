import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyBookingCard = ({ booked }) => {
  const {
    _id,
    room_description,
    price_per_night,
    room_size,
    availability,
    room_img,
    specialOffer_available,
    short_description,
  } = booked;
  return (
    <Link>
      <div className="max-w-7xl mx-auto mt-5">
        <div className="hero ">
          <div className="flex  gap-10 flex-col w-3/4 lg:flex-row">
            <img src={room_img} className="w-96 rounded-lg shadow-2xl" />
            <div className="">
              <h1 className="text-5xl font-bold">{room_description}</h1>
              <div className="py-3">
                <p className="py-2 font-semibold">Room Size {room_size}</p>
                <p className="py-2 font-semibold">Availability{availability}</p>
                <p className="py-2 font-semibold">
                  Pre Night ${price_per_night}
                </p>
                <p className="py-2 font-semibold">
                  Special Offers{specialOffer_available}
                </p>
                <p className=" font-semibold">{short_description}</p>
              </div>

              <Link
                to={`/roomshowDetails/${_id}`}
                className="btn btn-outline btn-secondary"
              >
                Show Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyBookingCard;
