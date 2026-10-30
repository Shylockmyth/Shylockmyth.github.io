export function HeroDiagram() {
  const mono = { fontFamily: "var(--font-mono)" } as const;

  const inputs = [
    { y: 64, label: "SENSOR" },
    { y: 140, label: "POWER" },
    { y: 216, label: "LINK" },
  ];
  const outputs = [
    { y: 64, label: "DISPLAY" },
    { y: 140, label: "ACTUATE" },
    { y: 216, label: "DATA" },
  ];

  return (
    <svg viewBox="0 0 460 300" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="readout-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="var(--cover-grid)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="460" height="300" fill="url(#readout-grid)" />

      {/* inputs */}
      {inputs.map((item) => (
        <g key={item.label}>
          <rect
            x="18"
            y={item.y}
            width="86"
            height="34"
            fill="var(--panel)"
            stroke="var(--cover-line)"
            strokeWidth="1.2"
          />
          <text x="61" y={item.y + 21} textAnchor="middle" style={mono} fill="var(--dim)" fontSize="9" letterSpacing="1.2">
            {item.label}
          </text>
          <path
            d={`M104 ${item.y + 17}H160`}
            stroke="var(--cover-line)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
            className="flow"
          />
          <circle cx="158" cy={item.y + 17} r="2.5" fill="var(--accent)" opacity="0.8" />
        </g>
      ))}

      {/* core */}
      <g>
        <rect x="160" y="40" width="140" height="224" rx="2" fill="var(--panel)" stroke="var(--accent)" strokeWidth="1.4" opacity="0.9" />
        <rect x="176" y="56" width="108" height="86" fill="none" stroke="var(--cover-line)" strokeWidth="1.2" />
        <text x="230" y="82" textAnchor="middle" style={mono} fill="var(--accent)" fontSize="11" letterSpacing="1.4">
          STM32H7
        </text>
        <text x="230" y="100" textAnchor="middle" style={mono} fill="var(--dim)" fontSize="8.5" letterSpacing="1">
          CORTEX-M7
        </text>
        <g stroke="var(--cover-line)" strokeWidth="1">
          {Array.from({ length: 5 }).map((_, i) => (
            <path key={i} d={`M${184 + i * 24} 142v10h-12`} />
          ))}
        </g>
        <text x="230" y="190" textAnchor="middle" style={mono} fill="var(--muted)" fontSize="9" letterSpacing="1.2">
          FIRMWARE
        </text>
        <text x="230" y="208" textAnchor="middle" style={mono} fill="var(--dim)" fontSize="8.5" letterSpacing="1">
          CONTROL LOOP
        </text>
        <rect x="188" y="226" width="84" height="20" fill="var(--accent)" opacity="0.12" stroke="var(--accent)" strokeWidth="1" />
        <text x="230" y="240" textAnchor="middle" style={mono} fill="var(--accent)" fontSize="8" letterSpacing="1.4">
          VERIFIED
        </text>
      </g>

      {/* outputs */}
      {outputs.map((item) => (
        <g key={item.label}>
          <path
            d={`M300 ${item.y + 17}H356`}
            stroke="var(--cover-line)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
            className="flow"
          />
          <circle cx="302" cy={item.y + 17} r="2.5" fill="var(--accent)" opacity="0.8" />
          <rect
            x="356"
            y={item.y}
            width="86"
            height="34"
            fill="var(--panel)"
            stroke="var(--cover-line)"
            strokeWidth="1.2"
          />
          <text x="399" y={item.y + 21} textAnchor="middle" style={mono} fill="var(--dim)" fontSize="9" letterSpacing="1.2">
            {item.label}
          </text>
        </g>
      ))}

      {/* bus label */}
      <g style={mono} fill="var(--dim)" fontSize="8" letterSpacing="1.6">
        <text x="160" y="26">SENSE</text>
        <text x="230" y="26" textAnchor="middle">PROCESS</text>
        <text x="300" y="26" textAnchor="middle">ACT</text>
      </g>
      <path d="M140 275H320" stroke="var(--cover-line)" strokeWidth="1" strokeDasharray="2 4" />
      <text x="140" y="292" style={mono} fill="var(--dim)" fontSize="8" letterSpacing="1.6">
        SENSE · PROCESS · ACTUATE
      </text>
      <text x="398" y="292" textAnchor="end" style={mono} fill="var(--accent)" fontSize="8" letterSpacing="1.6">
        CLOSED LOOP
      </text>
    </svg>
  );
}
