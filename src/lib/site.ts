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
  cv: "/cv/Ntuthuko-Mdunge-CV.pdf",
  location: "Durban, South Africa",
  timeZone: "Africa/Johannesburg",
  discipline: "Electronic Engineering",
  tagline: "SATNAC Innovator of the Year",
  institution: "Durban University of Technology",
  availability: "Open to vacation work and graduate roles from 2027",
  availabilityShort: "Open to 2027 opportunities",
  year: "2026",
  description:
    "Electronic engineering student at DUT and SATNAC 2026 Innovator of the Year. Broad electronics work across analogue and embedded design, PCB layout, software, signals and energy modelling, with selected case studies.",
};

export const nav = [
  { href: "/work/", label: "Work", index: "01" },
  { href: "/awards/", label: "Awards", index: "02" },
  { href: "/about/", label: "About", index: "03" },
  { href: "/contact/", label: "Contact", index: "04" },
  { href: "/running/", label: "Running", index: "05" },
];

export type CapabilityItem = {
  label: string;
  slug?: string;
  project?: string;
};

export const capabilities: {
  index: string;
  title: string;
  blurb: string;
  items: CapabilityItem[];
}[] = [
  {
    index: "01",
    title: "Electronics & embedded",
    blurb:
      "Circuit design from the component level up: analogue signal chains, sensors, motor drive and firmware that talks to real hardware.",
    items: [
      { label: "Analogue circuit design", slug: "ir-sensor", project: "IR sensor" },
      { label: "Arduino / ATmega", slug: "ldr-tracker", project: "LDR tracker" },
      { label: "ESP32 & STM32", slug: "cars4mars", project: "Cars4Mars" },
      { label: "Sensors & signal conditioning", slug: "ir-sensor", project: "IR sensor" },
      { label: "Motor drivers & PWM", slug: "ldr-tracker", project: "LDR tracker" },
      { label: "I2C · SPI · UART", slug: "ldr-tracker", project: "LDR tracker" },
    ],
  },
  {
    index: "02",
    title: "Hardware & PCB",
    blurb:
      "Schematic capture, simulation, through-hole and SMT assembly, and board layouts that can actually be built and repaired.",
    items: [
      { label: "Schematic capture", slug: "ir-sensor", project: "IR sensor" },
      { label: "Multisim / Ultiboard", slug: "motion-detector", project: "Motion detector" },
      { label: "Proteus", slug: "ldr-tracker", project: "LDR tracker" },
      { label: "PCB layout & assembly", slug: "ir-sensor", project: "IR sensor" },
      { label: "Soldering & rework", slug: "motion-detector", project: "Motion detector" },
      { label: "Bench test & debug", slug: "fsk-generator", project: "FSK study" },
    ],
  },
  {
    index: "03",
    title: "Software & data",
    blurb:
      "Python and TypeScript tools for measurement, modelling and interfaces, from a live camera server to a machine-learning surrogate.",
    items: [
      { label: "Python", slug: "signalmyth", project: "SignalMyth" },
      { label: "C / C++", slug: "ldr-tracker", project: "LDR tracker" },
      { label: "TypeScript / React" },
      { label: "OpenCV · YOLO11", slug: "vision-detector", project: "AI camera" },
      { label: "XGBoost · scikit-learn", slug: "signalmyth", project: "SignalMyth" },
      { label: "Flask · Git · Linux", slug: "vision-detector", project: "AI camera" },
    ],
  },
  {
    index: "04",
    title: "Energy & signals",
    blurb:
      "Engineering analysis that has to add up: renewable resource modelling, hourly dispatch, DSP and communication systems.",
    items: [
      { label: "PV & wind resource models", slug: "hybrid-energy", project: "Energy study" },
      { label: "Battery dispatch simulation", slug: "hybrid-energy", project: "Energy study" },
      { label: "LCOE · NPV · IRR", slug: "hybrid-energy", project: "Energy study" },
      { label: "MATLAB / NumPy / pandas", slug: "adaptive-filter", project: "Adaptive filters" },
      { label: "DSP & adaptive filters", slug: "adaptive-filter", project: "Adaptive filters" },
      { label: "FSK & signal generation", slug: "fsk-generator", project: "FSK study" },
    ],
  },
];

export const trackRecord = [
  {
    period: "2026",
    title: "SATNAC winner · Innovator of the Year",
    org: "Telkom topic · SignalMyth",
    detail:
      "Won the Telkom topic and was named Innovator of the Year for the best solution: an XGBoost surrogate for LTE RSRP coverage, validated on real Durban terrain at 2.63 dB RMSE and about 18x faster than the reference model.",
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
      "Team lead and power/electronics on a 6-wheel rocker-bogie rover entered in the national Mars rover competition.",
  },
  {
    period: "2026",
    title: "Chairperson, House Committee",
    org: "DUT Alpine Residence",
    detail:
      "Led the residence house committee: student concerns, events and day-to-day residence life, alongside full-time study.",
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
    period: "2023 – present",
    title: "BEng Tech, Electronic Engineering",
    org: "Durban University of Technology",
    detail:
      "Power systems, electronics, embedded design, signals and control, with a focus on hardware-software integration. Expected completion 2027.",
  },
];

export const leadership = [
  {
    period: "2026",
    title: "Chairperson, House Committee",
    org: "DUT Alpine Residence",
    detail:
      "Elected to lead the residence house committee, representing students and running events and day-to-day residence life alongside the BEng Tech.",
  },
  {
    period: "2026",
    title: "Team leader",
    org: "SignalMyth · SATNAC 2026",
    detail:
      "Led the team behind the LTE coverage surrogate that won the Telkom topic and Innovator of the Year at SATNAC 2026.",
  },
  {
    period: "2026",
    title: "Team leader",
    org: "DUT Space Science Centre Mars Rover Team",
    detail:
      "Led the student team building the Cars4Mars rover, with responsibility for the build plan, integration and competition delivery.",
  },
  {
    period: "Mar – Jun 2026",
    title: "Tutor, Fundamentals of Power Engineering",
    org: "Durban University of Technology",
    detail:
      "Tutored first-year power engineering students through the module content and practical work, including bench demonstrations.",
  },
  {
    period: "2025",
    title: "Captain, DUT Chess Team",
    org: "DUT Chess Club · CHESSA",
    detail:
      "Captained the university team and competed in national and university-level tournaments.",
  },
];

export const toolchain = [
  {
    group: "Languages",
    items: ["Python", "C", "C++", "TypeScript", "MATLAB", "SQL"],
    evidence: [
      { label: "SignalMyth", slug: "signalmyth" },
      { label: "AI camera", slug: "vision-detector" },
      { label: "LDR tracker", slug: "ldr-tracker" },
    ],
  },
  {
    group: "Electronics",
    items: ["Multisim", "Ultiboard", "Proteus", "KiCad", "LTspice", "Oscilloscope"],
    evidence: [
      { label: "IR sensor", slug: "ir-sensor" },
      { label: "Motion detector", slug: "motion-detector" },
      { label: "LDR tracker", slug: "ldr-tracker" },
    ],
  },
  {
    group: "Embedded",
    items: ["Arduino / ATmega", "STM32", "ESP32", "Sensor interfaces", "Motor drive", "Bench debug"],
    evidence: [
      { label: "LDR tracker", slug: "ldr-tracker" },
      { label: "Cars4Mars", slug: "cars4mars" },
    ],
  },
  {
    group: "Software & AI",
    items: ["OpenCV", "YOLO11", "XGBoost", "scikit-learn", "Flask", "React", "Git", "Linux"],
    evidence: [
      { label: "SignalMyth", slug: "signalmyth" },
      { label: "AI camera", slug: "vision-detector" },
    ],
  },
  {
    group: "Energy & signals",
    items: ["PVGIS", "NumPy / pandas", "Dispatch models", "LCOE / NPV", "LMS / DSP", "FSK"],
    evidence: [
      { label: "Energy study", slug: "hybrid-energy" },
      { label: "Adaptive filters", slug: "adaptive-filter" },
      { label: "FSK study", slug: "fsk-generator" },
    ],
  },
];
