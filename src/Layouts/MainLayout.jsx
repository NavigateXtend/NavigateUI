import { Outlet } from "react-router-dom";
import Navbar from "../Nav/Navbar";

const MainLayout = () => {
  return (
    <div className="flex gap-5">
      <Navbar />
      <div className="w-[75%] my-20">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
