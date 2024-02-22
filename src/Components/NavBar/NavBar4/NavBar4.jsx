import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';

export const NavBar4 = () => {
    const codeStr = `
<nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
    <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        <h2>Logo</h2>
    </div>
    <div className="flex items-center justify-between gap-5">
        <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Log In</button>
        <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Register</button>
    </div>
</nav>
   `;

    return (
        <CodeBox codeStr={codeStr}>
            <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                    <h2>Logo</h2>
                </div>
                <div className="flex items-center justify-between gap-5">
                    <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Log In</button>
                    <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Register</button>
                </div>
            </nav>
        </CodeBox>
    );
};
