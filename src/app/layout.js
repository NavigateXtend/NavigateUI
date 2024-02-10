import Navbar from '@/Shared/Navbar/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const TRACKING_ID = process.env.GA_tracking_id; // YOUR_OWN_TRACKING_ID

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Navigate UI',
    description: 'UI library for tailwindCSS and react developer'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} overflow-x-hidden`}>
                <Navbar />
                <GoogleAnalytics gaId={TRACKING_ID} />
                <div className="layout overflow-y-scroll">{children}</div>
            </body>
        </html>
    );
}
