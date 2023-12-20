import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Link to="button">
        <button className="text-3xl w-32 h-16 bg-red-600 hover:scale-95 text-white duration-300">
          Button
        </button>
      </Link>
      <Link to="slider">
        <button className="text-3xl w-32 h-16 bg-red-600 hover:scale-95 text-white duration-300">
          Slider
        </button>
      </Link>
      <Outlet />
    </div>
  );
};

export default MainLayout;
