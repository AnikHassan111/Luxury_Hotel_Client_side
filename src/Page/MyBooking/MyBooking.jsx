import axios from "axios";
import { useEffect, useState } from "react";
import MyBookingCard from "./MyBookingCard";

const MyBooking = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getbooking")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <div className="max-w-7xl mx-auto ">
      {data.map((booked) => (
        <MyBookingCard key={booked._id} booked={booked}></MyBookingCard>
      ))}
    </div>
  );
};

export default MyBooking;
