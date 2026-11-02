import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, DownloadIcon } from "@/components/icons";
import { leadership, site, toolchain, trackRecord } from "@/lib/site";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About",
  description: `Profile of ${site.name}: electronic engineering student at ${site.institution} and SATNAC 2026 Innovator of the Year, working across analogue and embedded electronics, PCB design, software, signals and energy modelling.`,
  alternates: { canonical: "/about/" },
};

const principles = [
  {
    title: "Build it, then measure",
    body: "A circuit is not finished when it simulates. Boards get assembled, waveforms get probed, and the report compares what was predicted with what the bench actually showed.",
  },
  {
    title: "Say what the assumption is",
    body: "Some numbers come from simulation, some from a datasheet, some from an estimate. The write-up says which is which instead of rounding a weak assumption away.",
  },
  {
    title: "Document to hand over",
    body: "A board, a script or a report is only finished when someone else can pick it up: schematics, thresholds, test conditions and the reasoning behind each choice.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="page">
        <div className="wrap">
          <div className="about-grid">
            <div>
              <p className="eyebrow page__eyebrow">03 / Profile</p>
              <h1 className="page__title">Electronics, end to end.</h1>

              <div className="about-copy" style={{ marginTop: 24 }}>
                <p>
                  I am an electronic engineering student at Durban University of Technology,
                  completing my BEng Tech in 2027. My interests are broad: analogue circuits,
                  embedded firmware, PCB layout, signals, software and the engineering analysis that
                  ties a system together.
                </p>
                <p>
                  That range shows up in the work. I have designed and built an analogue IR distance
                  sensor from a 555 timer, an LM358 amplifier and comparator stages. I have laid out
                  and assembled a darkness-activated motion detector in Multisim and Ultiboard. I
                  have written the firmware for a four-quadrant LDR solar tracker, built a live AI
                  camera server, and completed a full feasibility study for a grid-connected
                  solar–wind–battery system at DUT.
                </p>
                <p>
                  I also lead teams. As team leader on Cars4Mars I worked across the power and
                  electronics on a national competition rover, and I led the SignalMyth team whose
                  XGBoost surrogate for LTE coverage won the <strong>SATNAC 2026 Industry
                  Solutions Challenge</strong> under the Telkom topic and was named{" "}
                  <strong>Innovator of the Year</strong> for the best solution. The common thread is
                  not one tool or one language — it is deciding what has to be true for the system
                  to work, and then proving it.
                </p>
                <p>
                  I am open to <strong>vacation work and graduate roles from 2027</strong>. I am also
                  glad to help other students and makers with electronics, embedded or software
                  projects when I have the time. The best way to reach me is LinkedIn.
                </p>
              </div>

              <div className="about-actions">
                <a href={site.cv} className="btn btn--primary" download>
                  Download CV <DownloadIcon />
                </a>
                <Link href="/contact/" className="btn">
                  Contact <ArrowUpRight />
                </Link>
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
                  <dd>BEng Tech, DUT · 2027</dd>
                </div>
                <div className="plate__row">
                  <dt>Discipline</dt>
                  <dd>Electronic Engineering</dd>
                </div>
                <div className="plate__row">
                  <dt>Focus</dt>
                  <dd>Electronics, broadly</dd>
                </div>
                <div className="plate__row">
                  <dt>Recognition</dt>
                  <dd>SATNAC Innovator of the Year</dd>
                </div>
                <div className="plate__row">
                  <dt>Status</dt>
                  <dd style={{ color: "var(--accent)" }}>{site.availabilityShort}</dd>
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
                <p className="stack-group__evidence">
                  <span>Evidence</span>
                  {group.evidence.map((item) => (
                    <Link href={`/work/${item.slug}/`} key={item.slug}>
                      {item.label} <ArrowRight />
                    </Link>
                  ))}
                </p>
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

      <section className="section" id="leadership">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="section-head__idx">03</span>
            <h2 className="section-head__title">Leadership</h2>
            <span className="section-head__rule" aria-hidden="true" />
            <span className="section-head__more" style={{ color: "var(--dim)" }}>
              2025 – 2026
            </span>
          </div>

          <div className="leader-grid reveal">
            <div className="leader-list">
              {leadership.map((row) => (
                <article className="leader" key={`${row.period}-${row.title}`}>
                  <p className="leader__period">{row.period}</p>
                  <h3 className="leader__title">{row.title}</h3>
                  <p className="leader__org">{row.org}</p>
                  <p className="leader__detail">{row.detail}</p>
                </article>
              ))}
            </div>

            <figure className="cert">
              <div className="cert__frame">
                <Image
                  src="/images/leadership/alpine-house-committee.jpg"
                  alt="Certificate from DUT Student Housing and Residence Life presented to Ntuthuko Mdunge in recognition of his contribution to the Alpine Residence House Committee"
                  width={1400}
                  height={1023}
                  sizes="(max-width: 900px) 92vw, 42vw"
                />
              </div>
              <figcaption className="cert__cap">
                <span className="cert__label">Certificate</span>
                Alpine Residence House Committee · DUT Student Housing &amp; Residence Life. Signed
                by the Manager, Student Housing &amp; Residence Life and the Dean of Students.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="section-head__idx">04</span>
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

          <p className="record__foot">
            Programmes and certificates, including the FNB App Academy certificate in Full Stack
            Development, are listed on the{" "}
            <Link href="/awards/#programmes">awards page</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta reveal">
            <div>
              <p className="eyebrow" style={{ marginBottom: 18 }}>
                05 / Contact
              </p>
              <h2 className="cta__title">
                Open to 2027 <em>opportunities</em>.
              </h2>
              <p className="cta__text">
                Vacation work and graduate roles from 2027, or a second pair of eyes on an
                electronics, embedded, signals or software project. Message me on LinkedIn with what
                you are building.
              </p>
            </div>
            <div className="cta__actions">
              <Link href="/contact/" className="btn btn--primary">
                Contact <ArrowUpRight />
              </Link>
              <a href={site.cv} className="btn" download>
                Download CV <DownloadIcon />
              </a>
              <a
                href={site.github}
                className="cta__mail"
                target="_blank"
                rel="noreferrer"
              >
                github.com/{site.githubHandle}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
