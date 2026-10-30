import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { site, toolchain, trackRecord } from "@/lib/site";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About",
  description: `Profile of ${site.name}: ${site.discipline} at ${site.institution}, working across embedded systems, PCB design, computer vision and energy modelling.`,
  alternates: { canonical: "/about/" },
};

const principles = [
  {
    title: "Constraint first",
    body: "Every project starts with the limit that cannot move: 100 W of input power, a 60% penalty for a dropped video feed, a 4 mil minimum trace, a payback period. The design is the response to that limit.",
  },
  {
    title: "Measure, then claim",
    body: "Numbers in these case studies come from simulations, datasheets or runs on the bench. Where an assumption is weak, the write-up says so instead of rounding it away.",
  },
  {
    title: "Document to hand over",
    body: "A board, a script or a report is only finished when someone else can pick it up: net classes, detection thresholds, tariff tables and the reasoning behind each choice.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="page">
        <div className="wrap">
          <div className="about-grid">
            <div>
              <p className="eyebrow page__eyebrow">02 / Profile</p>
              <h1 className="page__title">Engineering, end to end.</h1>

              <div className="about-copy" style={{ marginTop: 24 }}>
                <p>
                  I am an Electrical and Computer Engineering student at Durban University of
                  Technology, working across the boundary where hardware and software have to agree
                  with each other.
                </p>
                <p>
                  That boundary is where most of my work sits. I have laid out a six-layer board
                  for a handheld security platform, written the firmware and server that turn a
                  webcam into a live object-detection feed, and modelled a 2 MWp hybrid renewable
                  system down to its cost per kilowatt-hour. The common thread is not a particular
                  language or tool, it is deciding what has to be true for the thing to work, and
                  then proving it.
                </p>
                <p>
                  On the rover team, a dropped video feed costs 60% of the mission score, so the
                  wireless link became a first-class subsystem instead of an accessory. In the
                  energy study, the wind resource for Durban has no published Weibull fit, so the
                  assumption was extrapolated, stated plainly, and tested for sensitivity. Those
                  two habits, treating constraints as requirements and documenting weak assumptions,
                  are the ones I want to carry into professional engineering work.
                </p>
                <p>
                  I am looking for graduate roles where I can keep building complete systems:
                  embedded design, PCB development, computer vision, or the engineering analysis
                  that sits around them.
                </p>
              </div>
            </div>

            <aside className="plate" aria-label="Profile summary">
              <div className="plate__mono" aria-hidden="true">
                NM
              </div>
              <dl className="plate__rows">
                <div className="plate__row">
                  <dt>Based</dt>
                  <dd>Durban, ZA</dd>
                </div>
                <div className="plate__row">
                  <dt>Studying</dt>
                  <dd>BEng Tech, DUT</dd>
                </div>
                <div className="plate__row">
                  <dt>Discipline</dt>
                  <dd>Electrical &amp; Computer</dd>
                </div>
                <div className="plate__row">
                  <dt>Focus</dt>
                  <dd>Embedded / PCB</dd>
                </div>
                <div className="plate__row">
                  <dt>Status</dt>
                  <dd style={{ color: "var(--accent)" }}>Open to 2027</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="section-head__idx">01</span>
            <h2 className="section-head__title">Toolchain</h2>
            <span className="section-head__rule" aria-hidden="true" />
            <span className="section-head__more" style={{ color: "var(--dim)" }}>
              {toolchain.reduce((n, group) => n + group.items.length, 0)} tools
            </span>
          </div>

          <div className="stack-groups reveal">
            {toolchain.map((group) => (
              <div className="stack-group" key={group.group}>
                <h3>{group.group}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="stack-group">
              <h3>Working style</h3>
              <ul>
                <li>Constraint-driven design</li>
                <li>Bench measurement</li>
                <li>Version control on everything</li>
                <li>Written handover notes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="section-head__idx">02</span>
            <h2 className="section-head__title">How I work</h2>
            <span className="section-head__rule" aria-hidden="true" />
          </div>

          <div className="principles reveal">
            {principles.map((principle) => (
              <article className="principle" key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="section-head__idx">03</span>
            <h2 className="section-head__title">Track record</h2>
            <span className="section-head__rule" aria-hidden="true" />
            <Link href="/work/" className="section-head__more">
              {String(projects.length).padStart(2, "0")} projects <ArrowRight />
            </Link>
          </div>

          <div className="record reveal">
            {trackRecord.map((row) => (
              <div className="record__row" key={`${row.period}-${row.title}`}>
                <p className="record__period">{row.period}</p>
                <div>
                  <p className="record__title">{row.title}</p>
                  <p className="record__org">{row.org}</p>
                </div>
                <p className="record__detail">{row.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta reveal">
            <div>
              <p className="eyebrow" style={{ marginBottom: 18 }}>
                04 / Contact
              </p>
              <h2 className="cta__title">
                Let&apos;s talk about the <em>next</em> build.
              </h2>
              <p className="cta__text">
                Graduate applications, collaboration on a hardware or software project, or a
                technical question about anything in the case studies.
              </p>
            </div>
            <div className="cta__actions">
              <Link href="/contact/" className="btn btn--primary">
                Contact <ArrowUpRight />
              </Link>
              <a href={`mailto:${site.email}`} className="cta__mail">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
