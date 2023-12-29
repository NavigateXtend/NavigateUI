const Form2 = () => {
  return (
    <div className="w-full mx-auto lg:w-[500px] drop-shadow-lg bg-white">
      <form className="p-12">
        <h1 className="backdrop-blur-sm text-4xl pb-8">Login</h1>
        <div className="space-y-5">
          <label htmlFor="email" className="block">
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="p-3 block w-full pl-10 drop-shadow-lg outline-none "
            />
            <span className="absolute top-1/4 left-2">👻</span>
          </div>
          <label htmlFor="password" className="block">
            Password
          </label>
          <div className="relative">
            <input
              id="pass"
              type="password"
              placeholder=".............."
              className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
            />
            <span className="absolute top-1/4 left-2">🔒</span>
          </div>
        </div>

        {/* button type will be submit for handling form submission*/}
        <button type="button" className="py-2 px-5 mb-4 mt-6 shadow-lg ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form2;
