'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { RiContactsBookLine } from 'react-icons/ri';
import { FiSun, FiMoon } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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

  return (
    <nav className="flex justify-between px-4 py-2 md:px-0 md:py-8 bg-white/30 backdrop-blur-sm md:backdrop-blur-none md:bg-transparent">
      <div className="">
        <Link href={'/'}>
          <Image src={'/logo.png'} alt="logo" width={64} height={64} />
        </Link>
      </div>
      <div className="flex items-center justify-around">
        {navItems.map((page) => (
          <Link key={page.name} href={page.href}>
            <div
              className={
                path === page.href
                  ? 'hidden md:flex items-center justify-center px-6 py-3 mx-4 text-white rounded-md shadow-md bg-gradient-to-r from-[#FA5252] to-[#DD2476]'
                  : 'hidden md:flex items-center justify-center px-6 py-3 mx-4 text-gray-700 rounded-md shadow-md bg-white'
              }
            >
              <span className="mr-2 text-md">{page.icon}</span>
              <span className="text-sm">{page.name}</span>
            </div>
          </Link>
        ))}
        <div className="items-center p-4 ml-4 bg-white rounded-full shadow-md cursor-pointer text-md">
          <FiMoon />
        </div>
        <div className="md:hidden items-center p-4 ml-4 bg-[#ef4060] text-white rounded-full shadow-md cursor-pointer text-md">
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
}
