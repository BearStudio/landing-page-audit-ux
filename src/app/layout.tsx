import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
