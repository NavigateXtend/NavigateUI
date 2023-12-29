const Form1 = () => {
  return (
    <div className="w-full mx-auto lg:w-[500px] border-2 border-black drop-shadow-lg bg-white">
      <form className="p-8">
        <h1 className="backdrop-blur-sm text-4xl pb-4">Login</h1>
        <div className="space-y-5">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@example.com"
            className="p-3 block w-full drop-shadow-lg outline-none border-2  invalid:border-red-700 valid:border-black"
            required
          />
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder=".............."
            className="p-3 block w-full drop-shadow-lg outline-none border-2 invalid:border-red-700 valid:border-black"
            required
          />
        </div>

        {/* button type will be submit for handling form submission*/}
        <button
          type="submit"
          className="py-2 px-5 mb-4 mt-8 shadow-lg border-2 border-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form1;
