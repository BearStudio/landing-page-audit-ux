export default function CTASection1() {
  return (
    <div className="bg-white">
      <article className="mx-auto max-w-7xl relative isolate overflow-hidden bg-secondary py-24 text-center shadow-2xl sm:rounded-3xl ">
        <h2 className="mx-auto max-w-2xl text-4xl tracking-wider font-TrashHand text-primary sm:text-5xl">
          Pas encore tout à fait convaincu ?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Optez pour un de nos mini audit UX : pour faire une analyse de votre
          projet et vous aider à prioriser les chantiers
        </p>
        <section className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contactez-nous
          </a>
          <a
            href="https://www.bearstudio.fr/demandez-votre-mini-audit-ux-gratuit"
            className="text-sm font-semibold leading-6 text-white"
            target="_blank"
          >
            En savoir plus <span aria-hidden="true">→</span>
          </a>
        </section>
      </article>
    </div>
  );
}
