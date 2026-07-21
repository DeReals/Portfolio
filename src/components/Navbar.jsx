import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { personal } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const LINK_IDS = LINKS.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(LINK_IDS);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/60 bg-ink/85 backdrop-blur-md">
      <nav className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            goTo("hero");
          }}
          className="font-display font-semibold text-lg tracking-tight text-paper"
        >
          David<span className="text-beacon">.</span>Ogunbanjo
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => goTo(link.id)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  active === link.id
                    ? "text-beacon"
                    : "text-muted hover:text-paper"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={personal.resumeFile}
          download
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-beacon px-4 py-2 text-sm font-medium text-ink hover:bg-beacon2 transition-colors"
        >
          <FileDown size={16} strokeWidth={2.25} />
          Resume
        </a>

        <button
          className="md:hidden text-paper p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-line/60 bg-ink"
          >
            <ul className="px-6 py-4 flex flex-col gap-1 font-mono text-sm">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => goTo(link.id)}
                    className={`block w-full text-left px-2 py-2.5 rounded-md ${
                      active === link.id ? "text-beacon" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={personal.resumeFile}
                  download
                  className="inline-flex items-center gap-2 rounded-md bg-beacon px-4 py-2.5 text-sm font-medium text-ink"
                >
                  <FileDown size={16} />
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
