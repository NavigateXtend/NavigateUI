import Link from 'next/link';
import React from 'react';

export default function MenuItem({ key, className, href, children }) {
  return (
    <Link key={key} className={`${className} duration-200 hover:pl-1 hover:tracking-widest hover:text-transparent hover:text-white`} href={href}>
      {children}
    </Link>
  );
}
