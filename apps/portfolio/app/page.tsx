import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';
import { FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { RiContactsBookLine } from "react-icons/ri";

export const metadata ={
  title: "Portfolio | Anindya Dey"
}

const pages = [
  {
    name: "Home",
    icon: <AiOutlineHome />,
    href: '/'
  },
  {
    name: "About",
    icon: <FaRegUser />,
    href: '/'
  },
  {
    name: "Resume",
    icon: <CgNotes />,
    href: '/'
  },
  {
    name: "Contact",
    icon: <RiContactsBookLine />,
    href: '/'
  }
]

export default async function Index() {
  return (
    <div className="container py-10" data-cy="page-title">
      <nav className="flex justify-between">
        <div>
          <Image
            src={logo}
            alt="logo"
            className="w-20 h-20"
          />
        </div>
        <div className="flex items-center justify-around">
          {
            pages.map((page) => (
              <Link key={page.name} href={page.href}>
                <div className="flex items-center px-6 py-3 mx-4 text-gray-700 bg-white rounded-md shadow-md">
                  <span className="mr-2 text-xl">{page.icon}</span>
                  <span>{page.name}</span>
                </div>
              </Link>
            ))
          }
          <div className="items-center p-4 ml-4 text-xl bg-white rounded-full shadow-md cursor-pointer">
            <FiMoon />
          </div>
        </div>
      </nav>
      <main>Main</main>
    </div>
  );
}
