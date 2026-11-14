export type Project = {
  name: string;
  url: string;
  description: string;
  tags: string[];
  year: number;
  note?: string;
};

export const projects: Project[] = [
  {
    name: "Ubika",
    url: "https://ubika.pro",
    description: "Find the right area of Barcelona for you.",
    tags: ["Maps", "Barcelona"],
    year: 2026,
  },
  {
    name: "Totxana",
    url: "https://totxana.byjj.dev",
    description:
      "3D housing market simulator with agent-based modelling and side-by-side A/B policy testing.",
    tags: ["Simulation", "3D", "Housing"],
    year: 2026,
  },
  {
    name: "Trace the Border",
    url: "https://tracetheborder.byjj.dev",
    description: "Draw country borders on a map and see how accurate you are.",
    tags: ["Game", "Maps"],
    year: 2026,
  },
  {
    name: "MarcoAI",
    url: "https://marcoai.xyz",
    description: "AI-powered geospatial assistant with interactive map tools.",
    tags: ["AI", "Maps"],
    year: 2026,
  },
  {
    name: "Political Spectrum",
    url: "https://spectrum.byjj.dev",
    description:
      "Major European parties plotted on left–right and libertarian–authoritarian axes.",
    tags: ["Data viz", "Politics"],
    year: 2026,
  },
  {
    name: "Barcelona Tourism",
    url: "https://mes-totxanes.vercel.app",
    description: "Tourist arrivals to Barcelona by transport mode, 2025 data.",
    tags: ["Data viz", "Barcelona"],
    year: 2026,
  },
  {
    name: "Life",
    url: "https://life.byjj.dev",
    description: "Personal life-tracking dashboard with calendar sync and daily check-ins.",
    tags: ["Personal", "Dashboard"],
    year: 2026,
    note: "Private",
  },
  {
    name: "YouTube Comment Analyzer",
    url: "https://yt-comments-ai.vercel.app",
    description: "AI analysis of the comments under a YouTube video.",
    tags: ["AI", "NLP"],
    year: 2025,
  },
];
