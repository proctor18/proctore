"use client";

import Image from "next/image";
import { type FormEvent, type ReactNode, useState } from "react";

type Project = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  tech: string[];
  links: {
    label: string;
    href: string;
  }[];
};

type SkillGroup = {
  title: string;
  skills: string[];
};

const links = {
  email: "mailto:ethan@proctore.com",
  github: "https://github.com/proctor18",
  linkedin: "https://www.linkedin.com/in/ethan-proctor-024ab4251/"
};

const projects: Project[] = [
  {
    title: "Climate Data Visualization Capstone",
    description:
      "Interactive climate charts for temperature, CO2, ozone, and renewable energy data.",
    image: {
      src: "/projects/climate-data-visualization/climate-data-app-image.png",
      alt: "Climate Data Visualization app screenshot",
      width: 1397,
      height: 1413
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Data Visualization"],
    links: [
      { label: "GitHub", href: "https://github.com/proctor18/climate-data-visualization" },
      { label: "Live Demo", href: "https://climate-data-visualization-ten.vercel.app/" }
    ]
  },
  {
    title: "Tutor Scheduling System",
    description:
      "Mobile scheduling app for tutor availability, student sessions, and bookings.",
    image: {
      src: "/projects/tutor-scheduling/tutor-app-image.png",
      alt: "Tutor Scheduling mobile app screenshot",
      width: 920,
      height: 1408
    },
    tech: ["React Native", "Expo", "Supabase", "TypeScript"],
    links: [
      { label: "GitHub", href: "https://github.com/proctor18/Lucidity" }
    ]
  },
  {
    title: "Textbook Marketplace",
    description:
      "Campus textbook listings with authentication, filters, and Supabase-backed data.",
    image: {
      src: "/projects/textbook-marketplace/textbook-marketplace-app-image.png",
      alt: "Textbook Marketplace app screenshot",
      width: 1860,
      height: 1662
    },
    tech: ["React", "Supabase", "Database Design", "Authentication", "REST API"],
    links: [
      { label: "GitHub", href: "https://github.com/proctor18/textbook-marketplace" },
      { label: "Live Demo", href: "https://textbook-marketplace-tau.vercel.app/" }
    ]
  },
  {
    title: "Edmonton Pet License Tracker",
    description:
      "JavaFX desktop app for exploring Edmonton pet license data from CSV files.",
    image: {
      src: "/projects/pet-license/pet-license-app-image.png",
      alt: "Edmonton Pet License Tracker app screenshot",
      width: 1562,
      height: 946
    },
    tech: ["Java", "JavaFX", "FXML", "Maven", "CSV Data"],
    links: [
      { label: "GitHub", href: "https://github.com/proctor18/petLicense" }
    ]
  }
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Supabase", "Firebase", "MongoDB", "PostgreSQL", "REST APIs"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "Google Workspace", "Microsoft Office"]
  },
  {
    title: "Business",
    skills: [
      "Sales",
      "Client Communication",
      "CRM Systems",
      "Bookkeeping & Invoicing",
      "Marketing",
      "Graphic Design",
      "Video Editing",
      "Social Media Strategy"
    ]
  }
];

export default function Home() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden">
      <Hero onEmailClick={() => setIsEmailModalOpen(true)} />
      <Projects />
      <Skills />
      <Contact onEmailClick={() => setIsEmailModalOpen(true)} />
      <Footer />
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </main>
  );
}

function Hero({ onEmailClick }: { onEmailClick: () => void }) {
  return (
    <section id="top" className="mx-auto flex min-h-[82svh] w-full max-w-6xl items-center justify-center px-5 py-12 pt-28 text-center md:min-h-[86svh] md:pt-36">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl font-bold text-ink sm:text-6xl">
          Ethan Proctor
        </h1>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
          Edmonton, Canada
        </p>
        <p className="mt-6 text-2xl font-semibold leading-tight text-ink sm:text-3xl">
          Software Developer | BSc Computer Science
        </p>
        <div className="mt-10 grid justify-items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            <EmailButton onClick={onEmailClick} />
            <IconLink href={links.github} label="GitHub" icon="github" />
            <IconLink href={links.linkedin} label="LinkedIn" icon="linkedin" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projectColumns = [
    projects.filter((_, index) => index % 2 === 0),
    projects.filter((_, index) => index % 2 === 1)
  ];

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-5 pb-12 pt-0 text-center md:-mt-8">
      <SectionHeading
        eyebrow="Projects"
      />
      <div className="mt-8 grid items-start gap-5 md:grid-cols-2">
        {projectColumns.map((column, index) => (
          <div key={index} className="grid gap-5">
            {column.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                priority={project.title === "Climate Data Visualization Capstone"}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 text-center">
        <SectionHeading
          eyebrow="Skills"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ onEmailClick }: { onEmailClick: () => void }) {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 pb-10 pt-8 text-center">
      <div className="grid justify-items-center gap-8">
        <SectionHeading eyebrow="Contact" />
        <div className="flex flex-wrap justify-center gap-3">
          <EmailButton onClick={onEmailClick} />
          <IconLink href={links.github} label="GitHub" icon="github" />
          <IconLink href={links.linkedin} label="LinkedIn" icon="linkedin" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 py-8 text-sm text-muted">
      <p>© 2026 Ethan Proctor. Built with Next.js and Tailwind CSS.</p>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
        {eyebrow}
      </p>
      {title ? <h2 className="mt-3 text-3xl font-bold text-ink sm:text-5xl">{title}</h2> : null}
      {description ? <p className="mt-5 text-lg leading-8 text-muted">{description}</p> : null}
    </div>
  );
}

function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,0,0,0.16)]">
      <div className="flex min-h-full flex-col items-center text-center">
        <div className="w-full bg-white px-4 pb-2 pt-4">
          <div className="project-image-frame inline-flex max-w-full">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              priority={priority}
              className="block h-auto max-h-[min(64svh,38rem)] max-w-full object-contain"
            />
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-center px-6 pb-6 pt-4">
        <h3 className="text-xl font-bold text-ink">{project.title}</h3>
        <p className="mt-4 flex-1 leading-7 text-muted">{project.description}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded-md border border-line bg-white px-3 py-1 text-xs font-semibold text-muted">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-ink">
          {project.links.map((link) => (
            <a key={link.label} href={link.href} className="underline decoration-ink decoration-[0.06em] underline-offset-4 transition hover:decoration-[0.08em]">
              {link.label}
            </a>
          ))}
        </div>
        </div>
      </div>
    </article>
  );
}

function SkillGroup({ group }: { group: SkillGroup }) {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-ink">{group.title}</h3>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
        {group.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
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
        className="w-full max-w-lg rounded-2xl bg-white p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.22)] ring-1 ring-black/10"
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

function EmailButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-line bg-white px-4 text-sm font-semibold text-ink transition hover:border-ink hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-white"
      onClick={onClick}
    >
      <Icon name="mail" />
      Email
    </button>
  );
}

function IconLink({
  href,
  label,
  icon
}: {
  href: string;
  label: string;
  icon: "mail" | "github" | "linkedin";
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-line bg-white px-4 text-sm font-semibold text-ink transition hover:border-ink hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-white"
    >
      <Icon name={icon} />
      {label}
    </a>
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

function Button({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-white";
  const styles = {
    primary: "bg-ink text-white hover:bg-neutral-700",
    secondary: "border border-line bg-white text-ink hover:border-ink hover:bg-neutral-100",
    ghost: "text-ink hover:bg-neutral-100"
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}
