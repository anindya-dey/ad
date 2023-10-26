"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ThemeProvider } from "next-themes";

export const MobileMenuContext = createContext({} as { isMobileMenuOpen: boolean, setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>> });

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
