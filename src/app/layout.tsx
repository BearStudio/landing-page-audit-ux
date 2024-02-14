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
        <title>Qu&apos;est-ce qu&apos;un audit UX ?</title>
        <meta
          name="description"
          content="Démystifiez l'audit UX et découvrez comment il contribue à 
          créer des interfaces numériques plus intuitives et efficaces. 
          Explorez les différentes phases de cette analyse et son rôle dans l'amélioration continue 
          des sites web et des applications."
        ></meta>
      </head>
      <body>{children}</body>
    </html>
  );
}
