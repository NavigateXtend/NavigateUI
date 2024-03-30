import CP from '@/ui/CP';
const code = `const Card3 = () => {
    const listArray = ["Custom profile an more","Custom emoji anywhere", "HD video streaming"]
  return (
    <div className="mx-auto my-20 max-w-[350px] space-y-6 rounded-lg border-b-2 border-l border-r-2 border-t border-b-[#0084ff] border-l-[#005eb6] border-r-[#0084ff] border-t-[#005eb6] bg-white py-8 pl-8 shadow-md dark:bg-[#18181B]">
        <div className="flex items-center justify-between">
            <h1 className="w-[35%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-4xl"><sup className="text-2xl font-black">$</sup>70<sub className="text-sm tracking-tight">/mo</sub></h1>
            <div className=" w-[65%] rounded-bl-full rounded-tl-full bg-gradient-to-r  from-[#52b7ff] to-[#0084ff] px-4 py-4 md:px-10 md:py-5">
                <h3 className="font-semibold tracking-wider text-white md:text-xl">STANDARD</h3>
            </div>
        </div>
        <p className="font-semibold text-sky-900 dark:text-[#4BB3FF]/90">Enjoy limitless use with interactive export use</p>
        <ul className="space-y-3">
            {
                // use your own array
                listArray?.map((each, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-sky-900 dark:text-[#4BB3FF]">
                        <svg className="fill-[#0386FF] dark:fill-[#289DFF] " width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"> <g strokeWidth="0"></g> <g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g> <g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>
                        {each}
                    </li>
                ))
            }
        </ul>
        <div className="mr-8">
            <button className="w-full rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-4 text-lg font-semibold uppercase tracking-wider text-white">get started</button>
        </div>
    </div>
  );
};
export default Card3;
`;

const Card3 = () => {
  const listArray = ["Custom profile an more","Custom emoji anywhere", "HD video streaming"]
  return (
      <CP code={code}>
          <div className="mx-auto my-20 max-w-[350px] space-y-6 rounded-lg border-b-2 border-l border-r-2 border-t border-b-[#0084ff] border-l-[#005eb6] border-r-[#0084ff] border-t-[#005eb6] bg-white py-8 pl-8 shadow-md dark:bg-[#18181B]">
              <div className="flex items-center justify-between">
                  <h1 className="w-[35%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-4xl">
                      <sup className="text-2xl font-black">$</sup>
                      70<sub className="text-sm tracking-tight">/mo</sub>
                  </h1>
                  <div className=" w-[65%] rounded-bl-full rounded-tl-full bg-gradient-to-r  from-[#52b7ff] to-[#0084ff] px-4 py-4 md:px-10 md:py-5">
                      <h3 className="font-semibold tracking-wider text-white md:text-xl">STANDARD</h3>
                  </div>
              </div>

              <p className="font-semibold text-sky-900 dark:text-[#4BB3FF]/90">Enjoy limitless use with interactive export use</p>
              <ul className="space-y-3">
                  {
                      // use your own array
                      listArray?.map((each, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-sky-900 dark:text-[#4BB3FF]">
                              <svg className="fill-[#0386FF] dark:fill-[#289DFF] " width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                  <g strokeWidth="0"></g>
                                  <g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g>
                                  <g id="navigateui">
                                      <g id="tick">
                                          <g id="tick_2">
                                              <path
                                                  id="navigateui"
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"
                                              ></path>
                                          </g>
                                      </g>
                                  </g>
                              </svg>
                              {each}
                          </li>
                      ))
                  }
              </ul>
              <div className="mr-8">
                  <button
                      className="w-full rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-4 text-lg font-semibold uppercase tracking-wider text-white"
                  >
                      get started
                  </button>
              </div>
          </div>
      </CP>
  );
};

export default Card3;
