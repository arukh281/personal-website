type Stat = { value: string; label: string };

// Full-width cards with room for detail. Every fact here comes from the
// owner; do not add numbers, users or claims that they have not given.
export type FeatureProject = {
  num: string;
  title: readonly string[];
  highlight: string | null;
  tag: string;
  summary: string;
  detail: string;
  stats?: readonly Stat[];
  note?: string;
  stack: readonly string[];
  status?: string;
  link: { href: string; label: string } | null;
  tone: "light" | "dark";
};

export type CompactProject = {
  num: string;
  title: readonly string[];
  highlight: string | null;
  summary: string;
  link: string;
  variant: "light" | "dark" | "accent";
  deco: "x" | "lines" | "grid";
  offset: boolean;
};

export const profile = {
  name: { first: "ARADHYA", last: "KHANDELWAL" },
  tagline: {
    line1: "Teaching",
    accent: "silicon",
    line2: "to think.",
  },
  location: "Bangalore",
  locationSub: "Open to anywhere",
  links: {
    email: "arukhandelwal281@gmail.com",
    phone: "+91 7017341223",
    phoneTel: "tel:+917017341223",
    github: "https://github.com/arukh281",
    linkedin: "https://www.linkedin.com/in/aradhya-khandelwal281/",
    website: "https://aradhya-khandelwal.vercel.app",
  },
  cvs: [
    {
      label: "AI Engineer",
      href: "/cv/Aradhya_Khandelwal_CV_AI_Engineer.pdf",
    },
    {
      label: "Audio ML",
      href: "/cv/Aradhya_Khandelwal_CV_Audio_ML.pdf",
    },
  ],
  about: {
    headline:
      "I explore the intersection of human intuition and algorithmic logic.",
    body: "My work revolves around creating systems that don't just process data, but understand intent. It's about stripping away complexity to reveal underlying patterns, translating abstract concepts into tangible experiences. I believe technology should feel less like a tool and more like an extension of thought.",
    also: "Also: drummer · photographer · traveller · home chef",
  },
  pillars: ["BUILD", "RESEARCH", "CREATE"] as const,
  featured: [
    {
      num: "01",
      title: ["Ear", "mark"],
      highlight: "mark",
      tag: "In progress",
      summary:
        "In-browser personal voice isolation that lets a voice agent hear, and be interrupted by, only its enrolled speaker.",
      detail:
        "After a five-second enrolment, a small causal model keeps only the enrolled speaker's voice and outputs a personal voice-activity signal that gates barge-in. It runs in 10 ms hops with no lookahead, on a dependency-free C++17 engine compiled to WebAssembly and running in an AudioWorklet, so audio never leaves the machine.",
      note: "Planned evaluation: real room recordings, against DeepFilterNet3 and Silero VAD with speaker-verification gates.",
      stack: ["C++17", "WebAssembly", "AudioWorklet"],
      status: "Work in progress",
      link: { href: "https://github.com/arukh281/EarMark", label: "GitHub" },
      tone: "light",
    },
    {
      num: "02",
      title: ["Hyper", "charge"],
      highlight: "charge",
      tag: "Open source · MIT",
      summary:
        "A Python CLI that wires a git repo for Cursor and Claude Code agents: a code graph to query before editing, searchable session memory and safety hooks.",
      detail:
        "It builds a tree-sitter code graph the agent queries before editing, keeps session memory with SQLite full-text search, puts advisory safety hooks on shell and file access, and adds a daily briefing and wrap-up. No separate LLM API key needed.",
      stats: [{ value: "260", label: "automated tests" }],
      stack: ["Python", "tree-sitter", "SQLite FTS"],
      link: {
        href: "https://github.com/arukh281/Hypercharge-",
        label: "GitHub",
      },
      tone: "dark",
    },
    {
      num: "03",
      title: ["Acoustic", "drone", "detection"],
      highlight: "drone",
      tag: "SSS Defence",
      summary:
        "A deep learning drone detector for a multi-microphone array, trained only on synthetic data I generated, that caught 89.4% of drone segments in 40 real field flights.",
      detail:
        "The synthetic data includes per-microphone gain error, timing jitter and dead channels. I diagnosed the model with branch knock-out ablations and hardened it with synthetic machinery hard negatives. CUDA signal-processing front end (whitening, cross-spectra, GCC-PHAT, beamforming), ported to NVIDIA Jetson Orin.",
      stats: [
        {
          value: "89.4%",
          label:
            "of drone segments caught across 40 real field flights (95% CI 87.7–90.9), on arrays with 15–30 dead microphones",
        },
        { value: "0.995", label: "synthetic validation AUROC" },
        {
          value: "0.79 → 0.04–0.16",
          label: "machinery look-alike scores, before and after hard negatives",
        },
      ],
      stack: ["Deep learning", "CUDA", "GCC-PHAT", "Beamforming", "Jetson Orin"],
      status: "Company project · code not public",
      link: null,
      tone: "light",
    },
    {
      num: "04",
      title: ["The", "Algorithm", "Lab"],
      highlight: "Algorithm",
      tag: "Co-founder & CTO",
      summary:
        "An early-stage AI marketing startup I co-founded; as its only engineer I built a multi-agent platform that plans, writes and critiques content from one company audit.",
      detail:
        "Seven platform writers, a topic planner, an adversarial critic and a four-stage campaign planner all share that audit. A website-audit pipeline runs HTML extraction, headless Playwright screenshots and a vision pass that grades sites into PDF reports. The provider layer runs on OpenRouter with a per-workload fallback and per-call token and cost tracking.",
      status: "Early stage · not yet incorporated",
      stats: [
        { value: "48", label: "API routes" },
        { value: "594", label: "automated tests" },
      ],
      stack: [
        "FastAPI",
        "async SQLAlchemy",
        "PostgreSQL",
        "React 19",
        "Render",
      ],
      link: { href: "https://thealgorithmlab.co.in", label: "Website" },
      tone: "dark",
    },
  ] satisfies readonly FeatureProject[],
  work: [
    {
      num: "05",
      title: ["Review", "Insights"],
      highlight: "Insights",
      summary:
        "Review analytics for business owners: syncs Google Business Profile reviews and uses an LLM to sort them into buckets with health scores.",
      link: "https://github.com/arukh281/review-insights",
      variant: "light",
      deco: "x",
      offset: false,
    },
    {
      num: "06",
      title: ["KALI"],
      highlight: "KALI",
      summary:
        "A paper-trading sandbox for India's National Stock Exchange: four algorithms on isolated ledgers, with HMM regime features, Kelly sizing and a daily post-close analysis job.",
      link: "https://github.com/arukh281/stock",
      variant: "dark",
      deco: "lines",
      offset: true,
    },
    {
      num: "07",
      title: ["Sensor", "Anomaly"],
      highlight: "Anomaly",
      summary:
        "Real-time anomaly detection on NASA C-MAPSS turbofan sensor data, with Isolation Forest, percentile alerting and a FastAPI inference API.",
      link: "https://github.com/arukh281/sensor-anomaly",
      variant: "dark",
      deco: "lines",
      offset: false,
    },
    {
      num: "08",
      title: ["Swift", "Share"],
      highlight: null,
      summary:
        "Anonymous, encrypted file sharing with expiring access tokens, built on FastAPI, AES-GCM and AWS S3; the system behind my ICDSA 2025 paper.",
      link: "https://github.com/arukh281/SwiftShare",
      variant: "accent",
      deco: "grid",
      offset: true,
    },
  ] satisfies readonly CompactProject[],
  experience: [
    {
      year: "2026",
      role: "SSS Defence",
      title: "Deep Learning Trainee, DeepTech Division",
      dates: "Mar 2026 – Present",
      line: "Learning how sound tells us what's in the sky.",
    },
    {
      year: "2026",
      role: "The Algorithm Lab",
      title: "Co-founder and CTO",
      dates: "Jun 2026 – Present",
      line: "Building a startup's tech from scratch, as its only engineer.",
    },
    {
      year: "2025",
      role: "Intact Group",
      title: "Automation Intern",
      dates: "Jul 2025 – Mar 2026",
      line: "Making releases smoother for everyone involved.",
    },
    {
      year: "2025",
      role: "IIT Roorkee",
      title: "Research Intern",
      dates: "Jun – Jul 2025",
      line: "A summer asking questions about terrain from above.",
    },
    {
      year: "2024",
      role: "Startup Weekend",
      title: null,
      dates: null,
      line: "160 people, 54 hours, one city.",
    },
    {
      year: "2022",
      role: "Manipal University Jaipur",
      title: "B.Tech Computer Science",
      dates: "Sep 2022 – May 2026",
      line: "CGPA 8.16.",
    },
  ],
  // The patent is a published application. Never call it granted,
  // issued or awarded.
  ideas: [
    {
      title:
        "Unsupervised Approach for Classifying Volume Scattering for Surface Roughness and Potential Water-Ice Deposits",
      venue: "IEEE InGARSS 2025 · pp. 594–⁠598",
      role: null,
      link: "https://ieeexplore.ieee.org/abstract/document/11583820/",
      kind: "paper",
    },
    {
      title:
        "Beyond Nonce Uniqueness: A Cryptographic Evaluation of AES-GCM in Secure Anonymous File Sharing Systems",
      venue: "ICDSA 2025 · Springer · pp. 323–⁠334",
      role: "First author",
      link: "https://doi.org/10.1007/978-3-032-15407-1_26",
      kind: "paper",
    },
    {
      title: "Indian Patent Application No. 202511066102 A",
      venue: "Published application · 25 Jul 2025",
      role: "Patent pending",
      link: null,
      kind: "patent",
    },
  ],
  life: [
    { word: "DRUM", line: "Rhythm and timing", mark: "wave" as const },
    { word: "LENS", line: "Light and composition", mark: "circle" as const },
    { word: "ROAD", line: "Places and perspective", mark: "path" as const },
    { word: "KITCHEN", line: "Experiment and taste", mark: "spiral" as const },
  ],
  education:
    "Manipal University Jaipur — B.Tech Computer Science · CGPA 8.16",
} as const;
