'use client';

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { RiContactsBookLine } from 'react-icons/ri';
import ThemeSwitch from './ThemeSwitch';
import MobileMenu from './MobileMenu';
import { MobileMenuContext } from '../app/providers';

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
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(MobileMenuContext);

  return (
    <nav className="fixed top-0 flex flex-col w-full md:static">
      <div className="flex justify-between w-full px-6 py-2 shadow-sm bg-white/30 md:px-0 md:py-8 md:shadow-none dark:border-b dark:md:border-none dark:border-zinc-800 backdrop-blur-sm md:backdrop-blur-none md:bg-transparent dark:bg-zinc-700/20 md:dark:bg-transparent">
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
          <MobileMenu />
        </div>
      </div>
      {isMobileMenuOpen ? (
        <div className="flex flex-col justify-start min-h-screen p-6 bg-zinc-700/80 backdrop-blur-sm md:backdrop-blur-none md:bg-transparent dark:bg-zinc-900/30 md:dark:bg-transparent md:hidden dark:border-b dark:border-zinc-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {navItems.map((navItem) => (
            <Link key={navItem.name} href={navItem.href} prefetch>
              <div
                key={navItem.name}
                className={
                  path === navItem.href
                  ? "flex items-center my-2 font-medium px-6 py-3 rounded-lg shadow-md text-white dark:text-white/70 bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                  : "flex items-center my-2 font-medium px-6 py-3 rounded-lg text-gray-700 dark:text-white/70 bg-white/70 dark:text-zinc-200 dark:bg-zinc-800"
                }
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
