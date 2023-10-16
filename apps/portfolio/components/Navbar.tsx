'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { RiContactsBookLine } from 'react-icons/ri';
import ThemeSwitch from './ThemeSwitch';
import MobileMenu from './MobileMenu';

const navItems = [
  {
    name: 'Home',
    icon: <AiOutlineHome />,
    href: '/',
  },
  {
    name: 'About',
    icon: <FaRegUser />,
    href: '/about',
  },
  {
    name: 'Resume',
    icon: <CgNotes />,
    href: '/resume',
  },
  {
    name: 'Contact',
    icon: <RiContactsBookLine />,
    href: '/contact',
  },
];

export default function NavBar() {
  const path = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 flex flex-col w-full md:static bg-white/30 backdrop-blur-lg md:backdrop-blur-none md:bg-transparent dark:bg-zinc-700/20 md:dark:bg-transparent">
      <div className="flex justify-between w-full px-6 py-2 shadow-sm md:px-0 md:py-8 md:shadow-none dark:border-b dark:md:border-none dark:border-zinc-800">
        <div>
          <Link href={'/'}>
            <Image src={'/logo.png'} alt="logo" width={64} height={64} />
          </Link>
        </div>
        <div className="flex items-center justify-around">
          {navItems.map((navItem) => (
            <Link key={navItem.name} href={navItem.href} prefetch>
              <div
                className={
                  path === navItem.href
                    ? 'hidden md:flex items-center justify-center px-6 py-3 ml-6 text-white rounded-md shadow-md bg-gradient-to-r from-[#FA5252] to-[#DD2476]'
                    : 'hidden md:flex items-center justify-center px-6 py-3 ml-6 text-gray-700 rounded-md shadow-md bg-white dark:text-zinc-200 dark:bg-zinc-800'
                }
              >
                <span className="mr-2 text-md">{navItem.icon}</span>
                <span className="text-sm">{navItem.name}</span>
              </div>
            </Link>
          ))}
          <ThemeSwitch />
          <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />
        </div>
      </div>
      {mobileMenuOpen ? (
        <div className="flex flex-col justify-between p-6 shadow-md md:hidden dark:border-b dark:border-zinc-800">
          {navItems.map((navItem) => (
            <Link key={navItem.name} href={navItem.href} prefetch>
              <div
                key={navItem.name}
                className="flex items-center my-3 font-light"
              >
                <span className="mr-4 text-lg">{navItem.icon}</span>
                <span className="text-md">{navItem.name}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
