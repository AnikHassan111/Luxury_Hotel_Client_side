import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MyBookingCard from "./MyBookingCard";
import { Link } from "react-router-dom";
import { ContextApi } from "../../AuthProvider/AuthProvider";

const MyBooking = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(ContextApi);
  const email = user.email;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getbooking?email=${email}`, {
        withCredentials: true,
      })
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <Link to={"/room"}>
        <h1 className="text-center font-bold text-3xl my-3 cursor-pointer">
          Go Rooms
        </h1>
      </Link>
      <div className="max-w-7xl mx-auto ">
        {data.map((booked) => (
          <MyBookingCard
            setData={setData}
            data={data}
            key={booked._id}
            booked={booked}
          ></MyBookingCard>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
