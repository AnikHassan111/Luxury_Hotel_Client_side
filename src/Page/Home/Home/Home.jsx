import Banner from "../Banner/Banner";
import FeaturedRoom from "../FeaturedRoom/FeaturedRoom";
import HotelPhotoGallry from "../HotelPhotoGallry/HotelPhotoGallry";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <HotelPhotoGallry></HotelPhotoGallry>
      <Banner></Banner>
      <FeaturedRoom></FeaturedRoom>
    </div>
  );
};

export default Home;
