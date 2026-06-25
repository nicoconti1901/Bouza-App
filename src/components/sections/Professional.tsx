import { professional } from "@/lib/data";

const rows = [
  { label: "Nombre y Apellido", value: professional.name },
  { label: "Matrícula Profesional", value: professional.license },
  { label: "Celular", value: professional.phone, href: "tel:+54297155387685" },
  { label: "E-mail", value: professional.email, href: `mailto:${professional.email}` },
];

export function Professional() {
  return (
    <section id="profesional" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">Profesional</h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
        </div>

        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-lg shadow-md">
          <div className="bg-brand-gray px-6 py-4 text-center">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white">
              Profesional
            </h3>
          </div>
          <table className="w-full border-collapse">
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="w-2/5 border border-white px-4 py-3 text-right text-sm font-bold text-brand-gray">
                    {row.label}
                  </td>
                  <td className="border border-white px-4 py-3 text-sm text-brand-dark">
                    {row.href ? (
                      <a
                        href={row.href}
                        className="transition-colors hover:text-brand-red"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
