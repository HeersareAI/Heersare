"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = ["Home", "Projects", "Stack", "Services", "Contact"];

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return <a href="#home" aria-label="Heersare Designer home" className="block shrink-0 overflow-hidden rounded-lg transition-opacity hover:opacity-90">
    <Image src="/heersare-logo-transparent.png" alt="Heersare — The Visionary Designer" width={1254} height={1254} loading={compact ? "lazy" : "eager"} className={`object-contain invert hue-rotate-180 ${compact ? "h-16 w-16" : "h-20 w-20 sm:h-24 sm:w-24"}`} />
  </a>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); menu.current?.focus(); }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
    <BrandLogo />
    <nav aria-label="Main navigation" className="hidden items-center gap-7 text-xs text-paper/65 md:flex">
      {links.map(link => <a key={link} href={`#${link.toLowerCase()}`} className="transition-colors hover:text-green">{link}</a>)}
    </nav>
    <a href="#contact" className="hidden items-center gap-5 rounded-full border border-paper/20 px-5 py-2.5 text-xs transition-colors hover:border-green hover:bg-green/10 md:flex">Let’s build <ArrowUpRight size={14} /></a>
    <button ref={menu} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} className="rounded-lg p-2 md:hidden">{open ? <X /> : <Menu />}</button>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-4 top-full flex flex-col rounded-2xl border border-paper/15 bg-ink p-3 shadow-xl md:hidden">
      {links.map(link => <a key={link} onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`} className="rounded-lg px-4 py-3 text-sm hover:bg-green/10 hover:text-green">{link}</a>)}
    </nav>}
  </header>;
}

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = element.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;
    node.classList.add("reveal-pending");
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { node.classList.remove("reveal-pending"); observer.disconnect(); }
    }, { threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={element} className={`reveal ${className}`}>{children}</div>;
}
