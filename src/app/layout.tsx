import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appTitle: string = "Blog";

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-x-hidden bg-gray-100 text-black">
          <Navbar />
          <div className="px-6 py-8">
              {children}          
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
