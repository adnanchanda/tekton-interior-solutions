// One small icon set, drawn in a single 1.75 stroke.
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const PhoneIcon = () => (
  <svg {...base}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const WhatsAppIcon = () => (
  <svg {...base}>
    <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1L3.5 20.5Z" />
    <path d="M9 8.5c0 3 2.5 6 6 6.5l1-1.5-2-1-1 .8a4.5 4.5 0 0 1-2-2.300l.8-1-1-2L9 8.500Z" />
  </svg>
);

export const ArrowIcon = () => (
  <svg {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const DownloadIcon = () => (
  <svg {...base}>
    <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
  </svg>
);

export const PinIcon = () => (
  <svg {...base}>
    <path d="M12 21s7-6.2 7-11.500A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21Z" />
    <circle cx="12" cy="9.500" r="2.500" />
  </svg>
);
