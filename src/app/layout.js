import Navbar from '@/Shared/Navbar/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://navigateui.com'),
  title: { default: 'Navigate UI', template: '%s - Navigate UI' },
  openGraph: {
    images: '/opengraph-image.png'
  },
  description: 'Navigate to a world of free, reusable, and highly customizable Tailwind components',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  // icons: {
  //     icon: '/icon.png',
  //     shortcut: '/shortcut-icon.png',
  //     apple: '/apple-icon.png',
  //     other: {
  //         rel: 'apple-touch-icon-precomposed',
  //         url: '/apple-touch-icon-precomposed.png'
  //     }
  // },
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
      <body
        //             style={{
        //                 background: `
        //                 radial-gradient(at 18% 99%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%,
        //                 radial-gradient(at 97% 8%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%,
        //                 radial-gradient(at 79% 82%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%,
        //                 radial-gradient(at 96% 10%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%,
        //                 radial-gradient(at 42% 20%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%,
        // radial-gradient(at 4% 49%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%, #0384C6 radial-gradient(at 57% 33%, #0384C6 0px, #0f172a 50%) repeat scroll 0% 0%`,
        //                 backgroundAttachment: 'fixed'
        //             }}

        className={`${inter.className} overflow-x-hidden bg-black`}
      >
        <Navbar />

        <div className="layout overflow-y-scroll">{children}</div>
      </body>
      <script async data-id="101444286" src="//static.getclicky.com/js"></script>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID} />
    </html>
  );
}
