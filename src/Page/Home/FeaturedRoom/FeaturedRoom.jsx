import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedRoom = () => {
  const [featruedData, setFeatruedData] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/featuredroom").then((res) =>
      setFeatruedData(res.data)
    );
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Featured Section</h1>
      <div className="grid grid-cols-3 gap-3 my-5">
        {featruedData.map((data) => (
          <FeaturedCard key={data._id} data={data}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRoom;
