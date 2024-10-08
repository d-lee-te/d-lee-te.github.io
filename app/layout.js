import localFont from "next/font/local";
import { Lato, Poppins, Roboto_Mono } from 'next/font/google';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic']
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic']
});

const robotoMono = Roboto_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic']
});

export const metadata = {
  title: "dleete",
  description: "David's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.className} ${poppins.className} ${robotoMono.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
