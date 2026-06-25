import { ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/data";

const HERO_IMAGE = "/images/hero-profesional.png";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-gray">
      {/* Imagen de fondo — personaje a la derecha */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-no-repeat bg-[70%_center] sm:bg-[75%_center] lg:bg-right"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />

      {/* Overlay para legibilidad del texto a la izquierda */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right,
              rgba(88,89,91,0.95) 0%,
              rgba(88,89,91,0.88) 28%,
              rgba(88,89,91,0.55) 48%,
              rgba(88,89,91,0.15) 68%,
              transparent 85%
            )
          `,
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-16 sm:min-h-[580px] sm:px-8 sm:py-20 lg:min-h-[620px] lg:px-10">
        <div className="w-full max-w-xl lg:max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-red">
            <ShieldCheck className="h-4 w-4" />
            {siteConfig.tagline}
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.name.toUpperCase()}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-100 sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-r-full bg-brand-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Contactanos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Nuestros servicios
            </a>
          </div>
        </div>
      </div>

      {/* Curva inferior */}
      <div className="pointer-events-none relative z-20 -mt-px">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 20 1440 50V80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
