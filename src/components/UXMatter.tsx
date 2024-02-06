export default function UXMatterSection() {
  return (
    <div className="bg-white py-24">
      <article className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="mt-2 text-3xl font-TrashHand tracking-wider text-secondary sm:text-4xl">
          L’UX : un sujet à ne surtout pas négliger !
        </h1>
        <section className="mt-10 grid grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:grid-cols-2">
          <p>
            À partir du 28 juin 2025, le{" "}
            <a
              href="https://accessibilite.numerique.gouv.fr/"
              className="font-bold underline"
              target="_blank"
            >
              RGAA
            </a>{" "}
            (Référentiel général d&apos;amélioration de l&apos;accessibilité)
            devient une obligation pour la plupart des entreprises, sous peine
            d&apos;amendes. Nos audits UX garantissent une{" "}
            <strong>conformité totale</strong>, offrant à nos clients la
            tranquillité d&apos;esprit face aux exigences légales. Cette
            approche proactive renforce{" "}
            <strong>l&apos;accessibilité numérique</strong>, assurant que nos
            produits répondent aux normes du RGAA et élargissent ainsi leur
            portée.
          </p>
          <p>
            Nos audits UX intègrent également les directives du{" "}
            <a
              href="https://www.w3.org/WAI/standards-guidelines/wcag/fr"
              className="font-bold underline"
              target="_blank"
            >
              WCAG
            </a>{" "}
            (Web Content Accessibility Guidelines) , notamment en ce qui
            concerne les critères de contraste. Cela se traduit par des
            interfaces conçues pour répondre aux{" "}
            <strong>normes internationales d&apos;accessibilité</strong>. En
            assurant une expérience utilisateur optimale, nous plaçons nos
            clients en avant sur le plan concurrentiel, renforçant leur
            réputation et <strong>élargissant leur audience</strong>, créant
            ainsi des opportunités commerciales plus importantes.
          </p>
        </section>
        <section className="mt-10 lg:mt-4 flex">
          <a
            href="#"
            className="rounded-md bg-secondary px-3.5 py-2.5 text-md lg:text-xl font-semibold text-white shadow-sm hover:opacity-80"
          >
            Contactez-nous
          </a>
        </section>
      </article>
    </div>
  );
}
