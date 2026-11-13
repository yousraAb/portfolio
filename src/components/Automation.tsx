import {
  ArrowRight,
  Code2,
  Database,
  Globe2,
  Link2,
  Network,
  Workflow,
} from "lucide-react";

const flowStages = [
  {
    title: "Connected systems",
    detail: "APIs · WordPress · Salesforce",
    icon: Network,
  },
  {
    title: "Workflow orchestration",
    detail: "n8n · Laravel queues",
    icon: Workflow,
  },
  {
    title: "Automated processes",
    detail: "Synced data · exports",
    icon: Database,
  },
];

const capabilities = [
  {
    title: "Python Automation",
    icon: Code2,
    points: [
      "Automated scripts and data processing",
      "Business process automation",
      "Web crawling and data extraction",
    ],
  },
  {
    title: "Workflow Automation",
    icon: Workflow,
    points: [
      "Workflow orchestration using n8n",
      "Connect services and platforms",
      "Automate repetitive business tasks",
    ],
  },
  {
    title: "API Integrations",
    icon: Link2,
    points: [
      "REST API development and integration",
      "Data synchronization between systems",
      "Salesforce and backend service integrations",
    ],
  },
  {
    title: "Browser Automation & Web Scraping",
    icon: Globe2,
    points: [
      "Selenium browser automation",
      "Automated website interactions",
      "Web scraping and crawling",
    ],
  },
  {
    title: "WordPress Automation & Management",
    icon: Network,
    points: [
      "Automate website management workflows",
      "Centralized management with Wordfence Central and InfiniteWP",
      "Experience with workflows involving more than 1,000 WordPress websites",
    ],
  },
  {
    title: "Backend Process Automation",
    icon: Database,
    points: [
      "Queue workers and background jobs",
      "Asynchronous task processing",
      "Execution tracking and data export pipelines",
    ],
  },
];

const technologies = [
  "Python",
  "n8n",
  "Selenium",
  "REST APIs",
  "PHP",
  "Laravel",
  "Salesforce",
  "WordPress",
  "Wordfence Central",
  "InfiniteWP",
  "PostgreSQL",
];

export default function Automation() {
  return (
    <section
      id="automation"
      aria-labelledby="automation-heading"
      className="scroll-mt-24 bg-gradient-to-b from-[#1b163d] via-[#100b28] to-[#0a0118] px-6 py-24 text-gray-100"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <header>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-300">
              Automation & Integrations
            </p>
            <h2
              id="automation-heading"
              className="mb-5 text-3xl font-bold leading-tight text-white md:text-5xl"
            >
              Automation &amp; Systems Integration
            </h2>
            <p className="mb-4 max-w-2xl text-lg leading-relaxed text-indigo-200">
              Building automation solutions that connect platforms, streamline
              workflows, and reduce repetitive business operations.
            </p>
            <p className="max-w-2xl leading-relaxed text-gray-300">
              I work on backend automation, API integrations, web scraping, and
              workflow orchestration, developing solutions that improve
              operational efficiency and simplify complex processes.
            </p>
          </header>

          <figure
            aria-labelledby="automation-flow-caption"
            className="rounded-xl border border-white/10 bg-[#141026]/70 p-5 sm:p-7"
          >
            <figcaption
              id="automation-flow-caption"
              className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400"
            >
              A connected workflow
            </figcaption>
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              {flowStages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <div key={stage.title} className="contents">
                    <div className="flex min-h-28 items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-fuchsia-300/20 bg-fuchsia-400/10 text-fuchsia-200">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-white">
                          {stage.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-gray-400">
                          {stage.detail}
                        </p>
                      </div>
                    </div>
                    {index < flowStages.length - 1 && (
                      <ArrowRight
                        className="mx-auto rotate-90 text-indigo-300 md:rotate-0"
                        size={18}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </figure>
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-xl font-semibold text-white">
            Areas of expertise
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="rounded-lg border border-white/10 bg-[#141026]/65 p-6 transition-colors hover:border-indigo-300/30"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-indigo-400/10 text-indigo-200">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <h4 className="text-lg font-semibold leading-snug text-white">
                      {capability.title}
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm leading-relaxed text-gray-300">
                    {capability.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-fuchsia-300"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-gray-400">
            Technical stack
          </h3>
          <ul
            aria-label="Automation and integration technologies"
            className="flex flex-wrap gap-2.5"
          >
            {technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-md border border-indigo-300/20 bg-indigo-400/5 px-3 py-2 text-sm text-indigo-100"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}