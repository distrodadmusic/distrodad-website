"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  { label: "Distribution", href: "/services/distribution" },
  { label: "Publishing Administration", href: "/services/publishing-administration" },
  { label: "Copyright", href: "/services/copyright" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-[#1a2744] text-[#f5f0e8] sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="DistroDad" width={48} height={48} className="rounded-full object-cover" />
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold tracking-wide">DistroDad</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 font-[family-name:var(--font-inter)] text-sm font-medium">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#c9a84c] transition-colors">About</Link>

          <div className="relative group">
            <button className="hover:text-[#c9a84c] transition-colors flex items-center gap-1">
              Services
              <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-1 w-52 bg-[#1a2744] border border-[#c9a84c]/30 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm hover:bg-[#c9a84c]/10 hover:text-[#c9a84c] transition-colors border-b border-[#c9a84c]/10 last:border-0">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/artists" className="hover:text-[#c9a84c] transition-colors">Artists</Link>
          <Link href="/blog" className="hover:text-[#c9a84c] transition-colors">Blog</Link>
          <Link href="/contact" className="bg-[#c9a84c] text-[#1a2744] px-4 py-1.5 rounded font-semibold hover:bg-[#b8973b] transition-colors">Contact</Link>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1a2744] border-t border-[#c9a84c]/20 px-4 py-4 flex flex-col gap-3 font-[family-name:var(--font-inter)] text-sm">
          <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-[#c9a84c]">Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-[#c9a84c]">About</Link>
          <button onClick={() => setServicesOpen(!servicesOpen)} className="text-left hover:text-[#c9a84c] flex items-center gap-1">
            Services <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          {servicesOpen && (
            <div className="pl-4 flex flex-col gap-2">
              {services.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="text-[#f5f0e8]/80 hover:text-[#c9a84c]">{s.label}</Link>
              ))}
            </div>
          )}
          <Link href="/artists" onClick={() => setMobileOpen(false)} className="hover:text-[#c9a84c]">Artists</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="hover:text-[#c9a84c]">Blog</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="bg-[#c9a84c] text-[#1a2744] px-4 py-1.5 rounded font-semibold text-center">Contact</Link>
        </div>
      )}
    </header>
  );
}
