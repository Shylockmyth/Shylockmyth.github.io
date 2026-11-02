import Link from "next/link";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { ArrowUpRight, DownloadIcon, GitHubIcon, LinkedInIcon } from "./icons";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const top = projects.slice(0, 3);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <p className="footer__wordmark">
              {site.name}
              <span style={{ color: "var(--accent)" }}>.</span>
            </p>
            <p className="footer__blurb">
              Electronic engineering student at DUT, working across analogue and embedded design,
              PCB layout, software, signals and energy modelling.
            </p>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Site</p>
            <ul>
              <li><Link className="footer__link" href="/">Home</Link></li>
              <li><Link className="footer__link" href="/work/">Work</Link></li>
              <li><Link className="footer__link" href="/awards/">Awards</Link></li>
              <li><Link className="footer__link" href="/running/">Running</Link></li>
              <li><Link className="footer__link" href="/about/">About</Link></li>
              <li><Link className="footer__link" href="/contact/">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Projects</p>
            <ul>
              {top.map((p) => (
                <li key={p.slug}>
                  <Link className="footer__link" href={`/work/${p.slug}/`}>
                    {p.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="footer__link" href="/work/">
                  See all {projects.length} projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Elsewhere</p>
            <ul>
              <li>
                <a
                  className="footer__link"
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
                >
                  <LinkedInIcon style={{ width: 12, height: 12 }} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="footer__link"
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
                >
                  <GitHubIcon style={{ width: 12, height: 12 }} /> GitHub / {site.githubHandle}
                </a>
              </li>
              <li>
                <a
                  className="footer__link"
                  href={site.cv}
                  download
                  style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
                >
                  <DownloadIcon style={{ width: 12, height: 12 }} /> Download CV (PDF)
                </a>
              </li>
              <li className="footer__link" style={{ color: "var(--dim)" }}>
                {site.location}
              </li>
              <li className="footer__link" style={{ color: "var(--dim)" }}>
                {site.availabilityShort}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {site.name}
          </span>
          <span>Next.js · static export</span>
          <span>{site.domain}</span>
          <a href="#top" className="footer__link" style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
            Back to top <ArrowUpRight />
          </a>
        </div>
      </div>
    </footer>
  );
}
