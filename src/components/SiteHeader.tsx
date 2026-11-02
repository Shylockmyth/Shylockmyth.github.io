"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { nav } from "@/lib/site";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import {
  CloseIcon,
  DownloadIcon,
  FileIcon,
  MenuIcon,
  MoonIcon,
  ProjectIcon,
  SearchIcon,
  SunIcon,
} from "./icons";

type PaletteItem = {
  href: string;
  title: string;
  meta: string;
  group: string;
  kind: "page" | "project";
};

const pageItems: PaletteItem[] = [
  { href: "/", title: "Home", meta: "Index", group: "Navigate", kind: "page" },
  {
    href: "/work/",
    title: "Work",
    meta: `${String(projects.length).padStart(2, "0")} projects`,
    group: "Navigate",
    kind: "page",
  },
  { href: "/awards/", title: "Awards", meta: "Competitions", group: "Navigate", kind: "page" },
  { href: "/running/", title: "Running", meta: "Social running", group: "Navigate", kind: "page" },
  { href: "/about/", title: "About", meta: "Profile", group: "Navigate", kind: "page" },
  { href: "/contact/", title: "Contact", meta: "LinkedIn", group: "Navigate", kind: "page" },
];

const projectItems: PaletteItem[] = projects.map((p) => ({
  href: `/work/${p.slug}/`,
  title: p.title,
  meta: `${p.domains[0]} · ${p.year}`,
  group: "Projects",
  kind: "project",
}));

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const closePalette = useCallback(() => {
    setPaletteOpen(false);
    setQuery("");
    setActive(0);
    restoreFocus.current?.focus();
  }, []);

  const openPalette = useCallback(() => {
    restoreFocus.current = document.activeElement as HTMLElement;
    setPaletteOpen(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setPaletteOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => {
          if (!v) restoreFocus.current = document.activeElement as HTMLElement;
          return !v;
        });
      }
      if (e.key === "Escape") {
        setPaletteOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (paletteOpen) {
      const id = window.setTimeout(() => inputRef.current?.focus(), 20);
      document.body.style.overflow = "hidden";
      return () => {
        window.clearTimeout(id);
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [paletteOpen, menuOpen]);

  useEffect(() => {
    if (!paletteOpen) return;
    if (!query) {
      setActive(0);
      return;
    }
    setActive(0);
  }, [query, paletteOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const all = [...pageItems, ...projectItems];
    if (!q) return all;
    return all.filter((item) =>
      `${item.title} ${item.meta} ${item.href}`.toLowerCase().includes(q),
    );
  }, [query]);

  const go = useCallback(
    (item: PaletteItem | undefined) => {
      if (!item) return;
      closePalette();
      window.location.assign(item.href);
    },
    [closePalette],
  );

  const onPaletteKey = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + Math.max(results.length, 1)) % Math.max(results.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active]);
    }
  };

  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>('[aria-selected="true"]');
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage blocked, theme still applies for this page */
    }
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  const activeId = results[active] ? `palette-opt-${active}` : undefined;

  return (
    <>
      <header className="header">
        <div className="wrap header__inner">
          <Link href="/" className="brand">
            <span className="brand__mark" aria-hidden="true">
              NM
            </span>
            <span className="brand__text">
              <span className="brand__name">NTUTHUKO.MDUNGE</span>
              <span className="brand__sub" aria-hidden="true">
                Engineering portfolio
              </span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav__link${isActive(item.href) ? " nav__link--active" : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <span className="nav__idx" aria-hidden="true">
                  {item.index}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <a href={site.cv} className="header__cv" download>
              <DownloadIcon aria-hidden="true" />
              <span>CV</span>
            </a>
            <button
              type="button"
              className="kbd-btn"
              onClick={openPalette}
              aria-label="Search (Ctrl K)"
              aria-haspopup="dialog"
            >
              <SearchIcon aria-hidden="true" />
              <span className="kbd-btn__label">Search</span>
              <kbd aria-hidden="true">Ctrl K</kbd>
            </button>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle colour theme"
              title="Toggle colour theme"
            >
              <MoonIcon className="moon" aria-hidden="true" />
              <SunIcon className="sun" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="menu-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <CloseIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
          {[{ href: "/", label: "Home", index: "00" }, ...nav].map((item) => (
            <Link key={item.href} href={item.href} className="mobile-menu__link">
              {item.label}
              <span>{item.index}</span>
            </Link>
          ))}
          <a href={site.cv} className="mobile-menu__link" download>
            Download CV
            <span>PDF</span>
          </a>
        </nav>
      )}

      {paletteOpen && (
        <div
          className="palette"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closePalette();
          }}
        >
          <div className="palette__panel" role="dialog" aria-modal="true" aria-label="Search">
            <div className="palette__search">
              <SearchIcon aria-hidden="true" />
              <input
                ref={inputRef}
                className="palette__input"
                role="combobox"
                aria-label="Search pages and projects"
                aria-expanded="true"
                aria-controls="palette-list"
                aria-activedescendant={activeId}
                aria-autocomplete="list"
                placeholder="Jump to a page or project..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onPaletteKey}
              />
              <span className="palette__esc" aria-hidden="true">
                ESC
              </span>
            </div>

            <div className="palette__list" id="palette-list" role="listbox" ref={listRef}>
              {results.length === 0 && (
                <p className="palette__empty">No matches. Try &quot;pcb&quot;, &quot;vision&quot; or &quot;energy&quot;.</p>
              )}
              {results.map((item, i) => {
                const showGroup = i === 0 || results[i - 1].group !== item.group;
                return (
                  <div key={item.href}>
                    {showGroup && <p className="palette__group">{item.group}</p>}
                    <button
                      type="button"
                      id={`palette-opt-${i}`}
                      role="option"
                      aria-selected={i === active}
                      className="palette__item"
                      onMouseEnter={() => setActive(i)}
                      onClick={() => go(item)}
                      tabIndex={-1}
                    >
                      {item.kind === "project" ? <ProjectIcon /> : <FileIcon />}
                      <span className="palette__item-main">
                        <span className="palette__item-title">{item.title}</span>
                      </span>
                      <span className="palette__item-meta">{item.meta}</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="palette__hint" aria-hidden="true">
              <span>
                <kbd>↑</kbd>
                <kbd>↓</kbd> navigate
              </span>
              <span>
                <kbd>↵</kbd> open
              </span>
              <span>
                <kbd>esc</kbd> close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
