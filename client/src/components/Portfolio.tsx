import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const email = "isaiasxl21@gmail.com";
const assetBase = import.meta.env.BASE_URL;
const resume = `${assetBase}assets/Isaias-Perez-Startup-FDE-2026-10-04.pdf`;
const portrait = `${assetBase}assets/Senior%20Picture%20Isaias%20Perez.JPG`;

const nav = [
  ["Work", "work"],
  ["Selected projects", "projects"],
  ["Toolbox", "toolbox"],
  ["About", "about"],
] as const;

const work = [
  {
    period: "Sep 2026 — Present",
    role: "Forward Deployment Engineer Intern",
    company: "Sinequa · ChapsVision",
    place: "Remote",
    accent: "Deployment",
    description:
      "Building practical, evidence-grounded enterprise search experiences for presales teams.",
    highlights: [
      "Built a hosted presales POC spanning file ingestion, multimodal conversion, a dedicated search application, and a grounded assistant with isolated prompt and source controls.",
      "Indexed 10 mixed-format files and validated 7 of 7 target search scenarios against original PDFs, spreadsheets, and documents; unsupported questions returned no evidence rather than fabricated answers.",
    ],
  },
  {
    period: "May 2026 — Aug 2026",
    role: "Software Engineering Intern",
    company: "Apple · Apple TV / Services Engineering",
    place: "Seattle, WA",
    accent: "Systems",
    description:
      "Worked on engineering tooling at the intersection of agent recovery, developer experience, and low-level reliability.",
    highlights: [
      "Built event-driven Swift/C developer tooling that cut AI-agent recovery latency by about 85% and reduced manual intervention by about 70%.",
      "Implemented a self-healing Swift recovery command and async-signal-safe C crash sentinel that surfaced SIGABRT and SIGSEGV diagnostics in about one second, down from 45+ seconds.",
    ],
  },
  {
    period: "Jan 2026 — May 2026",
    role: "Co-Founder & Lead Engineer",
    company: "CulinaryOS",
    place: "Boulder, CO",
    accent: "Applied AI",
    description:
      "Led an agentic operational-intelligence platform for restaurant workflows across forecasting, staffing, reservations, and POS data.",
    highlights: [
      "Ran the system in four pilot restaurants and fine-tuned then deployed a model to production for one pilot within 48 hours.",
      "Reduced held-out forecasting error from 37.0% to 14.3% MAPE through leakage-safe temporal validation, site calibration, gradient boosting, and Temporal Fusion Transformer models.",
    ],
  },
  {
    period: "Jul 2025 — May 2026",
    role: "AI Engineer Intern",
    company: "Kroenke Sports & Entertainment",
    place: "Denver, CO",
    accent: "Data systems",
    description:
      "Developed data and machine-learning workflows in a production-minded sports and entertainment environment.",
    highlights: [
      "Built Python, PySpark, Databricks, and Azure ML pipelines across 190K+ logs, translating 232 PCI rows into 188 actionable issues and 169 remediation targets.",
    ],
  },
];

const projects = [
  {
    title: "FlowExec++",
    label: "GPU-accelerated RL execution simulator",
    stack: "C++ · CUDA · PyTorch · Linux",
    copy: "A performance-oriented market simulator with stochastic impact models for replay and reinforcement-learning experiments.",
    result: "10× simulation throughput",
    href: "https://github.com/IP-04/FlowExec-",
    icon: Terminal,
  },
  {
    title: "CoverEngine",
    label: "Forecasting with trustworthy fallbacks",
    stack: "Python · forecasting · evaluation",
    copy: "A public ML showcase centered on leakage-safe multi-horizon forecasting, uncertainty-aware evaluation, and production fallbacks.",
    result: "Public technical showcase",
    href: "https://github.com/IP-04/coverengine-ml-showcase",
    icon: Database,
  },
  {
    title: "CulinaryOS",
    label: "Operational intelligence for restaurants",
    stack: "Python · TypeScript · forecasting",
    copy: "An agentic platform that joined restaurant operations data with forecasting and workflow support during multi-restaurant pilots.",
    result: "4 pilot restaurants",
    href: "https://github.com/IP-04/CulinaryOS",
    icon: Sparkles,
  },
];

const capabilities = [
  ["Systems & performance", "C/C++, CUDA, Swift, concurrency, profiling, crash and fault analysis"],
  ["AI & evaluation", "Python, PyTorch, RAG, agent workflows, evaluation, vector search, forecasting"],
  ["Data & cloud", "SQL, PySpark, Databricks, Azure ML, FastAPI, PostgreSQL, Redis"],
  ["Shipping products", "TypeScript, Docker, Kubernetes, MCP, APIs, retrieval, technical discovery"],
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const navigate = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="wordmark" href="#top" onClick={(event) => { event.preventDefault(); scrollTo("top"); }} aria-label="Back to the top">
          <span className="wordmark-mark">IP</span><span>Isaias Perez</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, id]) => <button key={id} onClick={() => navigate(id)}>{label}</button>)}
          <a className="resume-link" href={resume} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" aria-expanded={open} aria-label="Open navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        {open && <nav className="mobile-nav" aria-label="Mobile navigation">
          {nav.map(([label, id]) => <button key={id} onClick={() => navigate(id)}>{label}</button>)}
          <a href={resume} target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={16} /></a>
        </nav>}
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="orb orb-one" aria-hidden="true" /><div className="orb orb-two" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-intro reveal">
              <p className="eyebrow"><span /> Software engineer · Forward deployment</p>
              <h1 id="hero-title">I turn ambitious AI ideas into <em>reliable systems.</em></h1>
              <p className="hero-copy">I’m Isaias Perez — an engineer who works from data and infrastructure through to user-facing deployment. I build retrieval, evaluation, and high-performance tooling for teams that need their AI to earn trust.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => navigate("work")}>Explore my work <ArrowDownRight size={18} /></button>
                <a className="button button-quiet" href={`mailto:${email}`}>Start a conversation <ArrowUpRight size={18} /></a>
              </div>
              <div className="hero-meta">
                <span><MapPin size={16} /> Boulder, Colorado</span>
                <span><GraduationCap size={16} /> CS ’27, CU Boulder</span>
                <span><CheckCircle2 size={16} /> Available June 2027</span>
              </div>
            </div>
            <aside className="hero-proof reveal-delay" aria-label="Current focus">
              <div className="portrait-wrap"><img src={portrait} alt="Isaias Perez" /></div>
              <div className="proof-card">
                <p className="proof-label">Current focus</p>
                <p>Forward deployment at the boundary of <strong>enterprise search, agent evaluation, and systems engineering.</strong></p>
                <div className="proof-line"><span>01</span><span>Evidence first. Claims second.</span></div>
              </div>
            </aside>
          </div>
          <a className="scroll-cue" href="#work" onClick={(event) => { event.preventDefault(); navigate("work"); }}>Scroll to explore <span /></a>
        </section>

        <section className="signal-bar" aria-label="Core areas">
          <span>Retrieval systems</span><i>✦</i><span>Applied AI</span><i>✦</i><span>Developer tooling</span><i>✦</i><span>High-performance computing</span>
        </section>

        <section id="work" className="section work-section">
          <div className="section-heading"><p className="section-index">01 / Selected work</p><h2>Built close to the problem.</h2><p>I like the work where implementation, technical judgment, and real-world constraints meet.</p></div>
          <div className="work-list">
            {work.map((item, index) => <article className="work-item" key={item.company}>
              <div className="work-number">0{index + 1}</div>
              <div className="work-main"><div className="work-heading"><div><p className="work-accent">{item.accent}</p><h3>{item.role}</h3><p className="company">{item.company}</p></div><div className="work-details"><span>{item.period}</span><span>{item.place}</span></div></div><p className="work-description">{item.description}</p><ul>{item.highlights.map((highlight) => <li key={highlight}><ChevronRight size={16} />{highlight}</li>)}</ul></div>
            </article>)}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading split"><div><p className="section-index">02 / Projects</p><h2>Technical depth, made visible.</h2></div><p>Selected work across simulation, forecasting, and applied operational intelligence.</p></div>
          <div className="project-grid">
            {projects.map((project) => { const Icon = project.icon; return <a className="project-card" key={project.title} href={project.href} target="_blank" rel="noreferrer"><div className="project-top"><span className="project-icon"><Icon size={22} /></span><ExternalLink size={18} /></div><p className="project-label">{project.label}</p><h3>{project.title}</h3><p className="project-copy">{project.copy}</p><div className="project-bottom"><span>{project.result}</span><span>{project.stack}</span></div></a>; })}
          </div>
          <a className="text-link" href="https://github.com/IP-04" target="_blank" rel="noreferrer">More work on GitHub <ArrowUpRight size={17} /></a>
        </section>

        <section id="toolbox" className="section toolbox-section">
          <div className="section-heading"><p className="section-index">03 / Toolbox</p><h2>A systems-minded stack.</h2><p>I choose tools for the constraint in front of me, from a C crash sentinel to a retrieval evaluation harness.</p></div>
          <div className="capability-grid">{capabilities.map(([title, items], index) => <article className="capability" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{items}</p></article>)}</div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-card"><div><p className="section-index">04 / About</p><h2>Engineering with a bias for proof.</h2></div><div className="about-copy"><p>I’m a computer science student at the University of Colorado Boulder, graduating in May 2027, with minors in Applied Mathematics and Business. I’m bilingual in English and Spanish.</p><p>Across Apple TV engineering, enterprise-search POCs, restaurant operations, and ML research, I’ve learned that a useful system is more than an impressive demo: it should make its evidence, boundaries, and next action clear.</p><a className="text-link" href={resume} target="_blank" rel="noreferrer">Read my full résumé <ArrowUpRight size={17} /></a></div></div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-inner"><p className="section-index">05 / Contact</p><h2>Let’s build something <em>useful.</em></h2><p>Open to early-career software, forward deployment, and applied AI opportunities beginning June 2027.</p><a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight /></a><div className="social-links"><a href="https://www.linkedin.com/in/isaias-perez21" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a><a href="https://github.com/IP-04" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href={`mailto:${email}`}><Mail size={18} /> Email</a></div></div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} Isaias Perez</span><span>Designed and built with intent.</span><a href="#top" onClick={(event) => { event.preventDefault(); scrollTo("top"); }}>Back to top ↑</a></footer>
    </div>
  );
}
