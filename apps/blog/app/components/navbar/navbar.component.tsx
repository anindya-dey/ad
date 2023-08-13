'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'about',
    href: '/about',
  },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((navLink) => {
        const isActive = pathname === navLink.href;

        return (
          <>
            <Link
              key={navLink.name}
              href={navLink.href}
              className={`${isActive ? 'text-blue-700' : 'text-gray-900'} mr-2 text-lg`}
            >
              {navLink.name}
            </Link>
          </>
        );
      })}
    </>
  );
}
