"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function StatusBar() {
  const [clock, setClock] = useState("--:--:--");

  useEffect(() => {
    const tick = () => {
      setClock(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: site.timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="statusbar">
      <div className="statusbar__inner">
        <div className="statusbar__group">
          <span className="status">
            <span className="status__dot" aria-hidden="true" />
            {site.availability}
          </span>
        </div>

        <div className="statusbar__group statusbar__center" aria-hidden="true">
          <span>DUT</span>
          <span className="statusbar__sep" />
          <span>Durban, ZA</span>
          <span className="statusbar__sep" />
          <span>2 587 kWp / 2.63 dB / 80 classes</span>
        </div>

        <div className="statusbar__group statusbar__group--meta">
          <span>
            SAST <span className="statusbar__clock">{clock}</span>
          </span>
          <span className="statusbar__sep" aria-hidden="true" />
          <span>v2026.10</span>
        </div>
      </div>
    </div>
  );
}
