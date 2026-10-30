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
      src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1400&q=85",
      alt: "Dog outdoors representing pet licensing",
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
          <p>BSC COMPUTER SCIENCE</p>
          <p className="hero-meta-description">BASED IN EDMONTON, CANADA</p>
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
          <div className="section-label">ABOUT</div>
          <div className="about-portrait"><img src="data:image/jpeg;base64,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EoCZQQEiIAWUFBZRAEiIASOADjgA44AInFQEWcVARJFAUSACjiAOOADigAj3LAA9FLlABI4AL8CwAb6kl7iQAbrjLeP0EgBE4ALZwAcSADiwAhRYAUWAESVBAUSKgKLKgKJlARLACIwAIUMAATGdj7+LADSgdAANVIkigMnqYtfN9TVatU+5itg8prF5IenJr6eB58dQEKVgsWccdAGtg9nNrASfJFMigbFDooyzQExJI51RR8UioswqK6SQzTZERWFkRqyxWdo5xFeZZpzxpHdmIMgm1R0AKOKA4oANUlR50GSizTKohRMusCmJHDUZVNiHINQErBbDYNCMgNMy2qDnIBbMY2ouUgYmNAtyOSIqKjZKisoI2TooKkjrSMt+KKchOs5PROUaGpgGps82PZjLTTeVR935GUeWc69gJynKe7GpGJMbBGKCKCg4sAKZEAIlAAlyktmcwgL9R90mco2UA1ZE+zLSSAC9y0AETgAtFAAQkUgABe42e4AKOADiwAokVARLADigAs4AJEQoJkCAKOADjgA44AKLACiQAUUAHFABxQAHQfArHsABNnABxRUBZxUBRwAUWAHF8ABRxFByRYAcWAFFgBRxFBxZFBRYAUWAHFgBZaABbIsAFY+/iRxgBqQIxCg2o7FYwAY1yMYAef6rHcdS7b+BryjqTIA8QTlFxbXkZALsZpbDOggmTeNo0zqKNhICTaOVjoDaUjL1HB1VG6pGMslHB1xUejjIx1mo4uuKjebPPvqGcnXFQVlZizyORI6SAjJg4bBI4ICiwA3aInjGBGjrKOg6irKNKWyDZpUCGW0UYUkuijAki0gAkToLmgWVZl1xQ9UgNs5Zr04KdKfkIOc5dQccTGgUWRQUMSIApIKSACKiEFAWigAsgAHF0AETmgAUc0AE0ilygAmSACigA4sAIkgAicADEUgA7IuCbVoAADgAkUAFlABxwAcSADigA4oqA4oALKACygA4oALLCg44igo4gDjgAosAG4+52PuABZLcAIFgBx1ABxQAUcgAkcAHFgBxQAWcAHFABxIAKRwAccAFnABZwAcMoABZl5gARiJYiKDVgh2NcABowQRFbFQHbjnuVADkJABhdTi+dPzRrSWtV3Wxy6a6mgxIwo00jy6530KzZQD5pHWVxiK85NUEZEeuViIM8tnVARKCgZYkiga2JI0DigAs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" alt="Portrait of Ethan Proctor" /></div>
          <div className="about-copy">
            <h2 id="about-title">A little about me.</h2>
            <p className="about-intro">I&apos;m Ethan, a software developer based in Edmonton, Alberta, with a BSc in Computer Science.</p>
            <p className="about-statement">I enjoy building websites and applications that solve real problems. Whether it&apos;s a polished interface or a practical tool, I like making things that are straightforward to use and thoughtfully put together.</p>
            <p className="about-outro">I also run <a href={links.astra} target="_blank" rel="noreferrer">Astra Software ↗</a>, where I build custom websites for small businesses.</p>
          </div>
        </div>
      </section>

      <section className="work-section page-gutter" id="work" aria-labelledby="work-title">
        <div className="section-rule" />
        <div className="work-intro">
          <div>
            <span className="section-label">PORTFOLIO</span>
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
          <span className="section-label">CAPABILITIES</span>
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
        <span className="section-label">CONTACT</span>
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
        <div className="project-count">{project.number} </div>
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
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>;
}
function SocialIcon({ name }: { name: "github" | "linkedin" | "email" }) {
  if (name === "github") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.12c-3.1.68-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.69 2.59 1.2 3.22.92.1-.72.39-1.2.71-1.48-2.47-.28-5.06-1.24-5.06-5.49 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.26-2.59 5.2-5.07 5.48.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55C2.7 2 2 2.67 2 3.5v17c0 .83.7 1.5 1.55 1.5h16.9c.86 0 1.55-.67 1.55-1.5v-17c0-.83-.69-1.5-1.55-1.5ZM8 18.75H5.25V9.7H8v9.05ZM6.62 8.46a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm12.13 10.29H16v-4.4c0-1.05-.02-2.4-1.47-2.4-1.47 0-1.7 1.15-1.7 2.32v4.48h-2.75V9.7h2.64v1.24h.04c.37-.7 1.26-1.45 2.6-1.45 2.79 0 3.39 1.83 3.39 4.21v5.05Z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg>;
}
