import Icon from "next/image";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import Link from "next/link";
import teamPic from "@/assets/images/team.jpg";

export default function HeroSection() {
  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50 bg-secondary py-4">
        <Icon
          className="h-10 w-auto px-4"
          src={logo}
          alt="logo of the company"
        />
      </header>

      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src={teamPic}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover blur-sm"
        />
        <div className="absolute inset-0 -z-10 h-full w-full object-cover bg-secondary opacity-70"></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Votre produit : au top des standards de l&apos;UX ?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Vous pensez avoir besoin d’un audit UX ? Ou vous ne savez pas
              vraiment en quoi cela consiste ? Laissez vous guider par l’équipe
              du BearStudio !
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Contactez-nous
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                En savoir plus <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
