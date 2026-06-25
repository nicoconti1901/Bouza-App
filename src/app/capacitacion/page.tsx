import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function CapacitacionPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-gray-bg px-4">
      <div className="max-w-md rounded-2xl bg-white p-10 text-center shadow-lg">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10">
          <GraduationCap className="h-8 w-8 text-brand-red" />
        </div>
        <h1 className="text-2xl font-bold text-brand-dark">Módulo de Capacitación</h1>
        <p className="mt-3 text-sm leading-relaxed text-brand-gray">
          Próximamente podrás registrarte y realizar las capacitaciones de seguridad e
          higiene disponibles en la plataforma de {siteConfig.name}.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-brand-red px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
