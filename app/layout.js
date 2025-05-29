import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from '../components/ThemeToggle';
import LogoutButton from '../components/LogoutButton';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className={`${geistMono.variable} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Boven.Net</h1>
            <div className="flex gap-4">
              <ThemeToggle />
              <LogoutButton />
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
