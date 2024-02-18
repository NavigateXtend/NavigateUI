import Navbar from '@/Shared/Navbar/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { sendGAEvent } from 'ga4';

const TRACKING_ID = process.env.NEXT_PUBLIC_GA_tracking_id; // YOUR_OWN_TRACKING_ID
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: { default: 'Navigate UI', template: '%s - Navigate UI' },
    description: 'UI library for tailwindCSS and react developer'
};

export default function RootLayout({ children }) {
    sendGAEvent(MEASUREMENT_ID, 'page_view');
    return (
        <html lang="en">
            <body
                style={{
                    background: `
                    radial-gradient(at 18% 99%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%, 
                    radial-gradient(at 97% 8%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%, 
                    radial-gradient(at 79% 82%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%,
                    radial-gradient(at 96% 10%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%,    
                    radial-gradient(at 42% 20%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%,
    radial-gradient(at 4% 49%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%, #0384C6 radial-gradient(at 57% 33%, #0384C6 0px, #0f172a 50%) repeat scroll 0% 0%`,
                    backgroundAttachment: 'fixed'
                }}
                className={`${inter.className} overflow-x-hidden`}
            >
                <Navbar />
                <GoogleAnalytics gaId={TRACKING_ID} />
                <div className="layout overflow-y-scroll">{children}</div>
            </body>
        </html>
    );
}
