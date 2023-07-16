import Sidebar from "@/components/layout/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" container h-full mx-auto xl:px-32 max-w-6xl">
          <div className=" grid grid-cols-4 h-full">
            <Sidebar />
            <div className=" col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
