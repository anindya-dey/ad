import Image from 'next/image';

const whatDoIDo = [
  {
    name: 'web-dev',
    imagePath: '/about/web-dev.svg',
    title: 'Web Development',
    description: 'I build, deploy, and maintain various web applications.',
    bgColor: 'bg-blue-200/30',
  },
  {
    name: 'desktop-app-dev',
    imagePath: '/about/desktop-app-dev.svg',
    title: 'Desktop App Development',
    description:
      'I have knowledge in developing and maintaining Desktop applications as well.',
    bgColor: 'bg-yellow-100/30',
  },
];

export default function WhatDoIDo() {
  return (
    <>
      {whatDoIDo.map((wdid) => (
        <div
          key={wdid.name}
          className={`flex px-4 py-8 mt-6 rounded-lg dark:border dark:border-zinc-700 dark:bg-transparent ${wdid.bgColor}`}
        >
          <div className="mt-4 mr-4">
            <Image
              src={`${wdid.imagePath}`}
              alt="avatar"
              className="w-[80px]"
              width={250}
              height={250}
            />
          </div>
          <div>
            <div className="text-2xl">{wdid.title}</div>
            <div className="pt-4 text-gray-700 dark:text-gray-300">
              {wdid.description}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
