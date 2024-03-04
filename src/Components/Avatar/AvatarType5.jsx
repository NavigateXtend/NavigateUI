import CP from '@/ui/CP';
import Image from 'next/image';

const code = `export default function AvatarWithAddButton() {
    return (
            <div className="flex items-center flex-wrap justify-around" id="_AvatarWithAddButton_NavigateUI">
            //  Small Size 
                <div className="relative group">
                    <img className="size-[80px] bg-slate-500 object-cover rounded-full border-4 border-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui"/>
                    <span className="size-5 bg-white p-[2px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-2 left-[50%] -translate-x-1/2">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"><g data-name="add" id="add-2"><g> <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line><line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line></g></g></g></g>
                        </svg>
                    </span>
                </div>
            // Medium Size 
                <div className="relative group">
                    <img className="size-[110px] bg-slate-500 object-cover rounded-full border-4 border-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui"/>
                    <span className="size-6 bg-white p-1 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-2 left-[50%] -translate-x-1/2">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g data-name="add" id="add-2">                                     <g><line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line><line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line></g></g></g></g>
                        </svg>
                    </span>
                </div>
            // Large Size 
                <div className="relative group">
                    <img className="size-[130px] bg-slate-500 object-cover rounded-full border-4 border-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui"/>
                    <span className="size-8 bg-white p-1 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-4 left-[50%] -translate-x-1/2">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g data-name="add" id="add-2"><g><line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line><line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line></g></g></g></g>
                        </svg>
                    </span>
                </div>
            </div>
    );
};
`;

export default function AvatarType5() {
  return (
    <CP code={code}>
      <div className="flex w-full flex-wrap items-center justify-evenly">
        <div className="group relative">
          <Image
            width={80}
            height={80}
            className="size-[80px] rounded-full border-4 border-white bg-slate-500 object-cover shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]"
            src="https://source.unsplash.com/300x300/?profile"
            alt="avatar navigate ui"
          />
          <span className="absolute -bottom-2 left-[50%] size-5  -translate-x-1/2 rounded-full bg-white p-[2px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] duration-500 group-hover:-rotate-180">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA">
              <g strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title></title>
                <g id="Complete">
                  <g data-name="add" id="add-2">
                    <g>
                      <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line>
                      <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </div>
        <div className="group relative">
          <Image
            width={110}
            height={110}
            className="size-[110px] rounded-full border-4 border-white bg-slate-500 object-cover shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]"
            src="https://source.unsplash.com/300x300/?profile"
            alt="avatar navigate ui"
          />
          <span className="absolute -bottom-2 left-[50%] size-6 -translate-x-1/2 rounded-full bg-white p-[2px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] duration-500 group-hover:-rotate-180">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA">
              <g strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title></title>
                <g id="Complete">
                  <g data-name="add" id="add-2">
                    <g>
                      <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line>
                      <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </div>
        <div className="group relative">
          <Image
            width={130}
            height={130}
            className="size-[130px] rounded-full border-4 border-white bg-slate-500 object-cover shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]"
            src="https://source.unsplash.com/300x300/?profile"
            alt="avatar navigate ui"
          />
          <span className="absolute -bottom-4 left-[50%] size-8  -translate-x-1/2 rounded-full bg-white p-1 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] duration-500 group-hover:-rotate-180">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA">
              <g strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title></title>
                <g id="Complete">
                  <g data-name="add" id="add-2">
                    <g>
                      <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line>
                      <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </div>
      </div>
    </CP>
  );
}
