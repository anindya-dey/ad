import './global.css';
import NavBar from '../components/Navbar';
import Providers from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="w-full bg-fixed bg-center bg-no-repeat bg-cover bg-homeBg dark:bg-homeBg-dark font-poppins">
        <Providers>
          <div className="container md:px-10">
            <NavBar />
            <main className="flex flex-col mt-6 md:mt-0 md:border-white md:border md:drop-shadow-md md:bg-white/40 dark:md:bg-white/5 md:rounded-2xl md:backdrop-blur-sm dark:md:border-zinc-800 overflow-clip">
              {children}
              <div className="flex justify-center py-6 text-sm font-thin text-gray-600 bg-teal-100/20 dark:bg-white/10 dark:text-gray-100 backdrop-blur-sm">
                &copy; 2024 Anindya Dey
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
