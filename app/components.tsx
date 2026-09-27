"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = ["Home", "Projects", "Stack", "Services", "Contact"];

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
  return <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-7 lg:px-10">
    <a href="#home" aria-label="Heersare Designer home" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green text-sm font-black text-ink">hd<span className="text-paper">.</span></span>
      <span>heersare<span className="font-normal text-paper/60"> designer</span></span>
    </a>
    <nav aria-label="Main navigation" className="hidden items-center gap-7 text-xs text-paper/65 md:flex">
      {links.map(link => <a key={link} href={`#${link.toLowerCase()}`} className="transition-colors hover:text-green">{link}</a>)}
    </nav>
    <a href="#contact" className="hidden items-center gap-5 rounded-full border border-paper/20 px-5 py-2.5 text-xs transition-colors hover:border-green hover:bg-green/10 md:flex">Let’s build <ArrowUpRight size={14} /></a>
    <button ref={menu} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} className="rounded-lg p-2 md:hidden">{open ? <X /> : <Menu />}</button>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-4 top-20 flex flex-col rounded-2xl border border-paper/15 bg-ink p-3 shadow-xl md:hidden">
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
