'use client';

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function MobileMenu({ setMobileMenuOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {menuOpen ? (
        <div onClick={() => { setMenuOpen(false); setMobileMenuOpen(false); }} className="md:hidden items-center p-4 ml-4 bg-[#ef4060] text-white rounded-full shadow-md cursor-pointer text-md">
          <AiOutlineClose />
        </div>
      ) : (
        <div onClick={() => { setMenuOpen(true); setMobileMenuOpen(true); }} className="md:hidden items-center p-4 ml-4 bg-[#ef4060] text-white rounded-full shadow-md cursor-pointer text-md">
          <AiOutlineMenu />
        </div>
      )}
    </>
  );
}
