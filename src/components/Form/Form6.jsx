import CP from '@/ui/CP';

const code = `export const Form = () => {
return (
  <div className="w-full mx-auto lg:w-[800px] shadow-lg bg-white flex group text-[#0095ff]">
    <div className="w-1/2 min-h-full bg-[#0095ff] relative overflow-hidden hidden lg:block">
      <h1 className="text-white text-2xl absolute bottom-3 right-3 text-right">Hey! <br /> Welcome to<br /> NavigateUI</h1>
      <span className="bg-sky-800/20 w-32 h-32 -top-8 -left-8 rounded-full absolute z-20 group-hover:w-56 group-hover:h-56 duration-500"></span>
      <span className="bg-sky-800/50 w-36 h-36 -top-5 -left-5  rounded-full absolute z-10"></span>
    </div>
    <form className="p-8 flex-1">
      <h1 className="text-4xl pb-4">Login</h1>
      <div className="space-y-5">
        <label htmlFor="email_" className="block">Email</label>
        <input id="email_" type="email" placeholder="example@example.com" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#0095ff]"/>
        <label htmlFor="password_" className="block">Password</label>
        <input id="password_" type="password" placeholder=".............." min={5} className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#0095ff]"/>
      </div>
      {/* button type will be submit for handling form submission*/}
      <button type="button" className="py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#0095ff] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0095ff] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0095ff] relative inline-block hover:text-white z-50">Submit</button>
    </form>
  </div>
);
};
`;
const Form6 = () => {
  return (
    <CP code={code}>
      <div className="group mx-auto flex w-full bg-white text-[#0095ff] shadow-lg lg:w-[800px]">
        <div className="relative hidden min-h-full w-1/2 overflow-hidden bg-[#0095ff] lg:block">
          <h1 className="absolute bottom-3 right-3 text-right text-2xl text-white">
            Hey! <br /> Welcome to
            <br /> NavigateUI
          </h1>
          <span className="absolute -left-8 -top-8 z-20 h-32 w-32 rounded-full bg-sky-800/20 duration-500 group-hover:h-56 group-hover:w-56"></span>
          <span className="absolute -left-5 -top-5 z-10 h-36  w-36 rounded-full bg-sky-800/50"></span>
        </div>
        <form className="flex-1 p-8">
          <h1 className="pb-4 text-4xl">Login</h1>
          <div className="space-y-5">
            <label htmlFor="email_" className="block">
              Email
            </label>
            <input
              id="email_"
              type="email"
              placeholder="example@example.com"
              className="block w-full rounded-md border-2 border-dashed p-3 shadow-lg outline-none  valid:border-[#0095ff] invalid:border-red-700"
            />
            <label htmlFor="password_" className="block">
              Password
            </label>
            <input
              id="password_"
              type="password"
              placeholder=".............."
              min={5}
              className="block w-full rounded-md border-2 border-dashed p-3 shadow-lg outline-none valid:border-[#0095ff] invalid:border-red-700"
            />
          </div>
          {/* button type will be submit for handling form submission*/}
          <button
            type="button"
            className="relative z-50 mb-4 mt-8 inline-block overflow-hidden rounded-md border-2 border-dashed border-[#0095ff] px-5 py-2 shadow-lg before:absolute before:inset-0 before:-z-10  before:block before:translate-x-full before:rounded-s-full before:bg-[#0095ff] before:duration-300 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-full after:rounded-e-full after:bg-[#0095ff] after:duration-300 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
          >
            Submit
          </button>
        </form>
      </div>
    </CP>
  );
};

export default Form6;
