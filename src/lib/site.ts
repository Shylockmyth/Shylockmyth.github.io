const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://ntuthukomdunge.com").replace(
  /\/+$/,
  "",
);

export const site = {
  name: "NTUTHUKO MDUNGE",
  shortName: "NTUTHUKO",
  domain: siteUrl.replace(/^https?:\/\//, ""),
  url: siteUrl,
  email: "hello@ntuthukomdunge.com",
  location: "Durban, South Africa",
  timeZone: "Africa/Johannesburg",
  discipline: "Electrical & Computer Engineering",
  institution: "Durban University of Technology",
  availability: "Open to 2027 graduate roles",
  year: "2026",
  description:
    "Electrical & Computer Engineering student at DUT. Embedded systems, PCB design, computer vision and energy modelling. Selected engineering work and case studies.",
};

export const nav = [
  { href: "/work/", label: "Work", index: "01" },
  { href: "/about/", label: "About", index: "02" },
  { href: "/contact/", label: "Contact", index: "03" },
];

export const capabilities = [
  {
    index: "01",
    title: "Embedded & firmware",
    blurb:
      "Bare-metal and RTOS work on ARM Cortex-M, sensor buses, motor control and serial protocols.",
    items: [
      "STM32 / ARM Cortex-M",
      "C / C++",
      "SPI · I2C · UART · CAN",
      "PWM & motor drivers",
      "FreeRTOS",
      "JTAG / SWD debug",
    ],
  },
  {
    index: "02",
    title: "Hardware & PCB",
    blurb:
      "Schematic capture through to stackup, impedance-controlled routing and design-for-manufacture.",
    items: [
      "Schematic capture",
      "Multisim / Ultiboard",
      "KiCad",
      "6-layer stackups",
      "Impedance control",
      "DFM & BOM",
    ],
  },
  {
    index: "03",
    title: "Software & vision",
    blurb:
      "Python and TypeScript systems: data pipelines, real-time streaming, and on-frame inference.",
    items: [
      "Python · Flask",
      "TypeScript / React",
      "OpenCV",
      "YOLO11 · ONNX",
      "WebSockets",
      "SQLite",
    ],
  },
  {
    index: "04",
    title: "Energy systems",
    blurb: "Hourly simulation and techno-economic modelling of hybrid renewable systems.",
    items: [
      "PV & wind resource models",
      "Dispatch simulation",
      "Battery sizing",
      "LCOE · NPV · IRR",
      "NumPy / pandas",
      "Sensitivity analysis",
    ],
  },
];

export const trackRecord = [
  {
    period: "2026",
    title: "Cars4Mars rover team",
    org: "DUT Space Science Centre",
    detail:
      "Power and electronics on a 6-wheel rocker-bogie rover entered in the national Mars rover competition.",
  },
  {
    period: "2026",
    title: "Hybrid PV-wind-battery feasibility study",
    org: "RENE301 · Durban University of Technology",
    detail:
      "2 MWp / 200 kW / 2 MWh design for the Steve Biko Campus, carried from load audit to LCOE and sensitivity.",
  },
  {
    period: "2025 – 26",
    title: "Independent hardware and software builds",
    org: "Self-directed",
    detail:
      "A 6-layer security-testing PCB, a live YOLO camera server, an aircraft tracking platform and a malware scanner.",
  },
  {
    period: "2023 – present",
    title: "BEng Tech, Electrical & Computer Engineering",
    org: "Durban University of Technology",
    detail:
      "Power systems, electronics, embedded design and control, with a focus on hardware-software integration.",
  },
];

export const toolchain = [
  {
    group: "Languages",
    items: ["Python", "C", "C++", "TypeScript", "JavaScript", "SQL"],
  },
  {
    group: "Embedded",
    items: ["STM32", "ARM Cortex-M", "ESP32", "FreeRTOS", "OpenCV", "ONNX Runtime"],
  },
  {
    group: "Hardware",
    items: ["Multisim", "Ultiboard", "KiCad", "LTspice", "Soldering", "Bench debug"],
  },
  {
    group: "Software",
    items: ["Flask", "React", "Next.js", "Node.js", "SQLite", "Git", "Linux"],
  },
  {
    group: "Energy",
    items: ["NumPy", "pandas", "Matplotlib", "PVWatts model", "Weibull fits", "python-docx"],
  },
];
