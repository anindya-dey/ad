import './global.css';
import NavBar from './components/navbar/navbar.component';

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
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
