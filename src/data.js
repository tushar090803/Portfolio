
export const profile = {
  name: "Tushar Gupta",
  role: "MERN Stack & AI Engineer",
  tagline: "Building intelligent, agentic systems and scalable web applications.",
  location: "Ghaziabad, India",
  // Drop your photo in src/assets/ (e.g. photo.jpg) and point to it below.
  // If left as-is, a placeholder silhouette will show instead.
  photo: "/src/assets/pic.jpg", // e.g. "/src/assets/photo.jpg"
  resumeUrl: "https://drive.google.com/file/d/1Z1-c_p4aIhNuALaV0zOfqQAPnTiBfQef/view?usp=sharing", // link to your PDF resume, if you have one
  logCode: "SUBJECT 01",
  bio: [
    "I am a software engineer focused on the intersection of robust full-stack development and artificial intelligence. Currently pursuing my engineering degree at ABES EC (maintaining an 8.21 CGPA), I specialize in building end-to-end web applications using the MERN stack while architecting smart, autonomous systems powered by Generative AI.",
    "As an AI Engineer, I work extensively with frameworks like LangChain, LangGraph, and RAG (Retrieval-Augmented Generation) pipelines to design intelligent workflows and multi-agent systems that can reason, plan, and solve complex automation challenges.",
    "Beyond building products, I have a deep passion for problem-solving and algorithmic efficiency. I am an ICPC Regionalist, a Guardian on LeetCode with over 1,300 problems solved, a 3-Star coder on CodeChef, and have won multiple college-level coding contests.",
  ],
};

export const socials = [
  { label: "GitHub", value: "github.com/tushargupta", href: "https://github.com/tushar090803" }, // Update with your links
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tushar-gupta-7685a8296/" },
  { label: "LeetCode", value: "leetcode.com/u/tushargupta", href: "https://leetcode.com/u/guptatushar140705/" },
];

export const experience = []; // Removed per your instructions
export const projects = [
  {
    id: "proj-01",
    name: "Blogify",
    tag: "Personal",
    year: "2024",
    description:
      "A complete blogging platform featuring custom Markdown rendering, dynamic route handling, and an intuitive content editor with secure user session tracking.",
    stack: ["EJS", "Node.js", "Express", "Mongoose", "MongoDB"],
    href: "https://blogapp-zl9k.onrender.com",
  },
  {
    id: "proj-02",
    name: "Food Video Platform",
    tag: "Personal",
    year: "2025",
    description:
      "A recipe-focused video sharing app with real-time comments, category filtering, user-curated playlists, and optimized video playback streaming.",
    stack: ["React", "Node.js", "Express", "Mongoose", "MongoDB"],
    href: "https://mernzomato-1.onrender.com",
  },
  {
    id: "proj-03",
    name: "Chat Agent",
    tag: "Personal",
    year: "2026",
    description:
      "An autonomous agentic AI assistant capable of multi-step reasoning. It orchestrates custom tools to fetch real-time weather data, research via web search, ingest PDF files, analyze GitHub repositories, and programmatically dispatch emails.",
    stack: [
      "React",
      "LangChain",
      "LangGraph",
      "Gemini API",
      "Agentic AI",
      "Weather API",
      "Tavily Search",
      "Node.js",
      "Express",
      "Mongoose",
      "MongoDB"
    ],
    href: "#",
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "Java", "C++", "C", "Python"] },
  { group: "AI & GenAI", items: ["Generative AI", "Agentic AI", "LangChain", "LangGraph", "RAG"] },
  { group: "Frontend", items: ["React", "HTML", "CSS", "JavaScript"] },
  { group: "Backend", items: ["Node.js", "Express", "Mongoose", "REST APIs"] },
  { group: "Core & Architecture", items: ["System Design", "OOPS", "Data Structures & Algorithms"] },
  { group: "Tools & DevOps", items: ["Git", "GitHub", "Docker", "Kubernetes"] },
];

export const availability = {
  status: "Open to opportunities",
  detail: "Based in Ghaziabad, open to internships, full-time roles, and remote work.",
};