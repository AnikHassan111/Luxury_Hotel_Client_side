import axios from "axios";
import { useEffect } from "react";

const MyBooking = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/getbooking")
      .then((res) => console.log(res.data));
  }, []);
  return <div></div>;
};

export default MyBooking;
