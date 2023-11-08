import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const SIngleRoomDetails = () => {
  const [singleRoomData, setSingleRoomData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios(`http://localhost:5000/roomshowDetails/${id}`).then((res) =>
      setSingleRoomData(res.data)
    );
  }, []);
  const {
    _id,
    room_description,
    price_per_night,
    room_size,
    availability,
    room_img,
    specialOffer_available,
    short_description,
  } = singleRoomData;

  const handleBooking = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are booking this room",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes Booking",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:5000/bookign", singleRoomData)
          .then((res) => console.log(res.data));
        Swal.fire({
          title: "Bookgin successFull",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={room_img} className="max-w-xl rounded-lg shadow-2xl" />
          <div className="">
            <h1 className="text-5xl font-bold">{room_description}</h1>
            <div className="py-3">
              <p className="py-2 font-semibold">Room Size {room_size}</p>
              <p className="py-2 font-semibold">Availability{availability}</p>
              <p className="py-2 font-semibold">Pre Night ${price_per_night}</p>
              <p className="py-2 font-semibold">
                Special Offers{specialOffer_available}
              </p>
              <p className=" font-semibold">{short_description}</p>
            </div>

            <button
              onClick={handleBooking}
              className="btn btn-outline btn-secondary"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIngleRoomDetails;
