import type { ReactNode } from "react";
import type { CoverId } from "@/lib/projects";

const ACCENT = "var(--accent)";
const LINE = "var(--cover-line)";
const GRID = "var(--cover-grid)";
const DIM = "var(--dim)";
const MUTED = "var(--muted)";
const PANEL = "var(--panel)";

const mono = { fontFamily: "var(--font-mono)" } as const;

function Shell({
  uid,
  code,
  label,
  children,
}: {
  uid: string;
  code: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 1200 675"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id={`grid-${uid}`} width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M30 0H0V30" fill="none" stroke={GRID} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1200" height="675" fill="var(--cover-bg)" />
      <rect width="1200" height="675" fill={`url(#grid-${uid})`} />

      {/* corner ticks */}
      <g stroke={LINE} strokeWidth="1.5">
        <path d="M46 78V46h32" fill="none" />
        <path d="M1122 46h32v32" fill="none" />
        <path d="M46 597v32h32" fill="none" />
        <path d="M1122 629h32v-32" fill="none" />
      </g>

      {children}

      <g style={mono}>
        <text x="46" y="655" fill={DIM} fontSize="15" letterSpacing="2.4">
          {label}
        </text>
        <text x="1154" y="655" fill={DIM} fontSize="15" letterSpacing="2.4" textAnchor="end">
          {code}
        </text>
      </g>
    </svg>
  );
}

function Cyberdeck() {
  return (
    <Shell uid="cyberdeck" code="REV C" label="6-LAYER / 120 x 80 MM">
      {/* board */}
      <g fill="none">
        <rect x="150" y="112" width="900" height="452" rx="6" stroke={ACCENT} strokeWidth="2" opacity="0.45" />
        <rect x="172" y="134" width="856" height="408" rx="3" stroke={LINE} strokeWidth="1" strokeDasharray="4 6" />
      </g>

      {/* mounting holes */}
      <g fill="none" stroke={LINE} strokeWidth="2">
        {[
          [190, 152],
          [1010, 152],
          [190, 524],
          [1010, 524],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="10" />
            <circle cx={cx} cy={cy} r="4" fill={LINE} />
          </g>
        ))}
      </g>

      {/* traces */}
      <g fill="none" stroke={ACCENT} strokeWidth="1.6" opacity="0.55">
        <path d="M300 340h-70v150h120" />
        <path d="M550 265h130v-40" />
        <path d="M550 340h130v200h-60" />
        <path d="M885 340h70v-90h60" />
      </g>
      <g fill="none" stroke={LINE} strokeWidth="1.4">
        <path d="M300 300h-44v-90h96" />
        <path d="M550 300h96v-96" />
        <path d="M885 300h110v180h48" />
        <path d="M770 400v64h44" />
      </g>

      {/* chips */}
      <g>
        <rect x="300" y="265" width="250" height="150" rx="4" fill={PANEL} stroke={LINE} strokeWidth="1.6" />
        <rect x="316" y="281" width="218" height="118" rx="2" fill="none" stroke={LINE} strokeWidth="1" strokeDasharray="3 4" />
        <text x="330" y="312" style={mono} fill={ACCENT} fontSize="18" letterSpacing="1.4">
          STM32H743
        </text>
        <text x="330" y="338" style={mono} fill={DIM} fontSize="14" letterSpacing="1">
          M7 480 / M4 240
        </text>
        <g fill={MUTED}>
          {Array.from({ length: 12 }).map((_, i) => (
            <rect key={i} x={306 + i * 20} y="405" width="8" height="14" />
          ))}
        </g>
      </g>

      <g>
        <rect x="700" y="240" width="200" height="175" rx="4" fill={PANEL} stroke={LINE} strokeWidth="1.6" />
        <text x="718" y="272" style={mono} fill={ACCENT} fontSize="18" letterSpacing="1.4">
          ECP5
        </text>
        <text x="718" y="296" style={mono} fill={DIM} fontSize="14" letterSpacing="1">
          44K LUT
        </text>
        <g stroke={LINE} strokeWidth="1">
          {Array.from({ length: 7 }).map((_, i) => (
            <path key={i} d={`M704 ${318 + i * 12}h192`} />
          ))}
        </g>
      </g>

      <g>
        <rect x="700" y="440" width="86" height="76" rx="3" fill={PANEL} stroke={LINE} strokeWidth="1.6" />
        <text x="712" y="470" style={mono} fill={MUTED} fontSize="13" letterSpacing="1">
          ATECC
        </text>
        <text x="712" y="490" style={mono} fill={DIM} fontSize="12" letterSpacing="1">
          608B
        </text>
        <rect x="812" y="440" width="120" height="76" rx="3" fill={PANEL} stroke={LINE} strokeWidth="1.6" />
        <text x="826" y="470" style={mono} fill={MUTED} fontSize="13" letterSpacing="1">
          DP83867
        </text>
        <text x="826" y="490" style={mono} fill={DIM} fontSize="12" letterSpacing="1">
          1GbE
        </text>
      </g>

      {/* connectors */}
      <g fill="none" stroke={LINE} strokeWidth="1.6">
        <rect x="960" y="180" width="56" height="96" rx="4" />
        <circle cx="988" cy="228" r="16" stroke={ACCENT} opacity="0.7" />
        <rect x="960" y="440" width="56" height="24" rx="6" />
        <rect x="110" y="440" width="24" height="70" rx="4" />
      </g>
      <g style={mono} fill={DIM} fontSize="12" letterSpacing="1.6">
        <text x="972" y="300">SMA</text>
        <text x="966" y="424">USB-C PD</text>
        <text x="96" y="530" textAnchor="end">
          JTAG
        </text>
      </g>

      {/* vias */}
      <g fill={LINE}>
        {Array.from({ length: 18 }).map((_, i) => (
          <circle key={i} cx={240 + (i % 9) * 88} cy={i < 9 ? 200 : 500} r="3" />
        ))}
      </g>
    </Shell>
  );
}

function Detector() {
  return (
    <Shell uid="detector" code="YOLO11 / 640" label="INFERENCE / 80 CLASSES">
      {/* field of view */}
      <g fill="none" stroke={LINE} strokeWidth="1.4" strokeDasharray="6 8">
        <path d="M228 292 430 150v375L228 388Z" />
      </g>

      {/* camera */}
      <g>
        <rect x="92" y="262" width="136" height="96" rx="6" fill={PANEL} stroke={LINE} strokeWidth="1.6" />
        <circle cx="160" cy="310" r="26" fill="none" stroke={ACCENT} strokeWidth="1.6" opacity="0.8" />
        <circle cx="160" cy="310" r="11" fill={ACCENT} opacity="0.4" />
        <rect x="104" y="240" width="52" height="22" rx="3" fill="none" stroke={LINE} strokeWidth="1.4" />
      </g>

      {/* frame */}
      <rect x="430" y="150" width="580" height="375" fill="none" stroke={LINE} strokeWidth="1.6" />

      {/* bounding boxes */}
      <g>
        <rect x="486" y="206" width="122" height="278" fill={ACCENT} fillOpacity="0.07" stroke={ACCENT} strokeWidth="2" />
        <rect x="486" y="182" width="122" height="24" fill={ACCENT} />
        <text x="494" y="200" style={mono} fill="var(--accent-ink)" fontSize="14" letterSpacing="1">
          person .94
        </text>
        <path d="M546 540v-22" stroke={ACCENT} strokeWidth="2" />
      </g>
      <g>
        <rect x="672" y="404" width="86" height="86" fill={ACCENT} fillOpacity="0.05" stroke={ACCENT} strokeWidth="2" opacity="0.7" />
        <text x="672" y="396" style={mono} fill={MUTED} fontSize="14" letterSpacing="1">
          sports ball .88
        </text>
      </g>
      <g>
        <rect x="806" y="330" width="118" height="164" fill={ACCENT} fillOpacity="0.05" stroke={ACCENT} strokeWidth="2" opacity="0.55" />
        <text x="806" y="322" style={mono} fill={MUTED} fontSize="14" letterSpacing="1">
          cone .71
        </text>
      </g>

      <g stroke={LINE} strokeWidth="1">
        {Array.from({ length: 5 }).map((_, i) => (
          <path key={i} d={`M430 ${225 + i * 62}h580`} strokeDasharray="2 8" />
        ))}
      </g>

      {/* scan line */}
      <g className="scan">
        <rect x="430" y="150" width="580" height="2" fill={ACCENT} opacity="0.8" />
      </g>
    </Shell>
  );
}

function Skytracker() {
  return (
    <Shell uid="skytracker" code="40+ NODES / 4S" label="LIVE AIRSPACE / 250 NM">
      <g fill="none" stroke={LINE} strokeWidth="1.4" opacity="0.8">
        <circle cx="600" cy="338" r="80" />
        <circle cx="600" cy="338" r="150" />
        <circle cx="600" cy="338" r="220" />
        <circle cx="600" cy="338" r="290" />
        <path d="M600 28v620M290 338h620" strokeDasharray="3 7" />
      </g>

      <g className="radar-sweep">
        <path d="M600 338 600 48A290 290 0 0 1 850 190Z" fill={ACCENT} opacity="0.09" />
        <path d="M600 338V48" stroke={ACCENT} strokeWidth="1.6" opacity="0.9" />
      </g>

      {/* aircraft blips */}
      <g fill={ACCENT}>
        <path d="M705 208l10 22-10-6-10 6Z" transform="rotate(38 705 216)" />
        <path d="M420 430l10 22-10-6-10 6Z" transform="rotate(-64 420 438)" opacity="0.75" />
        <path d="M770 480l9 20-9-5-9 5Z" transform="rotate(14 770 488)" opacity="0.6" />
        <path d="M500 168l9 20-9-5-9 5Z" transform="rotate(-112 500 176)" opacity="0.5" />
      </g>
      <g style={mono} fill={MUTED} fontSize="13" letterSpacing="1.2">
        <text x="724" y="200">SAA204</text>
        <text x="434" y="470">KLM592</text>
        <text x="788" y="506">BAW58</text>
      </g>

      {/* sample grid markers */}
      <g fill="none" stroke={ACCENT} strokeWidth="1.2" opacity="0.4">
        {[
          [300, 160],
          [900, 150],
          [250, 520],
          [960, 470],
          [600, 600],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <path d={`M${x - 7} ${y}h14M${x} ${y - 7}v14`} />
            <circle cx={x} cy={y} r="2.5" fill={ACCENT} stroke="none" />
          </g>
        ))}
      </g>

      <g style={mono} fill={DIM} fontSize="13" letterSpacing="1.6">
        <text x="42" y="96">FL340</text>
        <text x="42" y="118">542 KT</text>
      </g>
      <rect x="40" y="130" width="120" height="38" fill={ACCENT} fillOpacity="0.1" stroke={LINE} />
      <text x="52" y="154" style={mono} fill={ACCENT} fontSize="14" letterSpacing="1.4">
        1,284 TRACKED
      </text>
    </Shell>
  );
}

function Scanner() {
  const layers = [
    ["HASH MATCH", 92],
    ["CONTENT SIG", 74],
    ["EXTENSION", 61],
    ["ENTROPY", 48],
  ] as const;

  return (
    <Shell uid="scanner" code="4 LAYERS / SQLITE" label="THREAT SCORE / QUARANTINE">
      {/* shield */}
      <g transform="translate(150 165)">
        <path
          d="M120 0 240 44v128c0 92-58 152-120 184C58 324 0 264 0 172V44Z"
          fill={ACCENT}
          fillOpacity="0.07"
          stroke={ACCENT}
          strokeWidth="2"
          opacity="0.9"
        />
        <path d="M74 168l34 36 66-76" fill="none" stroke={ACCENT} strokeWidth="6" strokeLinecap="square" />
        <text x="120" y="290" textAnchor="middle" style={mono} fill={DIM} fontSize="14" letterSpacing="2">
          SCAN ENGINE
        </text>
      </g>

      {/* hash lines */}
      <g style={mono} fill={DIM} fontSize="14" letterSpacing="1.2">
        <text x="500" y="150">d41d8cd98f00b204e9800998ecf8427e</text>
        <text x="500" y="174" fill={LINE}>
          0cc175b9c0f1b6a831c399e269772661
        </text>
      </g>

      {/* detection bars */}
      <g>
        {layers.map(([name, pct], i) => {
          const y = 232 + i * 74;
          return (
            <g key={name}>
              <text x="500" y={y} style={mono} fill={MUTED} fontSize="15" letterSpacing="1.6">
                {name}
              </text>
              <text x="1080" y={y} textAnchor="end" style={mono} fill={ACCENT} fontSize="15" letterSpacing="1">
                {pct}
              </text>
              <rect x="500" y={y + 12} width="580" height="8" fill={LINE} opacity="0.5" />
              <rect x="500" y={y + 12} width={(580 * pct) / 100} height="8" fill={ACCENT} opacity={1 - i * 0.18} />
            </g>
          );
        })}
      </g>

      <g fill="none" stroke={LINE} strokeWidth="1.2">
        <path d="M470 128v396" strokeDasharray="4 6" />
      </g>
    </Shell>
  );
}

function Cars4mars() {
  const wheels = [
    [300, 205],
    [300, 320],
    [300, 435],
    [790, 205],
    [790, 320],
    [790, 435],
  ];
  return (
    <Shell uid="cars4mars" code="6WD / ROCKER-BOGIE" label="MARS ROVER / 80 M LINK">
      {/* ground */}
      <g stroke={LINE} strokeWidth="1.2" opacity="0.7">
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M${150 + i * 24} 590h${90 + i * 6}`} strokeDasharray="8 10" />
        ))}
      </g>

      {/* chassis */}
      <g>
        <rect x="382" y="238" width="446" height="164" rx="8" fill={PANEL} stroke={ACCENT} strokeWidth="2" opacity="0.9" />
        <rect x="404" y="258" width="402" height="124" rx="3" fill="none" stroke={LINE} strokeWidth="1.2" />
        <g stroke={LINE} strokeWidth="1">
          {Array.from({ length: 5 }).map((_, i) => (
            <path key={i} d={`M404 ${278 + i * 20}h402`} />
          ))}
        </g>
        <g stroke={LINE} strokeWidth="1">
          {Array.from({ length: 9 }).map((_, i) => (
            <path key={i} d={`M${430 + i * 46} 258v124`} />
          ))}
        </g>
        <text x="426" y="294" style={mono} fill={ACCENT} fontSize="15" letterSpacing="1.6">
          POWER / AVIONICS BAY
        </text>
      </g>

      {/* wheels */}
      <g>
        {wheels.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <rect
              x={x}
              y={y}
              width="92"
              height="42"
              rx="10"
              fill={PANEL}
              stroke={ACCENT}
              strokeWidth="1.8"
              opacity="0.85"
            />
            <g stroke={LINE} strokeWidth="1">
              {Array.from({ length: 5 }).map((_, i) => (
                <path key={i} d={`M${x + 12 + i * 16} ${y + 4}v34`} />
              ))}
            </g>
          </g>
        ))}
      </g>

      {/* rocker links */}
      <g fill="none" stroke={ACCENT} strokeWidth="2" opacity="0.55">
        <path d="M392 226h-18v42h-18M392 226h-54" />
        <path d="M392 414h-18v-42h-18M392 414h-54" />
        <path d="M818 226h18v42h18M818 226h54" />
        <path d="M818 414h18v-42h18M818 414h54" />
      </g>

      {/* mast + camera */}
      <g fill="none" stroke={LINE} strokeWidth="1.8">
        <path d="M605 238v-42" />
        <circle cx="605" cy="176" r="22" fill={PANEL} stroke={ACCENT} opacity="0.9" />
        <circle cx="605" cy="176" r="7" fill={ACCENT} />
        <path d="M583 168h-20M627 168h20" />
      </g>

      {/* dimensions */}
      <g stroke={LINE} strokeWidth="1.2">
        <path d="M300 540h582" />
        <path d="M300 532v16M882 532v16" />
      </g>
      <text x="591" y="566" textAnchor="middle" style={mono} fill={DIM} fontSize="14" letterSpacing="1.6">
        682 MM WHEELBASE
      </text>

      <g style={mono} fill={DIM} fontSize="13" letterSpacing="1.6">
        <text x="42" y="96">SOL 001</text>
        <text x="42" y="118">SLOPE 24 deg</text>
      </g>
    </Shell>
  );
}

function Energy() {
  return (
    <Shell uid="energy" code="LCOE R2.32" label="2 MWP / 200 KW / 2 MWH">
      {/* axes */}
      <g stroke={LINE} strokeWidth="1.2">
        <path d="M120 520h960" />
        <path d="M120 200v320" />
        {Array.from({ length: 5 }).map((_, i) => (
          <path key={i} d={`M120 ${256 + i * 66}h960`} strokeDasharray="2 8" opacity="0.7" />
        ))}
      </g>

      {/* generation curve */}
      <path
        d="M120 512C210 505 250 470 320 430S420 300 510 272S610 300 680 372 780 470 880 496 1020 512 1080 514V520H120Z"
        fill={ACCENT}
        opacity="0.1"
      />
      <path
        d="M120 512C210 505 250 470 320 430S420 300 510 272S610 300 680 372 780 470 880 496 1020 512 1080 514"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.6"
      />
      <path
        d="M120 490C240 480 320 486 420 474S560 452 680 452 860 476 1080 484"
        fill="none"
        stroke={MUTED}
        strokeWidth="1.6"
        strokeDasharray="7 6"
        opacity="0.8"
      />

      {/* peak marker */}
      <g stroke={ACCENT} strokeWidth="1.2">
        <path d="M510 272V210" strokeDasharray="3 5" />
      </g>
      <rect x="440" y="182" width="140" height="28" fill={ACCENT} />
      <text x="510" y="202" textAnchor="middle" style={mono} fill="var(--accent-ink)" fontSize="14" letterSpacing="1.2">
        PV PEAK
      </text>

      {/* sun */}
      <g transform="translate(1010 150)" stroke={ACCENT} strokeWidth="2" fill="none">
        <circle r="30" fill={ACCENT} fillOpacity="0.09" />
        <circle r="14" fill={ACCENT} fillOpacity="0.5" stroke="none" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          return (
            <path
              key={i}
              d={`M${Math.cos(a) * 38} ${Math.sin(a) * 38}L${Math.cos(a) * 50} ${Math.sin(a) * 50}`}
            />
          );
        })}
      </g>

      {/* battery stack */}
      <g transform="translate(150 300)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(0 ${i * 40})`}>
            <rect x="0" y="0" width="88" height="28" rx="3" fill={PANEL} stroke={LINE} strokeWidth="1.4" />
            <rect x="6" y="6" width={i === 2 ? 42 : 68} height="16" fill={ACCENT} opacity="0.5" />
            <path d="M88 9h7v10h-7" fill="none" stroke={LINE} strokeWidth="1.4" />
          </g>
        ))}
        <text x="0" y="140" style={mono} fill={DIM} fontSize="13" letterSpacing="1.6">
          BESS 2 MWH
        </text>
      </g>

      {/* wind */}
      <g transform="translate(880 230)" stroke={LINE} strokeWidth="1.8" fill="none">
        <path d="M0 0v96" />
        <g transform="translate(0 0)" stroke={ACCENT} opacity="0.8">
          <path d="M0 0 4-52" />
          <path d="M0 0-46 28" />
          <path d="M0 0 42 30" />
          <circle r="5" fill={ACCENT} stroke="none" />
        </g>
      </g>
      <text x="836" y="352" style={mono} fill={DIM} fontSize="13" letterSpacing="1.6">
        2 x 100 KW
      </text>

      <g style={mono} fill={DIM} fontSize="13" letterSpacing="1.6">
        <text x="120" y="556">00:00</text>
        <text x="562" y="556" textAnchor="middle">
          12:00
        </text>
        <text x="1066" y="556" textAnchor="end">
          24:00
        </text>
        <text x="42" y="96">GENERATION</text>
        <text x="42" y="118" fill={MUTED}>
          3,091 MWH/YR
        </text>
      </g>
    </Shell>
  );
}

const covers: Record<CoverId, () => ReactNode> = {
  cyberdeck: Cyberdeck,
  detector: Detector,
  skytracker: Skytracker,
  scanner: Scanner,
  cars4mars: Cars4mars,
  energy: Energy,
};

export function ProjectCover({ id }: { id: CoverId }) {
  const Cover = covers[id];
  return <Cover />;
}
