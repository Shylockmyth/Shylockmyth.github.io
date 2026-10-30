import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectCover } from "./ProjectCover";
import { ArrowRight } from "./icons";

export function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  return (
    <article className={`card${wide ? " card--wide" : ""}`}>
      <div className="card__cover">
        <span className="card__idx" aria-hidden="true">
          {project.index}
        </span>
        <ProjectCover id={project.cover} />
      </div>

      <div className="card__body">
        <div className="card__top">
          {project.domains.slice(0, 2).map((domain) => (
            <span className="tag" key={domain}>
              {domain}
            </span>
          ))}
          <span className="card__year">{project.year}</span>
        </div>

        <h3 className="card__title">
          <Link href={`/work/${project.slug}/`} className="card__link">
            {project.title}
          </Link>
        </h3>
        <p className="card__lede">{project.lede}</p>

        <div className="card__stack" aria-hidden="true">
          {project.stack.slice(0, 4).map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>

        <span className="card__foot" aria-hidden="true">
          Case study <ArrowRight />
        </span>
      </div>
    </article>
  );
}
