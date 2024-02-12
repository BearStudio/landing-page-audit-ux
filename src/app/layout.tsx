import { Roboto, Poppins } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: "600",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${roboto.variable} ${poppins.variable}`}>
      <head>
        <title>Audit UX</title>
        <meta
          name="description"
          content="Vous voulez améliorer l'UX de votre projet ?"
        ></meta>
      </head>
      <body>{children}</body>
    </html>
  );
}
