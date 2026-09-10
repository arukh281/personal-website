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
    website: "https://aradhya.dev",
  },
  about: {
    headline:
      "I explore the intersection of human intuition and algorithmic logic.",
    body: "My work revolves around creating systems that don't just process data, but understand intent. It's about stripping away complexity to reveal underlying patterns, translating abstract concepts into tangible experiences. I believe technology should feel less like a tool and more like an extension of thought.",
    also: "Also: drummer · photographer · traveller · home chef",
  },
  pillars: ["BUILD", "RESEARCH", "CREATE"] as const,
  work: [
    {
      num: "01",
      title: ["Review", "Intel"],
      highlight: "Intel",
      description:
        "Distilling massive qualitative feedback into actionable narrative structures.",
      variant: "light" as const,
      size: "md" as const,
      link: "https://github.com/arukh281/Major-Project",
    },
    {
      num: "02",
      title: ["Paper", "Trade"],
      highlight: "Trade",
      description:
        "Simulating market dynamics through a zero-risk educational environment.",
      variant: "dark" as const,
      size: "lg" as const,
      link: "https://github.com/arukh281/stock",
    },
    {
      num: "03",
      title: ["Swift", "Share"],
      highlight: null,
      description:
        "Frictionless data exchange architecture focusing on speed and minimal interface.",
      variant: "wide" as const,
      size: "wide" as const,
      link: "https://github.com/arukh281/SwiftShare",
    },
    {
      num: "04",
      title: ["Project", "Icarus"],
      highlight: "Icarus",
      description:
        "Making the web easier to read for students who think differently.",
      variant: "light" as const,
      size: "md" as const,
      link: "https://github.com/arukh281/project-icarus",
    },
    {
      num: "05",
      title: ["Campus", "Query"],
      highlight: "Query",
      description:
        "Answers questions so people spend less time searching and more time doing.",
      variant: "dark" as const,
      size: "md" as const,
      link: "https://github.com/arukh281/sdc-chatbot",
    },
  ],
  experience: [
    {
      year: "2026",
      role: "SSS Defence",
      line: "Learning how sound tells us what's in the sky.",
    },
    {
      year: "2026",
      role: "The Algorithm Lab",
      line: "Co-founder and CTO, building a startup's tech from scratch.",
    },
    {
      year: "2025",
      role: "Intact Group",
      line: "Making releases smoother for everyone involved.",
    },
    {
      year: "2025",
      role: "IIT Roorkee",
      line: "A summer asking questions about terrain from above.",
    },
    {
      year: "2024",
      role: "Startup Weekend",
      line: "160 people, 54 hours, one city.",
    },
  ],
  ideas: [
    {
      title: "On keeping file sharing simple and secure",
      venue: "ICDSA 2025 · Springer",
      link: "https://doi.org/10.1007/978-3-032-15407-1_26",
    },
    {
      title: "Reading signals for surface and ice patterns",
      venue: "IEEE InGARSS 2025 · IEEE Xplore",
      link: "https://ieeexplore.ieee.org/abstract/document/11583820/",
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
