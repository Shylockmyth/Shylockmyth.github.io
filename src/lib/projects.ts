export type CoverId =
  | "energy"
  | "signal"
  | "cars4mars"
  | "detector"
  | "tracker"
  | "sensor"
  | "motion"
  | "spectrum"
  | "city"
  | "filter";

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
  note?: string;
};

export const domains = ["Hardware", "Software", "Robotics", "Energy", "Signals", "AI", "Analogue", "Modelling"] as const;

export const projects: Project[] = [
  {
    slug: "hybrid-energy",
    index: "01",
    title: "Hybrid solar-wind-battery feasibility study",
    shortTitle: "Hybrid energy study",
    year: "2026",
    domains: ["Energy", "Modelling"],
    lede:
      "A full feasibility, design and performance study for DUT's Steve Biko S-Block: appliance-level load audit, hourly simulation in MATLAB, sizing sweep and 25-year economics for a grid-connected solar-wind-battery system.",
    role: "Solo study: load audit, sizing, dispatch model and techno-economics (RENE301)",
    status: "Submitted · RENE301 practical project",
    stack: ["MATLAB", "PVGIS", "LFP storage", "Techno-economics", "Excel"],
    featured: true,
    cover: "energy",
    coverCaption:
      "Selected design: 2,587 kWp PV, one 100 kW turbine and 1,376 kWh of LFP storage on an 800 V DC bus.",
    metrics: [
      { value: "3.78", unit: "GWh/yr", label: "Audited annual demand" },
      { value: "2,587", unit: "kWp", label: "PV array, 4,704 modules" },
      { value: "75.4", unit: "%", label: "Load served by renewables" },
      { value: "R115.6", unit: "m", label: "25-year net present value" },
    ],
    sections: [
      {
        heading: "The question",
        body: [
          "The S-Block complex (blocks S5 to S10) is a daytime-peaked campus load: 381 audited appliance records, 2,618.3 kW connected, and 3.78 GWh of demand a year with a weekday peak of 1,963.6 kW. The study asked what hybrid renewable system could serve that load, how much of it could come from site generation, and whether the investment made sense over 25 years.",
          "It was not a paper exercise in sizing. The brief required a defensible load model, a real resource assessment for Durban, an hourly dispatch simulation, and an economic case with the assumptions exposed.",
        ],
      },
      {
        heading: "Load audit and profile",
        body: [
          "Every appliance record was grouped by building and by use: air-conditioning, lighting, plug loads, laboratory equipment and the overnight base load. Utilisation factors and the academic calendar were applied to turn connected power into an hourly demand profile rather than a flat annual figure.",
          "The audit gives 15,230.8 kWh/day of raw appliance energy and 10,359 kWh/day after diversity and scheduling. The resulting profile peaks in the middle of the teaching day, which matters: it lines up reasonably well with solar, but the evening base load and winter mornings still need storage or the grid.",
        ],
      },
      {
        heading: "Resource and sizing",
        body: [
          "Solar and wind data came from PVGIS for the site. The 30-degree north-facing plane receives 1,958 kWh/m2 a year, with a specific yield of about 1,504 kWh/kWp after 14% system losses. Wind is modest: 3.56 m/s at 10 m and 4.26 m/s at the 36 m hub, which already hints that the turbine will be a resilience component rather than an economic one.",
          "The system was sized with explicit equations, then checked against a 273-configuration sweep. The selected design is 2,587 kWp of PV (4,704 modules), one 100 kW wind turbine, a 1,376 kWh lithium iron phosphate battery (96 modules of 14.336 kWh, 16 in series per string) and 12 x 250 kW inverters on an 800 V DC bus.",
        ],
      },
      {
        heading: "Hourly dispatch",
        body: [
          "The model runs 8,760 hourly steps with a battery dispatch strategy that charges from surplus PV, discharges to cover the load when generation falls short, and respects state-of-charge limits and converter ratings. Grid import and export are metered separately, with export capped at 1,000 kW.",
          "The selected system supplies 75.4% of the load from renewables and avoids about 2,736 t of CO2 a year. Direct PV carries most of the daytime demand; the battery moves the midday surplus into the evening; the turbine contributes little because the site wind resource is weak. That is stated in the report rather than hidden: the design without wind has the higher NPV, and the turbine is included to meet the hybrid requirement.",
        ],
      },
      {
        heading: "The economics",
        body: [
          "At the assumed unit costs the capital cost is R66.1 million. Against a grid tariff of R2.93/kWh escalating at 7% a year, the 25-year net present value is R115.6 million, the internal rate of return is 21.6% and the simple payback is 5.5 years. The LCOE excludes export credits and is reported alongside the cash-flow result.",
          "The sensitivity pass is the honest part of the study. Unit costs were tested at 80%, 100% and 120%; the ranking of PV-plus-storage designs holds, but the absolute numbers move enough that quotations, not catalogue prices, are the next step. The wind result is the clearest example of an assumption that did not survive contact with the site data.",
        ],
      },
      {
        heading: "What I took from it",
        body: [
          "The engineering value was in the interfaces: the load audit feeds the dispatch model, the dispatch model feeds the economics, and a wrong diversity factor at the start shows up as a wrong inverter count at the end. Keeping those links explicit made the result easier to defend.",
          "The report recommends a phased build that starts with PV and storage, where the economics are strongest, and leaves room for wind only if the resource is measured on site rather than extrapolated. It is a feasibility study, not a construction drawing, and it says so.",
        ],
      },
    ],
    specs: [
      { label: "Annual load", value: "3.78 GWh, weekday peak 1,963.6 kW" },
      { label: "PV array", value: "2,587 kWp, 4,704 modules, 30° north" },
      { label: "Wind", value: "1 x 100 kW, 36 m hub" },
      { label: "Storage", value: "1,376 kWh LFP, 96 modules" },
      { label: "Conversion", value: "12 x 250 kW inverters, 800 V DC bus" },
      { label: "Renewable fraction", value: "75.4%" },
      { label: "Avoided emissions", value: "≈ 2,736 t CO2 per year" },
      { label: "Capex", value: "R66.1 million" },
      { label: "Returns", value: "NPV R115.6m, IRR 21.6%, payback 5.5 years" },
    ],
    gallery: [
      {
        src: "/images/hybrid-energy/block-diagram.jpg",
        alt: "Block diagram of the grid-connected hybrid PV, wind, battery and inverter system",
        caption: "System block diagram with the selected sizes and conversion stages.",
        width: 1220,
        height: 425,
      },
      {
        src: "/images/hybrid-energy/weekday-load.jpg",
        alt: "Modelled typical weekday demand for the S-Block by building block",
        caption: "Modelled typical weekday demand, split by building block.",
        width: 1500,
        height: 726,
      },
      {
        src: "/images/hybrid-energy/design-sweep.jpg",
        alt: "Renewable fraction and net present value for all 273 designs",
        caption: "The 273-design sweep: renewable fraction against 25-year NPV, grouped by battery size.",
        width: 1500,
        height: 797,
      },
      {
        src: "/images/hybrid-energy/daily-dispatch.jpg",
        alt: "Average 24-hour generation, load and battery power for January and July",
        caption: "Average daily dispatch in January and July: PV and wind at the DC bus, battery, load and grid.",
        width: 1220,
        height: 905,
      },
      {
        src: "/images/hybrid-energy/battery-soc.jpg",
        alt: "Battery state of charge over five consecutive days in January and July",
        caption: "Battery state of charge over five days in summer and winter.",
        width: 1220,
        height: 765,
      },
      {
        src: "/images/hybrid-energy/cash-flow.jpg",
        alt: "Cumulative nominal cash flow over 25 years",
        caption: "Cumulative nominal cash flow over the 25-year project life.",
        width: 1368,
        height: 835,
      },
    ],
    note:
      "The study is based on a typical meteorological year, assumed unit costs and an extrapolated wind resource. Quotations and on-site measurements are the stated next step, not a formality.",
  },
  {
    slug: "signalmyth",
    index: "02",
    title: "SignalMyth — LTE coverage surrogate model",
    shortTitle: "SignalMyth",
    year: "2026",
    domains: ["AI", "Signals", "Software"],
    lede:
      "An XGBoost surrogate that predicts LTE RSRP coverage from terrain and clutter in seconds instead of the seven to nine days taken by Telkom's manual ray-tracing workflow. Winner of the SATNAC 2026 Industry Solutions Challenge, Telkom topic.",
    role: "Pipeline, feature engineering, model training and validation (team entry)",
    status: "Winner · SATNAC 2026 Industry Solutions Challenge",
    stack: ["Python", "XGBoost", "SRTM", "ESA WorldCover", "rasterio", "scikit-learn"],
    featured: true,
    cover: "signal",
    coverCaption:
      "Learned coverage surface: terrain and clutter features replace the repeated ray-tracing run at inference time.",
    metrics: [
      { value: "2.63", unit: "dB", label: "RMSE against reference model" },
      { value: "0.958", unit: "", label: "R² on held-out real terrain" },
      { value: "~18×", unit: "", label: "Speedup over reference model" },
      { value: "17,411", unit: "pts", label: "Held-out test locations" },
    ],
    sections: [
      {
        heading: "The bottleneck",
        body: [
          "Mobile operators need accurate coverage maps for planning, optimisation and outage response. Telkom's manual ray-tracing tool produces high-fidelity LTE RSRP maps, but a single run takes roughly seven to nine days. That is too slow to re-run whenever a site is added, a antenna is adjusted, or a tower fails.",
          "The SATNAC 2026 Industry Solutions Challenge, set by Telkom, asked for a model that predicts coverage in seconds to minutes while at least halving the current execution time and preserving accuracy, with blocking obstacles properly represented.",
        ],
      },
      {
        heading: "The approach",
        body: [
          "SignalMyth treats the problem as surrogate modelling: learn the mapping from terrain, clutter and transmitter parameters to RSRP, then query that learned model instead of running the physics simulation for every new point.",
          "The pipeline is four Python modules with a single responsibility each. terrain.py builds an elevation and clutter grid; propagation.py produces reference RSRP values; dataset.py engineers features and labels; train.py fits, validates and times the model. Keeping the stages separate means a real ray-tracing source can replace the reference formula without touching the model code.",
        ],
      },
      {
        heading: "Features and model",
        body: [
          "Each training row is one receiver location relative to one transmitter. The features are distance and bearing, transmitter height, power and frequency, receiver elevation and elevation difference, and a one-hot clutter class (open, suburban, urban, dense urban, forest). The label is the reference RSRP in dBm.",
          "The baseline is an XGBoost gradient-boosted tree regressor: 300 estimators, maximum depth 6 and a learning rate of 0.08. It handles mixed continuous and categorical features well, trains quickly, and produces feature importances that an RF engineer can interrogate. Clutter class dominates, which matches how coverage actually behaves.",
        ],
      },
      {
        heading: "Real terrain, measured results",
        body: [
          "The final run used real SRTM 30 m elevation and real ESA WorldCover land cover for the Durban area: 87,052 generated rows, split 69,641 for training and 17,411 for testing. On that held-out set the surrogate achieved 2.63 dB RMSE, 1.81 dB MAE and an R² of 0.958, with about an 18x speedup over the reference model on a timed 2,000-point sample.",
          "The real-terrain run beat the earlier synthetic run on every accuracy metric and produced a visibly better map: road and coastline-correlated detail appears because it is present in the input data, not invented by the model. The report is explicit that the speedup is a per-point benchmark against the project's simplified reference model, not an audited comparison against Telkom's full ray-tracing run.",
        ],
      },
      {
        heading: "What remains",
        body: [
          "Two things separate this validated proof of concept from a Telkom-ready tool. The training labels still come from a physics-inspired reference formula rather than Telkom's real ray-tracing output, and tower configurations are placed programmatically rather than pulled from the operator's site database.",
          "The next steps are written into the report: validate against real SPLAT! or Telkom output, use the real site database, test spatial generalisation by holding out entire towers, compare against a CNN over rasterised tiles, and extend the validation beyond Durban. The pipeline was built so those swaps are substitutions, not rewrites.",
        ],
      },
      {
        heading: "Recognition",
        body: [
          "SignalMyth won the SATNAC 2026 Industry Solutions Challenge under the Telkom topic. The result is a useful proof that a learned surrogate can carry ray-tracing-quality structure on real geography while running in seconds, and that the hard part is often the data contract rather than the model.",
        ],
      },
    ],
    specs: [
      { label: "Problem", value: "LTE RSRP coverage prediction" },
      { label: "Model", value: "XGBoost, 300 trees, depth 6, learning rate 0.08" },
      { label: "Inputs", value: "SRTM 30 m elevation, ESA WorldCover clutter" },
      { label: "Training / test", value: "69,641 / 17,411 points" },
      { label: "Accuracy", value: "RMSE 2.63 dB, MAE 1.81 dB, R² 0.958" },
      { label: "Speedup", value: "~18x on a 2,000-point timed sample" },
      { label: "Baseline", value: "Telkom manual ray tracing, ~7–9 days per run" },
      { label: "Award", value: "SATNAC 2026 Industry Solutions Challenge winner" },
    ],
    gallery: [
      {
        src: "/images/signalmyth/poster.jpg",
        alt: "SignalMyth SATNAC 2026 A1 poster",
        caption: "The SATNAC 2026 entry poster: problem, pipeline, validation and the case for a learned surrogate.",
        width: 1500,
        height: 2124,
      },
    ],
  },
  {
    slug: "cars4mars",
    index: "03",
    title: "Cars4Mars rover",
    shortTitle: "Cars4Mars rover",
    year: "2026",
    domains: ["Robotics", "Hardware"],
    lede:
      "A 6-wheel rocker-bogie rover built with the DUT SSC Mars Rover Team for the national Cars4Mars competition: terrain-adaptive drive, an 80 m wireless link, and onboard vision for target detection.",
    role: "Power and electronics, team contributor",
    status: "Competition platform · next-generation rover in design",
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
          "The rover is a 6-wheel, independently driven chassis with a rocker-bogie inspired suspension that keeps the wheels loaded across sand, rock and slope transitions. It is built in-house with a modular, repairable layout so a failed module can be swapped between runs rather than ending the day.",
          "It is wirelessly controlled to about 80 m with an onboard camera feed, and runs object detection for the three competition targets: a hammer, a tennis ball and a traffic cone.",
        ],
      },
      {
        heading: "Mission profile",
        bullets: [
          "Launch stage: technical report, video and presentation before the field runs.",
          "Mars stage: traversal for 250 points, then autonomous operation for 150 points.",
          "Video streaming is scored as infrastructure: losing the feed carries a 60% penalty, so the link budget and encoder settings matter as much as the drive train.",
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
      { label: "Team", value: "Mechanical, power and electronics, software / AI" },
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
    slug: "vision-detector",
    index: "04",
    title: "Live AI camera detector",
    shortTitle: "AI camera detector",
    year: "2026",
    domains: ["Software", "AI"],
    lede:
      "A self-hosted camera server that streams live video to the browser, runs YOLO11 on every frame, records continuously, and stays usable over a Cloudflare tunnel.",
    role: "Solo build: server, streaming, front end, deployment",
    status: "Running · bench and site monitoring",
    stack: ["Python", "OpenCV", "ONNX Runtime", "YOLO11", "WebSockets", "Cloudflare Tunnel"],
    featured: false,
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
      { label: "Server", value: "Python, OpenCV, Flask / WSGI, threaded capture" },
      { label: "Auth", value: "HTTP basic auth on every endpoint" },
      { label: "Recording", value: "Continuous session files with in-browser playback" },
      { label: "Remote", value: "Cloudflare quick tunnel, auto-detected transport" },
    ],
  },
  {
    slug: "ldr-tracker",
    index: "05",
    title: "SMT-based LDR solar tracking sensor",
    shortTitle: "LDR solar tracker",
    year: "2026",
    domains: ["Hardware", "Embedded"],
    lede:
      "A four-quadrant light sensor that drives a dual-axis solar tracker: four LDRs and 10 k dividers into an Arduino Uno, an L298N motor stage, limit switches, an I2C display and a 300 ms control loop.",
    role: "Solo build: circuit design, Proteus simulation and firmware",
    status: "Simulated and breadboarded · Proteus model complete",
    stack: ["Arduino Uno", "Proteus", "LDR sensors", "L298N", "Embedded C"],
    featured: false,
    cover: "tracker",
    coverCaption:
      "Four-quadrant LDR bridge, differential threshold logic, and a dual-axis motor stage with limit protection.",
    metrics: [
      { value: "4", unit: "LDRs", label: "Quadrant light sensing" },
      { value: "10", unit: "kΩ", label: "Divider resistors per channel" },
      { value: "300", unit: "ms", label: "Control loop period" },
      { value: "40", unit: "/1023", label: "Light-difference threshold" },
    ],
    sections: [
      {
        heading: "The idea",
        body: [
          "A fixed solar panel only collects its best output for part of the day. This project builds the sensor and control layer for a tracker: four light-dependent resistors arranged as a quadrant sensor, an Arduino Uno to compare the readings, and a dual-axis motor drive that turns the panel toward the brighter side.",
          "The design was built and tested in Proteus first, with a virtual terminal standing in for the I2C display because the display model does not run in the simulation. That kept the circuit and firmware testable before anything was soldered.",
        ],
      },
      {
        heading: "Sensing",
        body: [
          "Each LDR sits in a 10 k voltage divider, so the analogue input rises as that quadrant gets brighter. The firmware samples all four channels, compares opposite pairs, and only moves an axis when the difference exceeds a threshold of 40 counts out of 1,023. The dead band stops the tracker from hunting on a slightly uneven sky.",
          "The four sensors are mounted in a cross with an opaque divider between them. That geometry matters more than the code: it turns a set of absolute light readings into a direction estimate, and it lets the same firmware work under different overall brightness levels.",
        ],
      },
      {
        heading: "Motion and safety",
        body: [
          "An L298N dual H-bridge drives two 12 V DC motors, one per axis. PWM is held at 150 out of 255 for a controlled slew instead of a slam to full speed. Limit switches on each axis stop the drive before it can over-travel, and the firmware releases the bridge whenever no movement is required.",
          "The loop runs every 300 ms. That is slow enough to filter cloud flicker and fast enough to follow the sun without noticeable lag, and it keeps the motor current and supply droop manageable on a small bench supply.",
        ],
      },
      {
        heading: "What the simulation showed",
        body: [
          "The Proteus model confirmed the comparator logic and the motor direction table before assembly: shading one quadrant drives the correct axis in the correct direction, and the limit switches cut the drive when the model reaches its end stop. The display shows the four channel values and the current axis state for tuning.",
          "The next step is a mechanical build with a panel load, current sensing and a proper charge controller, so the tracker can be judged on energy collected rather than on how neatly it points.",
        ],
      },
    ],
    specs: [
      { label: "Controller", value: "Arduino Uno, ATmega328P" },
      { label: "Sensor", value: "4 x LDR in 10 kΩ dividers" },
      { label: "Motor drive", value: "L298N dual H-bridge, 12 V DC motors" },
      { label: "Control", value: "300 ms loop, PWM 150 / 255, threshold 40 / 1023" },
      { label: "Feedback", value: "I2C character display, four channel values" },
      { label: "Protection", value: "Limit switch per axis" },
    ],
    gallery: [
      {
        src: "/images/ldr-tracker/simulated-circuit.jpg",
        alt: "Proteus simulation of the LDR solar tracking circuit",
        caption: "The Proteus model: four LDR dividers, Arduino Uno, L298N drive and the virtual terminal used in place of the LCD.",
        width: 831,
        height: 439,
      },
    ],
  },
  {
    slug: "ir-sensor",
    index: "06",
    title: "Analogue IR distance sensor",
    shortTitle: "IR distance sensor",
    year: "2025",
    domains: ["Analogue", "Hardware"],
    lede:
      "A distance sensor built from a 555 timer, an LM358 amplifier and comparator stages, with three LEDs showing close, medium and far. No microcontroller: the decision is made entirely in analogue hardware.",
    role: "Solo build: design, simulation, PCB, assembly and test",
    status: "Built and tested · analogue prototype",
    stack: ["LM555", "LM358", "Comparators", "Multisim", "PCB assembly"],
    featured: false,
    cover: "sensor",
    coverCaption:
      "IR transmitter, reflected-signal amplifier, window comparators and a three-level LED display, all in analogue parts.",
    metrics: [
      { value: "3", unit: "levels", label: "Close, medium and far indication" },
      { value: "12–40", unit: "kHz", label: "555 astable carrier range" },
      { value: "2", unit: "op-amps", label: "LM358 amplification and comparison" },
      { value: "0", unit: "code", label: "No microcontroller in the signal path" },
    ],
    sections: [
      {
        heading: "Why analogue",
        body: [
          "Distance sensing is usually a microcontroller with an ultrasonic or time-of-flight module. This project deliberately removes the microcontroller and asks how far the same job can be taken with parts that predate it: a 555 timer, an op-amp, comparators and a handful of passives.",
          "The answer is a three-state proximity sensor. An IR LED is pulsed, a photodiode receives the reflection, the weak signal is amplified, and comparator thresholds decide whether the target is close, at medium range or far. Three LEDs make the state visible without a display.",
        ],
      },
      {
        heading: "Transmitter and receiver",
        body: [
          "The 555 runs in astable mode and drives the IR LED at a carrier in the 12–40 kHz region. Pulsing the emitter rather than leaving it on makes the received signal easier to separate from ambient light and keeps the LED within its current rating.",
          "The receiver is a photodiode feeding an LM358 non-inverting amplifier. Gain and offset are set so that a reflection from a nearby surface produces a usable swing without saturating on a white target. A second LM358 stage buffers the signal before the comparator bank.",
        ],
      },
      {
        heading: "Thresholds and output",
        body: [
          "Three comparators, each with its own resistor-divider reference, define the bands. The reference voltages were chosen from measured amplifier output at known distances, not from a textbook curve, because the reflection strength depends on the target surface as much as on distance.",
          "The comparator outputs drive green, orange and red LEDs through current-limiting resistors. Only one LED is on at a time, so the display reads as a level rather than a bar graph, and the threshold spacing can be trimmed with the divider values.",
        ],
      },
      {
        heading: "Build and test",
        body: [
          "The circuit was simulated in Multisim, laid out on a PCB, assembled and tested against a wall at measured distances. Simulated and prototype waveforms were compared to check that the amplifier was not clipping and that the comparator edges landed where the design intended.",
          "The final report documents the block diagram, PCB, packaging, simulated waveforms and prototype measurements. The main limitation is honest: reflected IR strength depends on surface colour and angle, so the sensor reports proximity bands rather than a calibrated distance in centimetres.",
        ],
      },
    ],
    specs: [
      { label: "Carrier", value: "LM555 astable, IR LED, 12–40 kHz" },
      { label: "Receiver", value: "Photodiode + LM358 non-inverting amplifier" },
      { label: "Decision", value: "Three comparator windows with divider references" },
      { label: "Output", value: "Green / orange / red LEDs, one active at a time" },
      { label: "Supply", value: "Single-rail bench supply" },
      { label: "Tools", value: "Multisim, PCB layout, oscilloscope, bench test" },
    ],
    gallery: [
      {
        src: "/images/ir-sensor/block-diagram.jpg",
        alt: "Block diagram of the analogue IR distance sensor",
        caption: "Transmitter, receiver, amplifier, comparator bank and LED display.",
        width: 670,
        height: 343,
      },
      {
        src: "/images/ir-sensor/final-pcb.jpg",
        alt: "Final assembled IR distance sensor PCB",
        caption: "The assembled board.",
        width: 318,
        height: 272,
      },
      {
        src: "/images/ir-sensor/packaging.jpg",
        alt: "Packaged IR distance sensor prototype",
        caption: "Final packaging with the sensor and indicator LEDs exposed.",
        width: 449,
        height: 421,
      },
      {
        src: "/images/ir-sensor/simulated-waveforms.jpg",
        alt: "Simulated waveforms from the IR distance sensor circuit",
        caption: "Simulated transmitter and receiver waveforms.",
        width: 593,
        height: 509,
      },
      {
        src: "/images/ir-sensor/prototype-waveforms.jpg",
        alt: "Measured prototype waveforms from the IR distance sensor",
        caption: "Prototype measurements taken on the bench.",
        width: 834,
        height: 496,
      },
    ],
  },
  {
    slug: "motion-detector",
    index: "07",
    title: "Darkness-activated motion detector",
    shortTitle: "Motion detector",
    year: "2025",
    domains: ["Hardware", "Analogue"],
    lede:
      "A light that only switches on when it is dark and someone moves: an LDR divider, a PIR sensor, a comparator and a transistor driver, designed in Multisim and laid out as a PCB in Ultiboard.",
    role: "Solo build: circuit design, simulation and PCB layout",
    status: "Simulated and built · PCB project",
    stack: ["LDR", "PIR sensor", "Comparator", "Multisim", "Ultiboard"],
    featured: false,
    cover: "motion",
    coverCaption:
      "Two conditions in series: the LDR enables the circuit at dusk, the PIR triggers the lamp only when motion is present.",
    metrics: [
      { value: "2", unit: "sensors", label: "LDR and PIR, both required" },
      { value: "10", unit: "V DC", label: "Project supply rail" },
      { value: "1", unit: "comparator", label: "Sets the darkness threshold" },
      { value: "1", unit: "driver", label: "Transistor switches the lamp" },
    ],
    sections: [
      {
        heading: "The requirement",
        body: [
          "A security or convenience light should not run all day, and it should not switch on for every shadow. The brief was specific: sense ambient light with an LDR, detect people with a PIR sensor, and energise the output only when it is dark and motion has been observed. The supply is 10 V DC, and the board has to accommodate the SMT and through-hole parts listed in the project annexure.",
        ],
      },
      {
        heading: "How the two conditions combine",
        body: [
          "The LDR and a trimmer form a voltage divider. In daylight the LDR resistance is low, the divider holds the comparator in the state that keeps the output off, and the PIR signal is ignored. At dusk the LDR resistance rises, the comparator changes state, and the circuit is armed.",
          "The PIR module produces a digital HIGH when it detects motion. That signal, gated by the darkness state, drives a transistor which switches the lamp or indicator LEDs. Both conditions have to be true at once, which is the whole point of the design.",
        ],
      },
      {
        heading: "Circuit blocks",
        bullets: [
          "Light sensing: LDR and trimmer divider, with a PNP transistor providing a clean light/dark control signal.",
          "Motion sensing: PIR module on a three-pin header, with an NPN stage to shape the trigger.",
          "Decision: comparator with an adjustable reference so the dusk threshold can be calibrated on site.",
          "Output: NPN driver transistor switching the lamp, with indicator LEDs for bench testing.",
        ],
      },
      {
        heading: "PCB and test",
        body: [
          "The circuit was captured and simulated in Multisim, then laid out in Ultiboard. SMT resistors and capacitors keep the board compact; the PIR sensor, LDR and trimmer are through-hole because they need to face the room and be adjustable after assembly.",
          "Simulation and prototype results were compared for the light-only, motion-only and dark-plus-motion cases. The final report records the three test conditions and the measured output states, along with the board layout and packaging. The remaining calibration point is the dusk threshold, which depends on where the sensor is mounted.",
        ],
      },
    ],
    specs: [
      { label: "Supply", value: "10 V DC" },
      { label: "Light sensor", value: "LDR + trimmer divider" },
      { label: "Motion sensor", value: "PIR module, digital output" },
      { label: "Decision", value: "Comparator with adjustable reference" },
      { label: "Output", value: "NPN transistor driving lamp / LEDs" },
      { label: "Tools", value: "Multisim, Ultiboard, PCB assembly" },
    ],
  },
  {
    slug: "fsk-generator",
    index: "08",
    title: "FSK and function generator study",
    shortTitle: "FSK generator",
    year: "2025",
    domains: ["Signals", "Analogue"],
    lede:
      "A communications lab study of frequency-shift keying and function-generator circuits: how a carrier is shifted between two frequencies to carry binary data, and how sine, square, triangle and sawtooth waveforms are generated for test work.",
    role: "Solo report and circuit study",
    status: "Report complete · simulation study",
    stack: ["FSK", "Function generator", "Multisim", "Signal analysis"],
    featured: false,
    cover: "spectrum",
    coverCaption:
      "Binary input, two carrier frequencies, and the resulting FSK waveform at the output of the modulator.",
    metrics: [
      { value: "2", unit: "frequencies", label: "Mark and space carriers" },
      { value: "1", unit: "bit", label: "Binary data per symbol" },
      { value: "4", unit: "waveforms", label: "Sine, square, triangle, sawtooth" },
      { value: "2", unit: "circuits", label: "FSK generator and function generator" },
    ],
    sections: [
      {
        heading: "Frequency-shift keying",
        body: [
          "FSK represents binary data by shifting a carrier between two predetermined frequencies: one for a logic 0 and another for a logic 1. Because the information sits in the frequency rather than the amplitude, FSK is relatively tolerant of amplitude noise and is used in modems, RFID and low-cost wireless links.",
          "The study looks at the generator as a block: a digital input selects between two oscillator frequencies, and the output is a continuous carrier that changes frequency at the symbol boundaries. The important design parameters are the two carrier frequencies, the deviation between them and the data rate.",
        ],
      },
      {
        heading: "Function generator",
        body: [
          "A function generator produces the standard test waveforms: sine, square, triangle and sawtooth, with adjustable frequency and amplitude. The report compares the circuits used to generate each shape and the role they play in testing filters, amplifiers and communication stages.",
          "The two topics belong together because both are about controlled signal generation. One produces a carrier that carries information; the other produces a known stimulus that lets you measure a circuit's response.",
        ],
      },
      {
        heading: "What the study covers",
        bullets: [
          "The principle of FSK and where it is used in communication systems.",
          "Carrier selection, frequency deviation and data-rate trade-offs.",
          "Function-generator topologies for sine, square, triangle and sawtooth output.",
          "Simulated circuit behaviour and the measurements used to verify it.",
        ],
      },
      {
        heading: "Reflection",
        body: [
          "This was a shorter lab study rather than a full build, and it is included because it shows the signal-generation side of the work: understanding what a waveform is made of before trying to measure or demodulate it. The next step would be to build the modulator and demodulator on a board and compare the recovered bit stream against the input at different noise levels.",
        ],
      },
    ],
    specs: [
      { label: "Modulation", value: "Binary FSK, mark / space frequencies" },
      { label: "Waveforms", value: "Sine, square, triangle, sawtooth" },
      { label: "Tools", value: "Multisim, oscilloscope, signal analysis" },
      { label: "Application", value: "Modems, RFID, wireless data links" },
      { label: "Scope", value: "Circuit study and simulation, not a hardware build" },
    ],
  },
  {
    slug: "citygo",
    index: "09",
    title: "CityGo! — AI public transport concept",
    shortTitle: "CityGo!",
    year: "2025",
    domains: ["AI", "Software"],
    lede:
      "A concept and poster for an AI-enabled public transport platform for Durban: arrival prediction, live fleet tracking and operational optimisation, presented by Team Still Lazy.",
    role: "Co-author: concept, system architecture and poster (Team Still Lazy)",
    status: "Concept study · team poster",
    stack: ["Machine learning", "Transport data", "System architecture", "Poster design"],
    featured: false,
    cover: "city",
    coverCaption:
      "The concept in one view: live vehicle positions, predicted arrivals and an operations layer built on the same data.",
    metrics: [
      { value: "3", unit: "layers", label: "Predict, track, optimise" },
      { value: "2", unit: "authors", label: "Team Still Lazy" },
      { value: "1", unit: "city", label: "Durban Transport" },
      { value: "0", unit: "lines", label: "Of production code: a concept, not a deployed app" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Durban's bus commuters deal with unpredictable waiting times, missed connections and little visibility of where a vehicle actually is. Operators, meanwhile, work with outdated reporting and have no real-time view of the fleet, which makes it hard to respond to disruptions or plan capacity with evidence.",
          "CityGo! was a team concept for a platform that addresses both sides with the same data: machine-learning arrival predictions, live vehicle tracking, and an operations layer that turns the feed into planning insight.",
        ],
      },
      {
        heading: "The concept",
        bullets: [
          "Predictive intelligence: forecast arrival times, passenger demand and route performance from historical and live data.",
          "Real-time tracking: show bus locations, service alerts and accurate travel information to commuters.",
          "Operational optimisation: give operators fleet visibility, resource allocation and proactive maintenance signals.",
          "Municipal value: evidence for route planning, service delivery metrics and policy decisions.",
        ],
      },
      {
        heading: "What it would take",
        body: [
          "The poster is a concept, not a deployed system, and the hard parts are data and operations rather than the model. A real build needs vehicle location feeds, reliable timetables, a data contract with the operator, and a fallback for when connectivity drops. The commuter interface is the easy layer to demo and the last layer that matters if the predictions are not trustworthy.",
          "The value of the exercise was in framing the problem end to end: who the users are, what data each side needs, and how a prediction becomes a decision on a platform. That framing is the part that transfers to other data-heavy engineering problems.",
        ],
      },
    ],
    specs: [
      { label: "Team", value: "Team Still Lazy: Msawenkosi Magwaza and Ntuthuko Mdunge" },
      { label: "Focus", value: "Public transport optimisation for Durban" },
      { label: "Pillars", value: "Prediction, tracking, operational insight" },
      { label: "Users", value: "Commuters, operators, municipal planners" },
      { label: "Status", value: "Concept and poster, no production deployment" },
    ],
  },
  {
    slug: "adaptive-filter",
    index: "10",
    title: "Adaptive filters for jamming suppression",
    shortTitle: "Adaptive filters",
    year: "2026",
    domains: ["Signals", "Software"],
    lede:
      "A DSP study of how adaptive filters detect and suppress jamming in military radio systems, covering LMS beamforming, anti-jam receivers and the measured data products engineers use to tune them.",
    role: "Solo report and analysis (DSPA301)",
    status: "Report complete · DSP study",
    stack: ["LMS", "Adaptive filtering", "Beamforming", "MATLAB", "Signal analysis"],
    featured: false,
    cover: "filter",
    coverCaption:
      "The same idea in two domains: adapt the weights until the jammer is nulled and the wanted signal survives.",
    metrics: [
      { value: "30–50", unit: "dB", label: "Jammer suppression in beamforming" },
      { value: "~35", unit: "dB", label: "Suppression in the receiver case" },
      { value: "300", unit: "iterations", label: "LMS convergence in the example" },
      { value: "2", unit: "domains", label: "Spatial and time-domain filtering" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Military communications, radar and electronic-warfare systems depend on radio links that an opponent may try to jam deliberately. Suppressing that interference in real time is an operational requirement, not a nice-to-have, and adaptive filters are the standard tool for the job.",
          "The report explains the structure of an adaptive filter and then examines two application environments where the same theory appears in different forms: adaptive phased-array beamforming in the spatial domain, and an LMS anti-jam filter in the time domain.",
        ],
      },
      {
        heading: "How an adaptive filter works",
        body: [
          "The general structure is a transversal FIR filter with adjustable tap weights, an error generator that compares the output with a desired reference, and a weight-update algorithm that minimises the mean-square error. The least-mean-squares algorithm updates the weights in proportion to the error and the input, with a step size that trades convergence speed against stability.",
          "The step size must satisfy 0 < mu < 1/lambda_max, where lambda_max is the largest eigenvalue of the input autocorrelation matrix. Recursive least squares converges faster by minimising a weighted least-squares cost over all past samples, at the price of more computation.",
        ],
      },
      {
        heading: "Beamforming",
        body: [
          "In a phased array, each element output is weighted and summed. The adaptive weights steer a high-gain main lobe toward the wanted signal and place nulls in the directions of interferers; an N-element array has N-1 adaptive degrees of freedom.",
          "The data product is the beam pattern: array gain in dBi against angle. In the reported case the adapted pattern reaches roughly +15 to +20 dBi toward the wanted signal and a null of -40 dB or more toward the jammer, with 30–50 dB of suppression in operational systems. The convergence curve of MSE against iteration count is what engineers use to set the step size.",
        ],
      },
      {
        heading: "Anti-jam receiver",
        body: [
          "The time-domain case receives x(n) = s(n) + j(n), the wanted signal plus jamming. A locally generated reference, from a pilot sequence or a prediction of the wanted signal, drives the LMS filter to model and cancel the jammer.",
          "Here the main data product is output SINR against iteration number. In the example the SINR rises quickly and reaches a steady state of about +15 dB after roughly 300 iterations, which corresponds to about 35 dB of jammer suppression. The residual jamming power spectral density shows the notch the filter has formed.",
        ],
      },
      {
        heading: "What the study shows",
        body: [
          "The two cases look different on a block diagram but share the same mechanism: use a reference to separate what you want from what you do not, and adapt until the error is small. The engineering difficulty is in the reference, the step size and the array or filter order that the hardware can afford.",
        ],
      },
    ],
    specs: [
      { label: "Algorithm", value: "LMS, with RLS noted as the faster-converging alternative" },
      { label: "Update", value: "w(n+1) = w(n) + 2 mu e(n) x*(n)" },
      { label: "Stability", value: "0 < mu < 1 / lambda_max" },
      { label: "Spatial case", value: "N-element phased array, N-1 nulls" },
      { label: "Receiver case", value: "Time-domain adaptive noise cancellation" },
      { label: "Data products", value: "Beam pattern, SINR curve, MSE learning curve, residual PSD" },
    ],
    gallery: [
      {
        src: "/images/adaptive-filter/beam-pattern.jpg",
        alt: "Adaptive beamforming architecture and resulting radiation pattern",
        caption: "Adaptive beamforming: element weights, sum, reference and the adapted radiation pattern.",
        width: 1200,
        height: 750,
      },
      {
        src: "/images/adaptive-filter/sinr-convergence.jpg",
        alt: "LMS adaptive filter block diagram and SINR convergence curve",
        caption: "Time-domain LMS canceller and the output SINR against iteration number.",
        width: 1200,
        height: 750,
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacent(slug: string): { prev: Project; next: Project } {
  const index = projects.findIndex((project) => project.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
