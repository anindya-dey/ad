import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

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
    icon: <FaGithub className="text-[#111111]" />,
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
];

export default async function Index() {
  return (
    <div className="flex flex-col items-center py-24">
      <Image
        src={"/avatar.jpg"}
        alt="avatar"
        className="rounded-full h-[250px] w-[250px]"
        width={250}
        height={250}
      />
      <h1 className="mt-10 text-4xl font-medium text-gray-700">
        Anindya Dey
      </h1>
      <h2 className="mt-2 text-lg text-gray-500">
        Full-stack Software Developer
      </h2>
      <div className="flex items-center justify-between mt-10">
        {socialLinks.map((social) => (
          <Link key={social.href} href={social.href} target="_blank">
            <div className="p-3 mx-2 bg-white rounded-md shadow-md">
              <span className="text-md">{social.icon}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <Link href={"resume.pdf"} download>
          <div className="flex justify-center items-center px-8 py-3 mx-4 text-lg text-white rounded-l-full rounded-r-full shadow-md bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:bg-gradient-to-r hover:from-[#DD2476]  hover:to-[#fa5252ef] transition duration-300 ease-in-out">
            <span className="mr-2">
              <AiOutlineCloudDownload className="text-lg" />
            </span>
            <span className="text-sm">Download Resume</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
