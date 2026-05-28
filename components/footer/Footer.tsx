import Link from "next/link";
import { footerColumns, footerMention } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ivoire-2 border-t border-charcoal/10">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="NovaBanque — Retour à l'accueil"
              className="font-display text-2xl tracking-tight hover:text-or-soft transition-colors inline-block"
            >
              Nova<span className="italic">Banque</span>
            </Link>
            <p className="text-sm text-charcoal-2 mt-4 max-w-xs leading-relaxed">
              Banque privée du Léman. Genève, Lausanne, Zurich, Monaco, Singapour.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-charcoal hover:text-or-soft transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-charcoal/10 flex flex-col lg:flex-row gap-4 lg:items-center justify-between text-xs text-charcoal-2">
          <p>© 2026 NovaBanque SA</p>
          <p className="max-w-2xl text-right">{footerMention}</p>
        </div>
      </div>
    </footer>
  );
}
