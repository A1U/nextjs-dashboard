import '@/app/ui/global.css';
import {inter} from '@/app/ui/font';
import Document, { Html, Head, Main, NextScript } from 'next/document';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
