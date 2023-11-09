import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { ContextApi } from "../../AuthProvider/AuthProvider";

const BookNow = () => {
  const { user } = useContext(ContextApi);
  const { id } = useParams();
  const [bookRoomData, setBookRoomData] = useState([]);
  const [selectValue, setSelectValue] = useState([]);
  const navigate = useNavigate();
  const {
    _id,
    room_description,
    price_per_night,
    room_size,
    availability,
    room_img,
    specialOffer_available,
    short_description,
  } = bookRoomData || {};
  useEffect(() => {
    axios
      .get(`http://localhost:5000/roomshowDetails/${id}`)
      .then((res) => setBookRoomData(res.data));
  }, []);

  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  };

  const handleSubmite = (event) => {
    event.preventDefault();
    const form = event.target;
    const Fname = form.fname.value;
    const Lname = form.lname.value;
    const email = form.email.value;
    const userEmail = user.email;
    const gustNum = form.gustNum.value;
    const roomType = selectValue;
    const bookingDate = form.bookingDate.value;
    const sectialRequest = form.sectialRequest.value;
    const singleRoomData = {
      _id,
      room_description,
      price_per_night,
      room_size,
      availability,
      room_img,
      specialOffer_available,
      short_description,
      Fname,
      Lname,
      email,
      userEmail,
      gustNum,
      roomType,
      bookingDate,
      sectialRequest,
    };

    if (user) {
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
            .then((res) => {
              if (res.data.acknowledged) {
                Swal.fire({
                  title: "Bookgin successFull",
                  text: "Your Room Is Booked",
                  icon: "success",
                });
                navigate("/");
              }
            });
        }
      });
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Hotel Booking</h1>
        <p className="text-xl ">Experience something new every moment</p>
      </div>
      <form action="" onSubmit={handleSubmite}>
        <div className="w-3/4 mx-auto mt-5">
          {/* Name Field */}
          <div className="flex justify-between gap-10 ">
            <h2 className="font-semibold text-2xl">Name</h2>
            <div className="flex gap-5">
              <div>
                <input
                  type="text"
                  name="fname"
                  className="border py-2 px-4  border-black rounded-md w-[300px]"
                />
                <p>First Name</p>
              </div>
              <div>
                <input
                  type="text"
                  name="lname"
                  className="border py-2 px-4  border-black rounded-md w-[300px]"
                />
                <p>Last Name</p>
              </div>
            </div>
          </div>
          {/* Email Field */}
          <div className="flex justify-between gap-10 mt-3 ">
            <h2 className="font-semibold text-2xl">Email</h2>
            <div className="flex gap-5">
              <div>
                <input
                  type="Email"
                  name="email"
                  className="border py-2 px-4  border-black rounded-md w-[620px]"
                />
                <p>Email</p>
              </div>
            </div>
          </div>
          {/* Room type select */}
          <div className="flex   mt-3  ">
            <h2 className="font-semibold text-2xl w-1/2">Room type</h2>

            <div className="w-11/12">
              <select
                className="select select-bordered  max-w-xs"
                onChange={handleSelect}
                defaultValue={"df"}
              >
                <option selected>Please Select</option>
                <option>Standred Room 1 to 2 people</option>
                <option>Familly Room 1 to 4 peopele</option>
                <option>Private Room 1 to 3 peopele</option>
                <option>Mix Door Room 1 to 6 peopele</option>
              </select>
            </div>
          </div>
          {/* Number Of gust */}
          <div className="flex   mt-3  ">
            <h2 className="font-semibold text-2xl w-1/2">Number Of Guest</h2>

            <div className="w-11/12">
              <input
                type="text"
                name="gustNum"
                placeholder="0"
                className="border py-2 px-4  border-black rounded-md"
              />
            </div>
          </div>
          {/* Select Date And Time */}
          <div className="flex   mt-3  ">
            <h2 className="font-semibold text-2xl w-1/2">Date</h2>

            <div className="w-11/12">
              <input
                type="date"
                name="bookingDate"
                className="border py-2 px-4  border-black rounded-md"
              />
            </div>
          </div>
          {/* Spectial Request */}
          <div className="flex   mt-3  ">
            <h2 className="font-semibold text-2xl w-1/2">Spectial Request</h2>

            <div className="w-11/12">
              <textarea
                placeholder="Spectial Request"
                name="sectialRequest"
                className="textarea textarea-bordered textarea-sm w-full max-w-xs"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <input
              type="submit"
              value={"Book Now"}
              className="btn btn-active btn-secondary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookNow;
