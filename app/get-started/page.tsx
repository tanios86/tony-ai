import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Play, CheckCircle2, Sparkles, CreditCard, UserPlus, Mail } from "lucide-react";

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
            <p className="text-sm text-neutral-400">Pick a template or ask Tony to complete a real task and review the delivered output.</p>
          </div>
        </div>

        <div className="bg-white/5 border border-roman-blue/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Ready to try Tony?</h2>
            <p className="text-neutral-300">Create an account and pick a plan to start.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-roman-blue hover:bg-sky-400 text-roman-dark font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              <UserPlus className="w-4 h-4" /> Create account
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              <Mail className="w-4 h-4" /> Continue with email
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/#" className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-roman-blue/50 transition-colors">
            <p className="text-xs text-neutral-400 mb-1">Starter</p>
            <p className="text-xl font-bold">Free</p>
            <p className="text-xs text-neutral-400 mt-1">5 tasks/day • 1 integration</p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm text-roman-blue">
              Start free <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <Link href="/#" className="bg-white/5 border border-roman-blue/30 rounded-2xl p-5 hover:border-roman-blue/50 transition-colors relative">
            <span className="absolute -top-2 right-4 bg-roman-blue text-roman-dark text-xs font-bold px-2 py-0.5 rounded-full">POPULAR</span>
            <p className="text-xs text-neutral-400 mb-1">Pro</p>
            <p className="text-xl font-bold">$49<span className="text-sm text-neutral-400 font-normal">/mo</span></p>
            <p className="text-xs text-neutral-400 mt-1">200 tasks/day • 5 integrations</p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm text-roman-blue">
              Get started <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <Link href="/#" className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-roman-blue/50 transition-colors">
            <p className="text-xs text-neutral-400 mb-1">Enterprise</p>
            <p className="text-xl font-bold">Custom</p>
            <p className="text-xs text-neutral-400 mt-1">Unlimited tasks • SSO & SLA</p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm text-roman-blue">
              Contact sales <ArrowRight className="w-3.5 h-3.5" />
            </span>
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
