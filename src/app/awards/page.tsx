import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Awards",
  description: `Competitions and recognition: SATNAC 2026 Industry Solutions Challenge winner under the Telkom topic and Innovator of the Year, BRICS 2025 Bronze and a JCI hackathon second place, plus programmes and certificates.`,
  alternates: { canonical: "/awards/" },
};

type Award = {
  index: string;
  year: string;
  place: string;
  title: string;
  org: string;
  body: string;
  facts: { label: string; value: string }[];
  photos: { src: string; alt: string; width: number; height: number; wide?: boolean }[];
  certificate?: { src: string; alt: string; width: number; height: number };
};

const awards: Award[] = [
  {
    index: "01",
    year: "2026",
    place: "Winner · Innovator of the Year",
    title: "SATNAC Industry Solutions Challenge",
    org: "Telkom topic · SignalMyth",
    body:
      "The challenge asked for a faster way to predict LTE coverage than a seven-to-nine-day ray-tracing run. Our entry, SignalMyth, is an XGBoost surrogate trained on real SRTM terrain and ESA WorldCover clutter for Durban. On a held-out set it reached 2.63 dB RMSE and an R² of 0.958, at roughly 18× the speed of the reference model. It won the Telkom topic and was also named Innovator of the Year, the award given to the best solution in the challenge.",
    facts: [
      { label: "Result", value: "Winner, Telkom topic" },
      { label: "Special award", value: "Innovator of the Year" },
      { label: "Event", value: "SATNAC 2026" },
      { label: "Entry", value: "SignalMyth" },
    ],
    photos: [
      { src: "/images/awards/satnac-1.jpg", alt: "SATNAC 2026 team on stage with the award", width: 1400, height: 933, wide: true },
      { src: "/images/awards/satnac-2.jpg", alt: "SATNAC 2026 Industry Solutions Challenge presentation", width: 1400, height: 933, wide: true },
      { src: "/images/awards/satnac-3.jpg", alt: "SATNAC 2026 team photograph", width: 1400, height: 933, wide: true },
      { src: "/images/awards/satnac-4.jpg", alt: "SATNAC 2026 Innovator of the Year award photograph", width: 1600, height: 1067, wide: true },
      { src: "/images/awards/satnac-5.jpg", alt: "SATNAC 2026 team with the Innovator of the Year award", width: 1600, height: 1067, wide: true },
    ],
    certificate: {
      src: "/images/awards/satnac-certificates.jpg",
      alt: "SATNAC 2026 Innovator of the Year certificate awarded to SignalMyth and Topic Winners certificate awarded to Ntuthuko Mdunge",
      width: 1200,
      height: 1592,
    },
  },
  {
    index: "02",
    year: "2025",
    place: "Bronze",
    title: "BRICS Skills Development & Technology Innovation",
    org: "Technology Innovation Competition · Dr Kiosk",
    body:
      "A bronze prize with the DUT team in the 2025 BRICS Skills Development and Technology Innovation Competition. The entry, Dr Kiosk, is a medical self-service kiosk concept: a walk-up station for basic health checks and guided triage, designed for settings where a queue at a clinic is the first barrier to care.",
    facts: [
      { label: "Result", value: "Bronze" },
      { label: "Event", value: "BRICS 2025" },
      { label: "Entry", value: "Dr Kiosk" },
      { label: "Certificate", value: "I-2025BR022C0003-SA · 28 Aug 2025" },
    ],
    photos: [
      { src: "/images/awards/brics-1.jpg", alt: "BRICS 2025 competition team photograph", width: 1400, height: 1867 },
      { src: "/images/awards/brics-2.jpg", alt: "BRICS 2025 exhibition stand", width: 1400, height: 1050, wide: true },
      { src: "/images/awards/brics-3.jpg", alt: "BRICS 2025 award moment", width: 960, height: 1280 },
    ],
    certificate: {
      src: "/images/awards/brics-certificate.jpg",
      alt: "BRICS 2025 bronze award certificate for Ntuthuko Mdunge",
      width: 1241,
      height: 1754,
    },
  },
  {
    index: "03",
    year: "2025",
    place: "2nd place",
    title: "JCI hackathon",
    org: "Junior Chamber International",
    body:
      "Second place in a team hackathon run by Junior Chamber International. The format was a short build window followed by a live pitch, so the work was as much about scoping a solution that could actually be finished as it was about the code.",
    facts: [
      { label: "Result", value: "Second place" },
      { label: "Format", value: "Team hackathon" },
      { label: "Year", value: "2025" },
      { label: "Output", value: "Working prototype and pitch" },
    ],
    photos: [
      { src: "/images/awards/jci-1.jpg", alt: "JCI hackathon second place certificate presentation", width: 1400, height: 1867 },
      { src: "/images/awards/jci-2.jpg", alt: "JCI hackathon team with the second place award", width: 960, height: 1280 },
    ],
  },
];

const programmes = [
  {
    year: "2025",
    title: "FNB App Academy",
    org: "FNB · IT varsity",
    detail:
      "Certificate in Full Stack Development, 32 credits, covering the application stack from the front end through to data and deployment.",
    certificate: {
      src: "/images/awards/fnb-certificate.jpg",
      alt: "FNB App Academy certificate in Full Stack Development",
      width: 720,
      height: 1029,
    },
  },
];

export default function AwardsPage() {
  return (
    <div className="page">
      <div className="wrap">
        <header style={{ marginBottom: "clamp(32px, 4vw, 52px)", maxWidth: "68ch" }}>
          <p className="eyebrow page__eyebrow">02 / Competitions</p>
          <h1 className="page__title">Awards.</h1>
          <p className="page__lede">
            Competitions, prizes and programmes from the last two years. Each one was a team effort
            with a deadline, and each one taught something the coursework could not.
          </p>
          <div className="page__meta">
            <span>
              <b>03</b> competitions
            </span>
            <span>
              <b>1</b> win · <b>1</b> special award
            </span>
            <span>
              <b>2</b> podium places
            </span>
            <span>
              <b>2026</b> latest
            </span>
          </div>
        </header>

        <div className="award-list">
          {awards.map((award) => (
            <article className="award" key={award.index}>
              <div className="award__head">
                <span className="award__index" aria-hidden="true">
                  {award.index}
                </span>
                <div>
                  <p className="award__place">
                    {award.place} <span>· {award.year}</span>
                  </p>
                  <h2 className="award__title">{award.title}</h2>
                  <p className="award__org">{award.org}</p>
                </div>
              </div>

              <div className="award__body">
                <div>
                  <p className="award__text">{award.body}</p>
                  <dl className="award__facts">
                    {award.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt>{fact.label}</dt>
                        <dd>{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="award__media">
                  {award.photos.map((photo) => (
                    <figure key={photo.src} className={photo.wide ? "wide" : undefined}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        sizes="(max-width: 760px) 100vw, 40vw"
                      />
                    </figure>
                  ))}
                  {award.certificate && (
                    <figure className="award__certificate">
                      <Image
                        src={award.certificate.src}
                        alt={award.certificate.alt}
                        width={award.certificate.width}
                        height={award.certificate.height}
                        sizes="(max-width: 760px) 80vw, 30vw"
                      />
                    </figure>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="programmes" id="programmes" aria-labelledby="programmes-title">
          <div className="section-head reveal">
            <span className="section-head__idx">04</span>
            <h2 className="section-head__title" id="programmes-title">
              Programmes &amp; certificates
            </h2>
            <span className="section-head__rule" aria-hidden="true" />
          </div>

          <div className="programme-grid reveal">
            {programmes.map((programme) => (
              <article className="programme" key={programme.title}>
                <div>
                  <p className="programme__year">{programme.year}</p>
                  <h3 className="programme__title">{programme.title}</h3>
                  <p className="programme__org">{programme.org}</p>
                  <p className="programme__detail">{programme.detail}</p>
                </div>
                <figure className="programme__certificate">
                  <Image
                    src={programme.certificate.src}
                    alt={programme.certificate.alt}
                    width={programme.certificate.width}
                    height={programme.certificate.height}
                    sizes="(max-width: 760px) 70vw, 22vw"
                  />
                </figure>
              </article>
            ))}
          </div>
        </section>

        <div className="cta reveal" style={{ marginTop: "clamp(48px, 6vw, 80px)" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              Keep looking
            </p>
            <h2 className="cta__title">
              The work behind the <em>awards</em>.
            </h2>
            <p className="cta__text">
              SignalMyth, Dr Kiosk and the rest of the projects are written up as case studies, with
              the constraints, the measurements and the parts that did not work.
            </p>
          </div>
          <div className="cta__actions">
            <Link href="/work/" className="btn btn--primary">
              Read the case studies <ArrowRight />
            </Link>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="cta__mail"
            >
              LinkedIn <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
