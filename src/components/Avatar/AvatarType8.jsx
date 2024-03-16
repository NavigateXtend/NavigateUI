import CP from '@/ui/CP';
import Image from 'next/image';

const code = `const AvatarType8 = () => {
    return (
            <div className="flex items-center flex-wrap justify-around">
                {/* Small Size  */}
                <div className="relative group">
                    <img className="w-[80px] h-[80px] p-[2px] bg--200 object-cover rounded-full border-2 border-[#EB2B79]" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                    <div className="h-5 w-5 bg-white absolute rounded-full bottom-2 right-0 border border-[#EB2B79] flex justify-center items-center ">
                        <svg width={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000<g strokeWidth="<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="roun<g id= d="M9 18H15M12 13V21M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 strok strokeWidth= strokeLinejoin=><</g>
                        </svg>
                    </div>
                </div>
                {/* Medium Size  */}
                <div className="relative group">
                    <img className="w-[110px] h-[110px] p-[2px] bg-rose-200 object-cover rounded-full border-[3px] border-[#EB2B79]" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                    <div className="h-7 w-7 bg-white absolute rounded-full bottom-3 right-0 border-2 border-[#EB2B79]  flex justify-center items-center p-0.5">
                        <svg width={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/sv<g strokeWidth="0"></<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></<g id="SVGRepo_iconCarrie d="M9 18H15M12 13V21M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 stroke=" strokeWidth="1 strokeLinecap= strokeLinejoin="roun></pat</g>
                        </svg>
                    </div>
                </div>
                {/* Large Size  */}
                <div className="relative group">
                    <img className="w-[130px] h-[130px] p-[2px] bg-rose-200 object-cover rounded-full border-4 border-[#EB2B79]" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                    <div className="h-8 w-8 bg-white absolute rounded-full bottom-2 right-0 border-2 border-[#EB2B79]  flex justify-center items-center p-1">
                        <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 18H15M12 13V21M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z" stroke="#EB2B79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g>
                        </svg>
                    </div>
                </div>
            </div>
    );
};

export default AvatarType8;
`;

export default function AvatarType8() {
  return (
    <CP code={code}>
      <div className="flex w-full flex-wrap items-center justify-evenly">
        {/* Small Size  */}
        <div className="group relative">
          <Image
            width={80}
            height={80}
            className="h-[80px] w-[80px] rounded-full border-2 border-[#EB2B79] bg-rose-200 object-cover p-[2px]"
            src="https://source.unsplash.com/300x300/?profile"
            alt="avatar navigate ui"
          />
          <div className="absolute bottom-2 right-0 flex h-5 w-5 items-center justify-center rounded-full border border-[#EB2B79] bg-white ">
            <svg width={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M9 18H15M12 13V21M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
                  stroke="#EB2B79"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        {/* Medium Size  */}
        <div className="group relative">
          <Image
            width={110}
            height={110}
            className="h-[110px] w-[110px] rounded-full border-[3px] border-[#EB2B79] bg-rose-200 object-cover p-[2px]"
            src="https://source.unsplash.com/300x300/?profile"
            alt="avatar navigate ui"
          />
          <div className="absolute bottom-3 right-0 flex h-7 w-7 items-center justify-center rounded-full  border-2 border-[#EB2B79] bg-white p-0.5">
            <svg width={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M9 18H15M12 13V21M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
                  stroke="#EB2B79"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        {/* Large Size  */}
        <div className="group relative">
          <Image
            width={130}
            height={130}
            className="h-[130px] w-[130px] rounded-full border-4 border-[#EB2B79] bg-rose-200 object-cover p-[2px]"
            src="https://source.unsplash.com/300x300/?profile"
            alt="avatar navigate ui"
          />
          <div className="absolute bottom-2 right-0 flex h-8 w-8 items-center justify-center rounded-full  border-2 border-[#EB2B79] bg-white p-1">
            <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M9 18H15M12 13V21M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
                  stroke="#EB2B79"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </CP>
  );
}
