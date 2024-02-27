import {
  ClipboardDocumentListIcon,
  ShareIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

import deliverable from "@/assets/images/deliverable.jpg";
import Image from "next/image";
const features = [
  {
    name: "Une présentation en direct des résultats.",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Des recommandations d’action",
    icon: HandThumbUpIcon,
  },
  {
    name: "Le fichier PDF de l’audit",
    icon: ShareIcon,
  },
];

export default function DeliverableSection() {
  return (
    <div className="overflow-hidden bg-white py-16">
      <article className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 gap-x-24 lg:grid-cols-2">
        <section className="lg:ml-auto lg:pl-4 lg:pt-4 lg:max-w-lg">
          <h2 className="mt-2 text-3xl font-heading text-secondary sm:text-4xl">
            À quoi peut ressembler un audit UX ?
          </h2>
          <p className="mt-10 text-lg text-gray-600">
            Le processus d&apos;audit UX s&apos;articule autour de plusieurs
            étapes clés : l&apos;analyse approfondie du contexte du projet, la
            définition précise des objectifs de l&apos;audit, et la formulation
            d&apos;hypothèses d&apos;améliorations. En complément, une
            interprétation rigoureuse des mesures issues de l&apos;analyse
            fonctionnelle est réalisée pour fournir au client des retours
            pertinents et axés sur l&apos;optimisation de son expérience
            utilisateur.
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Le résultat concret de votre audit UX peut varier en fonction de
            l&apos;organisme qui le réalise, mais la plupart du temps vous
            recevrez :
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-secondary">
                  <feature.icon
                    className="absolute left-0 h-6 w-6"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Une fois que vous aurez pris connaissance de ces données, certains
            organismes vous proposent de réfléchir avec vous à la suite de votre
            projet et de mettre en place les modifications suggérées pendant
            l&apos;audit.
          </p>
        </section>
        <figure className="hidden lg:block items-start justify-end lg:order-first">
          <Image
            src={deliverable}
            alt="Product screenshot"
            className="z-10 object-cover grayscale rounded-xl"
          />
          <div className="-translate-y-full z-10 h-full w-full object-cover bg-secondary opacity-40 rounded-xl"></div>
        </figure>
      </article>
    </div>
  );
}
