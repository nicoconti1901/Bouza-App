import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-brand-gray text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={180}
              height={50}
              className="mb-4 h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-gray-300">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/capacitacion"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Capacitación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-400">{siteConfig.location}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
