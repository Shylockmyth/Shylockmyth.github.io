export type CoverId =
  | "cyberdeck"
  | "detector"
  | "skytracker"
  | "scanner"
  | "cars4mars"
  | "energy";

export type Metric = { value: string; unit?: string; label: string };

export type ProjectSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
};

export type Spec = { label: string; value: string };

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  year: string;
  domains: string[];
  lede: string;
  role: string;
  status: string;
  stack: string[];
  featured: boolean;
  cover: CoverId;
  coverCaption: string;
  metrics: Metric[];
  sections: ProjectSection[];
  specs: Spec[];
  gallery?: GalleryItem[];
  links?: { label: string; href: string; external?: boolean }[];
  note?: string;
};

export const domains = ["Hardware", "Software", "Robotics", "Energy", "Security", "Vision"] as const;

export const projects: Project[] = [
  {
    slug: "cyberdeck",
    index: "01",
    title: "CyberDeck Pro",
    shortTitle: "CyberDeck Pro",
    year: "2026",
    domains: ["Hardware", "Security"],
    lede:
      "A 6-layer handheld security-testing platform: STM32H743, an ECP5 FPGA, dual gigabit Ethernet, USB-C PD and a precision power-measurement front end for side-channel work.",
    role: "Architecture, schematic, stackup and layout planning",
    status: "Design complete, layout in review",
    stack: ["STM32H743", "Lattice ECP5", "ATECC608B", "DP83867", "USB-C PD", "Multisim / Ultiboard"],
    featured: true,
    cover: "cyberdeck",
    coverCaption: "6-layer, 120 x 80 mm stackup with dual gigabit Ethernet and an FPGA fabric.",
    metrics: [
      { value: "6", unit: "layers", label: "Controlled-impedance stackup" },
      { value: "44K", unit: "LUTs", label: "ECP5 fabric for inline analysis" },
      { value: "1", unit: "MSPS", label: "12-bit power trace sampling" },
      { value: "100", unit: "W", label: "USB-C PD input budget" },
    ],
    sections: [
      {
        heading: "Why build it",
        body: [
          "Security tooling is usually a bag of adapters, a laptop and a mess of USB cables. CyberDeck Pro folds the common bench tasks into one board: sniffing network traffic, debugging targets over JTAG and SWD, fuzzing USB, and measuring power or EM emissions while code runs.",
          "The constraint that shaped the design was self-sufficiency. It had to run from USB-C or two 18650 cells, fit in a hand, and keep the analogue measurement path far enough from the switching regulators to be useful.",
        ],
      },
      {
        heading: "Architecture",
        bullets: [
          "STM32H743VIT6 as the main controller: Cortex-M7 at 480 MHz for acquisition and USB stacks, Cortex-M4 at 240 MHz for housekeeping.",
          "Lattice ECP5 LFE5U-45F for deterministic, inline processing where a microcontroller would jitter: USB framing, trigger logic and sample capture.",
          "ATECC608B secure element for key storage and device identity, so credentials never sit in general flash.",
          "Dual gigabit Ethernet through a DP83867 PHY plus a LAN9514 USB-to-Ethernet bridge, giving an inline tap and a management port.",
        ],
      },
      {
        heading: "Power and measurement",
        body: [
          "Input is USB-C PD up to 100 W, negotiated with a TPS65988 controller, or two 18650 cells through a BQ25895 charger. Rails at 3.3 V, 1.8 V and 1.2 V are generated locally with TPS62827 converters.",
          "The side-channel front end uses an INA219 with an OPA376 instrumentation amplifier for current, and an SMA input with an AD8065 for EM probes. Sampling runs at 12-bit, 1 MSPS into the STM32 ADC, with the FPGA able to trigger on a pattern and capture the window around it.",
        ],
      },
      {
        heading: "Layout constraints",
        body: [
          "The board is 120 x 80 mm on a 6-layer signal-ground-signal-signal-ground-signal stackup, 1.6 mm thick with ENIG finish. Minimum trace is 0.1 mm and minimum via 0.2 mm, which is conservative enough for the fabricator and still leaves room for the impedance-controlled nets.",
          "USB pairs are routed to 90 ohm differential and Ethernet to 100 ohm, with single-ended nets held at 50 ohm. Power, USB, Ethernet, JTAG, SPI, I2C and ADC each have their own net class so the DRC rules match the electrical intent.",
        ],
      },
      {
        heading: "Cost",
        body: [
          "The BOM lands around $120 per board at single-unit pricing, fabrication around $50 for 6 layers with ENIG, and outsourced assembly around $200. That puts a complete board near $370, which is roughly the cost of two commercial USB analyzers before you add an SDR or a JTAG probe.",
        ],
      },
    ],
    specs: [
      { label: "MCU", value: "STM32H743VIT6, Cortex-M7 480 MHz + M4 240 MHz" },
      { label: "FPGA", value: "Lattice LFE5U-45F, 44K LUTs" },
      { label: "Network", value: "2x gigabit Ethernet (DP83867 + LAN9514)" },
      { label: "USB", value: "USB-C host/device, USB-A host, micro-B debug" },
      { label: "Power", value: "USB-C PD 100 W, 2x 18650, BQ25895" },
      { label: "Measurement", value: "INA219 + OPA376 current, SMA EM input, 1 MSPS" },
      { label: "Board", value: "6 layers, 120 x 80 mm, 0.1 mm trace, ENIG" },
    ],
  },
  {
    slug: "vision-detector",
    index: "02",
    title: "Live AI camera detector",
    shortTitle: "AI camera detector",
    year: "2026",
    domains: ["Software", "Vision"],
    lede:
      "A self-hosted camera server that streams live video to the browser, runs YOLO11 on every frame, records continuously, and stays usable over a Cloudflare tunnel.",
    role: "Solo build: server, streaming, front end, deployment",
    status: "Running, used for bench and site monitoring",
    stack: ["Python", "OpenCV", "ONNX Runtime", "YOLO11", "WebSockets", "Cloudflare Tunnel"],
    featured: true,
    cover: "detector",
    coverCaption: "Inference pipeline: capture, letterbox, YOLO11 forward pass, box overlay, dual transport.",
    metrics: [
      { value: "80", unit: "classes", label: "COCO object vocabulary" },
      { value: "640", unit: "px", label: "Inference input resolution" },
      { value: "2", unit: "paths", label: "MJPEG on LAN, WebSocket through tunnels" },
      { value: "24/7", unit: "", label: "Continuous frame recording" },
    ],
    sections: [
      {
        heading: "What it does",
        body: [
          "The server captures frames with OpenCV, draws YOLO11 detections on the stream, and serves the result to any browser on the network. It started as a stream from an ESP32-CAM and grew into a general USB webcam server once the microcontroller's frame rate became the limit.",
        ],
        bullets: [
          "Live video over MJPEG on the local network, with an authenticated web UI.",
          "YOLO11 ONNX inference at 640 px, with boxes, labels and per-class counts on frame.",
          "Continuous recording to disk, plus per-session playback at real-time pacing.",
          "Brightness, contrast and saturation controls that write straight to the camera.",
          "Single JPEG and WebSocket endpoints for clients that buffer or block MJPEG.",
        ],
      },
      {
        heading: "The tunnel problem",
        body: [
          "Cloudflare quick tunnels buffer multipart MJPEG, so a stream that is smooth on the LAN turns into a slideshow the moment it leaves the building. The page detects a trycloudflare.com hostname and switches to pushing individual JPEG frames over a WebSocket, with a polling fallback if the socket cannot connect.",
          "That single decision is the difference between the camera being useful remotely and being useless, and it is the part that needed the most measurement rather than guesswork.",
        ],
      },
      {
        heading: "Detection tuning",
        body: [
          "Detection settings sit at the top of the server file so they can be changed without reading the pipeline: confidence 0.30, NMS 0.45, 640 px input, JPEG quality 70. YOLO11s at 640 px is noticeably more accurate on small objects; YOLO11n runs about three times faster and is the better choice when the machine is doing other work.",
          "Every endpoint sits behind HTTP basic auth, with the credentials and model path supplied as environment variables so nothing sensitive is committed.",
        ],
      },
    ],
    specs: [
      { label: "Model", value: "YOLO11s / YOLO11n, ONNX, COCO 80 classes" },
      { label: "Transport", value: "MJPEG over HTTP, WebSocket push, JPEG polling" },
      { label: "Server", value: "Python, OpenCV, Flask/WSGI, threaded capture" },
      { label: "Auth", value: "HTTP basic auth on every endpoint" },
      { label: "Recording", value: "Continuous session files with in-browser playback" },
      { label: "Remote", value: "Cloudflare quick tunnel, auto-detected transport" },
    ],
  },
  {
    slug: "hybrid-energy",
    index: "03",
    title: "Hybrid PV-wind-battery feasibility study",
    shortTitle: "Hybrid energy study",
    year: "2026",
    domains: ["Energy"],
    lede:
      "A full techno-economic study for DUT's Steve Biko Campus: room-level load audit, hourly dispatch simulation, sizing sweep and LCOE analysis for a solar-wind-battery hybrid.",
    role: "Modelling, simulation and report (RENE301)",
    status: "Complete, 67% renewable fraction",
    stack: ["Python", "NumPy", "pandas", "PVWatts loss model", "Weibull resource model", "python-docx"],
    featured: true,
    cover: "energy",
    coverCaption: "2 MWp PV, 2 x 100 kW wind, 2 MWh LFP storage against a 3,670 MWh/yr campus load.",
    metrics: [
      { value: "67.2", unit: "%", label: "Renewable fraction of annual load" },
      { value: "R2.32", unit: "/kWh", label: "LCOE against R2.93 grid parity" },
      { value: "6", unit: "yrs", label: "Simple payback on R52.6m capex" },
      { value: "2,270", unit: "t/yr", label: "Grid CO2 avoided" },
    ],
    sections: [
      {
        heading: "The question",
        body: [
          "DUT's Steve Biko Campus buys almost all of its electricity from eThekwini at a blended R2.93/kWh, with annual load near 3,670 MWh. The study asked a specific question: what hybrid renewable system would actually cut that bill and keep the campus running through an outage, and what would it cost per kWh?",
          "The answer had to be defensible, so every assumption was written down: tariffs by season and block, PV loss factors from PVWatts defaults, battery round-trip efficiency, and a wind resource that had to be extrapolated because no published Weibull fit exists for Durban.",
        ],
      },
      {
        heading: "Method",
        bullets: [
          "Bottom-up load audit across campus blocks and rooms, converted into an hourly load profile with class schedules applied.",
          "PV yield from hourly GHI with temperature derating and system losses; wind yield from a Weibull fit (k = 1.99, c = 5.37 m/s, mean 4.76 m/s at 80 m).",
          "Hourly dispatch simulation with battery state of charge, grid import, export and curtailment limits.",
          "Sizing sweep across PV, turbine count and battery capacity to find the best renewable fraction per rand.",
          "Economics from capex, opex, tariff escalation and discount rate: NPV, IRR, payback and LCOE, then a sensitivity pass on the assumptions that matter.",
        ],
      },
      {
        heading: "What the numbers say",
        body: [
          "The selected design is 2 MWp of PV, two 100 kW turbines and 2 MWh of LFP storage. It delivers a 67.2% renewable fraction with 79.8% self-consumption, importing 1,260 MWh and exporting 610 MWh a year.",
          "Solar does almost all of the work: 94.5% of renewable energy comes from PV. Wind adds resilience and night-time coverage but at R16.57/kWh on its own it is not an economic play at Durban's wind speeds. The hybrid LCOE lands at R2.32/kWh against R2.93/kWh from the grid, with a 6-year payback, R95.8m NPV and 21.7% IRR.",
          "Storage sized at 2 MWh gives 31.5 hours of backup for the 57.2 kW critical load, which is the number facilities management actually cares about. The study avoids claiming more than the model supports: single-year typical meteorological year data, an extrapolated wind resource, and tariff escalation that may not hold through 2030.",
        ],
      },
      {
        heading: "Engineering beyond the spreadsheet",
        body: [
          "The report frames the work against ECSA's engineer-and-the-world outcome: load shedding exposure, municipal grid constraints, and the fact that a campus is a community before it is a load. The recommendation is a phased build that starts with PV and storage, because that is where the economics are, and leaves space for wind if the resource is measured on site rather than extrapolated.",
        ],
      },
    ],
    specs: [
      { label: "Design", value: "2,000 kWp PV, 2 x 100 kW wind, 2,000 kWh LFP" },
      { label: "Annual load", value: "3,670 MWh, critical load 57.2 kW" },
      { label: "Generation", value: "2,922 MWh PV, 169 MWh wind" },
      { label: "Renewable fraction", value: "67.2%, self-consumption 79.8%" },
      { label: "Capex / opex", value: "R52.6m / R365k per year" },
      { label: "Returns", value: "NPV R95.8m, IRR 21.7%, payback 6 years" },
      { label: "Backup", value: "31.5 hours at critical load" },
    ],
    links: [
      { label: "Feasibility report (DOCX, 1 MB)", href: "/files/hybrid-feasibility-study.docx" },
    ],
    gallery: [
      {
        src: "/images/energy/block-diagram.png",
        alt: "Block diagram of the hybrid PV, wind, battery and grid system",
        caption: "System block diagram: PV and wind through their converters, LFP storage, and a bidirectional grid connection.",
        width: 1600,
        height: 1002,
      },
      {
        src: "/images/energy/daily-profile.png",
        alt: "Line chart of a 24-hour load and generation profile",
        caption: "A 24-hour dispatch window: the midday PV peak, the evening load peak, and what storage has to carry between them.",
        width: 1464,
        height: 567,
      },
      {
        src: "/images/energy/monthly-balance.png",
        alt: "Stacked bar chart of monthly energy balance",
        caption: "Monthly energy balance across the year, including grid import and export.",
        width: 1080,
        height: 540,
      },
      {
        src: "/images/energy/cashflow.png",
        alt: "Cumulative cash flow chart over the project lifetime",
        caption: "Cumulative cash flow: the crossover point is the payback year.",
        width: 960,
        height: 495,
      },
      {
        src: "/images/energy/lcoe.png",
        alt: "Bar chart comparing LCOE of PV only, wind only, hybrid and grid",
        caption: "LCOE comparison. Wind on its own is not competitive at Durban's mean wind speed.",
        width: 900,
        height: 495,
      },
      {
        src: "/images/energy/sensitivity.png",
        alt: "Tornado chart of sensitivity analysis",
        caption: "Sensitivity of the result to capex, tariffs, discount rate and resource assumptions.",
        width: 990,
        height: 510,
      },
    ],
  },
  {
    slug: "cars4mars",
    index: "04",
    title: "Cars4Mars rover",
    shortTitle: "Cars4Mars rover",
    year: "2026",
    domains: ["Robotics", "Hardware"],
    lede:
      "A 6-wheel rocker-bogie rover built with the DUT SSC Mars Rover Team for the national Cars4Mars competition: terrain-adaptive drive, an 80 m wireless link, and onboard vision for target detection.",
    role: "Power and electronics, team contributor",
    status: "Competition-ready platform, next-gen rover in design",
    stack: ["Embedded C", "Motor control", "Power electronics", "Computer vision", "Wireless comms"],
    featured: true,
    cover: "cars4mars",
    coverCaption: "6-wheel rocker-bogie chassis with a modular electronics bay and forward camera mast.",
    metrics: [
      { value: "6", unit: "wheels", label: "Independent drive, rocker-bogie link" },
      { value: "80", unit: "m", label: "Wireless control and video range" },
      { value: "400", unit: "pts", label: "Traversal plus autonomy mission total" },
      { value: "3", unit: "classes", label: "Hammer, tennis ball, traffic cone" },
    ],
    sections: [
      {
        heading: "The platform",
        body: [
          "The current rover is a 6-wheel, independently driven chassis with a rocker-bogie inspired suspension that keeps all wheels loaded on sand, rock and slope transitions. It is built in-house with a modular, repairable layout so a failed module can be swapped between runs rather than ending the day.",
          "It is wirelessly controlled to about 80 m with an onboard camera feed, and runs object detection for the three competition targets: a hammer, a tennis ball and a traffic cone.",
        ],
      },
      {
        heading: "Mission profile",
        bullets: [
          "Launch stage: technical report, video and presentation before the field runs.",
          "Mars stage: traversal for 250 points, then autonomous operation for 150 points.",
          "Video streaming is scored as infrastructure: losing the feed carries a 60% penalty, so the link budget and the encoder settings matter as much as the drive train.",
          "Balloon detection and sequential waypoint navigation under competition time pressure.",
        ],
      },
      {
        heading: "Electronics and power",
        body: [
          "The electronics bay carries motor drive, power distribution and the compute module for vision. The design tension is always the same: more compute means more current, and more current means less runtime on a battery pack that has to stay inside the mass budget.",
          "Power distribution is built around replaceable modules with current-limited rails, so a shorted sensor does not take out the drive. Telemetry and video share the wireless link, which is why the video path is treated as a first-class subsystem rather than an accessory.",
        ],
      },
      {
        heading: "Next rover",
        body: [
          "The follow-on design moves from competition prototype to research platform: a larger chassis and payload bay for scientific instruments, AI and SLAM navigation instead of waypoint following, a power system sized for longer missions, and ruggedisation for harsher terrain and greater range.",
        ],
      },
    ],
    specs: [
      { label: "Chassis", value: "6-wheel independent drive, rocker-bogie inspired" },
      { label: "Link", value: "Wireless control and video to ~80 m" },
      { label: "Vision", value: "Onboard camera with YOLO target detection" },
      { label: "Targets", value: "Hammer, tennis ball, traffic cone" },
      { label: "Mission", value: "250 pts traversal + 150 pts autonomy" },
      { label: "Team", value: "Mechanical, power and electronics, software/AI" },
    ],
    links: [
      { label: "Symposium slides (PPTX, 2.8 MB)", href: "/files/cars4mars-symposium-2026.pptx" },
    ],
    gallery: [
      {
        src: "/images/cars4mars/rover-01.jpg",
        alt: "Cars4Mars rover project photograph",
        caption: "From the build and test archive.",
        width: 960,
        height: 1280,
      },
      {
        src: "/images/cars4mars/rover-02.jpg",
        alt: "Cars4Mars rover project photograph",
        caption: "",
        width: 960,
        height: 1280,
      },
      {
        src: "/images/cars4mars/rover-03.jpg",
        alt: "Cars4Mars rover project photograph",
        caption: "",
        width: 1400,
        height: 1867,
      },
      {
        src: "/images/cars4mars/rover-04.jpg",
        alt: "Cars4Mars rover project photograph",
        caption: "",
        width: 960,
        height: 1280,
      },
      {
        src: "/images/cars4mars/rover-05.jpg",
        alt: "Cars4Mars rover project photograph",
        caption: "",
        width: 900,
        height: 1600,
      },
    ],
  },
  {
    slug: "skytracker",
    index: "05",
    title: "SkyTracker",
    shortTitle: "SkyTracker",
    year: "2026",
    domains: ["Software"],
    lede:
      "A live airspace map. A Python backend merges aircraft reports from 40+ global sample points, keeps them hot in memory, and feeds a Leaflet front end that redraws the sky every five seconds.",
    role: "Solo build: data pipeline, API, front end",
    status: "Running locally",
    stack: ["Python", "Flask", "airplanes.live API", "Leaflet", "JavaScript", "CartoDB"],
    featured: false,
    cover: "skytracker",
    coverCaption: "Sampling grid, merged fleet cache and a dark map front end with altitude-coded markers.",
    metrics: [
      { value: "40+", unit: "points", label: "Global sample centres" },
      { value: "250", unit: "nm", label: "Radius sampled per centre" },
      { value: "4", unit: "s", label: "Server-side refresh" },
      { value: "5", unit: "s", label: "Browser redraw interval" },
    ],
    sections: [
      {
        heading: "The constraint",
        body: [
          "Public flight data is served as a point and radius query: give a latitude and longitude, get the aircraft within so many nautical miles. There is no single call that returns the world. To draw a global picture you have to sample many centres, merge the results, and hide that fan-out behind one fast endpoint.",
        ],
      },
      {
        heading: "How it works",
        bullets: [
          "A background thread walks 40+ sample centres across six continents at 250 nm each, 100 ms apart, respecting the upstream rate limit.",
          "Aircraft are deduplicated by ICAO hex so a plane seen by three overlapping samples appears once.",
          "The merged fleet is cached in memory and served from a single /api/flights endpoint with a server timestamp.",
          "The front end polls every 5 seconds and diffs markers by hex, updating position and heading instead of rebuilding the layer.",
        ],
      },
      {
        heading: "Front end",
        body: [
          "The map is a dark CartoDB basemap with altitude-coded aircraft: red on the ground, amber below 20,000 ft, green to 35,000 ft, cyan above. Markers scale with zoom and labels appear once you are close enough for them to be readable.",
          "Search works across callsign, hex and operator, and there is a follow mode that keeps a selected aircraft centred while it moves. Filters cover airborne and ground traffic, and a live panel reports the source, aircraft count and update time so it is obvious when the feed is stale.",
        ],
      },
    ],
    specs: [
      { label: "Upstream", value: "airplanes.live point query, 250 nm radius" },
      { label: "Coverage", value: "40+ sample centres, 6 continents" },
      { label: "Caching", value: "In-memory fleet cache, 4 s refresh" },
      { label: "API", value: "Flask /api/flights, JSON with server time" },
      { label: "Front end", value: "Leaflet, dark basemap, 5 s diffed updates" },
      { label: "Units", value: "Feet and knots, converted from metric source" },
    ],
  },
  {
    slug: "scanner",
    index: "06",
    title: "Signature malware scanner",
    shortTitle: "Malware scanner",
    year: "2026",
    domains: ["Software", "Security"],
    lede:
      "A Windows malware scanner with a threaded scan engine, hash and content signatures, entropy checks, SQLite-backed quarantine and a Flask control panel.",
    role: "Solo build: detection engine, API, UI",
    status: "Working prototype",
    stack: ["Python", "Flask", "SQLite", "python-magic", "ctypes", "ThreadPoolExecutor"],
    featured: false,
    cover: "scanner",
    coverCaption: "Four detection layers feeding a risk score, with quarantine and history in SQLite.",
    metrics: [
      { value: "4", unit: "layers", label: "Hash, content, extension, entropy" },
      { value: "22", unit: "types", label: "High-risk file extensions" },
      { value: "8", unit: "workers", label: "Parallel directory scan" },
      { value: "100", unit: "%", label: "Quarantine actions reversible" },
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "A scanner is a good exercise in restraint: every additional heuristic buys detection at the cost of false positives, and a security tool that cries wolf gets switched off. This one scores files across four independent signals and only escalates when they agree.",
        ],
        bullets: [
          "Known-bad hashes: MD5 and SHA-256 against a signature database.",
          "Content signatures and suspicious patterns scanned inside text and script files.",
          "Extension risk weighting across 22 executable and script types.",
          "Shannon entropy, which flags packed or encrypted payloads that hide their strings.",
        ],
      },
      {
        heading: "Quarantine, properly",
        body: [
          "Detection without recovery is just damage. Quarantined files are moved, renamed and recorded in SQLite with their original path, threat name and severity, so restore puts the file back exactly where it came from. Delete is a separate, explicit action.",
          "Scan history is stored the same way: type, target, files scanned, threats found, and duration, which makes it possible to see whether a machine is getting worse over time.",
        ],
      },
      {
        heading: "Speed and posture",
        body: [
          "Directory scans run on a thread pool of eight workers with progress callbacks piped into the Flask API, so the UI shows a live count instead of a spinner. The same panel reports running processes, startup items, installed software and security status, and can clear temp files and browser caches.",
          "The engine and the web layer are deliberately separate: scanner.py can be imported and driven from a script, and app.py only adds HTTP and a job state machine on top of it.",
        ],
      },
    ],
    specs: [
      { label: "Detection", value: "Hash, content pattern, extension, entropy" },
      { label: "Signatures", value: "10 families, 10 suspicious patterns" },
      { label: "Quarantine", value: "SQLite metadata, restore or delete" },
      { label: "Concurrency", value: "ThreadPoolExecutor, 8 workers, progress stream" },
      { label: "Interface", value: "Flask JSON API and single-page control panel" },
      { label: "Platform", value: "Windows (ctypes, registry and process APIs)" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacent(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? projects[i - 1] : projects[projects.length - 1],
    next: i < projects.length - 1 ? projects[i + 1] : projects[0],
  };
}
