"use client";

import { type FormEvent, useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  links: { label: string; href: string }[];
  image?: { src: string; alt: string; width: number; height: number };
};

const links = {
  email: "mailto:ethan@proctore.com",
  github: "https://github.com/proctor18",
  linkedin: "https://www.linkedin.com/in/ethan-proctor-024ab4251/",
  astra: "https://astrasoftware.ca/"
};

const projects: Project[] = [
  {
    number: "01",
    title: "Climate Data Visualization",
    category: "Capstone / Web application",
    description: "An interactive way to explore climate data, from temperature trends to emissions and renewable energy.",
    details: ["Next.js", "TypeScript", "Data visualization"],
    links: [
      { label: "Live project", href: "https://climate-data-visualization-ten.vercel.app/" },
      { label: "Source code", href: "https://github.com/proctor18/climate-data-visualization" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85",
      alt: "Mountain landscape representing climate and environmental data",
      width: 1397,
      height: 1413
    }
  },
  {
    number: "02",
    title: "Tutor Scheduling System",
    category: "Mobile application / Scheduling",
    description: "A mobile-first scheduling experience for organizing tutor availability and managing student sessions.",
    details: ["React Native", "Expo", "Supabase"],
    links: [{ label: "Source code", href: "https://github.com/proctor18/Lucidity" }],
    image: {
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=85",
      alt: "Study materials and workspace representing tutoring",
      width: 920,
      height: 1408
    }
  },
  {
    number: "03",
    title: "Textbook Marketplace",
    category: "Web application / Marketplace",
    description: "A campus marketplace with searchable textbook listings, account access, and a connected database.",
    details: ["React", "Supabase", "Authentication"],
    links: [
      { label: "Live project", href: "https://textbook-marketplace-tau.vercel.app/" },
      { label: "Source code", href: "https://github.com/proctor18/textbook-marketplace" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1400&q=85",
      alt: "Rows of books in a library representing textbook exchange",
      width: 1860,
      height: 1662
    }
  },
  {
    number: "04",
    title: "Edmonton Pet License Tracker",
    category: "Desktop application / Open data",
    description: "A Java desktop tool for exploring and understanding Edmonton pet licensing data.",
    details: ["Java", "JavaFX", "CSV data"],
    links: [{ label: "Source code", href: "https://github.com/proctor18/petLicense" }],
    image: {
      src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=1400&q=85",
      alt: "Golden retriever portrait representing pet licensing",
      width: 1562,
      height: 946
    }
  }
];

export default function Home() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <main id="top">
      <section className="hero" aria-labelledby="main-heading">
        <nav className="site-nav page-gutter" aria-label="Main navigation">
          <a className="nav-name" href="#top"><span className="nav-name-rule" /> ETHAN PROCTOR</a>
          <a className="nav-mark" href="#top" aria-label="Back to top"><HeartIcon /></a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <button className="nav-contact" type="button" onClick={() => setIsEmailModalOpen(true)}>Email</button>
          </div>
        </nav>

        <div className="hero-meta page-gutter">
          <p aria-hidden="true" />
          <p>BASED IN EDMONTON, CANADA</p>
          <p className="hero-meta-description">BSc COMPUTER SCIENCE</p>
        </div>

        <div className="hero-title page-gutter">
          <h1 id="main-heading">ETHAN PROCTOR</h1>
          <p>.SOFTWARE DEVELOPER.</p>
        </div>

        <div className="hero-end page-gutter">
          <p className="hero-end-note">PERSONAL PORTFOLIO / 2026</p>
          <div className="hero-social">
            <a href={links.github} target="_blank" rel="noreferrer"><SocialIcon name="github" /> GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer"><SocialIcon name="linkedin" /> LinkedIn</a>
            <a href={links.email}><SocialIcon name="email" /> Email</a>
          </div>
          <a href="#about" className="hero-scroll">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="about-section page-gutter" id="about" aria-labelledby="about-title">
        <div className="section-rule" />
        <div className="about-grid">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-portrait"><img src="/portrait-ethan.png" alt="Portrait of Ethan Proctor" /></div>
          <div className="about-copy">
            <h2 id="about-title">A little about me.</h2>
            <p>I&apos;m Ethan, a software developer based in Edmonton, Alberta, with a BSc in Computer Science.</p>
            <p>I work across web design, application development, and data-driven tools. I&apos;m interested in the details that make digital products feel simple, useful, and considered.</p>
            <p>I also run <a href={links.astra} target="_blank" rel="noreferrer">Astra Software ↗</a>, where I build custom websites for small businesses.</p>
          </div>
        </div>
      </section>

      <section className="work-section page-gutter" id="work" aria-labelledby="work-title">
        <div className="section-rule" />
        <div className="work-intro">
          <div>
            <span className="section-label">02 / PORTFOLIO</span>
            <h2 id="work-title">SELECTED<br /><em>WORK.</em></h2>
          </div>
          <p>A collection of websites and software projects, from customer-facing experiences to practical tools.</p>
        </div>
        <div className="projects">
          {projects.map((project) => <ProjectRow project={project} key={project.number} />)}
        </div>
      </section>

      <section className="capabilities-section page-gutter" id="capabilities" aria-labelledby="capabilities-title">
        <div className="section-rule" />
        <div className="capabilities-heading">
          <span className="section-label">03 / CAPABILITIES</span>
          <h2 id="capabilities-title">WHAT I WORK WITH.</h2>
        </div>
        <div className="capability-grid">
          <div className="capability"><span>01 /</span><h3>Frontend</h3><p>React<br />Next.js<br />TypeScript<br />Tailwind CSS<br />HTML &amp; CSS</p></div>
          <div className="capability"><span>02 /</span><h3>Backend</h3><p>Node.js<br />Supabase<br />PostgreSQL<br />REST APIs<br />Firebase</p></div>
          <div className="capability"><span>03 /</span><h3>Applications</h3><p>React Native<br />Expo<br />Java<br />JavaFX<br />Data visualization</p></div>
          <div className="capability"><span>04 /</span><h3>Tools &amp; practice</h3><p>Git &amp; GitHub<br />Vercel<br />UI / UX design<br />Client communication<br />Digital strategy</p></div>
        </div>
      </section>

      <section className="contact-section page-gutter" id="contact" aria-labelledby="contact-title">
        <div className="section-rule" />
        <span className="section-label">04 / CONTACT</span>
        <div className="contact-main">
          <div>
            <p>HAVE A PROJECT IN MIND?</p>
            <h2 id="contact-title">LET&apos;S <em>TALK.</em></h2>
          </div>
          <button type="button" className="contact-action" onClick={() => setIsEmailModalOpen(true)}>
            <span className="contact-action-label">GET IN TOUCH</span><span className="contact-action-arrow" aria-hidden="true">↗</span>
          </button>
        </div>
        <a className="contact-email" href={links.email}>ethan@proctore.com</a>
      </section>

      <footer className="footer page-gutter">
        <a href="#top">ETHAN PROCTOR <span aria-hidden="true">↑</span></a>
        <p>© 2026 ETHAN PROCTOR</p>
        <div><a href={links.github} target="_blank" rel="noreferrer">GITHUB</a><a href={links.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a></div>
      </footer>

      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </main>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project-row">
      <div className="project-info">
        <div className="project-count">{project.number} <span>/ 05</span></div>
        <div className="project-text">
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-details">{project.details.join(" / ")}</div>
          <div className="project-links">
            {project.links.map(link => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>
            ))}
          </div>
        </div>
      </div>
      <div className="project-visual">
        {project.image ? (
          <div className="project-image-wrap">
            <img src={project.image.src} alt={project.image.alt} className="project-image" loading="lazy" />
          </div>
        ) : null}
      </div>
    </article>
  );
}

function EmailModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  if (!isOpen) {
    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const senderEmail = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setSubmitStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email: senderEmail,
          subject,
          message
        })
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      form.reset();
      setSubmitStatus("sent");
      setStatusMessage("Sent. Thanks for reaching out.");
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  function handleClose() {
    setSubmitStatus("idle");
    setStatusMessage("");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/40 px-4 py-6 backdrop-blur-sm"
      role="presentation"
      onMouseDown={handleClose}
    >
      <section
        aria-labelledby="email-modal-title"
        aria-modal="true"
        className="editorial-modal w-full max-w-lg rounded-2xl bg-white p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.22)] ring-1 ring-black/10"
        role="dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="email-modal-title" className="text-2xl font-bold text-ink">
              Email Ethan
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Send a quick note directly from the site.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close email form"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-white text-ink transition hover:border-ink hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
            onClick={handleClose}
          >
            <Icon name="close" />
          </button>
        </div>
        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Name
            <input
              name="name"
              className="min-h-11 rounded-xl border border-line bg-white px-3 text-base font-normal text-ink outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/20"
              autoComplete="name"
              autoFocus
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Your email
            <input
              name="email"
              type="email"
              className="min-h-11 rounded-xl border border-line bg-white px-3 text-base font-normal text-ink outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/20"
              autoComplete="email"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Subject
            <input
              name="subject"
              className="min-h-11 rounded-xl border border-line bg-white px-3 text-base font-normal text-ink outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/20"
              defaultValue="Portfolio Contact"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Message
            <textarea
              name="message"
              className="min-h-32 resize-y rounded-xl border border-line bg-white px-3 py-3 text-base font-normal leading-6 text-ink outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/20"
              required
            />
          </label>
          {statusMessage ? (
            <p
              className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                submitStatus === "sent"
                  ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
                  : "bg-red-50 text-red-800 ring-1 ring-red-200"
              }`}
            >
              {statusMessage}
            </p>
          ) : null}
          <div className="mt-2 flex flex-wrap justify-end gap-3">
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-line bg-white px-5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-ink px-5 text-sm font-semibold text-white transition hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-neutral-400"
              disabled={submitStatus === "sending"}
            >
              {submitStatus === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}


function Icon({ name }: { name: "close" | "mail" | "github" | "linkedin" }) {
  if (name === "close") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 5.85c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.75H3.76V20h3.18V8.75ZM5.35 4a1.84 1.84 0 1 0 0 3.68 1.84 1.84 0 0 0 0-3.68ZM20.25 13.84c0-3.02-1.61-4.42-3.76-4.42a3.24 3.24 0 0 0-2.93 1.61h-.04V8.75h-3.04V20h3.17v-5.56c0-1.47.28-2.89 2.1-2.89 1.79 0 1.81 1.68 1.81 2.98V20h3.17l-.48-6.16Z" />
    </svg>
  );
}


function HeartIcon() {
  return <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>;
}
function SocialIcon({ name }: { name: "github" | "linkedin" | "email" }) {
  if (name === "github") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.12c-3.1.68-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.69 2.59 1.2 3.22.92.1-.72.39-1.2.71-1.48-2.47-.28-5.06-1.24-5.06-5.49 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.26-2.59 5.2-5.07 5.48.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55C2.7 2 2 2.67 2 3.5v17c0 .83.7 1.5 1.55 1.5h16.9c.86 0 1.55-.67 1.55-1.5v-17c0-.83-.69-1.5-1.55-1.5ZM8 18.75H5.25V9.7H8v9.05ZM6.62 8.46a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm12.13 10.29H16v-4.4c0-1.05-.02-2.4-1.47-2.4-1.47 0-1.7 1.15-1.7 2.32v4.48h-2.75V9.7h2.64v1.24h.04c.37-.7 1.26-1.45 2.6-1.45 2.79 0 3.39 1.83 3.39 4.21v5.05Z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg>;
}
