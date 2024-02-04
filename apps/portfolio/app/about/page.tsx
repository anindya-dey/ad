import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | Anindya Dey',
  }

export default function Page() {
  return (
    <div className="flex flex-col px-6 py-24 md:py-10">
      <div className="text-4xl font-medium text-gray-900 md:text-4xl dark:text-white">About Me</div>
      <div className="flex flex-row justify-evenly">
        <div>image</div>
        <div className="flex flex-col">
          <div>Who am I?</div>
          <div>Personal Info</div>
        </div>
      </div>
    </div>
  );
}
