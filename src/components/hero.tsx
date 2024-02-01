import Icon from "next/image";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import Link from "next/link";
import teamPic from "@/assets/images/team.jpg";

export default function HeroSection() {
  return (
    <main className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50 bg-secondary py-4">
        <Icon
          className="h-10 w-auto px-4"
          src={logo}
          alt="logo of the company"
        />
      </header>

      <article className="relative isolate overflow-hidden pt-14">
        <Image
          src={teamPic}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover blur-sm"
        />
        <div className="absolute inset-0 -z-10 h-full w-full object-cover bg-secondary opacity-85"></div>
        <section className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-4xl font-bold tracking-wider font-TrashHand text-primary sm:text-6xl">
            Votre produit : au top des standards de l&apos;UX ?
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Vous pensez avoir besoin d’un audit UX ? Ou vous ne savez pas
            vraiment en quoi cela consiste ? Laissez vous guider par l’équipe du
            BearStudio !
          </p>
          <section className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Contactez-nous
            </a>
            <a
              href="https://www.bearstudio.fr/prestations/ux-design/audit-ux"
              className="text-sm font-semibold leading-6 text-white"
            >
              En savoir plus <span aria-hidden="true">→</span>
            </a>
          </section>
        </section>
      </article>
    </main>
  );
}
