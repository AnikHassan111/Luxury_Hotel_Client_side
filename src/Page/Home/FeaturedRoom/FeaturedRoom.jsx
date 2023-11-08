import axios from "axios";
import { useEffect, useState } from "react";

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
    </div>
  );
};

export default FeaturedRoom;
