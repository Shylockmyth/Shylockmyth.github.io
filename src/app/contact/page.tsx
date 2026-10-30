import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmail } from "@/components/CopyEmail";
import { ArrowUpRight, MailIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for graduate roles, collaborations or technical questions. Based in ${site.location}.`,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <div className="page">
      <div className="wrap">
        <header style={{ marginBottom: "clamp(30px, 4vw, 48px)", maxWidth: "62ch" }}>
          <p className="eyebrow page__eyebrow">03 / Contact</p>
          <h1 className="page__title">Get in touch.</h1>
          <p className="page__lede">
            The fastest route is email. Tell me what you are building, the constraint you are stuck
            on, or the role you have in mind, and I will reply with something useful rather than a
            brochure.
          </p>
        </header>

        <div className="contact-grid">
          <div>
            <div className="mailbox">
              <div className="mailbox__bar">
                <span>Direct line</span>
                <span aria-hidden="true">SMTP / 01</span>
              </div>
              <div className="mailbox__body">
                <p className="mailbox__label">Email</p>
                <a className="mailbox__address" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <div className="mailbox__actions">
                  <CopyEmail email={site.email} />
                  <a className="copy-btn" href={`mailto:${site.email}`}>
                    <MailIcon /> Compose
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
                <dt>Timezone</dt>
                <dd>SAST · UTC+2</dd>
              </div>
              <div className="contact-fact">
                <dt>Availability</dt>
                <dd style={{ color: "var(--accent)" }}>{site.availability}</dd>
              </div>
              <div className="contact-fact">
                <dt>Best for</dt>
                <dd>Graduate roles · hardware · software</dd>
              </div>
            </dl>

            <div className="panel" style={{ marginTop: 20 }}>
              <p className="panel__title">
                What helps <span aria-hidden="true">INFO</span>
              </p>
              <div className="panel__body" style={{ display: "grid", gap: 12 }}>
                <p>
                  For a role: the discipline, the team, and the kind of systems they build. For a
                  project: the constraint, the deadline, and what already exists.
                </p>
                <a
                  href="/files/hybrid-feasibility-study.docx"
                  className="footer__link"
                  style={{ display: "inline-flex", gap: 6, alignItems: "center" }}
                >
                  Sample technical report (DOCX, 1 MB) <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>

          <ContactForm email={site.email} />
        </div>
      </div>
    </div>
  );
}
