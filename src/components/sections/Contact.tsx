"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { contactServices, siteConfig } from "@/lib/data";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="bg-brand-gray-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Envianos tu consulta
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
          <p className="mx-auto mt-4 max-w-xl text-brand-gray">
            Nos caracteriza una atención personalizada. Te responderemos a la brevedad.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red/10">
                  <Mail className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-brand-gray transition-colors hover:text-brand-red"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red/10">
                  <Phone className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Teléfono</p>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-sm text-brand-gray transition-colors hover:text-brand-red"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red/10">
                  <MapPin className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Ubicación</p>
                  <p className="text-sm text-brand-gray">{siteConfig.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Send className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">¡Consulta enviada!</h3>
                <p className="mt-2 text-sm text-brand-gray">
                  Gracias por contactarnos. Te responderemos a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-brand-dark">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium text-brand-dark">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-dark">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>

                <div>
                  <label htmlFor="servicio" className="mb-1.5 block text-sm font-medium text-brand-dark">
                    Servicio requerido
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  >
                    <option value="">Seleccionar...</option>
                    {contactServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-brand-dark">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark sm:w-auto"
                >
                  Enviar consulta
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
