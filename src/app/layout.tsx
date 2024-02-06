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
    <html lang="fr">
      <head>
        <title>Audit UX</title>
        <meta
          name="description"
          content="Vous voulez améliorer l'UX de votre projet ?"
        ></meta>
      </head>
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
