import {  Playfair_Display } from "next/font/google";
import "./globals.css";
import NeonCursor from "./components/custom-cursor/NeonCursor";



const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})


export let metadata = {
  title: "sinthujan",
  description: "personal portfolio",
  icons: [{
    url: '/logo.png', type: 'image/png', sizes: '120x60', rel: 'icon'
  }]
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.className} scroll-smooth`} data-scroll-behavior="smooth">
      <body
        className={`${playfair.className} antialiased`}
      >
      <NeonCursor/>
        {children}
      </body>
    </html>
  );
}
