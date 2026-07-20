import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaExternalLinkAlt, FaServer, FaCode, FaRobot } from 'react-icons/fa';

// --- DATA CONFIGURATION ---
const resumeData = {
  name: "David Ogunbanjo",
  role: "Software Engineer & Computer Science Student",
  status: "Senior Computer Science Undergraduate @ Loyola University Maryland (May 2027)",
  targetRole: "Seeking Software Engineering & Sports Data Analytics Roles",
  email: "davidogunbanjo15@gmail.com",
  linkedin: "https://linkedin.com/in/davidogunbanjo",
  github: "https://github.com/davidogunbanjo",
  resumeLink: "/David_Ogunbanjo_Resume.pdf", // Place your PDF in the public folder
  summary: "Computer Science student with experience in software engineering, machine learning, and IT systems administration. Built production ML pipelines achieving 92% accuracy; automated workflows improving team efficiency by 40%. Technically proficient problem solver.",
};

const projects = [
  {
    title: "Pothole Detection System",
    description: "Designed and trained a CNN model for object detection on a 5,000-image labeled dataset. Built an end-to-end ML pipeline covering data ingestion, training, and evaluation, reducing training time by 25%.",
    techStack: ["Python", "TensorFlow", "Roboflow", "CNN", "OpenCV"],
    githubUrl: "https://github.com/davidogunbanjo",
    liveUrl: "#",
    icon: <FaRobot className="text-4xl text-blue-500" />
  },
  {
    title: "CompTIA Security+ Study Platform",
    description: "Built an interactive web app with flashcards, quizzes, and a practice exam engine covering all Security+ domains. Implemented persistent progress tracking using localStorage.",
    techStack: ["React", "JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/davidogunbanjo",
    liveUrl: "#",
    icon: <FaServer className="text-4xl text-green-500" />
  },
  {
    title: "Advanced Algorithm & Code Repository",
    description: "Constructed a dedicated, scaled Git repository organized by programmatic difficulty to store completed problem solutions. Maintained professional README architectures and documentation.",
    techStack: ["Java", "C++", "Python", "Git", "Markdown"],
    githubUrl: "https://github.com/davidogunbanjo",
    liveUrl: "#",
    icon: <FaCode className="text-4xl text-purple-500" />
  }
];

const skills = [
  { category: "Languages", items: "Java, Python, C, C++, SQL, JavaScript, HTML, CSS, LaTeX, Lisp, Prolog" },
  { category: "Frameworks & Libraries", items: "React, Node.js, Flask, FastAPI, Material-UI, pandas, NumPy, TensorFlow" },
  { category: "Tools & Systems", items: "Git, Linux/Kali, Docker, CI/CD pipelines, REST APIs, Wireshark, OOP" },
  { category: "Certifications", items: "CompTIA A+, CompTIA Network+ (In Progress), CompTIA Security+ (In Progress)" }
];

const experiences = [
  {
    role: "IT Technical Services Assistant",
    company: "Loyola University Maryland",
    date: "May 2024 – Present",
    points: [
      "Provisioned OS and enterprise software across 90% of campus devices, supporting 3,000+ users.",
      "Diagnosed hardware and network issues; reduced average ticket resolution time by 20% via systematic documentation."
    ]
  },
  {
    role: "Hauber Research Fellow — AI/ML Research",
    company: "Loyola University Maryland",
    date: "May 2025 – Aug 2025",
    points: [
      "Designed and trained CNN models for pothole detection, achieving 92% accuracy.",
      "Prepared findings on model precision, recall, and F1 scores for peer-reviewed academic publication."
    ]
  },
  {
    role: "Co-President & Vice President",
    company: "ACM, Cybersecurity Club, & Robotics Club",
    date: "Aug 2024 – Present",
    points: [
      "Led 50+ member organization; organized 10+ technical workshops, hackathons, and networking events.",
      "Coordinated cross-functional project teams and external STEM outreach partnerships."
    ]
  }
];

// --- COMPONENTS ---

export default function Portfolio() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen">
      
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight text-blue-600">DO.</span>
          <div className="space-x-6 text-sm font-semibold text-slate-600 hidden md:block">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 space-y-32 py-16">
        
        {/* HERO SECTION */}
        <section id="about" className="flex flex-col md:flex-row items-center justify-between gap-12 mt-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
              Hi, I'm {resumeData.name}.
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-600 font-medium">
              {resumeData.role}
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              {resumeData.status}. <br/>
              <span className="font-semibold text-slate-700">{resumeData.targetRole}.</span><br/><br/>
              {resumeData.summary}
            </p>
            
            {/* CALL TO ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={resumeData.resumeLink} download 
                 className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-sm">
                <FaFileDownload /> Download Resume
              </a>
              <a href={resumeData.github} target="_blank" rel="noreferrer"
                 className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition shadow-sm">
                <FaGithub /> GitHub
              </a>
              <a href={resumeData.linkedin} target="_blank" rel="noreferrer"
                 className="flex items-center gap-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-semibold transition shadow-sm">
                <FaLinkedin className="text-blue-600"/> LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <h3 className="text-3xl font-bold mb-8 border-b-2 border-blue-600 pb-2 inline-block">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition flex flex-col h-full">
                <div className="mb-6">{proj.icon}</div>
                <h4 className="text-xl font-bold mb-3">{proj.title}</h4>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{proj.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {proj.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 border-t border-slate-100 pt-4 mt-auto">
                  <a href={proj.githubUrl} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition">
                    <FaGithub /> Source Code
                  </a>
                  {proj.liveUrl !== "#" && (
                     <a href={proj.liveUrl} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition">
                       <FaExternalLinkAlt /> Live App
                     </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section id="skills">
          <h3 className="text-3xl font-bold mb-8 border-b-2 border-blue-600 pb-2 inline-block">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h4 className="text-lg font-bold text-slate-800 mb-2">{skillGroup.category}</h4>
                <p className="text-slate-600 leading-relaxed">{skillGroup.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & LEADERSHIP */}
        <section id="experience">
          <h3 className="text-3xl font-bold mb-8 border-b-2 border-blue-600 pb-2 inline-block">Experience & Leadership</h3>
          <div className="space-y-8 max-w-4xl">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-600 before:rounded-full before:shadow-[0_0_0_4px_rgba(37,99,235,0.2)]">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                  <span className="text-sm font-semibold text-blue-600 md:ml-4 shrink-0">{exp.date}</span>
                </div>
                <h5 className="text-md font-medium text-slate-500 mb-3">{exp.company}</h5>
                <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER & CONTACT (Trust Signals) */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
          <p className="mb-8 max-w-xl mx-auto">
            Whether you have a question regarding my projects, an internship opportunity, or just want to say hi, my inbox is always open.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href={`mailto:${resumeData.email}`} className="text-3xl hover:text-white transition transform hover:scale-110">
              <FaEnvelope />
            </a>
            <a href={resumeData.github} className="text-3xl hover:text-white transition transform hover:scale-110">
              <FaGithub />
            </a>
            <a href={resumeData.linkedin} className="text-3xl hover:text-blue-500 transition transform hover:scale-110">
              <FaLinkedin />
            </a>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} David Ogunbanjo. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}