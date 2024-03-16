import Link from 'next/link';

export default function Components() {
  return (
    <div className="flex h-96 w-full items-center justify-center">
      <Link href="components/accordion" className="bg-sky-300 px-3 py-2 text-white duration-300 hover:scale-95 hover:bg-sky-600">
        Components
      </Link>
    </div>
  );
}
