import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyBookingCard = ({ booked, setData, data }) => {
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

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Delete this booking",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookingDelete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((value) => {
            console.log(value);

            if (value.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaning = data.filter((rem) => rem._id !== _id);

              setData(remaning);
            }
          });
      }
    });
  };

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
              <button
                onClick={handleDelete}
                className="btn btn-outline btn-error ml-5"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyBookingCard;
