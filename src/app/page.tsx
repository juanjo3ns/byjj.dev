import { projects } from "@/data/projects";

const hostOf = (url: string) => new URL(url).host;

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-20 sm:py-28">
      <header className="mb-16">
        <p className="font-mono text-sm text-muted">byjj.dev</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Things built by JJ
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Side projects on maps, simulations, data visualisation and AI. Mostly
          made in Barcelona.
        </p>
        <nav className="mt-6 flex gap-5 text-sm">
          <a className="link" href="https://github.com/juanjo3ns">
            GitHub
          </a>
        </nav>
      </header>

      <section aria-labelledby="projects">
        <h2 id="projects" className="mb-4 font-mono text-sm text-muted">
          Projects
        </h2>
        <ul className="divide-y divide-line border-y border-line">
          {projects.map((p) => (
            <li key={p.url}>
              <a
                href={p.url}
                className="group -mx-3 flex flex-col gap-2 rounded-lg px-3 py-6 transition-colors hover:bg-hover sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="w-12 shrink-0 font-mono text-sm text-muted">
                  {p.year}
                </span>
                <span className="flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-lg font-medium group-hover:underline underline-offset-4">
                      {p.name}
                    </span>
                    {p.note && (
                      <span className="rounded-full border border-line px-2 text-xs text-muted">
                        {p.note}
                      </span>
                    )}
                  </span>
                  <span className="mt-1 block leading-relaxed text-muted">
                    {p.description}
                  </span>
                  <span className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-hover px-2 py-0.5 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="font-mono text-sm text-muted transition-transform group-hover:translate-x-0.5">
                  {hostOf(p.url)} ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 font-mono text-sm text-muted">
        © 2026 byjj.dev
      </footer>
    </main>
  );
}
