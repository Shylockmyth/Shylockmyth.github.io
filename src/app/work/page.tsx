import type { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Engineering case studies by ${site.name}: embedded systems, PCB design, computer vision, robotics and renewable energy.`,
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  const years = Array.from(new Set(projects.map((p) => p.year))).sort();
  const domains = new Set(projects.flatMap((p) => p.domains));

  return (
    <div className="page" style={{ paddingBottom: "clamp(48px, 6vw, 88px)" }}>
      <div className="wrap">
        <header style={{ marginBottom: "clamp(32px, 4vw, 52px)" }}>
          <p className="eyebrow page__eyebrow">01 / Index</p>
          <h1 className="page__title">Selected work</h1>
          <p className="page__lede">
            Six builds across hardware, software, robotics and energy. Each case study covers the
            constraint that shaped the design, what was measured, and what the result actually
            was.
          </p>
          <div className="page__meta">
            <span>
              <b>{String(projects.length).padStart(2, "0")}</b> projects
            </span>
            <span>
              <b>{domains.size}</b> disciplines
            </span>
            <span>
              <b>{years[0]}–{years[years.length - 1]}</b>
            </span>
            <span>
              <b>Durban</b> · South Africa
            </span>
          </div>
        </header>

        <WorkGrid projects={projects} />
      </div>
    </div>
  );
}
