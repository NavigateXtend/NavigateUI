import CP from '@/ui/CP';

const code = `
export default function Footer() {
    return (
        <footer className="flex flex-col">
            <div className="flex flex-col items-center justify-around gap-5 bg-gray-300 py-8 dark:bg-gray-500 dark:text-white md:flex-row md:gap-0">
                <h5 className="text-2xl font-bold">NavigateUI</h5>
                <nav className="text-lg">
                    <ul className="flex h-full items-center justify-center gap-3">
                        <li>
                            <a className="cursor-pointer hover:underline">Home</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Contact</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <aside className="bg-gray-500 py-5 text-center text-sm text-white dark:bg-gray-800">
                <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
            </aside>
        </footer>
    );
}
`;
export default function Footer4(i) {
    return (
        <CP code={code} i={i}>
            <footer className="flex flex-col">
                <div className="flex flex-col items-center justify-around gap-5 bg-gray-300 py-8 dark:bg-gray-500 dark:text-white md:flex-row md:gap-0">
                    <h5 className="text-2xl font-bold">NavigateUI</h5>
                    <nav className="text-lg">
                        <ul className="flex h-full items-center justify-center gap-3">
                            <li>
                                <a className="cursor-pointer hover:underline">Home</a>
                            </li>
                            <li>
                                <a className="cursor-pointer hover:underline">Contact</a>
                            </li>
                            <li>
                                <a className="cursor-pointer hover:underline">About</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <aside className="bg-gray-500 py-5 text-center text-sm text-white dark:bg-gray-800">
                    <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
                </aside>
            </footer>
        </CP>
    );
}
