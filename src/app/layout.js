import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter, Lato } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Navbar from '@/ui/Navbar';
import Sidebar from '@/ui/Sidebar';

const inter = Inter({ subsets: ['latin'] });
export const lato = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] });

export const metadata = {
  metadataBase: new URL('https://navigateui.com'),
  title: { default: 'Navigate UI', template: '%s - Navigate UI' },
  openGraph: {
    images: '/opengraph-image.png'
  },
  description: 'Navigate to a world of free, reusable, and highly customizable Tailwind components',
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navigate UI',
    description: 'Navigate to a world of free, reusable, and highly customizable Tailwind components',
    creator: '@navigateui_team'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden bg-black px-2 lg:px-10`}>
        <Navbar />
        <div className="lg:hidden">
          <Sidebar />
        </div>
        <div className="mx-auto max-w-[1400px]">{children}</div>
        <Image className="fixed -left-20 top-0 -z-[100] select-none" src="/docs-left.png" width="900" height="900" alt="navigate ui image" />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID} />
    </html>
  );
}
