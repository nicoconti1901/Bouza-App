import { aboutParagraphs } from "@/lib/data";

export function About() {
  return (
    <section id="quienes-somos" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Bienvenidos a Bouza Glatigny
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
          {aboutParagraphs.map((paragraph, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-100 bg-brand-gray-bg p-6 text-center"
            >
              <p className="text-sm leading-relaxed text-brand-gray">{paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
