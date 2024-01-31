import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const tomorow = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["500"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${(inter.variable, tomorow.variable)} `}>
        {children}
      </body>
    </html>
  );
}

