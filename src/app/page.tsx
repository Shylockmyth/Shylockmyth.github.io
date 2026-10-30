import Link from "next/link";
import { HeroDiagram } from "@/components/HeroDiagram";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { capabilities, site, trackRecord } from "@/lib/site";
import { featuredProjects, projects } from "@/lib/projects";

const tech = [
  "Python",
  "C / C++",
  "STM32",
  "KiCad",
  "Multisim",
  "YOLO11",
  "OpenCV",
  "Flask",
  "Next.js",
  "SQLite",
  "PVWatts",
  "Weibull",
  "Linux",
  "Git",
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <p className="eyebrow hero__eyebrow">
              Electrical &amp; Computer Engineering
              <span className="hero__status">DUT · Durban, ZA</span>
            </p>

            <h1 className="hero__title">
              <span>NTUTHUKO</span>
              <span className="outline">MDUNGE</span>
            </h1>

            <p className="hero__lede">
              I design <strong>embedded hardware</strong>, <strong>PCB systems</strong> and the
              software that runs on them. My work runs from a 6-layer security board to a 2 MWp
              solar feasibility study, a Mars rover and a camera that thinks in real time.
            </p>

            <div className="hero__actions">
              <Link href="/work/" className="btn btn--primary">
                View selected work <ArrowRight />
              </Link>
              <Link href="/contact/" className="btn">
                Get in touch
              </Link>
            </div>

            <dl className="hero__facts">
              <div className="fact">
                <dt className="fact__k">Studying</dt>
                <dd className="fact__v">BEng Tech · DUT</dd>
              </div>
              <div className="fact">
                <dt className="fact__k">Focus</dt>
                <dd className="fact__v">Embedded + PCB</dd>
              </div>
              <div className="fact">
                <dt className="fact__k">Availability</dt>
                <dd className="fact__v">2027 graduate roles</dd>
              </div>
            </dl>
          </div>

          <div className="readout reveal">
            <div className="readout__bar">
              <span>signal.chain</span>
              <span className="readout__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="readout__body">
              <HeroDiagram />
              <dl className="readout__rows">
                <div className="readout__row">
                  <dt>Focus</dt>
                  <dd>Embedded / hardware</dd>
                </div>
                <div className="readout__row">
                  <dt>Toolchain</dt>
                  <dd>C · Python · TypeScript</dd>
                </div>
                <div className="readout__row">
                  <dt>Current</dt>
                  <dd>Energy model · rover</dd>
                </div>
                <div className="readout__row">
                  <dt>Status</dt>
                  <dd>
                    <span className="ok">● open</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...tech, ...tech].map((item, i) => (
            <span className="ticker__item" key={`${item}-${i}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="section-head__idx">01</span>
            <h2 className="section-head__title">Selected work</h2>
            <span className="section-head__rule" aria-hidden="true" />
            <Link href="/work/" className="section-head__more">
              All {String(projects.length).padStart(2, "0")} projects <ArrowRight />
            </Link>
          </div>

          <div className="work-grid reveal">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="section-head__idx">02</span>
            <h2 className="section-head__title">Capabilities</h2>
            <span className="section-head__rule" aria-hidden="true" />
            <Link href="/about/" className="section-head__more">
              Toolchain <ArrowRight />
            </Link>
          </div>

          <div className="cap-grid reveal">
            {capabilities.map((cap) => (
              <article className="cap" key={cap.index}>
                <p className="cap__num">{cap.index}</p>
                <h3 className="cap__title">{cap.title}</h3>
                <p className="cap__blurb">{cap.blurb}</p>
                <ul className="cap__list">
                  {cap.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="track-record">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="section-head__idx">03</span>
            <h2 className="section-head__title">Track record</h2>
            <span className="section-head__rule" aria-hidden="true" />
            <Link href="/about/" className="section-head__more">
              Full profile <ArrowRight />
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
                Have a system that needs <em>building</em>?
              </h2>
              <p className="cta__text">
                I am looking for graduate roles and projects where hardware and software meet:
                embedded design, PCB work, computer vision, or energy systems that have to add up
                on paper before they add up on site.
              </p>
            </div>
            <div className="cta__actions">
              <Link href="/contact/" className="btn btn--primary">
                Start a conversation <ArrowUpRight />
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
