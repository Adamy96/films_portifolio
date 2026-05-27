"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close overlay on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = (path: string) =>
    `transition-opacity hover:opacity-100 ${
      pathname === path ? "opacity-100" : "opacity-50"
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm px-6 md:px-[41px] pt-4 pb-[10px]">
        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between h-[160px]">
          {/* Left nav */}
          <nav className="flex gap-6 font-body text-xs tracking-[0.2em] uppercase">
            <Link href="/" className={linkClass("/")}>
              Films
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </nav>

          {/* Center logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <Link
              href="/"
              className="font-display tracking-[0.15em] animate-fade-up transition-all duration-300 hover:text-[#5b8f42] hover:[text-shadow:0_0_24px_rgba(91,143,66,0.9),0_0_48px_rgba(91,143,66,0.7),0_0_72px_rgba(91,143,66,0.5),0_0_96px_rgba(91,143,66,0.3)]"
              style={{ fontSize: "33px" }}
            >
              LUCAS ZANETTE FOLTRAN
            </Link>
            <div className="flex gap-4 mt-3 font-body text-[13px] tracking-[0.3em] uppercase">
              <Link
                href="/category/narrative"
                className={`transition-all duration-300 hover:text-[#5b8f42] hover:[text-shadow:0_0_12px_rgba(91,143,66,0.8)] ${
                  pathname === "/category/narrative"
                    ? "opacity-100"
                    : "opacity-60"
                }`}
              >
                Narrative
              </Link>
              <Link
                href="/category/commercial"
                className={`transition-all duration-300 hover:text-[#5b8f42] hover:[text-shadow:0_0_12px_rgba(91,143,66,0.8)] ${
                  pathname === "/category/commercial"
                    ? "opacity-100"
                    : "opacity-60"
                }`}
              >
                Commercial
              </Link>
            </div>
          </div>

          {/* Right social */}
          <a
            href="https://www.instagram.com/lucaszfoltran/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Instagram"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden items-center justify-between h-[80px]">
          <div className="w-6" aria-hidden="true" />
          <Link
            href="/"
            className="font-display tracking-[0.15em] text-center transition-all duration-300 hover:text-[#5b8f42]"
            style={{ fontSize: "18px" }}
          >
            LUCAS ZANETTE FOLTRAN
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="opacity-90 hover:opacity-100 transition-opacity"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-background md:hidden flex flex-col animate-fade-in">
          <div className="flex justify-end px-6 pt-6">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-8 font-display tracking-[0.2em] uppercase">
            <Link href="/" className="text-2xl">
              Films
            </Link>
            <Link
              href="/contact"
              className="text-2xl opacity-60 hover:opacity-100 transition-opacity"
            >
              Contact
            </Link>
            <Link
              href="/category/narrative"
              className="text-2xl opacity-60 hover:opacity-100 transition-opacity"
            >
              Narrative
            </Link>
            <Link
              href="/category/commercial"
              className="text-2xl opacity-60 hover:opacity-100 transition-opacity"
            >
              Commercial
            </Link>
          </nav>

          <div className="flex justify-center pb-10">
            <a
              href="https://www.instagram.com/lucaszfoltran/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              <FaInstagram className="w-7 h-7" strokeWidth={1.25} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
