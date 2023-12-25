const Card2 = () => {
    return (
      <>
        <div className="p-8 shadow-lg max-w-[350px] rounded-xl">
          <div className="flex  justify-between">
            <div className="flex items-center gap-2">
              <svg
                width={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                    fill="#c5c5C7"
                  ></path>{" "}
                </g>
              </svg>
              <span className="text-[#c5c5c7]">999+</span>
            </div>
            <button className="bg-orange-600 text-white px-2 py-1 rounded-xl">
              30%off
            </button>
          </div>
          <div className='flex justify-center'>
            <img src="https://i.ibb.co/CMKLg83/images.jpg" alt="" />
          </div>
          <div className='text-center w-[80%] mx-auto'>
            <h6>Waterproof Sport Smart Watch Monitor for IOS & Android</h6>
            <p className="text-gray-[c7]">Smart watch</p>
          </div>
          <div></div>
        </div>
      </>
    );
};

export default Card2;