import CP from '@/ui/CP';

export const NavBar1 = () => {
  const code = `
  <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2">
     <div className="text-white text-xl font-semibold hover:scale-110 duration-200 transition-all scale-100 px-3 py-2 rounded-2xl">
      <h2>Logo</h2>
     </div>
    <ul className="flex items-center justify-between gap-6 text-slate-900">
      <li className="cursor-pointer  hover:bg-sky-600 text-white px-6 py-2 rounded-full"> Home</li>
      <li className="cursor-pointer  hover:bg-sky-600 text-white px-6 py-2 rounded-full"> Services </li>
      <li className="cursor-pointer  hover:bg-sky-600 text-white px-6 py-2 rounded-full"> About </li>
      <li className="cursor-pointer  hover:bg-sky-600 text-white px-6 py-2 rounded-full"> Contact </li>
    </ul>
  </nav>
   `;

  return (
    <CP code={code}>
      <div className="">
        <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2">
          <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
            <h2>Logo</h2>
          </div>
          <ul className="flex items-center justify-between gap-6 text-slate-900">
            <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600">Home</li>
            <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600">Services</li>
            <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600">About</li>
            <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600">Contact</li>
          </ul>
        </nav>
      </div>
    </CP>
  );
};
