import type { Metadata } from "next";
import "./globals.css";
import Footer from "./component/Footer";
import Header from "./component/Header";

export const metadata: Metadata = {
  title: "Front Dispatch",
  description: "アクセシビリティ、モダンフロントエンド関係を中心とした技術ブログです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
