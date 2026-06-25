"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, Phone, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-gray-100 bg-brand-gray text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Mail className="h-3.5 w-3.5" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
          </div>
          <Link
            href="/capacitacion"
            className="rounded bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-brand-red-dark"
          >
            Acceso Capacitación
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt={`${siteConfig.name} - ${siteConfig.tagline}`}
            width={220}
            height={60}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-gray transition-colors hover:text-brand-red"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded bg-brand-red px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            Contacto
          </a>
        </nav>

        <button
          type="button"
          className="rounded p-2 text-brand-gray md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-brand-gray"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="rounded bg-brand-red px-5 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Contacto
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
