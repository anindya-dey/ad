import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaStackOverflow } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Portfolio | Anindya Dey',
};

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anindyadey',
    icon: <FaLinkedinIn className="text-[#0072b1]" />,
  },
  {
    name: 'Github',
    href: 'https://www.github.com/anindya-dey',
    icon: <FaGithub className="text-[#111111] dark:text-zinc-300" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/andys_cli',
    icon: <FaInstagram className="text-[#e14a84]" />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/anindyadey01',
    icon: <FaTwitter className="text-[#1C9CEA]" />,
  },
  {
    name: 'Twitter',
    href: 'https://stackoverflow.com/users/13584363/anindya-dey',
    icon: <FaStackOverflow className="text-[#f68f1a]" />,
  },
];

export default async function Index() {
  return (
    <div className="flex flex-col items-center py-28 md:py-24">
      <Image
        src={'/avatar.jpg'}
        alt="avatar"
        className="rounded-full h-[150px] w-[150px] md:h-[250px] md:w-[250px] transition duration-300 ease-in-out hover:scale-105"
        width={250}
        height={250}
      />
      <h1 className="mt-10 text-3xl text-gray-800 md:text-4xl dark:text-white">
        Anindya Dey
      </h1>
      <h2 className="mt-2 text-sm text-gray-500 md:text-lg dark:text-white">
        Full-stack Software Developer
      </h2>
      <div className="flex items-center justify-between mt-10">
        {socialLinks.map((social) => (
          <Link
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-2 mx-3 transition duration-300 ease-in-out bg-white rounded-md shadow-md dark:bg-zinc-900 dark:border dark:border-zinc-700 hover:-translate-y-1 md:p-3 md:mx-4">
              <span className="text-2xl md:text-md">{social.icon}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <Link
          href={'resume.pdf'}
          download
          className="flex justify-center items-center px-8 py-4 text-lg text-white rounded-l-full rounded-r-full shadow-md bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:from-[#DD2476] hover:to-[#fa5252ef] transition duration-300 ease-linear"
        >
          <span className="mr-2">
            <AiOutlineCloudDownload className="text-lg" />
          </span>
          <span className="text-sm">Download Resume</span>
        </Link>
      </div>
    </div>
  );
}
