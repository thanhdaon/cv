import "@/app/globals.css";

import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: "Đào Ngọc Thành | Fullstack Engineer",
  description: "Đào Ngọc Thành - cv",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}
