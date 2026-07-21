import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { personal, formspreeId } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formspreeId) {
      // No form backend configured yet, fall back to a pre-filled email
      // so the contact path still works out of the box.
      const subject = encodeURIComponent(
        `Portfolio contact from ${form.name || "your site"}`
      );
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`
      );
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line/60">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-2 gap-14">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            Contact
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-paper text-balance">
            Let's build something worth shipping.
          </h2>
          <p className="mt-5 text-muted text-[15px] leading-relaxed max-w-md">
            I'm currently open to software engineering, machine learning, and
            cybersecurity-focused roles. The form reaches me fastest, or drop
            a line directly below.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-3 text-sm text-paper hover:text-signal transition-colors"
            >
              <Mail size={17} /> {personal.email}
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-sm text-paper hover:text-signal transition-colors"
            >
              <GithubIcon size={17} /> github.com/davidogunbanjo
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-sm text-paper hover:text-signal transition-colors"
            >
              <LinkedinIcon size={17} /> linkedin.com/in/davidogunbanjo
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "success" ? (
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-8 text-center">
              <CheckCircle2 className="mx-auto text-emerald-400" size={32} />
              <p className="mt-3 font-display font-semibold text-paper">
                Message sent
              </p>
              <p className="mt-1 text-sm text-muted">
                Thanks for reaching out, I'll reply soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono uppercase tracking-widest text-muted mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-line bg-panel px-4 py-2.5 text-sm text-paper placeholder:text-muted/60 focus:border-signal outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono uppercase tracking-widest text-muted mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-line bg-panel px-4 py-2.5 text-sm text-paper placeholder:text-muted/60 focus:border-signal outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-widest text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-line bg-panel px-4 py-2.5 text-sm text-paper placeholder:text-muted/60 focus:border-signal outline-none resize-none"
                  placeholder="What are you working on?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-md bg-beacon px-5 py-2.5 text-sm font-medium text-ink hover:bg-beacon2 transition-colors disabled:opacity-60"
              >
                <Send size={16} />
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong, email me directly at {personal.email}.
                </p>
              )}
              {!formspreeId && (
                <p className="text-xs text-muted">
                  This currently opens a pre-filled email. Add a Formspree
                  form ID in src/data/content.js to send silently instead.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
