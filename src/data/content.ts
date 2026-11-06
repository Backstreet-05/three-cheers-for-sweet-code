// all site content lives here. edit this file, not the page markup.

export const profile = {
  name: 'anuran',
  tagline: "graham potter's chelsea survivor. part-time software developer and machine learning researcher. full-time football manager addict. awake and unafraid. asleep or dead?",
  location: 'new delhi, india',
  email: 'ab473@snu.edu.in',
  github: 'https://github.com/Backstreet-05',
  linkedin: 'https://www.linkedin.com/in/anuran-basu-12b739262/',
};

// your linkedin bio, lowercased. wording untouched.
export const about = [
  "hey, i'm anuran, a fourth-year cs major at SNU.",
  'my work spans ai/ml, computer vision, full-stack development, quantitative finance and statistical modelling. i\'m drawn to problems that require technical depth and a bit of creativity: whether that means designing vision models for adverse weather, modelling rainfall patterns across india, or arguing that football matches are best understood through data rather than the "eye test" (i will always believe in you nicholas jackson).',
  "i like taking abstract ideas and turning them into something practical, well-engineered, and useful. that's code for learning by building, occasionally breaking things, and then pretending that was part of the process all along.",
  'always happy to connect with people who are curious, ambitious, and building interesting things.',
];

export type Experience = {
  role: string;
  org: string;
  place: string;
  period: string;
  link?: { label: string; href: string };
  points: string[];
};

export const experience: Experience[] = [
  {
    role: 'quantitative finance programmer',
    org: 'ai centre of excellence, shiv nadar university',
    place: 'on-campus',
    period: 'apr 2026 – jul 2026',
    points: [
      'implemented 20+ candlestick pattern recognition algorithms in numpy (single-, double- and multi-candle formations, doji families, hikkake, slingshot, h-pattern and friends)',
      'built a modular backtesting framework on 5 years of AAPL daily OHLC data: hit ratio, average return, profit factor, max drawdown, equity curves',
      'wired RSI, ATR, moving averages and volatility filters into a signal pipeline to compare strategies systematically. finding: ATR-conditioned patterns caught momentum better than pure price geometry',
    ],
  },
  {
    role: 'data science intern',
    org: 'india meteorological department (IMD)',
    place: 'new delhi',
    period: 'jun 2025 – aug 2025',
    link: { label: 'code', href: 'https://github.com/Backstreet-05/Spatio-Temporal-Modeling' },
    points: [
      'processed 70+ years (1951–2024) of gridded IMD rainfall data with xarray and scikit-learn; flagged extreme monsoon days via 95th-percentile thresholds and k-means regional clustering',
      'built a bayesian hierarchical poisson model with a 3D gaussian process prior in pymc, sampled with 2,000 HMC draws',
      'clean inference (R-hat ≈ 1, ESS ≥ 1,000, zero divergences); regional variability came out significant (σ = 1.05 [0.63, 1.57])',
    ],
  },
];

export type Research = {
  title: string;
  authors?: string[];
  venue?: string;
  links: { label: string; href: string }[];
  points: string[];
};

export const research: Research[] = [
  {
    title: 'a unified model for the adverse weather removal using squeeze-and-excitation attention',
    authors: ['anuran basu', 'kotha kartheek', 'lingamaneni gnanesh chowdary', 'snehasis mukherjee'],
    venue: 'ICVGIP 2025, IIT mandi',
    links: [
      { label: 'paper (acm dl)', href: 'https://dl.acm.org/doi/10.1145/3774521.3774565' },
      { label: 'code', href: 'https://github.com/Backstreet-05/DA-AGLC-GAN-SE' },
    ],
    points: [
      'DA-AGLC-GAN-SE: one CycleGAN-based model for haze, rain and snow, with task-conditioned squeeze-and-excitation attention, selective kernel fusion and cycle-contrastive learning',
      'multi-objective training: adversarial, perceptual, cycle-consistency, contrastive and classification losses',
      'state-of-the-art among unpaired models on the comprehensive snow dataset (PSNR 29.08 → 31.82 dB, SSIM 0.80 → 0.8492), generalising well to RESIDE ITS/OTS',
    ],
  },
  {
    title: 'tampo: task offloading for green edge/cloud computation',
    venue: 'ongoing · paper in progress',
    links: [{ label: 'code', href: 'https://github.com/Vikkesh/Tampo' }],
    points: [
      'meta-RL task-offloading agent with a Bi-GCN/LSTM encoder that decides which device (local, edge or cloud) runs each task in a dependency graph',
      'a fair benchmarking framework: one DAG-aware physics engine (topological stepping, dependency blocking, server queues, makespan) shared by every algorithm, on a fixed 500-DAG test set',
      'multi-objective delay/energy rewards with congestion and communication penalties, plus user-preference vectors (performance vs battery saver) for zero-shot adaptation',
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  repo: string;
  demo?: string;
};

// every project was a group effort with work split equally, except where the repo is solo.
export const projects: Project[] = [
  {
    name: 'creditlens',
    blurb: 'explainable credit risk platform. XGBoost (0.87 ROC-AUC on 150k loan records) with per-applicant SHAP explanations, risk tiers and downloadable PDF reports.',
    stack: ['next.js', 'fastapi', 'xgboost', 'shap', 'supabase'],
    repo: 'https://github.com/Backstreet-05/creditlens',
    demo: 'https://creditlens-three.vercel.app',
  },
  {
    name: 'PRISM',
    blurb: 'structure-aware search engine for COVID-19 research papers: zones, phrases, boolean/NEAR queries, metadata filters and an age-normalised authority score, evaluated against tf-idf and BM25 on the 50 TREC-COVID topics. no elasticsearch, no lucene, all hand-written.',
    stack: ['python', 'numpy', 'nltk'],
    repo: 'https://github.com/CipherEnigma/PRISM',
  },
  {
    name: 'virtualtryon',
    blurb: 'virtual try-on: give it a photo of a person and a garment, get a realistic preview of them wearing it. built on FASHN VTON 1.5.',
    stack: ['react', 'fastapi', 'pytorch'],
    repo: 'https://github.com/Backstreet-05/VirtualTryOn',
  },
  {
    name: 'spell correction system',
    blurb: 'real-time spell checker with wavy red underlines, hover suggestions and click-to-replace, backed by an NLTK suggestion engine.',
    stack: ['react', 'fastapi', 'nltk'],
    repo: 'https://github.com/Backstreet-05/SpellCorrectionSystem_NLP',
  },
  {
    name: 'UDIIMS',
    blurb: 'university department information management system with student, department secretary and finance officer roles: course registration, GPA, grants, fees and inventory.',
    stack: ['react', 'spring boot', 'java', 'supabase'],
    repo: 'https://github.com/Backstreet-05/University-Department-Management-System',
  },
  {
    name: 'fitrack',
    blurb: 'sports complex management system: gym memberships, court bookings, trainer schedules and an admin panel, on a 3NF-normalised database.',
    stack: ['node.js', 'express', 'mysql', 'tailwind'],
    repo: 'https://github.com/Backstreet-05/FiTrack',
  },
  {
    name: 'clothing search engine',
    blurb: 'information retrieval over a clothing corpus: inverted and positional indexes, lnc.ltc vector-space ranking, phrase and proximity search, and a from-scratch porter stemmer.',
    stack: ['python', 'flask'],
    repo: 'https://github.com/prnv11/search-engine-ir-assignment',
  },
  {
    name: "rodri's case for the ballon d'or",
    blurb: "a data-driven argument for rodri over vinícius: progressive passes, build-up involvement and pass networks from spain vs germany at euro 2024.",
    stack: ['pandas', 'statsbombpy', 'mplsoccer'],
    repo: 'https://github.com/Backstreet-05/Rodri-a_worthy_ballon_dor_winner',
  },
];

export const skills: { label: string; items: string }[] = [
  { label: 'languages', items: 'c, c++, java, python, javascript, typescript, sql, html, css' },
  { label: 'web', items: 'react, next.js, spring boot, fastapi, node.js, express, tailwind, rest apis' },
  { label: 'data & ml', items: 'numpy, pandas, scikit-learn, xgboost, shap, pytorch, pymc, matplotlib, statsbombpy, yfinance' },
  { label: 'databases & cloud', items: 'postgresql, mysql, supabase, vercel, render' },
  { label: 'coursework', items: 'dsa, operating systems, dbms, oop, software engineering, ai, ml, NLP, computer vision' },
  { label: 'competitive programming', items: '280+ problems on leetcode & codeforces. former member, GDSC-SNIoE CP team' },
];

// footer + 404 copy
export const quips = {
  footer: "ktbspa. and no, i'm not okay (i promise).",
  notFound: 'just talk me through your thinking here. what were you POSSIBLY trying to access that got you here?',
};
