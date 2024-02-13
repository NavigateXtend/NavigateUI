import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';

export const NavBar5 = () => {
    const codeStr = `
        <nav className="flex items-center px-10 py-8">
            <div className="flex-grow">
                <img src="/Logo.svg" alt="navigateui logo" />
            </div>
            <div className="flex items-center justify-between gap-8">
                <ul className="flex items-center justify-between gap-10">
                    <li className="cursor-pointer hover:text-sky-500">Home</li>
                    <li className="cursor-pointer hover:text-sky-500">Services</li>
                    <li className="cursor-pointer hover:text-sky-500">About</li>
                    <li className="cursor-pointer hover:text-sky-500">Contact</li>
                </ul>
                <button className="h-12 w-24 bg-sky-700 text-white duration-300 hover:scale-95">Log In</button>
                <button className="h-12 w-24 bg-sky-700 text-white duration-300 hover:scale-95">Register</button>
            </div>
        </nav>
   `;

    return (
        <CodeBox codeStr={codeStr}>
            <nav className="flex items-center bg-sky-100 px-10 py-8">
                <div className="flex-grow">
                    <Image src="/Logo.svg" alt="navigateui logo" width={45} height={45} />
                </div>
                <div className="flex items-center justify-between gap-8">
                    <ul className="flex items-center justify-between gap-10">
                        <li className="cursor-pointer hover:text-sky-500">Home</li>
                        <li className="cursor-pointer hover:text-sky-500">Services</li>
                        <li className="cursor-pointer hover:text-sky-500">About</li>
                        <li className="cursor-pointer hover:text-sky-500">Contact</li>
                    </ul>
                    <button className="h-12 w-24 bg-sky-700 text-white duration-300 hover:scale-95">Log In</button>
                    <button className="h-12 w-24 bg-sky-700 text-white duration-300 hover:scale-95">Register</button>
                </div>
            </nav>
        </CodeBox>
    );
};
