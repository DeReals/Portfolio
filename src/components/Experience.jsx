import { experience, leadership } from "../data/content";
import Reveal from "./Reveal";

function TimelineItem({ item, isLast }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-beacon ring-4 ring-beacon/15" />
      {!isLast && (
        <div className="absolute left-[4.5px] top-4 bottom-[-3.5rem] w-px bg-line" />
      )}
      <p className="font-mono text-xs text-signal">{item.date}</p>
      <h3 className="mt-1 font-display font-semibold text-lg text-paper">
        {item.role}
      </h3>
      {item.org && <p className="text-muted text-sm">{item.org}</p>}
      <ul className="mt-3 space-y-1.5">
        {item.points.map((p, i) => (
          <li
            key={i}
            className="text-sm text-paper/80 leading-relaxed flex gap-2"
          >
            <span className="text-muted mt-1.5 shrink-0">–</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 border-t border-line/60"
    >
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            Experience
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-paper text-balance">
            Where the work actually happened.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-14">
          <div className="space-y-14">
            {experience.map((item, i) => (
              <Reveal key={item.role} delay={i * 0.05}>
                <TimelineItem
                  item={item}
                  isLast={i === experience.length - 1}
                />
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
                Leadership
              </p>
            </Reveal>
            <div className="space-y-14">
              {leadership.map((item, i) => (
                <Reveal key={item.role} delay={i * 0.05}>
                  <TimelineItem
                    item={item}
                    isLast={i === leadership.length - 1}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
