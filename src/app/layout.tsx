import type { Metadata } from "next";
import "./globals.css";
import "../styles/antd_overwrite.css"
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "آرتان تجارت",
  description: "آرتان تجارت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="overflow-x-hidden">
       <Layout>
        {children}
       </Layout>
      </body>
    </html>
  );
}
