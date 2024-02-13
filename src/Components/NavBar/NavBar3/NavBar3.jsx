export const NavBar3 = () => {
    return (
        <nav className="flex items-center px-10 py-8">
            <div className="flex-grow">
                <img src="/Logo.svg" alt="navigateui logo" />
            </div>
            <ul className="flex items-center justify-between gap-10">
                <li className="cursor-pointer hover:text-sky-500">Home</li>
                <li className="cursor-pointer hover:text-sky-500">Services</li>
                <li className="cursor-pointer hover:text-sky-500">About</li>
                <li className="cursor-pointer hover:text-sky-500">Contact</li>
            </ul>
        </nav>
    );
};
