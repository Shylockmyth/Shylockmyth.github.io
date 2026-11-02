import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCover } from "@/components/ProjectCover";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ArrowRight } from "@/components/icons";
import { getAdjacent, getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.lede,
    alternates: { canonical: `/work/${project.slug}/` },
    openGraph: {
      type: "article",
      title: `${project.title} · ${site.name}`,
      description: project.lede,
      url: `/work/${project.slug}/`,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacent(project.slug);

  return (
    <div className="page">
      <div className="wrap">
        <div className="detail__head">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/work/">Work</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{project.shortTitle}</span>
            </nav>

            <p className="eyebrow">
              {project.domains.join(" · ")} · {project.year}
            </p>

            <h1 className="detail__title">{project.title}</h1>
            <p className="detail__lede">{project.lede}</p>
          </div>

          <dl className="meta">
            <div className="meta__row">
              <dt className="meta__k">Role</dt>
              <dd className="meta__v">{project.role}</dd>
            </div>
            <div className="meta__row">
              <dt className="meta__k">Year</dt>
              <dd className="meta__v">{project.year}</dd>
            </div>
            <div className="meta__row">
              <dt className="meta__k">Discipline</dt>
              <dd className="meta__v">{project.domains.join(", ")}</dd>
            </div>
            <div className="meta__row">
              <dt className="meta__k">Status</dt>
              <dd className="meta__v">{project.status}</dd>
            </div>
            <div className="meta__row">
              <dt className="meta__k">Index</dt>
              <dd className="meta__v mono">
                {project.index} / {String(projects.length).padStart(2, "0")}
              </dd>
            </div>
          </dl>
        </div>

        <figure className="cover-frame">
          <ProjectCover id={project.cover} />
          <figcaption>{project.coverCaption}</figcaption>
        </figure>

        <div className="metrics">
          {project.metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <p className="metric__v">
                {metric.value}
                {metric.unit ? <span>{metric.unit}</span> : null}
              </p>
              <p className="metric__k">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="detail__body">
          <article className="prose">
            {project.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 40)}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {project.gallery && (
              <section>
                <h2 id="figures">Figures</h2>
                <ProjectGallery items={project.gallery} />
              </section>
            )}
          </article>

          <aside className="aside">
            <div className="panel">
              <p className="panel__title">
                Specification <span aria-hidden="true">SYS</span>
              </p>
              <dl>
                {project.specs.map((spec) => (
                  <div className="spec" key={spec.label}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="panel">
              <p className="panel__title">Stack <span aria-hidden="true">{String(project.stack.length).padStart(2, "0")}</span></p>
              <div className="panel__body">
                <div className="aside__tags">
                  {project.stack.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {project.note && (
              <div className="panel">
                <p className="panel__title">Note</p>
                <div className="panel__body">
                  <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.65 }}>
                    {project.note}
                  </p>
                </div>
              </div>
            )}
          </aside>
        </div>

        <nav className="pager" aria-label="More projects">
          <Link href={`/work/${prev.slug}/`} className="pager__link pager__link--prev">
            <span className="pager__label">← Previous</span>
            <span className="pager__title">{prev.title}</span>
          </Link>
          <Link href={`/work/${next.slug}/`} className="pager__link pager__link--next">
            <span className="pager__label">Next →</span>
            <span className="pager__title">{next.title}</span>
          </Link>
        </nav>

        <div style={{ marginTop: 28 }}>
          <Link href="/work/" className="btn">
            All projects <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
