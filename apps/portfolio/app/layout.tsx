import './global.css';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../components/Navbar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-fixed bg-center bg-no-repeat bg-cover bg-homeBg dark:bg-homeBg-dark font-poppins">
        <div className="container py-6">
          <nav className="flex justify-between">
            <div>
              <Link href={'/'}>
                <Image src={'/logo.png'} alt="logo" width={64} height={64} />
              </Link>
            </div>
            <div className="flex items-center justify-around">
              <NavBar />
            </div>
          </nav>
          <main className="flex flex-col items-center mt-6 bg-white/30 rounded-2xl backdrop-blur-sm">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
