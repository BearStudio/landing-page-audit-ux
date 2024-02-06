import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${roboto.variable}`}>
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
