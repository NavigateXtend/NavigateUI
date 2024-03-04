import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center text-white">
      <Image width={400} height={400} src="/notFound.svg" alt="404 navigate ui" />
      <Link href="/" className="m-2 rounded-lg bg-sky-500 px-3 py-2">
        Back to Home
      </Link>
      <Link href="/components/accordion" className="m-2 rounded-lg bg-sky-500 px-3 py-2">
        Explore Components
      </Link>
    </div>
  );
}
