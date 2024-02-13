export const NavBar1 = () => {
    return (
        <nav className="flex items-center justify-start gap-20 px-10 py-8">
            <img src="/Logo.svg" alt="navigateui logo" />
            <ul className="flex items-center justify-between gap-10">
                <li className="cursor-pointer hover:text-sky-500">Home</li>
                <li className="cursor-pointer hover:text-sky-500">Services</li>
                <li className="cursor-pointer hover:text-sky-500">About</li>
                <li className="cursor-pointer hover:text-sky-500">Contact</li>
            </ul>
        </nav>
    );
};
