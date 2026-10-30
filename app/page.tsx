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
    details: ["Mobile app", "React Native", "Expo", "Supabase"],
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
    details: ["Desktop app", "Java", "JavaFX", "CSV data"],
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
  return (
    <main id="top">
      <section className="hero" aria-labelledby="main-heading">
        <nav className="site-nav page-gutter" aria-label="Main navigation">
          <a className="nav-name" href="#top"><span className="nav-name-rule" /> ETHAN PROCTOR</a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a className="nav-contact" href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-meta page-gutter">
          <p aria-hidden="true" />
          <p>BSC COMPUTER SCIENCE</p>
          <p className="hero-meta-description">BASED IN EDMONTON, CANADA</p>
        </div>

        <div className="hero-title page-gutter">
          <h1 id="main-heading">ETHAN PROCTOR</h1>
          <p>SOFTWARE DEVELOPER</p>
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
          <div className="about-copy">
            <p id="about-title" className="about-editorial">I&apos;M ETHAN, A SOFTWARE DEVELOPER BASED IN EDMONTON WITH A BSC IN COMPUTER SCIENCE. I LIKE BUILDING WEBSITES AND APPS THAT LOOK GOOD, WORK WELL, AND MAKE LIFE A LITTLE EASIER. I ALSO RUN <a href={links.astra} target="_blank" rel="noreferrer">ASTRA SOFTWARE ↗</a>, WHERE I BUILD CUSTOM WEBSITES FOR SMALL BUSINESSES.</p>
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
          <div className="capability"><h3>Frontend</h3><p>React<br />Next.js<br />TypeScript<br />Tailwind CSS<br />HTML &amp; CSS</p></div>
          <div className="capability"><h3>Backend</h3><p>Node.js<br />Supabase<br />PostgreSQL<br />REST APIs<br />Firebase</p></div>
          <div className="capability"><h3>Tools &amp; practice</h3><p>Git &amp; GitHub<br />Vercel<br />UI / UX design<br />Data visualization<br />Digital strategy</p></div>
        </div>
      </section>

      <section className="contact-section page-gutter" id="contact" aria-labelledby="contact-title">
        <div className="section-rule" />
        <span className="section-label">CONTACT</span>
        <div className="contact-main">
          <div>
            <p>HAVE A QUESTION OR PROJECT IN MIND?</p>
            <h2 id="contact-title">LET&apos;S <em>TALK.</em></h2>
          </div>
        </div>
        <ContactForm />
        <div className="contact-email-block"><p className="contact-email-label">PREFER EMAIL?</p><a className="contact-email contact-email-restored" href={links.email}>ethan@proctore.com</a></div>
      </section>

      <footer className="footer page-gutter">
        <a href="#top">ETHAN PROCTOR <span aria-hidden="true">↑</span></a>
        <p>© 2026 ETHAN PROCTOR</p>
        <div><a href={links.github} target="_blank" rel="noreferrer">GITHUB</a><a href={links.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a></div>
      </footer>

    </main>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project-row">
      <div className="project-info">
        <div className="project-count">{project.number} </div>
        <div className="project-text">
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

function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmitStatus("sending");
    setStatusMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") || "").trim(),
          email: String(formData.get("email") || "").trim(),
          subject: "Portfolio Contact",
          message: String(formData.get("message") || "").trim()
        })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong. Please try again.");
      form.reset();
      setSubmitStatus("sent");
      setStatusMessage("Your message was sent. I'll get back to you soon.");
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-fields">
        <label>
          <span>Your name <span className="required">*</span></span>
          <input type="text" name="name" autoComplete="name" placeholder="Your name" required maxLength={120} />
        </label>
        <label>
          <span>Email address <span className="required">*</span></span>
          <input type="email" name="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} />
        </label>
      </div>
      <label className="contact-message">
        <span>What would you like to talk about? <span className="optional">(optional)</span></span>
        <textarea name="message" placeholder="Tell me a little about what you have in mind..." rows={5} />
      </label>
      {statusMessage && <p className={submitStatus === "sent" ? "contact-form-status success" : "contact-form-status error"} role="status">{statusMessage}</p>}
      <div className="contact-form-bottom">
        <button type="submit" disabled={submitStatus === "sending"}>
          {submitStatus === "sending" ? "SENDING..." : "SEND MESSAGE"}
          <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19 19 5M8 5h11v11" /></svg>
        </button>
        <span>NO COMMITMENT. JUST A CONVERSATION.</span>
      </div>
    </form>
  );
}

function SocialIcon({ name }: { name: "github" | "linkedin" | "email" }) {
  if (name === "github") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.12c-3.1.68-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.69 2.59 1.2 3.22.92.1-.72.39-1.2.71-1.48-2.47-.28-5.06-1.24-5.06-5.49 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.26-2.59 5.2-5.07 5.48.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55C2.7 2 2 2.67 2 3.5v17c0 .83.7 1.5 1.55 1.5h16.9c.86 0 1.55-.67 1.55-1.5v-17c0-.83-.69-1.5-1.55-1.5ZM8 18.75H5.25V9.7H8v9.05ZM6.62 8.46a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm12.13 10.29H16v-4.4c0-1.05-.02-2.4-1.47-2.4-1.47 0-1.7 1.15-1.7 2.32v4.48h-2.75V9.7h2.64v1.24h.04c.37-.7 1.26-1.45 2.6-1.45 2.79 0 3.39 1.83 3.39 4.21v5.05Z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg>;
}
