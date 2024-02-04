import { Metadata } from 'next';
import Image from 'next/image';

import PersonalInfoSection from '../../components/PersonalInfoSection';
import WhatDoIDo from '../../components/WhatDoIDoSection';

export const metadata: Metadata = {
  title: 'About | Anindya Dey',
};

export default function Page() {
  return (
    <div className="px-6 py-20 md:py-10">
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
        <div className="text-2xl">Who am I?</div>
        <div className="py-4 text-gray-700 dark:text-gray-300">
          I am a goal-oriented and mission-driven full-stack software developer
          from India with 8 years+ of industry experience, and with an ability
          to self-manage during independent projects, as well as collaborate as
          part of a productive team.
          <br />
          Currently I am looking for opportunities to work in AI/ML projects.
        </div>
      </div>
      <div className="mt-4">
        <div className="text-2xl">Personal Info</div>
        <div>
          <PersonalInfoSection />
        </div>
      </div>
      <div className="mt-16 text-4xl font-medium text-gray-900 md:text-4xl dark:text-white">
        What do I do?
      </div>
      <WhatDoIDo />
    </div>
  );
}
