import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

export const metadata: Metadata = {
  title: "My blog",
  description: "A blog created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="ja"
          className={openSans.className} //html要素にCSS変数を登録
      >
      <body className="min-h-full flex flex-col">{children}
          </body>
      </html>
  );
}
