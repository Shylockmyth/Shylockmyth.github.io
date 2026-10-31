import Link from "next/link";
import { HeroDiagram } from "@/components/HeroDiagram";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { capabilities, site, trackRecord } from "@/lib/site";
import { featuredProjects, projects } from "@/lib/projects";

const tech = [
  "Python",
  "C / C++",
  "Arduino",
  "Multisim",
  "Ultiboard",
  "Proteus",
  "OpenCV",
  "MATLAB",
  "XGBoost",
  "Flask",
  "Next.js",
  "PVGIS",
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
              Electronic Engineering
              <span className="hero__status">DUT · Durban, ZA</span>
            </p>

            <h1 className="hero__title">
              <span>NTUTHUKO</span>
              <span className="outline">MDUNGE</span>
            </h1>

            <p className="hero__lede">
              I am an <strong>electronic engineering student</strong> at DUT. My work runs from
              analogue circuits and PCB builds to embedded firmware, signals, software and a
              solar–wind–battery feasibility study. Broad electronics, built and tested.
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
                <dd className="fact__v">Electronics, broadly</dd>
              </div>
              <div className="fact">
                <dt className="fact__k">Availability</dt>
                <dd className="fact__v">Happy to help with projects</dd>
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
                  <dd>Electronics · signals</dd>
                </div>
                <div className="readout__row">
                  <dt>Toolchain</dt>
                  <dd>C · Python · MATLAB</dd>
                </div>
                <div className="readout__row">
                  <dt>Latest</dt>
                  <dd>SATNAC 2026 winner</dd>
                </div>
                <div className="readout__row">
                  <dt>Status</dt>
                  <dd>
                    <span className="ok">● studying</span>
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
            <Link href="/awards/" className="section-head__more">
              Awards <ArrowRight />
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
          <div className="split-cards reveal">
            <Link href="/awards/" className="split-card">
              <p className="split-card__k">02 / Competitions</p>
              <h2 className="split-card__title">Awards</h2>
              <p className="split-card__text">
                SATNAC 2026 Industry Solutions Challenge winner under the Telkom topic, BRICS 2025
                Bronze for Dr Kiosk, a JCI hackathon second place and an FNB App Academy certificate.
              </p>
              <span className="split-card__cta">
                See the awards <ArrowRight />
              </span>
            </Link>

            <Link href="/running/" className="split-card">
              <p className="split-card__k">03 / Off the bench</p>
              <h2 className="split-card__title">Running</h2>
              <p className="split-card__text">
                Social running and 10 km races: Hollywood Bets, ABSA Run Your City, Ntenga
                Foundation and Garmin. The medals are the same idea as the bench work — show up,
                measure, repeat.
              </p>
              <span className="split-card__cta">
                See the races <ArrowRight />
              </span>
            </Link>
          </div>
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
                Happy to help with a <em>project</em>.
              </h2>
              <p className="cta__text">
                I am still studying, so I am not looking for a role. If you are working on an
                electronics, embedded, signals or software project and want a hand, message me on
                LinkedIn and tell me what you are building and where you are stuck.
              </p>
            </div>
            <div className="cta__actions">
              <Link href="/contact/" className="btn btn--primary">
                Start a conversation <ArrowUpRight />
              </Link>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="cta__mail"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
