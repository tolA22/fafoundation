import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_shared/ui_components/footer";
import Header from "./_shared/ui_components/Header";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Funmilayo Akinrinmisi Foundation",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* #0B3434 */}
      <body className={clsx("!bg-[#0B3434]")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
