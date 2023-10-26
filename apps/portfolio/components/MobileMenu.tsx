'use client';

import { useContext } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MobileMenuContext } from '../app/providers';

export default function MobileMenu() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(MobileMenuContext);

  return (
    <>
      {isMobileMenuOpen ? (
        <div onClick={() => setIsMobileMenuOpen(false)} className="md:hidden items-center p-4 ml-4 bg-[#ef4060] text-white rounded-full shadow-md cursor-pointer text-md">
          <AiOutlineClose />
        </div>
      ) : (
        <div onClick={() => setIsMobileMenuOpen(true)} className="md:hidden items-center p-4 ml-4 bg-[#ef4060] text-white rounded-full shadow-md cursor-pointer text-md">
          <AiOutlineMenu />
        </div>
      )}
    </>
  );
}
