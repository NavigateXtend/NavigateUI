import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Link to="button" className="text-white">
        button
      </Link>
      <Outlet />
    </div>
  );
};

export default MainLayout;
