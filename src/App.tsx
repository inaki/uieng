import { useState } from "react";
import { motion } from "framer-motion";
import { CanvasPlayground } from "./components/CanvasPlayground";
import { Card } from "./components/Card";
import { Navbar, type NavSection, scrollToSection } from "./components/Navbar";
import { Section } from "./components/Section";

const sections: NavSection[] = [
  { id: "hero", label: "Top" },
  { id: "about", label: "About" },
  { id: "experience", label: "Work" },
  { id: "projects", label: "Selected" },
  { id: "playground", label: "Playground" },
  { id: "contact", label: "Contact" },
];

const experiences = [
  {
    title: "Senior UI Engineer — RunLLM",
    subtitle:
      "Building AI-forward UI with React + Mantine and intuitive flows for complex products.",
    metaDate: "Jan 2025 – Present",
    metaPlace: "SF Bay Area",
    points: [
      "Lead UI for AI-driven experiences; collaborate closely with engineering to ship responsive interfaces",
      "Translate advanced AI interactions into approachable, polished UX",
    ],
  },
  {
    title: "Senior Frontend Engineer — Joy (Contract)",
    subtitle:
      "Wedding planning platform across React/TypeScript, GraphQL, and AngularJS.",
    metaDate: "Feb 2022 – Oct 2022",
    metaPlace: "Remote",
    points: [
      "Built features and maintained design system with Storybook and Styled Systems",
      "Streamlined delivery with CircleCI, GitHub Actions, and GraphQL services",
    ],
  },
  {
    title: "Senior Frontend Engineer — Williams-Sonoma (Contract)",
    subtitle:
      "Design system + component library for all brands using Vue + Tailwind.",
    metaDate: "Jul 2021 – Feb 2022",
    metaPlace: "SF Bay Area",
    points: [
      "Built and documented reusable components with TypeScript, Vue, and Tailwind CSS",
      "Partnered with teams to integrate the system via Jenkins and CircleCI pipelines",
    ],
  },
  {
    title: "Senior Frontend Engineer — NextRequest (Contract)",
    subtitle: "Led frontend and design system migration using Vue + Vuex.",
    metaDate: "Jan 2020 – Jul 2021",
    metaPlace: "Remote",
    points: [
      "Maintained npm packages and Bulma-based design system for the platform",
      "Established Storybook, Chromatic, and Cypress to boost quality gates",
    ],
  },
  {
    title: "Senior UI / Frontend Engineer — Afterpay Touch",
    subtitle: "Consumer Growth team for React Native iOS/Android apps.",
    metaDate: "Mar 2019 – Oct 2019",
    metaPlace: "SF Bay Area",
    points: [
      "Built mobile UI with JavaScript, Tachyons CSS, and Redux/Redux Thunk",
      "Contributed to design system workstreams for North America, UK, and Oceania apps",
    ],
  },
  {
    title: "Senior UI/Frontend Engineer — Walmart Labs",
    subtitle: "Internal tools and replenishment systems with React + Redux.",
    metaDate: "Mar 2018 – Nov 2018",
    metaPlace: "SF Bay Area",
    points: [
      "Developed efficiency apps with React, Sass, ElectronJS, and Node",
      "Led UI design/build for internal tooling across teams",
    ],
  },
  {
    title: "Senior UI Engineer — Optimizely",
    subtitle: "Design Team; Optimizely Design System (OUI) in React.",
    metaDate: "Jun 2017 – Mar 2018",
    metaPlace: "SF Bay Area",
    points: [
      "Built React components and pattern library with Storybook and OUI",
      "Partnered with designers on A/B testing product UX and documentation",
    ],
  },
  {
    title: "Senior Frontend/UI Engineer — Gap Inc.",
    subtitle: "Internal tools and product UI; React + Angular 2.",
    metaDate: "Nov 2016 – Jun 2017",
    metaPlace: "SF Bay Area",
    points: [
      "Implemented product UI with React/Angular2 and Sass",
      "Improved developer productivity via internal tooling and Spring CMS integrations",
    ],
  },
  {
    title: "Senior Frontend Engineer — Williams-Sonoma",
    subtitle: "Frontend for six brands across desktop and mobile web.",
    metaDate: "Aug 2016 – Nov 2016",
    metaPlace: "SF Bay Area",
    points: [
      "Enhanced storefront UI performance and responsiveness",
      "Supported rollout of new UI technologies across teams",
    ],
  },
  {
    title: "Fullstack Developer — Autodesk",
    subtitle: "E-commerce updates and dependency migrations with Node/JS.",
    metaDate: "Jan 2016 – Jul 2016",
    metaPlace: "SF Bay Area",
    points: [
      "Modernized codebase with BDD testing; improved frontend UX and payments",
      "Worked across JavaScript, jQuery, Sass, and PayPal integrations",
    ],
  },
  {
    title: "Fullstack JS Developer Fellow — Code for America",
    subtitle: "Civic tech web apps for urban farming initiatives.",
    metaDate: "Jan 2015 – Dec 2015",
    metaPlace: "SF Bay Area",
    points: [
      "Led design, prototyping, and user testing with Flask, AngularJS, and Postgres",
      "Shipped three web apps raising awareness for urban agriculture",
    ],
  },
];

const projects = [
  {
    title: "Palette.fm redesign",
    subtitle:
      "Reimagined the colorization flow with playful UI, saved 2.4s on average task time.",
    url: "https://inaki.github.io/docstree/",
  },
  {
    title: "Motion Lab",
    subtitle:
      "Internal tool using framer-motion + p5.js to prototype micro-movements with designers in minutes.",
  },
  {
    title: "Analog OS Kit",
    subtitle:
      "Retro-inspired desktop UI kit with window chrome, modals, and tactile audio cues.",
  },
];

const skills = [
  "React",
  "TypeScript",
  "Mantine UI",
  "Tailwind",
  "Framer Motion",
  "p5.js",
  "GraphQL",
  "Vue/Vuex",
  "React Native",
  "Design Systems",
  "Storybook",
  "CI/CD",
];

type HireStatus = "for-hire" | "not-hiring";

const Hero = ({
  hireStatus,
  setHireStatus,
}: {
  hireStatus: HireStatus;
  setHireStatus: (s: HireStatus) => void;
}) => (
  <section id="hero" data-testid="section-hero" className="scroll-mt-28">
    <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-14 pt-10 sm:pt-14">
      <div className="relative flex flex-col gap-6 rounded-funky border border-ink/20 bg-white/80 p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
        <motion.button
          onClick={() =>
            setHireStatus(hireStatus === "for-hire" ? "not-hiring" : "for-hire")
          }
          className={`absolute -right-3 top-[-10px] z-10 rounded-full border-2 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] shadow-card transition hover:-translate-y-0.5 whitespace-nowrap ${
            hireStatus === "for-hire"
              ? "border-ink bg-mint text-ink"
              : "border-lemon bg-ink text-lemon"
          }`}
          animate={{
            rotate: hireStatus === "for-hire" ? -8 : 8,
            scale: hireStatus === "for-hire" ? 1.06 : 1.02,
          }}
        >
          {hireStatus === "for-hire" ? "For hire" : "Not for hire"}
        </motion.button>
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-[14px] border-2 border-ink bg-gradient-to-br from-mint via-lemon to-coral shadow-card" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">
              Senior UI Engineer @ RunLLM
            </p>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Imanol Aranzadi
            </h1>
            <p className="max-w-xl text-ink/80">
              I craft AI-forward, reliable interfaces that feel
              handcrafted—bridging design systems with motion-led experiences
              and production-grade engineering.
            </p>
          </div>
        </div>
        <div className="flex flex-nowrap items-center gap-2 sm:gap-3">
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-full border-2 border-ink bg-coral px-4 py-2 text-sm font-semibold text-ink shadow-card transition hover:-translate-y-0.5 whitespace-nowrap"
          >
            Book a call
          </button>

          <a
            className="rounded-full border border-ink bg-ink px-4 py-2 text-sm font-semibold text-lemon shadow-card transition hover:-translate-y-0.5"
            href="https://www.linkedin.com/in/inaki-aranzadi/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-full border border-ink/40 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card transition hover:-translate-y-0.5"
            href="https://github.com/inaki/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-funky border border-ink/15 bg-ink text-lemon shadow-card">
        <div className="absolute inset-0 bg-grid bg-[size:18px_18px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-transparent to-coral/20" />
        <div className="relative flex flex-col gap-6 p-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-lemon px-3 py-1 text-xs font-bold uppercase text-ink">
              <span className="h-2 w-2 rounded-full bg-coral" />
              Retro-funky yet crisp
            </p>
            <p className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
              Interfaces should feel tactile, charming, and trustworthy. I blend
              code, motion, and a dash of nostalgia to make that real.
            </p>
            <p className="text-sm text-lemon/80">
              Optimized for speed, accessibility, and creative exploration.
              Currently at RunLLM; open to select collaborations, system builds,
              and bespoke UI prototypes.
            </p>
          </div>
          <div className="glass inline-flex items-center gap-3 rounded-funky border border-lemon/20 px-4 py-3 text-sm font-semibold text-ink shadow-card">
            <span className="h-3 w-3 animate-pulse rounded-full bg-mint" />
            Currently accepting select projects
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-funky border border-ink/10 bg-white/90 p-4 shadow-card">
        <motion.div
          className="flex gap-3"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, idx) => (
            <span
              key={`${skill}-${idx}`}
              className="whitespace-nowrap rounded-full border border-ink/15 bg-mint/60 px-4 py-2 text-xs font-semibold text-ink"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

function App() {
  const [hireStatus, setHireStatus] = useState<HireStatus>("not-hiring");
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const visibleExperiences = showAllExperiences
    ? experiences
    : experiences.slice(0, 4);

  return (
    <div className="noise">
      <Navbar sections={sections} />
      <main className="pb-16">
        <Hero hireStatus={hireStatus} setHireStatus={setHireStatus} />
        <Section
          id="about"
          badge="About"
          title="I design the rules, then play with them."
        >
          <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-ink/80">
              <p>
                I’m Imanol Aranzadi, a UI engineer crafting digital experiences
                that feel like the best parts of early personal
                computing—colorful, curious, and deeply usable. I pair with
                design and product to turn complex AI-driven ideas into
                production-ready systems with an emphasis on motion,
                accessibility, and maintainability.
              </p>
              <p>
                My toolkit spans React, TypeScript, Mantine, Tailwind, Vue,
                p5.js, and creative coding workflows. I’m happiest when
                prototyping fast, building reliable UI kits, and shipping
                memorable interactions that people love to touch.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Design systems",
                  "Creative prototyping",
                  "Motion standards",
                  "Design → code bridges",
                  "AI UI orchestration",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink/20 bg-white px-3 py-1 text-xs font-semibold text-ink/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3 rounded-funky border border-ink/20 bg-white/90 p-4 shadow-card">
              <div className="flex items-center justify-between rounded-funky border border-ink/10 bg-lemon/70 px-4 py-3 shadow-card">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/80">
                    Years crafting UI
                  </p>
                  <p className="text-2xl font-bold text-ink">10+</p>
                </div>
                <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase text-lemon">
                  Hands-on
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-ink/80">
                <div className="rounded-funky border border-ink/10 bg-mint/60 px-3 py-3 shadow-card">
                  React + TS
                </div>
                <div className="rounded-funky border border-ink/10 bg-aqua/50 px-3 py-3 shadow-card">
                  Framer Motion
                </div>
                <div className="rounded-funky border border-ink/10 bg-coral/50 px-3 py-3 shadow-card">
                  p5.js
                </div>
                <div className="rounded-funky border border-ink/10 bg-lemon/70 px-3 py-3 shadow-card">
                  Design Ops
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="experience"
          badge="Experience"
          title="Where I’ve shipped and led teams."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {visibleExperiences.map((exp) => (
              <Card
                key={exp.title}
                title={exp.title}
                subtitle={exp.subtitle}
                metaLines={{ line1: exp.metaDate, line2: exp.metaPlace }}
              >
                <ul className="mt-2 space-y-1">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-coral" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          {experiences.length > 4 && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setShowAllExperiences(!showAllExperiences)}
                className="rounded-full border-2 border-ink bg-lemon px-4 py-2 text-sm font-semibold text-ink shadow-card transition hover:-translate-y-0.5"
              >
                {showAllExperiences ? "Show less" : "Show more"}
              </button>
            </div>
          )}
        </Section>

        <Section
          id="projects"
          badge="Selected Work"
          title="Recent builds and experiments."
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} title={project.title}>
                <p>{project.subtitle}</p>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ink text-lemon px-3 py-1 text-xs font-semibold transition hover:-translate-y-0.5"
                  >
                    View case study →
                  </a>
                ) : (
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ink text-lemon px-3 py-1 text-xs font-semibold">
                    View case study →
                  </div>
                )}
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="playground"
          badge="Playground"
          title="Digital art ready. p5.js baked in."
        >
          <div className="grid gap-6 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-3 rounded-funky border border-ink/15 bg-white/90 p-4 shadow-card">
              <p className="text-ink/80">
                Need to prototype generative art, motion-driven UI, or ambient
                background loops? The playground ships with p5.js so sketches
                slot right into your product surfaces. Swap in your own sketch
                to explore ideas before production.
              </p>
              <p className="text-ink/80">
                I blend p5 with React and Tailwind to keep everything
                responsive, performant, and accessible. From onboarding flows to
                ambient hero canvases, we can dial the vibe together.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Shader-friendly",
                  "Animation tokens",
                  "Accessible motion",
                  "Live prototyping",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink/20 bg-mint/70 px-3 py-1 text-xs font-semibold text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <CanvasPlayground />
          </div>
        </Section>

        <Section
          id="contact"
          badge="Contact"
          title="Let’s build a playful, reliable UI together."
        >
          <div className="grid gap-6 sm:grid-cols-[1fr_0.9fr]">
            <div className="rounded-funky border border-ink/20 bg-ink text-lemon shadow-card">
              <div className="flex items-center justify-between gap-2 border-b border-lemon/20 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-coral" />
                  <span className="h-3 w-3 rounded-full bg-lemon" />
                  <span className="h-3 w-3 rounded-full bg-mint" />
                </div>
                <p className="font-mono text-xs uppercase tracking-wide text-lemon/80">
                  Retro console
                </p>
              </div>
              <div className="space-y-4 px-5 py-4 text-sm leading-relaxed">
                <p>
                  Available for freelance collaborations, embedded UI
                  engineering, and design system builds.
                </p>
                <p>
                  Email{" "}
                  <a
                    className="underline decoration-wavy decoration-coral"
                    href="mailto:iiaranzadi@gmail.com"
                  >
                    iiaranzadi@gmail.com
                  </a>{" "}
                  or drop a calendar link—happy to jam on sketches, prototypes,
                  or roadmap work.
                </p>
                <p>
                  Find me on{" "}
                  <a
                    className="underline decoration-wavy decoration-mint"
                    href="https://www.linkedin.com/in/inaki-aranzadi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>{" "}
                  or{" "}
                  <a
                    className="underline decoration-wavy decoration-coral"
                    href="https://github.com/inaki/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  for more details, code, and endorsements.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:iiaranzadi@gmail.com?subject=Project%20idea"
                    className="rounded-full bg-lemon px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink shadow-card transition hover:-translate-y-0.5"
                  >
                    Send an email
                  </a>
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="rounded-full border border-lemon/40 px-4 py-2 text-xs font-bold uppercase tracking-wide text-lemon transition hover:-translate-y-0.5"
                  >
                    Back to top
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-3 rounded-funky border border-ink/15 bg-white/90 p-4 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
                    Signals
                  </p>
                  <p className="text-ink font-semibold">
                    What you get working with me
                  </p>
                </div>
                <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase text-lemon">
                  QA'd
                </span>
              </div>
              <ul className="space-y-3 text-sm text-ink/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-coral" />
                  <span>
                    Design system engineering that scales with your product
                    velocity.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-mint" />
                  <span>
                    Motion and interaction specs that are accessible, tested,
                    and documented.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-aqua" />
                  <span>
                    Prototypes shipped fast in React + TypeScript with
                    Tailwind-friendly tokens.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
