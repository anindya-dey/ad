import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';
import avatar from '../public/avatar.jpg';
import { FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { RiContactsBookLine } from "react-icons/ri";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

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
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anindyadey",
    icon: <FaLinkedinIn className="text-[#0072b1]" />
  },
  {
    name: "Github",
    href: "https://www.github.com/anindya-dey",
    icon: <FaGithub className="text-[#111111]" />
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/andys_cli",
    icon: <FaInstagram className="text-[#e14a84]" />
  },
  {
    name: "Twitter",
    href: "https://twitter.com/anindyadey01",
    icon: <FaTwitter className="text-[#1C9CEA]" />
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
      <main className="flex flex-col items-center mt-10 rounded-lg bg-white/30 py-28 backdrop-blur-sm">
        <Image
          src={avatar}
          alt="avatar"
          className="rounded-full h-[300px] w-[300px]"
        />
        <h1 className="mt-10 text-4xl font-semibold text-gray-700">Anindya Dey</h1>
        <h2 className="mt-2 text-lg text-gray-500">Full-stack Software Developer</h2>
        <div className="flex items-center justify-between mt-10">
          {
            socialLinks.map(social => (
              <Link key={social.href} href={social.href}>
                <div className="p-3 mx-2 bg-white rounded-md shadow-md">
                  <span className="text-xl">{social.icon}</span>
                </div>
              </Link>
            ))
          }
        </div>
      </main>
    </div>
  );
}
