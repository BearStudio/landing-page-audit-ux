import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React from "react";

const faqs = [
  {
    question: "Qu’est-ce qu’un audit ergonomique d’un site internet ?",
    answer: `
    L’audit ergonomique fait partie intégrante de l’audit UX et UI, dans le cadre de l’audit UX/UI d’un site internet, l’audit ergonomique implique un examen de toutes les pages du site afin de déterminer si l’utilisabilité de celles-ci est optimale.

    Pour qu’une page bénéficie d’une bonne utilisabilité, elle doit respecter 3 grands critères :
    
    Efficacité : l’utilisateur doit pouvoir atteindre l’objectif prévu par la page
    Efficience : l’objectif doit être atteint avec un temps et un effort minimal
    Satisfaction : l’utilisation de la page doit être agréable pour que le ressenti utilisateur soit positif
    Afin d’étudier l’ergonomie d’un site web, il faut d’abord définir si les pages respectent les normes de l’UX design, puis effectuer des tests utilisateurs afin de vérifier l’utilisabilité des pages.
    
    Les normes de l’ergonomie web à respecter sont par exemple le responsive design, une interface agréable ou encore un design d’interface centré sur l’utilisateur.
    
    Si on prend l’exemple d’un site e-commerce, l’amélioration de son ergonomie permettra de diminuer le taux de rebond et ainsi augmenter les ventes.
    
    Pour résumer, l’optimisation ergonomique correspond à la création d’une interface qui maximise la fluidité de l’interaction homme-machine afin de concevoir une expérience utilisateur idéale. `,
  },
  {
    question: "Un audit UX peut-il améliorer le référencement d’un site ?",
    answer: `L’algorithme de Google évolue et de nouveaux aspects entrent en compte dans le classement des résultats de recherche. La qualité est au centre des nouveaux critères des moteurs de recherche. Et parmi ces critères de qualité, l’expérience utilisateur occupe une place très importante.

    Aujourd’hui, les sites internet, pour être référencés, ne doivent plus simplement répondre aux exigences techniques comme le netlinking, les liens internes, les mots-clés ou encore la notoriété, mais doivent également offrir une expérience utilisateur agréable.
    
    Des facteurs dépendants de l’expérience utilisateur qui jouent principalement sur l’indexation sont par exemple le taux de rebond, le temps passé sur une page, le nombre de pages vues, le temps de chargement ou encore le responsive design. En fournissant une meilleure expérience utilisateur, le référencement naturel de votre site internet sera forcément amélioré.
    
    Appliquer les méthodologies UX UI permet donc, lors de la création de site, à la fois d’améliorer l’expérience-client, de capter plus de trafic mais aussi d’augmenter le taux de conversion de ce trafic`,
  },
  {
    question: "Qu’est-ce qu’une maquette en UX design ?",
    answer: `En UX design, la maquette permet d’avoir un aperçu réaliste d’un produit final. C’est une représentation graphique qui reprend toutes les fonctionnalités d’un produit avec son identité visuelle.

    Les maquettes nécessitent la création préalable de wireframes qui représentent la disposition des composants sur l’interface d’un produit, mais aussi d’une identité visuelle et dans l’idéal d’une charte graphique l’accompagnant pour rendre constante l’utilisation et la déclinaison de cette dernière.
    
    En UX design, la maquette doit évidemment prendre en compte l’optimisation de l’expérience utilisateur en disposant les éléments le plus logiquement possible afin de rendre l’interface ergonomique et intuitive pour l’utilisateur.
    
    La conception d’interfaces rend l’expérience utilisateur unique quand ergonomie et design ne font qu’un.`,
  },
  {
    question: "À quoi correspond la phase de prototypage ?",
    answer: `La phase de prototypage intervient juste après le maquettage. À la différence des maquettes statiques, un prototype est dynamique, il permet donc d’interagir avec un produit et d’avoir un aperçu très réaliste du produit final en action.

    Il permet de représenter un produit numérique le plus fidèlement possible sans passer par la phase de développement informatique. Les prototypes doivent reprendre toutes les fonctionnalités et paramètres du futur produit.
    
    Ils peuvent également être responsive (le design s’adapte à la taille de l’écran que ça soit sur une interface mobile, sur des ordinateurs ou des tablettes), le responsive design est indispensable pour faciliter l’interaction avec l’utilisateur sur les produits numériques amenés à être utilisés sur différentes tailles d’écrans.
    
    Le prototype est en lien avec l’userflow qui reprend le parcours utilisateur en listant chaque page sous forme d’architecture de l’information.
    
    Le parcours des utilisateurs doit être précis en incluant tous les scénarios possibles pour rendre le prototype fonctionnel, c’est une étape de plus dans la démarche centrée utilisateur.
    
    L’étape de prototypage est indispensable afin d’effectuer des premiers tests utilisateurs qui vont permettre de réduire les coûts de développement liés à des ajustements futurs. Elle va aussi permettre aux développeurs d’intégrer facilement en comprenant le parcours et les différentes interactions.`,
  },
];

export default function FAQSection() {
  return (
    <div className="bg-white py-16">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-3xl font-heading text-secondary text-center sm:text-4xl">
          Questions fréquentes sur l’UX
        </h2>
        <dl className="mt-10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-white bg-secondary p-3 lg:p-4 rounded-lg cursor-pointer">
                      <h3 className="text-md lg:text-xl leading-7">
                        {faq.question}
                      </h3>
                      <figure className="ml-6 flex h-7 items-center">
                        {open ? (
                          <ChevronUpIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <ChevronDownIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                      </figure>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    enter="transition duration-600 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel
                      as="dd"
                      className="mt-2 pr-12 text-lg text-gray-800"
                    >
                      {faq.answer.split("\n").map((paragraph) => (
                        <>
                          <p key={paragraph} className="mb-4 ml-8">
                            {paragraph}
                          </p>
                        </>
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </article>
    </div>
  );
}
