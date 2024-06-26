import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import ReduxProvider from "@/components/redux/ReduxProvider";
import AOSProvider from "@/components/aos/AOSProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HyunJinNo's Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <AOSProvider>{children}</AOSProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
