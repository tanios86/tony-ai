import { MetadataRoute } from "next";

const base = "https://www.getroman.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/chat`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/compare`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/compare/openai-codex`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/claude-code`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/zapier`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/make`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/microsoft-copilot`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/original`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
