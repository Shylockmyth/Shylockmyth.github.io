import type { Metadata } from "next";
import { ArrowUpRight, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} on LinkedIn for project help, collaborations or technical questions. Based in ${site.location}.`,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <div className="page">
      <div className="wrap">
        <header style={{ marginBottom: "clamp(30px, 4vw, 48px)", maxWidth: "62ch" }}>
          <p className="eyebrow page__eyebrow">05 / Contact</p>
          <h1 className="page__title">Get in touch.</h1>
          <p className="page__lede">
            LinkedIn is the one place to reach me. Tell me what you are building and the constraint
            you are stuck on, and I will reply if I can help.
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
                <dd>Project help · electronics · software</dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="panel">
              <p className="panel__title">
                What helps <span aria-hidden="true">INFO</span>
              </p>
              <div className="panel__body" style={{ display: "grid", gap: 14 }}>
                <p>
                  I am still studying, so I am not taking on paid work or a full-time role. I am
                  glad to help with a student or personal project when I have the time.
                </p>
                <p>
                  A useful first message says what the project is, what it has to do, what you have
                  already built, and where it is failing. A photo of the circuit or the error message
                  is worth more than a paragraph.
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
                Elsewhere <span aria-hidden="true">02</span>
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
                <a className="footer__link" href="/work/">
                  Project case studies
                </a>
                <a className="footer__link" href="/awards/">
                  Awards and competitions
                </a>
                <a className="footer__link" href="/running/">
                  Social running
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
