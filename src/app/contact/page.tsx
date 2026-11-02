import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, DownloadIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name}, electronic engineering student at DUT and SATNAC 2026 Innovator of the Year. Open to vacation work and graduate roles from 2027. Based in ${site.location}.`,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <div className="page">
      <div className="wrap">
        <header style={{ marginBottom: "clamp(30px, 4vw, 48px)", maxWidth: "64ch" }}>
          <p className="eyebrow page__eyebrow">04 / Contact</p>
          <h1 className="page__title">Get in touch.</h1>
          <p className="page__lede">
            I am open to <strong>vacation work and graduate roles from 2027</strong>. LinkedIn is
            the one place to reach me — whether you are hiring, or working on an electronics,
            embedded, signals or software project and want a second pair of eyes.
          </p>
        </header>

        <div className="contact-grid">
          <div>
            <div className="mailbox">
              <div className="mailbox__bar">
                <span>Direct line</span>
                <span aria-hidden="true">LINKEDIN / 01</span>
              </div>
              <div className="mailbox__body">
                <p className="mailbox__label">LinkedIn</p>
                <a
                  className="mailbox__address"
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  /in/{site.linkedinHandle}
                </a>
                <div className="mailbox__actions">
                  <a
                    className="copy-btn"
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon /> Message
                  </a>
                  <a
                    className="copy-btn"
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon /> GitHub
                  </a>
                  <a className="copy-btn" href={site.cv} download>
                    <DownloadIcon /> CV
                  </a>
                </div>
              </div>
            </div>

            <dl className="contact-facts">
              <div className="contact-fact">
                <dt>Location</dt>
                <dd>{site.location}</dd>
              </div>
              <div className="contact-fact">
                <dt>LinkedIn</dt>
                <dd>
                  <a
                    className="footer__link"
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ntuthuko Mdunge
                  </a>
                </dd>
              </div>
              <div className="contact-fact">
                <dt>GitHub</dt>
                <dd>
                  <a
                    className="footer__link"
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{site.githubHandle}
                  </a>
                </dd>
              </div>
              <div className="contact-fact">
                <dt>Timezone</dt>
                <dd>SAST · UTC+2</dd>
              </div>
              <div className="contact-fact">
                <dt>Availability</dt>
                <dd style={{ color: "var(--accent)" }}>{site.availability}</dd>
              </div>
              <div className="contact-fact">
                <dt>Best for</dt>
                <dd>Graduate roles · vacation work · project help</dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="panel">
              <p className="panel__title">
                CV <span aria-hidden="true">PDF</span>
              </p>
              <div className="panel__body" style={{ display: "grid", gap: 14 }}>
                <p>
                  One page, no contact details beyond LinkedIn: education, experience, leadership,
                  skills and projects.
                </p>
                <a href={site.cv} className="btn btn--primary" download>
                  Download CV <DownloadIcon />
                </a>
                <p className="panel__note">Ntuthuko-Mdunge-CV.pdf · 1 page</p>
              </div>
            </div>

            <div className="panel" style={{ marginTop: 20 }}>
              <p className="panel__title">
                What helps <span aria-hidden="true">INFO</span>
              </p>
              <div className="panel__body" style={{ display: "grid", gap: 14 }}>
                <p>
                  For a role: the position, the team and the start date. I am completing my BEng
                  Tech in 2027, so vacation work and graduate intakes line up best.
                </p>
                <p>
                  For a project: what it has to do, what you have already built, and where it is
                  failing. A photo of the circuit or the error message is worth more than a
                  paragraph.
                </p>
                <a
                  className="footer__link"
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-flex", gap: 6, alignItems: "center" }}
                >
                  Message me on LinkedIn <ArrowUpRight />
                </a>
              </div>
            </div>

            <div className="panel" style={{ marginTop: 20 }}>
              <p className="panel__title">
                Elsewhere <span aria-hidden="true">03</span>
              </p>
              <div className="panel__body" style={{ display: "grid", gap: 10 }}>
                <a
                  className="footer__link"
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-flex", gap: 6, alignItems: "center" }}
                >
                  <GitHubIcon style={{ width: 12, height: 12 }} /> github.com/{site.githubHandle}
                </a>
                <Link className="footer__link" href="/work/">
                  Project case studies
                </Link>
                <Link className="footer__link" href="/awards/">
                  Awards and competitions
                </Link>
                <Link className="footer__link" href="/about/#leadership">
                  Leadership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
