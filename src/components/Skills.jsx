import { skills } from "../data/content";
import Reveal from "./Reveal";

export default function Skills() {
  const groups = Object.entries(skills);
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-line/60">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            Skills
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-paper text-balance">
            The toolkit, organized the way I use it.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {groups.map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.08}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted pb-3 border-b border-line">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-paper/90 border border-line rounded-md px-3 py-1.5 hover:border-signal/60 hover:text-signal transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
