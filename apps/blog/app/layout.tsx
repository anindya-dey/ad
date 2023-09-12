import './global.css';
import { NavBar } from './components';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Anindya Dey',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dracula">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
