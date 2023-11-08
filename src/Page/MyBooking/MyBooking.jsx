import axios from "axios";
import { useEffect, useState } from "react";
import MyBookingCard from "./MyBookingCard";
import { Link } from "react-router-dom";

const MyBooking = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getbooking")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <div>
      <Link to={"/room"}>
        <h1 className="text-center font-bold text-3xl my-3 cursor-pointer">
          Go Rooms
        </h1>
      </Link>
      <div className="max-w-7xl mx-auto ">
        {data.map((booked) => (
          <MyBookingCard key={booked._id} booked={booked}></MyBookingCard>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
