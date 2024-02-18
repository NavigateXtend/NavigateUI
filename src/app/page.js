import ComponentsCategory from '@/Home/ComponentsCategory/ComponentsCategory';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center px-4 pb-8 pt-14 text-center md:px-8 md:py-28 ">
                <div className="mx-auto md:mb-10 sm:mb-8 mb-6 flex max-w-[380px] items-center gap-2 rounded-full bg-[#393E46] py-[6px] pl-1  pr-3 xsm:text-[12px] text-[10px] text-white  sm:text-sm md:text-base">
                    <span className="rounded-full bg-sky-600 px-2 py-[3px]  sm:px-3 sm:py-1 ">New</span>
                     Badge and tooltip category added
                </div>
                <h2 className="giveLineHeight max-w-[900px] space-y-1 text-2xl font-extrabold leading-[200px] text-[#FFFFFF] sm:text-3xl md:text-4xl lg:text-5xl">
                    <span className="text-[#0095FF]">NavigateUI </span> Free Component Library for Developers
                </h2>
                <p className="mt-4 max-w-[500px] text-base font-medium  text-gray-400 md:text-lg">
                    Navigate to a world of <span className="text-[#0095FF]">free</span>, <span className="text-[#0095FF]">reusable</span>, and highly{' '}
                    <span className="text-[#0095FF]">customizable</span> Tailwind components
                </p>
                <div className="text[12px] mt-6 flex flex-row items-center gap-1 text-[12px] sm:gap-2 sm:text-sm md:gap-3 md:text-base">
                    <Link
                        href="/components/accordion"
                        className="flex w-full flex-nowrap gap-2  text-nowrap rounded-md bg-[#0095FF] px-2 py-1 text-white transition duration-300 hover:bg-[#2c6e9c]  sm:px-4 sm:py-2 md:w-auto md:px-6 md:py-3"
                    >
                        Components
                    </Link>
                    <Link href="/components/accordion" className="w-full rounded-md bg-gray-200 px-2 py-1 transition duration-300 hover:bg-gray-300 sm:px-4 sm:py-2  md:w-auto  md:px-6 md:py-3">
                        Documentation
                    </Link>
                </div>
               
            </div>
            <ComponentsCategory></ComponentsCategory>
        </div>
    );
}
