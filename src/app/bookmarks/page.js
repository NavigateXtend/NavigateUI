'use client';
import { getBookmarks } from '@/ui/Client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function BookmarkPage() {
    const categories = ['components', 'blocks'];
    const [b, setB] = useState([]);

    useEffect(() => {
        const books = getBookmarks();
        setB(books);
    }, []);
    // console.log(b);
    return (
        <div className="mx-auto mt-10 w-full backdrop-blur-sm">
            <h1 className="mb-3 text-center text-4xl font-semibold text-sky-500">Bookmarks</h1>
            <div className="flex list-inside list-decimal flex-wrap justify-center gap-3">
                {categories.map((category) => (
                    <ol key={category} className="h-fit w-full max-w-md space-y-1 rounded-md bg-sky-200 p-5">
                        <h1 className="mb-3 font-black text-black">{category.toUpperCase()}</h1>
                        {b?.[category]?.length ? (
                            b[category].map((bookmark, i) => (
                                <Link key={`bookmark_${category}_${i}`} href={`${bookmark.url + '#' + bookmark.id}`} className="block font-bold">
                                    <li className="rounded-md bg-sky-100 p-2.5 text-sky-500">{bookmark.name}</li>
                                </Link>
                            ))
                        ) : (
                            <>
                                <span className="inline-block rounded-md bg-amber-300 p-2.5 text-sky-800">Empty</span>
                                {category === 'animated' || category === 'blocks' ? <span className="ml-2 inline-block rounded-md bg-teal-100 p-2.5 text-sky-500">coming soon</span> : null}
                            </>
                        )}
                    </ol>
                ))}
            </div>
        </div>
    );
}
