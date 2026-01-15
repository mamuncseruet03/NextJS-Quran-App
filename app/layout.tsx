import { ThemeProvider } from "@/components/theme/theme-provider";
import {
  amiriQuran,
  notoKufiArabic,
  notoNaskhArabic,
  poppins,
  scheherazadeNew,
} from "@/public/fonts";
import type { Metadata } from "next";
import RootFooter from "./_root/root-footer";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import RootHeader from "./_root/root-header";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Quran App",
  description: "Created by @HoshangDEV",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
      ${amiriQuran.variable}
      ${notoNaskhArabic.variable}
      ${scheherazadeNew.variable}
      ${poppins.variable}
      ${notoKufiArabic.variable}
      `}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background antialiased flex flex-col justify-between font-poppins bg-sky-100">
        <ThemeProvider attribute="class" defaultTheme="system">
          <RootHeader />
          <div className="flex min-h-screen">
            <Sidebar />
            <main className=" container px-2 md:px-8 bg-sky-100" dir="rtl">
              {children}
            </main>
          </div>
          <RootFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
