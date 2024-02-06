import {
  ArrowTrendingUpIcon,
  FaceSmileIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Optimisation de l'Expérience Utilisateur",
    description:
      "L'audit UX, par une analyse approfondie, identifie les faiblesses de l'ergonomie et de la navigation, permettant une transformation vers une interface plus conviviale, garantissant ainsi une expérience utilisateur positive et satisfaisante.",
    icon: UsersIcon,
  },
  {
    name: "Augmentation des Taux de Conversion",
    description:
      "L'audit UX optimise l'expérience utilisateur, réduisant les obstacles à la fidélisation et favorisant une navigation fluide, entraînant une augmentation significative des taux de conversion et stimulant la croissance de votre entreprise.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Adoption du User-Centered Design (UCD)",
    description:
      "L'audit UX s'inscrit dans la tendance incontournable du UCD, alignant votre produit sur les attentes des utilisateurs pour une satisfaction accrue. Cela renforce sa position en tant que solution moderne et axée sur l'utilisateur, s'adaptant efficacement aux évolutions du marché numérique.",
    icon: FaceSmileIcon,
  },
];

export default function FeatureSection() {
  return (
    <article className="bg-white py-4">
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <section className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl tracking-wider font-TrashHand text-secondary sm:text-5xl">
            Pourquoi faire un de nos audit UX ?
          </h2>
          <p className="mt-6 text-md leading-8 text-gray-600">
            Vous voulez améliorer l’expérience proposée par votre produit ?
            Votre interface ne semble pas adaptée aux besoins des utilisateurs ?
            Vous souhaitez booster la qualité de votre produit ? Remettez votre
            projet dans les « pattes » de nos experts UX et laissez-les vous
            guider pour améliorer vos interfaces.
          </p>
        </section>
        <section className="mx-auto mt-12 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <section key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-secondary">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </section>
            ))}
          </dl>
        </section>
      </section>
    </article>
  );
}
