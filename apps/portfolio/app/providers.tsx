"use client";

import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { createContext } from "react";

export const MobileMenuContext = createContext({} as any);

export default function Providers({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    return (
        <>
            <ThemeProvider attribute="class">
              <MobileMenuContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
                {children}
              </MobileMenuContext.Provider>
            </ThemeProvider>
        </>
    );
}
