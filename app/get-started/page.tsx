import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Play, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Started | Tony AI",
  description: "Get started with Tony AI in 5 minutes.",
};

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-roman-dark text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-roman-blue font-semibold text-sm tracking-wider uppercase mb-4">Get Started</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Set up Tony in 5 minutes.</h1>
        <p className="text-neutral-300 text-lg mb-10">No engineering required. Connect Slack, pick a template, and start having Tony finish tasks for your team.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-lg bg-roman-blue/10 flex items-center justify-center text-roman-blue font-bold mb-4">1</div>
            <h3 className="font-semibold mb-2">Create your workspace</h3>
            <p className="text-sm text-neutral-400">Invite teammates and choose your default team channel.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4">2</div>
            <h3 className="font-semibold mb-2">Connect integrations</h3>
            <p className="text-sm text-neutral-400">Link your marketing, engineering, product, and sales tools.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold mb-4">3</div>
            <h3 className="font-semibold mb-2">Run your first task</h3>
            <p className="text-sm text-neutral-400">Ask Tony to complete a real task and review the delivered output.</p>
          </div>
        </div>

        <div className="bg-white/5 border border-roman-blue/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Ready to try Tony?</h2>
            <p className="text-neutral-300">Start free, no credit card required.</p>
          </div>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-roman-blue hover:bg-sky-400 text-roman-dark font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
          >
            Open Tony <Sparkles className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-neutral-400">
          <CheckCircle2 className="w-4 h-4 text-roman-blue" />
          <span>5-minute setup • No engineering required</span>
        </div>
      </div>
    </div>
  );
}
