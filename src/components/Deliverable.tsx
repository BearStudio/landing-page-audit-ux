import clipboard from "@/assets/images/clipboard-icon.svg";
import content from "@/assets/images/content-icon.svg";
import pdf from "@/assets/images/pdf-icon-1.svg";
import deliverable from "@/assets/images/livrable-auditux.svg";
import Image from "next/image";
import Icon from "next/image";
const features = [
  {
    name: "Une présentation en direct des résultats.",
    icon: clipboard,
  },
  {
    name: "Nos recommandations d’action",
    icon: content,
  },
  {
    name: "Le fichier PDF de l’audit",
    icon: pdf,
  },
];

export default function DeliverableSection() {
  return (
    <div className="overflow-hidden bg-white py-24">
      <article className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 gap-x-24 lg:grid-cols-2">
        <section className="lg:ml-auto lg:pl-4 lg:pt-4 lg:max-w-lg">
          <h2 className="mt-2 text-3xl font-bold font-TrashHand tracking-wider text-gray-900 sm:text-4xl">
            A quoi ressemblera votre audit UX ?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Notre processus d&apos;audit UX s&apos;articule autour de plusieurs
            étapes clés : l&apos;analyse approfondie du contexte de votre
            projet, la définition précise des objectifs de l&apos;audit, et la
            formulation d&apos;hypothèses d&apos;améliorations. En complément,
            nous interprétons rigoureusement les mesures issues de
            l&apos;analyse fonctionnelle pour vous fournir des retours
            pertinents et axés sur l&apos;optimisation de votre expérience
            utilisateur.
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <Icon
                    src={feature.icon}
                    alt=""
                    className="absolute left-1 top-1 h-5 w-5"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Une fois que vous aurez pris connaissance de ces données, nous
            pourrons réfléchir avec vous à la suite concrète de votre projet.
          </p>
        </section>
        <figure className="hidden lg:flex items-start justify-end lg:order-first">
          <Image
            src={deliverable}
            alt="Product screenshot"
            className="w-[48rem] max-w-none sm:w-[32rem]"
            width={2432}
            height={1442}
          />
        </figure>
      </article>
    </div>
  );
}
