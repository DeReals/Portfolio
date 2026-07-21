import { GraduationCap, Award } from "lucide-react";
import { education, stats, certifications } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-line/60">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            About
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-paper text-balance">
            Grounded in systems, curious about everything connected to them.
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-line pl-4">
              <div className="font-mono font-medium text-2xl sm:text-3xl text-beacon">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          <Reveal delay={0.15}>
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-lg bg-panel border border-line p-2 text-signal">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-paper">
                  {education.school}
                </h3>
                <p className="text-muted text-sm mt-0.5">
                  {education.degree} · {education.date}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-muted mb-2">
                  Awards
                </p>
                <p className="text-paper/90">{education.awards.join(" · ")}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-muted mb-2">
                  Programs
                </p>
                <p className="text-paper/90">
                  {education.programs.join(" · ")}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-muted mb-2">
                  Relevant Coursework
                </p>
                <p className="text-paper/90">
                  {education.coursework.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-start gap-3 mb-6">
              <div className="mt-1 rounded-lg bg-panel border border-line p-2 text-beacon">
                <Award size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-paper">
                  Certifications
                </h3>
                <p className="text-muted text-sm mt-0.5">
                  Actively building toward two more
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between rounded-lg border border-line bg-panel px-4 py-3"
                >
                  <span className="text-sm text-paper font-medium">
                    {c.name}
                  </span>
                  <span
                    className={`font-mono text-xs px-2 py-1 rounded-full ${
                      c.status === "Earned"
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-beacon/10 text-beacon"
                    }`}
                  >
                    {c.status}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
