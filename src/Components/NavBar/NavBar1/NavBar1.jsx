import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';

export const NavBar1 = () => {
    const codeStr = `
        <nav className="flex items-center justify-start gap-20 px-10 py-8">
            <img src="/Logo.svg" alt="navigateui logo" />
            <ul className="flex items-center justify-between gap-10">
                <li className="cursor-pointer hover:text-sky-500">Home</li>
                <li className="cursor-pointer hover:text-sky-500">Services</li>
                <li className="cursor-pointer hover:text-sky-500">About</li>
                <li className="cursor-pointer hover:text-sky-500">Contact</li>
            </ul>
        </nav>
   `;

    return (
        <CodeBox codeStr={codeStr}>
            <nav className="flex items-center justify-start gap-20 bg-sky-100 px-10 py-8">
                <Image src="/Logo.svg" alt="navigateui logo" width={45} height={45} />
                <ul className="flex items-center justify-between gap-10">
                    <li className="cursor-pointer hover:text-sky-500">Home</li>
                    <li className="cursor-pointer hover:text-sky-500">Services</li>
                    <li className="cursor-pointer hover:text-sky-500">About</li>
                    <li className="cursor-pointer hover:text-sky-500">Contact</li>
                </ul>
            </nav>
        </CodeBox>
    );
};
