// All site content lives here. Edit this file to update copy without
// touching component code. Fields marked TODO are placeholders — swap
// them for real links before you deploy.

export const personal = {
  name: "David Ogunbanjo",
  role: "Software Engineer",
  tagline: "Systems, Security & Machine Learning",
  status: "Open to Software Engineering opportunities",
  location: "Baltimore, MD",
  email: "davidogunbanjo15@gmail.com",
  github: "https://github.com/DeReals",
  linkedin: "https://www.linkedin.com/in/david-ogunbanjo-987bb720b/",
  resumeFile: "/David_Ogunbanjo_Resume.pdf",
  bio: "I'm a Computer Science student at Loyola University Maryland graduating in May 2027, with hands-on experience spanning machine learning research, full-stack development, and enterprise IT systems. As a Hauber Research Fellow, I built a CNN-based pothole detection system reaching 92% accuracy. I currently support 3,000+ users as an IT Technical Services Assistant, and I co-lead Loyola's ACM & Cybersecurity Club. I'm actively working through CompTIA Network+ and Security+, and I like building systems that are efficient, secure, and genuinely useful.",
};

// The four connected disciplines shown in the hero's network diagram.
export const domains = [
  { id: "systems", label: "Systems & IT", angle: -135 },
  { id: "ml", label: "ML & Data", angle: -45 },
  { id: "security", label: "Security", angle: 45 },
  { id: "fullstack", label: "Full-Stack", angle: 135 },
];

export const stats = [
  { value: "92%", label: "CNN detection accuracy" },
  { value: "3,000+", label: "Campus users supported" },
  { value: "40%", label: "Workflow efficiency gained" },
  { value: "20%", label: "Faster ticket resolution" },
];

export const education = {
  school: "Loyola University Maryland",
  location: "Baltimore, MD",
  degree: "B.S. Computer Science",
  date: "Expected May 2027",
  awards: ["Loyola Presidential Scholarship", "Delegate Scholarship"],
  programs: ["Hyman Science Scholar", "Haig Scholar", "Hauber Research Fellow"],
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Stochastic Processes",
    "Programming Languages",
  ],
};

export const certifications = [
  { name: "CompTIA A+", status: "Earned" },
  { name: "CompTIA Network+", status: "In Progress" },
  { name: "CompTIA Security+", status: "In Progress" },
];

export const experience = [
  {
    role: "IT Technical Services Assistant",
    org: "Loyola University Maryland",
    date: "May 2024 — Present",
    points: [
      "Provision OS and enterprise software across 90% of campus devices, supporting 3,000+ users.",
      "Diagnosed hardware and network issues, reducing average ticket resolution time by 20% through systematic documentation.",
    ],
  },
  {
    role: "Hauber Research Fellow — AI/ML Research",
    org: "Loyola University Maryland",
    date: "May 2025 — Aug 2025",
    points: [
      "Designed and trained CNN models for pothole detection, achieving 92% accuracy on a 5,000-image labeled dataset.",
      "Built an end-to-end ML pipeline in Python, TensorFlow, and Roboflow covering ingestion, training, and evaluation.",
    ],
  },
  {
    role: "Technical Coordinator",
    org: "Carroll County Government",
    date: "Jun 2023 — May 2024",
    points: [
      "Architected a Power Apps solution automating temperature-tracking workflows, improving team efficiency by 40%.",
      "Optimized SharePoint and Excel data systems, eliminating redundant entry across 3 departments.",
    ],
  },
  {
    role: "Information Technology Intern",
    org: "Carroll County Government",
    date: "Jun 2023 — Aug 2023",
    points: [
      "Developed a Power Apps data-tracking application serving 20+ daily active users, replacing manual spreadsheets.",
      "Launched a SharePoint intranet site, reducing document retrieval time by 35% for 50+ employees.",
    ],
  },
];

export const leadership = [
  {
    role: "Co-President, ACM & Cybersecurity Club",
    date: "Aug 2024 — Present",
    points: [
      "Lead a 50+ member organization; organize 10+ workshops, hackathons, and networking events per semester.",
      "Grew club membership 30% year-over-year through sponsorships and faculty partnerships.",
    ],
  },
  {
    role: "Vice President, Robotics Club",
    date: "Aug 2024 — Present",
    points: [
      "Coordinate cross-functional project teams and external STEM outreach partnerships.",
    ],
  },
];

// TODO — swap `github` and `live` for your real repository and deployment
// links before you deploy. Leave `live` blank ("") to hide that button.
export const projects = [
  {
    title: "Pothole Detection System",
    tag: "Machine Learning",
    accent: "signal",
    description:
      "A CNN-based computer vision system that flags potholes in roadway imagery, trained on a 5,000-image labeled dataset as part of a Hauber Research Fellowship. Preprocessing work in OpenCV and Roboflow cut training time by 25%, and the results were written up for peer-reviewed publication.",
    contribution:
      "Designed the model architecture and training pipeline solo, from data labeling through evaluation (precision, recall, F1).",
    stack: ["Python", "TensorFlow", "OpenCV", "Roboflow", "CNN"],
    metric: "92% detection accuracy",
    github: "https://github.com/davidogunbanjo/pothole-detection",
    live: "",
  },
  {
    title: "Ledger",
    tag: "Full-Stack",
    accent: "beacon",
    description:
      "A full-stack personal finance platform for tracking transactions, visualizing debt payoff timelines, and setting savings goals. A secure REST API handles auth and data, paired with a fast, dashboard-driven React frontend.",
    contribution:
      "Built the entire stack solo: schema design, JWT-authenticated API, and the client dashboard, transactions tracker, and debt payoff visualizations.",
    stack: ["React", "Vite", "Node.js", "Express", "MySQL", "JWT"],
    metric: "Auth · API · MySQL",
    github: "https://github.com/davidogunbanjo/ledger",
    live: "",
  },
  {
    title: "CompTIA Security+ Study Platform",
    tag: "Frontend",
    accent: "signal",
    description:
      "An interactive exam-prep web app covering all five Security+ domains: flip-animated flashcards, per-domain quizzes with rationale, and a full practice-exam engine with persistent progress tracking.",
    contribution:
      "Designed and built the flashcard, quiz, and exam-simulation components, including the flip animations and scoring logic.",
    stack: ["React", "JavaScript", "CSS"],
    metric: "5 exam domains covered",
    github: "https://github.com/davidogunbanjo/security-plus-study",
    live: "",
  },
];

export const skills = {
  Languages: ["Java", "Python", "C", "C++", "SQL", "JavaScript", "HTML", "CSS", "LaTeX"],
  "Frameworks & Libraries": [
    "React",
    "Node.js",
    "Flask",
    "FastAPI",
    "Material-UI",
    "pandas",
    "NumPy",
    "TensorFlow",
  ],
  "Developer Tools & Systems": [
    "Git",
    "Linux",
    "Docker",
    "CI/CD",
    "REST APIs",
    "OOP",
    "Data Structures",
  ],
};

// TODO — create a free form at https://formspree.io and paste your form ID
// below (the part after "f/"). Until then the form falls back to opening
// a pre-filled email in the visitor's mail client.
export const formspreeId = "";
