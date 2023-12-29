import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="border-2 sticky top-0 w-2/12 h-screen overflow-hidden">
        <div className="flex flex-col text-4xl w-full h-full group">
          <Link to="/">Home</Link>
          <Link to="button">Button</Link>
          <Link to="slider">Slider</Link>
          <Link to="card">Card</Link>
          <Link to="form">Form</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
