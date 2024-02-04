import Sidebar from '@/Shared/Sidebar/Sidebar';

export const metadata = {
    title: 'Navigate UI',
    description: 'UI library for tailwindCSS and react developer'
};

export default function RootLayout({ children }) {
    return (
        <div className="flex justify-between gap-10 2xl:mx-auto 2xl:max-w-[1440px]">
            <div className="w-[25%]">
                <Sidebar />
            </div>
            <main className="w-[75%]">{children}</main>
        </div>
    );
}
