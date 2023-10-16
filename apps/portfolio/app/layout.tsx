import './global.css';
import Image from 'next/image';
import Link from 'next/link';
import { FiSun, FiMoon } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { RiContactsBookLine } from 'react-icons/ri';

const pages = [
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-fixed bg-center bg-no-repeat bg-cover bg-homeBg dark:bg-homeBg-dark font-poppins">
        <div className="container py-6">
          <nav className="flex justify-between">
            <div>
              <Link href={"/"}>
                <Image src={"/logo.png"} alt="logo" width={64} height={64} />
              </Link>
            </div>
            <div className="flex items-center justify-around">
              {pages.map((page) => (
                <Link key={page.name} href={page.href}>
                  <div className="flex items-center justify-center px-6 py-3 mx-4 text-gray-700 bg-white rounded-md shadow-md">
                    <span className="mr-2 text-md">{page.icon}</span>
                    <span className="text-sm">{page.name}</span>
                  </div>
                </Link>
              ))}
              <div className="items-center p-4 ml-4 bg-white rounded-full shadow-md cursor-pointer text-md">
                <FiMoon />
              </div>
            </div>
          </nav>
          <main className="flex flex-col items-center mt-6 bg-white/30 rounded-2xl backdrop-blur-sm">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
