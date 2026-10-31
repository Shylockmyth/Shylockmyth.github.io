const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://ntuthukomdunge.com").replace(
  /\/+$/,
  "",
);

export const site = {
  name: "NTUTHUKO MDUNGE",
  shortName: "NTUTHUKO",
  domain: siteUrl.replace(/^https?:\/\//, ""),
  url: siteUrl,
  github: "https://github.com/Shylockmyth",
  githubHandle: "Shylockmyth",
  linkedin: "https://www.linkedin.com/in/ntuthuko-mdunge-4b8949258",
  linkedinHandle: "ntuthuko-mdunge-4b8949258",
  location: "Durban, South Africa",
  timeZone: "Africa/Johannesburg",
  discipline: "Electronic Engineering",
  institution: "Durban University of Technology",
  availability: "Studying · happy to help with projects",
  year: "2026",
  description:
    "Electronic engineering student at DUT. Broad electronics work across analogue and embedded design, PCB layout, software, signals and energy modelling, with selected case studies.",
};

export const nav = [
  { href: "/work/", label: "Work", index: "01" },
  { href: "/awards/", label: "Awards", index: "02" },
  { href: "/running/", label: "Running", index: "03" },
  { href: "/about/", label: "About", index: "04" },
  { href: "/contact/", label: "Contact", index: "05" },
];

export const capabilities = [
  {
    index: "01",
    title: "Electronics & embedded",
    blurb:
      "Circuit design from the component level up: analogue signal chains, sensors, motor drive and firmware that talks to real hardware.",
    items: [
      "Analogue circuit design",
      "Arduino / ATmega",
      "STM32 & ESP32",
      "Sensors & signal conditioning",
      "Motor drivers & PWM",
      "I2C · SPI · UART",
    ],
  },
  {
    index: "02",
    title: "Hardware & PCB",
    blurb:
      "Schematic capture, simulation, through-hole and SMT assembly, and board layouts that can actually be built and repaired.",
    items: [
      "Schematic capture",
      "Multisim / Ultiboard",
      "Proteus",
      "PCB layout & assembly",
      "Soldering & rework",
      "Bench test & debug",
    ],
  },
  {
    index: "03",
    title: "Software & data",
    blurb:
      "Python and TypeScript tools for measurement, modelling and interfaces, from a live camera server to a machine-learning surrogate.",
    items: [
      "Python",
      "C / C++",
      "TypeScript / React",
      "OpenCV · YOLO11",
      "XGBoost · scikit-learn",
      "Flask · Git · Linux",
    ],
  },
  {
    index: "04",
    title: "Energy & signals",
    blurb:
      "Engineering analysis that has to add up: renewable resource modelling, hourly dispatch, DSP and communication systems.",
    items: [
      "PV & wind resource models",
      "Battery dispatch simulation",
      "LCOE · NPV · IRR",
      "MATLAB / NumPy / pandas",
      "DSP & adaptive filters",
      "FSK & signal generation",
    ],
  },
];

export const trackRecord = [
  {
    period: "2026",
    title: "SATNAC Industry Solutions Challenge winner",
    org: "Telkom topic · SignalMyth",
    detail:
      "An XGBoost surrogate for LTE RSRP coverage, validated on real Durban terrain at 2.63 dB RMSE and about 18x faster than the reference model.",
  },
  {
    period: "2026",
    title: "Hybrid solar-wind-battery feasibility study",
    org: "RENE301 · Durban University of Technology",
    detail:
      "A 2,587 kWp PV, 100 kW wind and 1,376 kWh storage design for the Steve Biko S-Block, from appliance audit to 25-year NPV.",
  },
  {
    period: "2026",
    title: "Cars4Mars rover team",
    org: "DUT Space Science Centre",
    detail:
      "Power and electronics on a 6-wheel rocker-bogie rover entered in the national Mars rover competition.",
  },
  {
    period: "2025",
    title: "BRICS Bronze — Dr Kiosk",
    org: "2025 BRICS Skills Development & Technology Innovation",
    detail:
      "Bronze prize in the Technology Innovation Competition for a medical self-service kiosk, with the DUT team.",
  },
  {
    period: "2025",
    title: "JCI hackathon — second place",
    org: "Junior Chamber International",
    detail:
      "Second place in a team hackathon, building and pitching a working solution under time pressure.",
  },
  {
    period: "2025",
    title: "FNB App Academy certificate",
    org: "FNB · IT varsity",
    detail:
      "Certificate in Full Stack Development, 32 credits, covering the application development stack from front end to data.",
  },
  {
    period: "2023 – present",
    title: "BEng Tech, Electronic Engineering",
    org: "Durban University of Technology",
    detail:
      "Power systems, electronics, embedded design, signals and control, with a focus on hardware-software integration.",
  },
];

export const toolchain = [
  {
    group: "Languages",
    items: ["Python", "C", "C++", "TypeScript", "MATLAB", "SQL"],
  },
  {
    group: "Electronics",
    items: ["Multisim", "Ultiboard", "Proteus", "KiCad", "LTspice", "Oscilloscope"],
  },
  {
    group: "Embedded",
    items: ["Arduino / ATmega", "STM32", "ESP32", "Sensor interfaces", "Motor drive", "Bench debug"],
  },
  {
    group: "Software & AI",
    items: ["OpenCV", "YOLO11", "XGBoost", "scikit-learn", "Flask", "React", "Git", "Linux"],
  },
  {
    group: "Energy & signals",
    items: ["PVGIS", "NumPy / pandas", "Dispatch models", "LCOE / NPV", "LMS / DSP", "FSK"],
  },
];
