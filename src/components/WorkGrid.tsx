"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

const labelFor = (value: string) => (value === "All" ? "All" : value);

export function WorkGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All");

  const filters = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((p) => p.domains.forEach((d) => counts.set(d, (counts.get(d) ?? 0) + 1)));
    const ordered = Array.from(counts.keys()).sort((a, b) => {
      const priority = [
        "Hardware",
        "Analogue",
        "Embedded",
        "Software",
        "Signals",
        "AI",
        "Energy",
        "Modelling",
        "Robotics",
        "Vision",
      ];
      return priority.indexOf(a) - priority.indexOf(b);
    });
    return [
      { label: "All", count: projects.length },
      ...ordered.map((d) => ({ label: d, count: counts.get(d) ?? 0 })),
    ];
  }, [projects]);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.domains.includes(filter))),
    [filter, projects],
  );

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by discipline">
        {filters.map(({ label, count }) => (
          <button
            key={label}
            type="button"
            className="filter"
            aria-pressed={filter === label}
            onClick={() => setFilter(label)}
          >
            {labelFor(label)}
            <span className="filter__count" aria-hidden="true">
              {String(count).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} project{visible.length === 1 ? "" : "s"} shown
      </p>

      {visible.length > 0 ? (
        <div className="work-grid">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="empty">No projects in this discipline yet.</p>
      )}
    </>
  );
}
