import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle, ExternalLink } from "lucide-react";

const romanAI = {
  name: "Tony AI",
  tagline: "Your AI coworker that delivers finished work",
  pricing: "$50/month Pro, $10k+/month Enterprise",
  freeTier: "No free tier — demo and paid plans only",
  strengths: [
    "Delivers finished work, not just suggestions",
    "Connects to 3,000+ tools and services",
    "Persistent memory across conversations",
    "Native Slack integration with 5-minute setup",
    "Works across all departments: marketing, engineering, product, sales",
    "Actually executes tasks: code migrations, PRs, dashboards, campaigns",
  ],
  weaknesses: [
    "Higher price point than basic AI chatbots",
    "Requires Slack/Teams workspace",
    "Enterprise-focused, not ideal for solo users",
  ],
  bestFor: "Teams that want an AI coworker, not a chatbot",
};

const competitor = {
  name: "OpenAI Codex",
  tagline: "OpenAI's CLI coding agent",
  pricing: "Pay-per-token / API usage",
  freeTier: "Free tier available with rate limits",
  strengths: [
    "Built by OpenAI, strong coding capabilities",
    "CLI-based, great for developers",
    "Access to latest GPT models",
    "OpenAI ecosystem integration",
  ],
  weaknesses: [
    "CLI-only: no Slack/Teams native integration",
    "Focused on coding, not sales/marketing tasks",
    "No persistent memory or context across sessions",
    "Requires technical setup and configuration",
  ],
  bestFor: "Solo developers who want a coding assistant",
};

const verdict = {
  winner: "Tony AI",
  reason: "Tony wins for teams that need an AI coworker across multiple departments. If you only need coding help in a CLI, Codex works. But Tony actually finishes real work in Slack across your entire stack.",
};

const faqs = [
  {
    question: "Is Tony AI a good OpenAI Codex alternative?",
    answer: "Yes, if your team needs more than just coding help. Tony AI works across marketing, sales, product, and engineering — not just CLI tasks. It's the better choice for teams that want finished deliverables, not code snippets.",
  },
  {
    question: "Tony AI vs OpenAI Codex: which is better in 2026?",
    answer: "For individual developers: Codex. For teams that need an AI coworker in Slack that connects to their entire stack and delivers finished work: Tony AI. They solve different problems.",
  },
  {
    question: "Can Tony AI replace my development workflow?",
    answer: "Tony AI can handle many dev tasks: code reviews, migrations, debugging, PR creation, and infrastructure checks. But it's not a replacement for a full IDE. It's best used alongside your existing dev tools.",
  },
  {
    question: "Does Tony AI integrate with GitHub and GitLab?",
    answer: "Yes, Tony connects to 3,000+ tools including GitHub, GitLab, Jira, Stripe, PostHog, and most major SaaS platforms. It can create PRs, run migrations, and update tickets directly.",
  },
];

export const metadata: Metadata = {
  title: "Tony AI vs OpenAI Codex — Features, Pricing & Which Is Better in 2026",
  description:
    "Honest comparison of Tony AI and OpenAI Codex. Tony delivers finished work across your stack in Slack; Codex is a CLI coding agent. See which fits your team.",
};

export default function OpenAICodexPage() {
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
        <Link href="/compare" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> All comparisons
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tony AI vs OpenAI Codex</h1>
          <p className="text-neutral-300 text-lg">An AI coworker for your whole team versus a CLI coding agent.</p>
        </div>

        {/* Verdict box */}
        <div className="bg-roman-blue/10 border border-roman-blue/30 rounded-2xl p-6 md:p-8 mb-12">
          <p className="text-roman-blue font-semibold text-sm uppercase tracking-wider mb-2">Verdict</p>
          <h2 className="text-2xl font-bold mb-2">{verdict.winner} wins for most teams.</h2>
          <p className="text-neutral-200 leading-relaxed">{verdict.reason}</p>
          <Link href="/chat" className="inline-flex items-center gap-2 bg-roman-blue hover:bg-sky-400 text-roman-dark font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105 mt-4">
            Try Tony Free <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        {/* Side-by-side comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 border border-roman-blue/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-1">{romanAI.name}</h3>
            <p className="text-sm text-neutral-400 mb-4">{romanAI.tagline}</p>
            <div className="space-y-3 text-sm">
              <div><span className="text-neutral-400">Pricing:</span> <span className="font-medium">{romanAI.pricing}</span></div>
              <div><span className="text-neutral-400">Free tier:</span> <span className="font-medium">{romanAI.freeTier}</span></div>
              <div>
                <span className="text-neutral-400">Best for:</span>
                <p className="font-medium mt-1">{romanAI.bestFor}</p>
              </div>
              <div>
                <p className="text-neutral-400 mb-2">Strengths:</p>
                <ul className="space-y-1">
                  {romanAI.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-neutral-400 mb-2">Limitations:</p>
                <ul className="space-y-1">
                  {romanAI.weaknesses.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-neutral-300">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-1">{competitor.name}</h3>
            <p className="text-sm text-neutral-400 mb-4">{competitor.tagline}</p>
            <div className="space-y-3 text-sm">
              <div><span className="text-neutral-400">Pricing:</span> <span className="font-medium">{competitor.pricing}</span></div>
              <div><span className="text-neutral-400">Free tier:</span> <span className="font-medium">{competitor.freeTier}</span></div>
              <div>
                <span className="text-neutral-400">Best for:</span>
                <p className="font-medium mt-1">{competitor.bestFor}</p>
              </div>
              <div>
                <p className="text-neutral-400 mb-2">Strengths:</p>
                <ul className="space-y-1">
                  {competitor.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-neutral-400 mb-2">Limitations:</p>
                <ul className="space-y-1">
                  {competitor.weaknesses.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-neutral-300">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-b from-roman-blue/20 to-transparent border border-roman-blue/20 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to try Tony AI?</h2>
          <p className="text-neutral-300 mb-6">See how an AI coworker can change your team's output.</p>
          <Link href="/chat" className="inline-flex items-center gap-2 bg-roman-blue hover:bg-sky-400 text-roman-dark font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105">
            Get Started <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
