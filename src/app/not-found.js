import Link from 'next/link';
import { FaHouse } from 'react-icons/fa6';
import { FiPackage } from 'react-icons/fi';

export default function NotFound() {
    return (
        <div className="flex h-[70vh] w-full select-none flex-col items-center justify-center text-center font-mono">
            {/* <Image width={400} height={400} src="/notFound.svg" alt="404 navigate ui" /> */}
            <h1 className="z-0 text-9xl leading-[100px] text-sky-400 blur-sm sm:text-[200px] md:text-[260px] lg:text-[300px] xl:text-[400px]">404</h1>
            <h3 className="z-10 text-xl">Page Not Found :( </h3>
            <div className="z-10 text-white">
                <Link href="/" className="m-2 flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-2.5 text-lg">
                    <FaHouse /> Navigate to Home
                </Link>
                <Link href="/components/accordion" className="m-2 flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-2.5 text-lg">
                    <FiPackage /> Navigate to Components
                </Link>
            </div>
        </div>
    );
}
