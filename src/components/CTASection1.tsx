export default function CTASection1() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-secondary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-4xl tracking-wider font-TrashHand text-primary sm:text-5xl">
            Demander votre audit UX
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Ça y est vous êtes prêts à faire un état des lieux de votre projet ?
            Notre équipe s’engage à revenir vers vous jusqu’à 48h après l’envoie
            du formulaire
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contactez-nous
            </a>
            <a
              href="https://www.bearstudio.fr/prestations/ux-design/audit-ux"
              className="text-sm font-semibold leading-6 text-white"
            >
              En savoir plus <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
