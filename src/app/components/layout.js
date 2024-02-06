import Sidebar from '@/Shared/Sidebar/Sidebar';

export const metadata = {
    title: 'Components - Navigate UI',
    description: 'tailwindCSS and react Components'
};

export default function RootLayout({ children }) {
    return (
        <div className="flex max-w-[1440px] justify-between gap-10 2xl:mx-auto">
            <div className="w-[25%]">
                <Sidebar />
            </div>
            <div className="w-[75%]">{children}</div>
        </div>
    );
}
