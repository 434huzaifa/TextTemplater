import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ReactQueryProvider from "./utils/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Text Templater",
  description: "Create text template easily. Copy text",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className} max-w-screen-xl mx-auto`} >
        <nav className="mt-2 bg-orange-300  py-1 rounded-md ">
          <ul className="flex gap-3 justify-center">
            <li className="font-bold text-lg text-blue-500 underline hover:scale-110 transition-all"> <Link href="/">Home</Link> </li>
            <li className="font-bold text-lg text-blue-500 underline hover:scale-110 transition-all"> <Link href="/insert">Insert Page</Link> </li>
          </ul>
        </nav>
        <ReactQueryProvider>
        {children}

        </ReactQueryProvider>
      </body>
    </html>
  );
}
