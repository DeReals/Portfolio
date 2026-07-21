import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import { projects } from "../data/content";
import Reveal from "./Reveal";

const accentMap = {
  beacon: {
    text: "text-beacon",
    border: "hover:border-beacon/60",
    bg: "bg-beacon/10",
  },
  signal: {
    text: "text-signal",
    border: "hover:border-signal/60",
    bg: "bg-signal/10",
  },
};

function ProjectCard({ project, index }) {
  const accent = accentMap[project.accent] ?? accentMap.signal;
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article
        className={`group h-full flex flex-col rounded-xl border border-line bg-panel p-6 transition-colors ${accent.border}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span
              className={`font-mono text-[11px] uppercase tracking-widest ${accent.text}`}
            >
              {project.tag}
            </span>
            <h3 className="mt-2 font-display font-semibold text-xl text-paper">
              {project.title}
            </h3>
          </div>
          <span
            className={`shrink-0 font-mono text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap ${accent.bg} ${accent.text}`}
          >
            {project.metric}
          </span>
        </div>

        <p className="mt-4 text-sm text-paper/80 leading-relaxed">
          {project.description}
        </p>
        <p className="mt-3 text-sm text-muted leading-relaxed italic">
          {project.contribution}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] text-muted border border-line rounded px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5 border-t border-line flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-paper hover:text-signal transition-colors"
          >
            <GithubIcon size={15} /> Source
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-paper hover:text-beacon transition-colors"
            >
              Live Demo <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-line/60">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            Projects
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-paper max-w-2xl text-balance">
            A few things I've built end to end.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
