import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="button">
        <button className="text-3xl w-32 h-16 bg-teal-600 hover:scale-95 text-white duration-300">
          Button
        </button>
      </Link>
      <Link to="slider">
        <button className="text-3xl w-32 h-16 bg-teal-600 hover:scale-95 text-white duration-300">
          Slider
        </button>
      </Link>
      <Link to="card">
        <button className="text-3xl w-32 h-16 bg-teal-600 hover:scale-95 text-white duration-300">
          Card
        </button>
      </Link>
      <Link to="form">
        <button className="text-3xl w-32 h-16 bg-teal-600 hover:scale-95 text-white duration-300">
          Form
        </button>
      </Link>
    </>
  );
};

export default Navbar;
