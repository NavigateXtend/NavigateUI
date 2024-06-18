import CP from '@/ui/CP';

const code = `export default function CookieCard() {
  return (
      <div className="group relative max-w-[350px] overflow-hidden bg-gradient-to-r from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] px-6 py-6 text-white shadow">
          <span className="absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#0064c2] via-[#49aef7] to-[#c7e0f1] duration-300 group-hover:top-[-30%] group-hover:blur-sm"></span>
          <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#0064c2] via-[#4FB5FF] to-[#4FB5FF] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
          <div className="relative z-20 space-y-6">
              <h1 className="text-2xl font-bold">Cookies.</h1>
              <p> By using this website you automatically accept that we use cookies.<a href="#" className="border-b"> What for?</a></p>
              <button className="bg-[#1b8efa] px-6 py-2">Understood</button>
          </div>
      </div>
  );
}

`;
export default function CookieCard() {
    return (
        <CP code={code} id="Cookie Card">
            <div className="group relative mx-auto max-w-[350px] overflow-hidden bg-gradient-to-r from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] px-6 py-6 text-white shadow">
                <span className="absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#0064c2] via-[#49aef7] to-[#c7e0f1] duration-300 group-hover:top-[-30%] group-hover:blur-sm"></span>
                <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#0064c2] via-[#4FB5FF] to-[#4FB5FF] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                <div className="relative z-20 space-y-6">
                    <h1 className="text-2xl font-bold">Cookies.</h1>
                    <p>
                        By using this website you automatically accept that we use cookies.
                        <a href="#" className="border-b">
                            What for?
                        </a>
                    </p>
                    <button className="bg-[#1b8efa] px-6 py-2">Understood</button>
                </div>
            </div>
        </CP>
    );
}
