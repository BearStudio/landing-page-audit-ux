export default function UXMatterSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-3xl font-TrashHand font-bold tracking-wider text-gray-900 sm:text-4xl">
            L’UX : un sujet à ne surtout pas négliger !
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                À partir du 28 juin 2025, le RGAA devient une obligation pour la
                plupart des entreprises, sous peine d&apos;amendes. Nos audits
                UX garantissent une conformité totale, offrant à nos clients la
                tranquillité d&apos;esprit face aux exigences légales. Cette
                approche proactive renforce l&apos;accessibilité numérique,
                assurant que nos produits répondent aux normes du RGAA et
                élargissent ainsi leur portée.
              </p>
            </div>
            <div>
              <p>
                Nos audits UX intègrent également les directives du WCAG,
                notamment en ce qui concerne les critères de contraste. Cela se
                traduit par des interfaces conçues pour répondre aux normes
                internationales d&apos;accessibilité. En assurant une expérience
                utilisateur optimale, nous plaçons nos clients en avant sur le
                plan concurrentiel, renforçant leur réputation et élargissant
                leur audience, créant ainsi des opportunités commerciales plus
                importantes.
              </p>
            </div>
          </div>
          <div className="mt-4 flex">
            <a
              href="#"
              className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
