import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { personal, domains } from "../data/content";

const CENTER = 200;
const RADIUS = 148;
const EASE_BACK = [0.34, 1.56, 0.64, 1];

function NetworkDiagram() {
  const nodes = domains.map((d, i) => {
    const rad = (d.angle * Math.PI) / 180;
    return {
      ...d,
      x: CENTER + RADIUS * Math.cos(rad),
      y: CENTER + RADIUS * Math.sin(rad),
      index: i,
    };
  });

  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px] mx-auto"
      role="img"
      aria-label="Diagram connecting David's four disciplines: systems and IT, machine learning and data, security, and full-stack development"
    >
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5A623" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={CENTER} cy={CENTER} r="185" fill="url(#heroGlow)" />

      {nodes.map((n) => (
        <motion.line
          key={`line-${n.id}`}
          x1={CENTER}
          y1={CENTER}
          x2={n.x}
          y2={n.y}
          stroke="#243050"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 + n.index * 0.12, ease: "easeOut" }}
        />
      ))}

      {nodes.map((n) => (
        <motion.circle
          key={`pulse-${n.id}`}
          r={3}
          fill={n.index % 2 === 0 ? "#4CD6E0" : "#F5A623"}
          initial={{ opacity: 0 }}
          animate={{
            cx: [CENTER, n.x],
            cy: [CENTER, n.y],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatDelay: 1.8,
            delay: 1.6 + n.index * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.circle
        cx={CENTER}
        cy={CENTER}
        r="38"
        fill="#121A2E"
        stroke="#F5A623"
        strokeWidth="2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE_BACK }}
        style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
      />
      <text
        x={CENTER}
        y={CENTER + 6}
        textAnchor="middle"
        className="fill-paper font-display font-semibold"
        fontSize="16"
      >
        DO
      </text>

      {nodes.map((n) => {
        const labelY = n.y < CENTER ? n.y - 34 : n.y + 42;
        return (
          <g key={`node-${n.id}`}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="22"
              fill="#121A2E"
              stroke="#243050"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.75 + n.index * 0.12, ease: EASE_BACK }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
            <motion.text
              x={n.x}
              y={labelY}
              textAnchor="middle"
              className="fill-muted font-mono"
              fontSize="12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 + n.index * 0.12 }}
            >
              {n.label}
            </motion.text>
          </g>
        );
      })}
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 text-xs font-mono text-muted mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            {personal.status}
          </div>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-paper text-balance">
            {personal.name}
          </h1>
          <p className="mt-3 font-display text-xl sm:text-2xl text-beacon">
            {personal.role} <span className="text-muted">—</span>{" "}
            <span className="text-signal">{personal.tagline}</span>
          </p>

          <p className="mt-6 text-muted text-[15px] leading-relaxed max-w-xl">
            {personal.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={personal.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-md bg-beacon px-5 py-2.5 text-sm font-medium text-ink hover:bg-beacon2 transition-colors"
            >
              View Resume <ArrowUpRight size={16} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-paper hover:border-signal hover:text-signal transition-colors"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-paper hover:border-signal hover:text-signal transition-colors"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <NetworkDiagram />
        </motion.div>
      </div>
    </section>
  );
}
