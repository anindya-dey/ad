// 'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  
  return (
    <>
      {theme === 'light' ? (
        <span
          className="items-center p-4 ml-4 text-gray-700 bg-white rounded-full shadow-md cursor-pointer text-md"
          onClick={() => setTheme('dark')}
        >
          <FiMoon />
        </span>
      ) : (
        <span
          className="items-center p-4 ml-4 text-purple-200 bg-purple-900 rounded-full shadow-md cursor-pointer text-md"
          onClick={() => setTheme('light')}
        >
          <FiSun />
        </span>
      )}
    </>
  );
}
