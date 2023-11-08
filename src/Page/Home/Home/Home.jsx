import Banner from "../Banner/Banner";
import HotelPhotoGallry from "../HotelPhotoGallry/HotelPhotoGallry";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <HotelPhotoGallry></HotelPhotoGallry>
      <Banner></Banner>
    </div>
  );
};

export default Home;
