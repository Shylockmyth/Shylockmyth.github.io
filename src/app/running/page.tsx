import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Running",
  description: `Social running and 10 km races: Hollywood Bets, ABSA Run Your City, Ntenga Foundation and Garmin.`,
  alternates: { canonical: "/running/" },
};

type Race = {
  name: string;
  distance: string;
  city: string;
  note: string;
  photos: { src: string; alt: string; width: number; height: number }[];
};

const races: Race[] = [
  {
    name: "Hollywood Bets 10 km",
    distance: "10 km",
    city: "Durban",
    note:
      "A flat, fast coastal route and the first race that made the distance feel routine rather than a one-off.",
    photos: [
      { src: "/images/running/hollywood-1.jpg", alt: "Hollywood Bets 10 km race photograph", width: 960, height: 1280 },
      { src: "/images/running/hollywood-2.jpg", alt: "Hollywood Bets 10 km finish", width: 1200, height: 1600 },
    ],
  },
  {
    name: "ABSA Run Your City 10 km",
    distance: "10 km",
    city: "Durban",
    note:
      "The big city race: crowds on the pavement, a live band at the turn, and a route that shows a side of Durban you do not see from a car.",
    photos: [
      { src: "/images/running/absa-1.jpg", alt: "ABSA Run Your City 10 km race photograph", width: 1400, height: 1867 },
      { src: "/images/running/absa-2.jpg", alt: "ABSA Run Your City 10 km medal", width: 1400, height: 1859 },
    ],
  },
  {
    name: "Ntenga Foundation 10 km",
    distance: "10 km",
    city: "Durban",
    note:
      "A community race with a cause behind it. Smaller field, harder course, and the one where the last two kilometres are mostly mental.",
    photos: [
      { src: "/images/running/ntenga-1.jpg", alt: "Ntenga Foundation 10 km race photograph", width: 1400, height: 1859 },
      { src: "/images/running/ntenga-medal.jpg", alt: "Ntenga Foundation 10 km medal", width: 1204, height: 1600 },
    ],
  },
  {
    name: "Garmin 10 km",
    distance: "10 km",
    city: "Durban",
    note:
      "The one where the watch data became useful: pacing, splits and the realisation that starting slower is faster.",
    photos: [
      { src: "/images/running/garmin-1.jpg", alt: "Garmin 10 km race photograph", width: 1400, height: 1859 },
      { src: "/images/running/garmin-2.jpg", alt: "Garmin 10 km medal and finish", width: 1400, height: 1859 },
    ],
  },
];

const medals = [
  { label: "Hollywood Bets", value: "10 km" },
  { label: "ABSA Run Your City", value: "10 km" },
  { label: "Ntenga Foundation", value: "10 km" },
  { label: "Garmin", value: "10 km" },
];

export default function RunningPage() {
  return (
    <div className="page">
      <div className="wrap">
        <header style={{ marginBottom: "clamp(32px, 4vw, 52px)", maxWidth: "68ch" }}>
          <p className="eyebrow page__eyebrow">Off the bench · Secondary</p>
          <h1 className="page__title">Running.</h1>
          <p className="page__lede">
            Social running, mostly 10 km road races around Durban. It is the same habit as the bench
            work: show up, measure, repeat, and do not skip the boring sessions.
          </p>
          <div className="page__meta">
            <span>
              <b>04</b> races
            </span>
            <span>
              <b>40</b> km raced
            </span>
            <span>
              <b>10 km</b> distance
            </span>
            <span>
              <b>Durban</b> · South Africa
            </span>
          </div>
        </header>

        <div className="medal-strip">
          {medals.map((medal) => (
            <div className="medal" key={medal.label}>
              <span className="medal__ring" aria-hidden="true" />
              <p className="medal__value">{medal.value}</p>
              <p className="medal__label">{medal.label}</p>
            </div>
          ))}
        </div>

        <div className="race-list">
          {races.map((race, i) => (
            <article className="race" key={race.name}>
              <div className="race__head">
                <span className="race__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="race__title">{race.name}</h2>
                  <p className="race__meta">
                    {race.distance} <span>· {race.city}</span>
                  </p>
                </div>
              </div>

              <p className="race__note">{race.note}</p>

              <div className="race__photos">
                {race.photos.map((photo) => (
                  <figure key={photo.src}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 760px) 100vw, 45vw"
                    />
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="cta reveal" style={{ marginTop: "clamp(40px, 5vw, 64px)" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              Keep looking
            </p>
            <h2 className="cta__title">
              Back to the <em>bench</em>.
            </h2>
            <p className="cta__text">
              The engineering work is where the detail lives: analogue circuits, PCB builds, signals,
              software and an energy study that had to survive a sensitivity analysis.
            </p>
          </div>
          <div className="cta__actions">
            <Link href="/work/" className="btn btn--primary">
              View the work <ArrowRight />
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
