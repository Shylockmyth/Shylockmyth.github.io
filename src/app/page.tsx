import Link from "next/link";
import { HeroDiagram } from "@/components/HeroDiagram";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight, ArrowUpRight, DownloadIcon } from "@/components/icons";
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
              I am an <strong>electronic engineering student</strong> at DUT, expected to graduate
              in 2027. My work runs from analogue circuits and PCB builds to embedded firmware,
              signals, software and a solar–wind–battery feasibility study. In 2026 my team&apos;s
              LTE coverage model won <strong>SATNAC Innovator of the Year</strong>.
            </p>

            <div className="hero__actions">
              <Link href="/work/" className="btn btn--primary">
                View selected work <ArrowRight />
              </Link>
              <a href={site.cv} className="btn" download>
                Download CV <DownloadIcon />
              </a>
              <Link href="/contact/" className="btn">
                Get in touch
              </Link>
            </div>

            <p className="hero__note">
              <span className="status__dot" aria-hidden="true" />
              {site.availability}
            </p>

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
                <dt className="fact__k">Recognition</dt>
                <dd className="fact__v">SATNAC 2026 winner</dd>
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
                  <dd>SATNAC · Innovator of the Year</dd>
                </div>
                <div className="readout__row">
                  <dt>Status</dt>
                  <dd>
                    <span className="ok">● studying · 2027</span>
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
              See all {projects.length} projects <ArrowRight />
            </Link>
          </div>

          <div className="work-grid reveal">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <p className="work-foot">
            Three selected case studies.{" "}
            <Link href="/work/">All {projects.length} projects are on the work index</Link>, with
            the full build for each.
          </p>
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
                    <li key={item.label}>
                      <span>{item.label}</span>
                      {item.slug && item.project ? (
                        <Link href={`/work/${item.slug}/`} className="cap__proof">
                          {item.project} <ArrowRight />
                        </Link>
                      ) : (
                        <span className="cap__proof cap__proof--none">{item.project ?? "site build"}</span>
                      )}
                    </li>
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
          <div className="next-links reveal">
            <div className="next-links__main">
              <p className="eyebrow">Awards &amp; recognition</p>
              <p className="next-links__text">
                SATNAC 2026 Industry Solutions Challenge winner under the Telkom topic, named
                Innovator of the Year; BRICS 2025 Bronze for Dr Kiosk; a JCI hackathon second place.
              </p>
              <Link href="/awards/" className="btn btn--primary">
                See the awards <ArrowRight />
              </Link>
            </div>
            <p className="next-links__aside">
              Off the bench:{" "}
              <Link href="/running/">
                10 km races and medals <ArrowUpRight />
              </Link>
            </p>
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
                Open to 2027 <em>opportunities</em>.
              </h2>
              <p className="cta__text">
                I am completing my BEng Tech in 2027 and am open to vacation work and graduate
                roles. If you are hiring, or working on an electronics, embedded, signals or
                software project and want a hand, message me on LinkedIn with what you are building.
              </p>
            </div>
            <div className="cta__actions">
              <Link href="/contact/" className="btn btn--primary">
                Start a conversation <ArrowUpRight />
              </Link>
              <a
                href={site.cv}
                className="btn"
                download
              >
                Download CV <DownloadIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
