import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const comparisons = [
  {
    slug: "openai-codex",
    title: "Tony AI vs OpenAI Codex",
    description:
      "Compare Tony AI, your AI coworker in Slack, against OpenAI Codex CLI for coding tasks, automation, and team productivity.",
    competitor: "OpenAI Codex",
  },
  {
    slug: "claude-code",
    title: "Tony AI vs Claude Code",
    description:
      "Tony AI vs Claude Code: which AI assistant delivers finished work across your whole stack instead of just coding tasks?",
    competitor: "Claude Code",
  },
  {
    slug: "zapier",
    title: "Tony AI vs Zapier",
    description:
      "Tony AI vs Zapier: an AI coworker that understands context versus rule-based automation. Which fits your team better?",
    competitor: "Zapier",
  },
  {
    slug: "make",
    title: "Tony AI vs Make",
    description:
      "Compare Tony AI against Make (Integromat) for workflow automation, AI task execution, and team productivity in 2026.",
    competitor: "Make",
  },
  {
    slug: "copilot",
    title: "Tony AI vs Microsoft Copilot",
    description:
      "Tony AI vs Microsoft Copilot: Slack-native AI coworker versus Microsoft 365 assistant. Features, pricing, and which is better.",
    competitor: "Microsoft Copilot",
  },
  {
    slug: "original",
    title: "Tony AI vs Original Tony (TrustMRR)",
    description:
      "An honest comparison of the rebuilt Tony AI clone against the original Tony AI from TrustMRR. What changed, what improved, and what stayed the same.",
    competitor: "Original Tony AI",
    isOriginal: true,
  },
];

export const metadata = {
  title: "Tony AI Comparisons — See How Tony Stacks Up",
  description:
    "Compare Tony AI against OpenAI Codex, Claude Code, Zapier, Make, Microsoft Copilot, and the original Tony AI. Features, pricing, pros, cons, and verdicts.",
};

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-roman-dark text-white">
      <nav className="border-b border-white/10 bg-roman-dark/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-roman-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Tony AI</span>
          </Link>
          <Link
            href="/chat"
            className="bg-roman-blue hover:bg-sky-400 text-roman-dark font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center mb-16">
          <p className="text-roman-blue font-semibold text-sm tracking-wider uppercase mb-4">Comparisons</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">See how Tony stacks up.</h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Honest, detailed comparisons to help you choose the right AI tool for your team. We favor Tony where it genuinely wins.
          </p>
        </div>

        <div className="grid gap-6">
          {comparisons.map((comp) => (
            <Link
              key={comp.slug}
              href={`/compare/${comp.slug}`}
              className="group bg-white/5 border border-white/10 hover:border-roman-blue/50 rounded-2xl p-6 transition-all hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-roman-blue transition-colors">
                    {comp.title}
                  </h2>
                  <p className="text-neutral-300 leading-relaxed">{comp.description}</p>
                  {comp.isOriginal && (
                    <span className="inline-block mt-3 text-xs bg-roman-blue/10 text-roman-blue border border-roman-blue/20 px-2 py-1 rounded-full">
                      Featured comparison
                    </span>
                  )}
                </div>
                <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-roman-blue group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-400 mb-4">Want to see a specific comparison?</p>
          <a
            href="mailto:compare@getroman.ai"
            className="inline-flex items-center gap-2 text-roman-blue hover:text-sky-400 transition-colors"
          >
            Request a comparison <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </main>
    </div>
  );
}
