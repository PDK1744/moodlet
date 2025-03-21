import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Button from "@/components/Button";
import Logout from "@/components/Logout";

const opensans = Open_Sans({ subsets: ["latin"], weight: ["400"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Moodlet",
  description: "Track your daily mood every day!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex item-center justify-between gap-4">
      <Link href={"/"}>
        <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}>
          Moodlet
        </h1>
      </Link>
      <Logout />
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={"text-primary-500 " + fugaz.className}>Created with ❤️</p>
    </footer>
  );

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body
          className={
            "w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 " +
            opensans.className
          }
        >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
