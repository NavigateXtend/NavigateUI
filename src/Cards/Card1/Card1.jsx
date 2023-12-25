const Card1 = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-[500px] drop-shadow-lg bg-white px-5 md:px-0">
      <h1 className="backdrop-blur-sm p-5">Login</h1>
      <form className="p-5">
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="p-3 block w-full drop-shadow-lg outline-none border-2 border-black"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="p-3 block w-full drop-shadow-lg outline-none border-2 border-black"
          />
        </div>

        {/* button type will be submit for handling form submission*/}
        <button type="button" className="py-2 px-5 border-2 border-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Card1;
