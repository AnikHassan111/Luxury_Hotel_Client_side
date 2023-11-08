import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { object } from "prop-types";

const Room = () => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/room")
      .then((res) => setRoomData(res.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {roomData.map((data) => (
        <RoomCard key={data._id} data={data}>
          {" "}
        </RoomCard>
      ))}
    </div>
  );
};

export default Room;
