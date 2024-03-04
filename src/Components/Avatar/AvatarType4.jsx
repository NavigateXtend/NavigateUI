import Image from 'next/image';
import CP from '@/ui/CP';

const code = `export default function AvatarWithEditIcon() {
    return (
        <div className="flex items-center flex-wrap justify-around my-20" id="_AvatarWithEditIcon_NavigateUI">
            <div className="relative group">
                <img className="size-[80px] border-2 border-blue-300 bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                <div className="bg-blue-100 size-5 p-[3px] rounded-full flex justify-center items-center absolute top-1 right-0 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0 group-hover:bg-blue-100/60 duration-500 transition-all">
                    <svg width={15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g ><path fillRule="evenodd" clipRule="evenodd" d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z" fill="#0095FF"></path></g></svg>
                </div>
            </div>
            <div className="relative group">
                <img className="size-[110px] border-2 border-blue-300 bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                <div className="bg-blue-100 size-6 p-[3px] rounded-full flex justify-center items-center absolute top-2 right-0 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0 group-hover:bg-blue-100/60 duration-500 transition-all">
                    <svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g ><path fillRule="evenodd" clipRule="evenodd" d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z" fill="#0095FF"></path></g></svg>
                </div>
            </div>
            <div className="relative group">
                <img className="size-[130px] border-2 border-blue-300 bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                <div className="bg-blue-100 size-6 p-[3px] rounded-full flex justify-center items-center absolute top-3 right-1 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0 group-hover:bg-blue-100/60 duration-500 transition-all">
                    <svg width={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g ><path fillRule="evenodd" clipRule="evenodd" d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z" fill="#0095FF"></path></g></svg>
                </div>
            </div>
        </div>
    );
};
`;

export default function AvatarType4() {
  return (
    <CP code={code}>
      <div className="flex w-full flex-wrap items-center justify-evenly">
        <div className="group relative">
          <Image
            width={80}
            height={80}
            className="size-[80px] rounded-full border-2 border-blue-300 bg-slate-500 object-cover"
            src="https://source.unsplash.com/300x300/?profile"
            alt="avatar navigate ui"
          />
          <div className="absolute right-0 top-1 flex size-5 items-center justify-center rounded-full bg-blue-100 p-[3px] transition-all duration-500 group-hover:right-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:bg-blue-100/80">
            <svg width={15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"
                  fill="#0095FF"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="group relative">
          <Image
            width={110}
            height={110}
            className="size-[110px] rounded-full border-2 border-blue-300 bg-slate-500 object-cover"
            src="https://source.unsplash.com/300x300/?profile"
            alt="avatar navigate ui"
          />
          <div className="absolute right-0 top-2 flex size-6 items-center justify-center rounded-full bg-blue-100 p-[3px] transition-all duration-500 group-hover:right-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:bg-blue-100/80">
            <svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"
                  fill="#0095FF"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="group relative">
          <Image
            width={130}
            height={130}
            className="size-[130px] rounded-full border-2 border-blue-300 bg-slate-500 object-cover"
            src="https://source.unsplash.com/300x300/?profile"
            alt="avatar navigate ui"
          />
          <div className="absolute right-1 top-3 flex size-6 items-center justify-center rounded-full bg-blue-100 p-[3px] transition-all duration-500 group-hover:right-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:bg-blue-100/80">
            <svg width={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"
                  fill="#0095FF"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </CP>
  );
}
