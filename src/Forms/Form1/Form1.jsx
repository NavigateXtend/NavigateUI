const Form1 = () => {
  return (
    <div className="w-full md:w-1/2 mx-auto lg:w-[500px] border-2 border-black drop-shadow-lg bg-white px-5 md:px-0">
      <h1 className="backdrop-blur-sm text-4xl px-5 py-4">Login</h1>
      <form className="p-5">
        <div className="space-y-5">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="p-3 block w-full drop-shadow-lg outline-none border-2 border-black"
          />
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="p-3 block w-full drop-shadow-lg outline-none border-2 border-black"
          />
        </div>

        {/* button type will be submit for handling form submission*/}
        <button
          type="button"
          className="py-2 px-5 my-4 shadow-lg border-2 border-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form1;
