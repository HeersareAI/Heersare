"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggleTheme() {
    const dark = !getSnapshot();
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("heersare-theme", dark ? "dark" : "light");
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }

  return <button
    type="button"
    onClick={toggleTheme}
    aria-label="Dark mode"
    aria-pressed={isDark}
    title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-paper/15 text-paper/75 transition-colors hover:border-green/60 hover:bg-green/10 hover:text-green sm:h-10 sm:w-10"
  >
    <Moon aria-hidden="true" size={18} className="dark:hidden" />
    <Sun aria-hidden="true" size={18} className="hidden dark:block" />
  </button>;
}
