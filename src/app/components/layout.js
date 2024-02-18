import Sidebar from '@/Shared/Sidebar/Sidebar';

export const metadata = {
    title: { default: 'Components - Navigate UI', template: '%s - Navigate UI' },
    description: 'tailwindCSS and react Components'
};

export default function RootLayout({ children }) {
    return (
        <div className="flex 2xl:mx-auto">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="flex-1 pb-20">{children}</div>
        </div>
    );
}
