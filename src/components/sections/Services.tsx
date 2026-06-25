"use client";

import { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import { services } from "@/lib/data";

const serviceIcons: Record<string, string> = {
  "empresas-industrias": "🏭",
  construccion: "🏗️",
  capacitacion: "📚",
  mediciones: "📊",
  medioambiente: "🌿",
  ingenieria: "⚡",
};

export function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const expanded = services.find((s) => s.id === expandedId);

  return (
    <section id="servicios" className="bg-brand-gray-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Nuestros Servicios
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
          <p className="mx-auto mt-4 max-w-2xl text-brand-gray">
            Soluciones integrales en higiene, seguridad y medio ambiente para empresas
            e industrias de la Patagonia.
          </p>
        </div>

        {expanded ? (
          <div className="mt-12">
            <button
              type="button"
              onClick={() => setExpandedId(null)}
              className="mb-6 flex items-center gap-2 text-sm font-medium text-brand-red hover:underline"
            >
              <X className="h-4 w-4" />
              Volver a servicios
            </button>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-brand-dark">{expanded.title}</h3>
              <p className="mt-3 text-brand-gray">{expanded.summary}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {expanded.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-gray">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/10 text-2xl">
                  {serviceIcons[service.id]}
                </div>
                <h3 className="text-lg font-bold text-brand-dark">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-gray">
                  {service.summary}
                </p>
                <ul className="mt-4 space-y-1">
                  {service.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-xs text-brand-gray-light">
                      <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-brand-red" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setExpandedId(service.id)}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
                >
                  Leer más
                  <ChevronRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
