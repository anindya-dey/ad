import './global.css';
import NavBar from '../components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-fixed bg-center bg-no-repeat bg-cover bg-homeBg dark:bg-homeBg-dark font-poppins">
        <div className="container">
          <NavBar />
          <main className="flex flex-col items-center mt-6 md:mt-0 md:border-white md:border md:drop-shadow-md md:bg-white/10 md:rounded-2xl md:backdrop-blur-sm">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
