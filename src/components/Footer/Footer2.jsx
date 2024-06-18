import CP from '@/ui/CP';

const info = {
    id: 'single-column-footer',
    name: 'Single Column Footer',
    url: '/components/footer#single-column-footer'
};

const code = `
export default function Footer() {
    return (
        <footer className="flex flex-col justify-around gap-5 bg-gray-300 py-8 dark:bg-gray-500 dark:text-white">
            <h5 className="text-2xl font-bold text-center">NavigateUI</h5>
            <nav className="text-lg">
                <ul className="flex h-full flex-wrap items-center justify-center gap-3">
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
            <aside className="text-center text-sm">
                <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
            </aside>
        </footer>
    );
}
`;
export default function Footer2(i) {
    return (
        <CP code={code} i={i}>
            <footer className="flex flex-col justify-around gap-5 bg-gray-300 py-8 dark:bg-gray-500 dark:text-white">
                <h5 className="text-center text-2xl font-bold">NavigateUI</h5>
                <nav className="text-lg">
                    <ul className="flex h-full flex-wrap items-center justify-center gap-3">
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
                <aside className="text-center text-sm">
                    <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
                </aside>
            </footer>
        </CP>
    );
}
