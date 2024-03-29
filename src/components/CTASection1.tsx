export default function CTASection1() {
  return (
    <div className="bg-white py-16">
      <article className="mx-auto max-w-4xl relative isolate overflow-hidden bg-secondary py-24 text-center shadow-2xl sm:rounded-3xl ">
        <h2 className="mx-auto max-w-2xl text-3xl font-heading text-primary sm:text-4xl px-4">
          Vous cherchez un audit UX ?
        </h2>
        <p className="sm:mx-auto mx-6 mt-6 max-w-xl text-md lg:text-lg leading-8 text-gray-300">
          Les audits UX vous semblent plus clairs ? Si ça vous intéresse
          BearStudio vous propose de faire le vôtre !
        </p>
        <section className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://www.bearstudio.fr/prestations/ux-design/audit-ux"
            className="rounded-md bg-primary px-3.5 py-2.5 text-md lg:text-xl font-semibold text-secondary shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            target="_blank"
          >
            En savoir plus !
          </a>
        </section>
      </article>
    </div>
  );
}
