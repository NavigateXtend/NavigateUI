import { Outlet } from "react-router-dom";
import Navbar from "../Nav/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* h  */}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
