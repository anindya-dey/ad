import { Metadata } from 'next';
import Image from 'next/image';
import { FaEnvelopeOpenText, FaMapMarkerAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About | Anindya Dey',
};

export default function Page() {
  return (
    <div className="px-6 py-24 md:py-10">
      <div className="text-4xl font-medium text-gray-900 md:text-4xl dark:text-white">
        About Me
      </div>
      <div className="mt-4">
        <Image
          src={'/about/about.jpg'}
          alt="avatar"
          className="w-full rounded-2xl drop-shadow-md"
          width={250}
          height={250}
        />
      </div>
      <div className="mt-4">
        <div className="text-2xl font-thin">Who am I?</div>
        <div className="py-4 font-thin">
          I am a goal-oriented and mission-driven full-stack software developer
          from India with 8 years+ of industry experience, and with an ability
          to self-manage during independent projects, as well as collaborate as
          part of a productive team.
          <br />
          Currently I am looking for opportunities to work in AI/ML projects.
        </div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-thin">Personal Info</div>
        <div className="py-4">
          <div className="flex">
            <span className="p-2 mr-2 text-xl text-center transition duration-300 ease-in-out bg-white rounded-md shadow-md dark:bg-zinc-900 dark:border dark:border-zinc-700 hover:-translate-y-1 md:p-3 md:text-md">
              <FaEnvelopeOpenText className="text-teal-400" />
            </span>
            <div>
              <div className="text-xs">Email</div>
              <div className="">anindya.dey01@gmail.com</div>
            </div>
          </div>
          <div className="flex mt-4">
            <span className="p-2 mr-2 text-xl text-center transition duration-300 ease-in-out bg-white rounded-md shadow-md dark:bg-zinc-900 dark:border dark:border-zinc-700 hover:-translate-y-1 md:p-3 md:text-md">
              <FaMapMarkerAlt className="text-rose-400" />
            </span>
            <div>
              <div className="text-xs">Location</div>
              <div className="">Nagaland, India</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
