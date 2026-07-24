import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle, ExternalLink } from "lucide-react";

const rebuilt = {
  name: "Rebuilt Tony AI (this site)",
  tagline: "Your AI coworker that delivers finished work",
  pricing: "Free to try, $50/month Pro, $10k+/month Enterprise",
  freeTier: "Try the core feature free with demo data",
  strengths: [
    "Fully working chat demo on the homepage",
    "Modern, responsive design",
    "Real AI integration via OpenRouter",
    "Comparison hub with detailed competitor pages",
    "SEO optimized with structured data",
    "Fast load times and smooth transitions",
  ],
  weaknesses: [
    "Demo mode by default unless API key is configured",
    "Fewer integrations than the mature original",
    "Smaller team behind the rebuild",
  ],
  bestFor: "Evaluating the Tony AI concept before buying or scaling",
};

const original = {
  name: "Original Tony AI (TrustMRR)",
  tagline: "The Slack AI coworker with 3,000+ integrations",
  pricing: "$50/month Pro, $10,000+/month Enterprise",
  freeTier: "No free tier — demo available",
  strengths: [
    "3,000+ tool and service integrations",
    "Persistent memory across Slack conversations",
    "Actually executes tasks: creates PRs, runs migrations, builds dashboards",
    "Native Slack app with 5-minute setup",
    "Proven revenue: $10k+ MRR, +89% growth",
    "Works across marketing, engineering, product, sales, leadership",
  ],
  weaknesses: [
    "Website design feels dated and mechanical",
    "English-only interface",
    "Enterprise-first pricing (not ideal for solo users)",
    "Requires Slack/Teams workspace",
  ],
  bestFor: "Teams that need a production-ready AI coworker in Slack",
};

const verdict = {
  winner: "Depends on your goal",
  reason: "If you want a polished, working demo to evaluate whether an AI coworker fits your workflow, use the rebuilt version. If you want the full production system behind a growing business with real revenue and 3,000+ integrations, the original at TrustMRR is the live product.",
};

const faqs = [
  {
    question: "Is this rebuilt Tony AI the same as the original?",
    answer: "No. This is an independent rebuild demonstrating the product concept. The original Tony AI is a live business available on TrustMRR. Both share the same core idea: an AI coworker that delivers finished work.",
  },
  {
    question: "Which one should I choose in 2026?",
    answer: "Try this rebuilt version first to see if the concept fits your needs. If it does, consider acquiring or licensing the original Tony AI from TrustMRR for the full production system.",
  },
  {
    question: "Does the rebuilt version connect to real tools?",
    answer: "Currently the rebuilt version uses OpenRouter for AI responses and provides a working demo of the chat experience. Full tool integrations would require additional backend development.",
  },
  {
    question: "Is the original Tony AI still growing?",
    answer: "Yes. According to TrustMRR data, the original Tony AI shows +89% growth in the last 30 days, with $10,225 MRR and 6 active subscriptions. Domain rating is 1/100, indicating early-stage SEO potential.",
  },
];

export const metadata: Metadata = {
  title: "Rebuilt Tony AI vs Original — What Changed and What Stayed the Same",
  description:
    "Honest comparison between the rebuilt Tony AI clone and the original from TrustMRR. Features, design, pricing, pros, cons, and which to use.",
};

export default function OriginalComparisonPage() {
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
            Try Demo
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <Link href="/compare" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> All comparisons
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rebuilt Tony AI vs Original</h1>
          <p className="text-neutral-300 text-lg">A fresh rebuild against the live business on TrustMRR.</p>
        </div>

        <div className="bg-roman-blue/10 border border-roman-blue/30 rounded-2xl p-6 md:p-8 mb-12">
          <p className="text-roman-blue font-semibold text-sm uppercase tracking-wider mb-2">Verdict</p>
          <h2 className="text-2xl font-bold mb-2">{verdict.winner}</h2>
          <p className="text-neutral-200 leading-relaxed">{verdict.reason}</p>
          <div className="flex gap-4 mt-6">
            <Link href="/chat" className="inline-flex items-center gap-2 bg-roman-blue hover:bg-sky-400 text-roman-dark font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105">
              Try Rebuilt <ExternalLink className="w-4 h-4" />
            </Link>
            <a href="https://trustmrr.com/startup/roman-ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-all">
              View Original <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 border border-roman-blue/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-1">{rebuilt.name}</h3>
            <p className="text-sm text-neutral-400 mb-4">{rebuilt.tagline}</p>
            <div className="space-y-3 text-sm">
              <div><span className="text-neutral-400">Pricing:</span> <span className="font-medium">{rebuilt.pricing}</span></div>
              <div><span className="text-neutral-400">Free tier:</span> <span className="font-medium">{rebuilt.freeTier}</span></div>
              <div>
                <span className="text-neutral-400">Best for:</span>
                <p className="font-medium mt-1">{rebuilt.bestFor}</p>
              </div>
              <div>
                <p className="text-neutral-400 mb-2">Strengths:</p>
                <ul className="space-y-1">
                  {rebuilt.strengths.map((s) => (
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
                  {rebuilt.weaknesses.map((w) => (
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
            <h3 className="text-xl font-bold mb-1">{original.name}</h3>
            <p className="text-sm text-neutral-400 mb-4">{original.tagline}</p>
            <div className="space-y-3 text-sm">
              <div><span className="text-neutral-400">Pricing:</span> <span className="font-medium">{original.pricing}</span></div>
              <div><span className="text-neutral-400">Free tier:</span> <span className="font-medium">{original.freeTier}</span></div>
              <div>
                <span className="text-neutral-400">Best for:</span>
                <p className="font-medium mt-1">{original.bestFor}</p>
              </div>
              <div>
                <p className="text-neutral-400 mb-2">Strengths:</p>
                <ul className="space-y-1">
                  {original.strengths.map((s) => (
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
                  {original.weaknesses.map((w) => (
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
      </main>
    </div>
  );
}
