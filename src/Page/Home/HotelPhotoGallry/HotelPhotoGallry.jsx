import axios from "axios";
import { useEffect, useState } from "react";
import GellaryCard from "./GellaryCard";

const HotelPhotoGallry = () => {
  const [hotelviewpicData, setHotelviewpicData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/hotelviewpic")
      .then((res) => setHotelviewpicData(res.data));
  }, []);

  return (
    <div className="mx-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5  ">
        {hotelviewpicData.map((data) => (
          <GellaryCard key={data.id} data={data}></GellaryCard>
        ))}
      </div>
    </div>
  );
};

export default HotelPhotoGallry;
