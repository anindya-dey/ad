'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navBarItems = [
  {
    name: 'home',
    displayName: 'Home',
    href: '/',
  },
  {
    name: 'about',
    displayName: 'About',
    href: '/about',
  },
  {
    name: 'my blog',
    displayName: 'My Blog',
    href: '/posts/2023/09/my-blog',
  },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <>
      {navBarItems.map((navBarItem) => (
        <Link key={navBarItem.name} href={navBarItem.href}>
          {navBarItem.displayName} - {pathname}
        </Link>
      ))}
    </>
  );
}
