import { FaEnvelopeOpenText, FaMapMarkerAlt } from "react-icons/fa";

const personInfo = [
  {
    name: 'email',
    displayHeader: 'Email',
    displayContent: 'anindya.dey01@gmail.com',
    icon: <FaEnvelopeOpenText className="text-teal-400" />
  },
  {
    name: 'location',
    displayHeader: 'Location',
    displayContent: 'Nagaland, India',
    icon: <FaMapMarkerAlt className="text-rose-400" />
  }
]

export default function PersonalInfoSection() {
  return (
    <>
      {
        personInfo.map((pi) => (
          <div key={pi.name} className="flex mt-4">
            <span className="p-2 mr-2 text-xl text-center transition duration-300 ease-in-out bg-white rounded-md shadow-md dark:bg-zinc-900 dark:border dark:border-zinc-700 hover:-translate-y-1 md:p-3 md:text-md">
              {pi.icon}
            </span>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-300">{pi.displayHeader}</div>
              <div className="text-gray-700 dark:text-white">{pi.displayContent}</div>
            </div>
          </div>
        ))
      }
    </>
  );
}
