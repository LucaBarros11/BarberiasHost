"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#historia", label: "Story" },
  { href: "#servicios", label: "Services" },
  { href: "#equipo", label: "Barbers" },
  { href: "#resenas", label: "Reviews" },
  { href: "#ubicacion", label: "Visit" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-espresso/95 border-b border-brass/20 backdrop-blur-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-bone"
        >
          The Strop House
        </a>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-bone/70 transition-colors hover:text-brass-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#reservar"
          className="border border-brass px-4 py-2 font-mono text-xs uppercase tracking-wider text-brass-light transition-colors hover:bg-brass hover:text-espresso"
        >
          Book
        </a>
      </div>
    </header>
  );
}
