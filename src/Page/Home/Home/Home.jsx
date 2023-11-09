import { useContext } from "react";
import Banner from "../Banner/Banner";
import FeaturedRoom from "../FeaturedRoom/FeaturedRoom";
import HotelPhotoGallry from "../HotelPhotoGallry/HotelPhotoGallry";
import NewLetterSingUp from "../NewsLetterSingUp/NewLetterSingUp";
import { ContextApi } from "../../../AuthProvider/AuthProvider";

const Home = () => {
  const { user } = useContext(ContextApi);
  console.log(user.email);
  return (
    <div className="max-w-7xl mx-auto ">
      <HotelPhotoGallry></HotelPhotoGallry>
      <Banner></Banner>
      <FeaturedRoom></FeaturedRoom>
      <NewLetterSingUp></NewLetterSingUp>
    </div>
  );
};

export default Home;
