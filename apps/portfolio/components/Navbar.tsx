"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { RiContactsBookLine } from 'react-icons/ri';
import { FiSun, FiMoon } from 'react-icons/fi';

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
    <>
      {navItems.map((page) => (
        <Link key={page.name} href={page.href}>
          <div className={
                path === page.href
                ? "flex items-center justify-center px-6 py-3 mx-4 text-white rounded-md shadow-md bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                : "flex items-center justify-center px-6 py-3 mx-4 text-gray-700 rounded-md shadow-md bg-white/30 backdrop-blur-sm"}>
            <span className="mr-2 text-md">{page.icon}</span>
            <span className="text-sm">{page.name}</span>
          </div>
        </Link>
      ))}
      <div className="items-center p-4 ml-4 rounded-full shadow-md cursor-pointer bg-white/30 backdrop-blur-sm text-md">
        <FiMoon />
      </div>
    </>
  );
}
