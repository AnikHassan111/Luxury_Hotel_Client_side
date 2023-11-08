import { Outlet } from "react-router-dom";
import Navvar from "../../sharedComponent/Navvar/Navvar";

const MainPage = () => {
  return (
    <div>
      <Navvar></Navvar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainPage;
