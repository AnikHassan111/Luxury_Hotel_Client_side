import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedRoom = () => {
  const [featruedData, setFeatruedData] = useState([]);
  useEffect(() => {
    axios(
      "https://b8a11-server-side-anik-hassan111.vercel.app/featuredroom"
    ).then((res) => setFeatruedData(res.data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Featured Section</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
        {featruedData.map((data) => (
          <FeaturedCard key={data._id} data={data}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRoom;
