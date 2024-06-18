import CP from '@/ui/CP';

export default function Footer1(i) {
    const code = `
export default function Footer ()  {
    return (
        <footer className="bg-gray-300 py-5 text-center dark:bg-gray-500 dark:text-white">
            <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
        </footer>
    );
}

   `;

    return (
        <CP code={code} i={i}>
            <footer className="bg-gray-300 py-5 text-center dark:bg-gray-500 dark:text-white">
                <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
            </footer>
        </CP>
    );
}
