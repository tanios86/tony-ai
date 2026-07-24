import Link from "next/link";
import { ArrowRight, Play, MessageSquare, CheckCircle2, Zap, Shield, GitBranch, Users, BarChart3, Workflow } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-roman-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-roman-dark/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-roman-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Tony AI</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <Link href="#product" className="hover:text-white transition-colors">Product</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#integrations" className="hover:text-white transition-colors">Integrations</Link>
            <Link href="#examples" className="hover:text-white transition-colors">Examples</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/chat" className="text-sm text-neutral-300 hover:text-white transition-colors">
              Try Now
            </Link>
            <Link
              href="/get-started"
              className="bg-roman-blue hover:bg-sky-400 text-roman-dark font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-roman-blue/10 to-transparent" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-roman-blue font-semibold text-sm tracking-wider uppercase mb-6">
            Stop Managing Work. Start Doing Work.
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Meet Tony, Your AI Coworker.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Tony lives in Slack, connects to your entire stack, and actually finishes tasks — instead of giving you suggestions to copy-paste. It&apos;s the coworker who never drops the ball.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/get-started"
              className="bg-roman-blue hover:bg-sky-400 text-roman-dark font-semibold px-8 py-3.5 rounded-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#demo"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-3.5 rounded-lg transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4" /> Watch Demo
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-neutral-400">
            <CheckCircle2 className="w-4 h-4 text-roman-blue" />
            <span>5-minute setup • No engineering required</span>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-neutral-400 mt-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#4A154B]" />
              <span>Slack</span>
            </div>
            <span className="text-neutral-600">|</span>
            <span>Teams coming soon</span>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-y border-white/5 py-10 px-6">
        <p className="text-center text-xs tracking-widest text-neutral-500 uppercase mb-6">Trusted by teams at</p>
        <div className="flex flex-wrap justify-center">
          {["HubSpot", "Google", "Anthropic", "Amazon", "OpenAI", "Forbes", "Microsoft", "PayPal"].map((logo) => (
            <span key={logo} className="text-base font-bold tracking-tight text-neutral-300 whitespace-nowrap px-3 py-1">
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* Product */}
      <section id="product" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-roman-blue font-semibold text-sm tracking-wider uppercase mb-4">Product</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for real work.</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Not another chat wrapper. Tony connects to your tools, executes tasks, and ships outcomes across every team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-roman-blue/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-roman-blue/10 flex items-center justify-center text-roman-blue mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2">Always-on execution</h3>
              <p className="text-sm text-neutral-400">Tony doesn’t just suggest. It completes marketing sends, patches vulnerabilities, builds dashboards, and closes research loops.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-roman-blue/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2">Enterprise-ready</h3>
              <p className="text-sm text-neutral-400">SOC 2-aligned controls, audit logs, role-based access, and data isolation so Tony fits your security stack.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-roman-blue/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2">Persistent memory</h3>
              <p className="text-sm text-neutral-400">Tony remembers context across tasks, integrations, and teammates—so work is continuous instead of repetitive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="border-y border-white/5 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-roman-blue font-semibold text-sm tracking-wider uppercase mb-4">Integrations</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Connects to your stack.</h2>
            <p className="text-neutral-400 text-lg">Works where your team already works.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Slack", desc: "Chat & workflows", icon: MessageSquare },
              { name: "HubSpot", desc: "CRM & campaigns", icon: BarChart3 },
              { name: "GitHub", desc: "Code & reviews", icon: GitBranch },
              { name: "Teams", desc: "Coming soon", icon: Users },
            ].map((item) => (
              <div key={item.name} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-roman-blue/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="w-5 h-5 text-roman-blue" />
                  <div>
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-xs text-neutral-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-roman-blue font-semibold text-sm tracking-wider uppercase mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Start free. Scale as you ship.</h2>
            <p className="text-neutral-400 text-lg">Simple plans with usage-based upgrades when you need more.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-1">Starter</h3>
              <p className="text-sm text-neutral-400 mb-4">For individuals exploring AI workflows.</p>
              <p className="text-3xl font-bold mb-4">$0<span className="text-sm text-neutral-400 font-normal">/mo</span></p>
              <ul className="text-sm text-neutral-300 space-y-2 mb-6">
                <li>5 tasks/day</li>
                <li>1 integration</li>
                <li>Basic analytics</li>
              </ul>
              <Link href="/get-started" className="block text-center bg-roman-blue text-roman-dark font-semibold px-4 py-2 rounded-lg hover:bg-sky-400 transition-colors">Start free</Link>
            </div>
            <div className="bg-white/5 border border-roman-blue/30 rounded-2xl p-6 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-roman-blue text-roman-dark text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
              <h3 className="font-semibold mb-1">Pro</h3>
              <p className="text-sm text-neutral-400 mb-4">For teams shipping with Tony daily.</p>
              <p className="text-3xl font-bold mb-4">$49<span className="text-sm text-neutral-400 font-normal">/mo</span></p>
              <ul className="text-sm text-neutral-300 space-y-2 mb-6">
                <li>200 tasks/day</li>
                <li>5 integrations</li>
                <li>Priority execution</li>
              </ul>
              <Link href="/get-started" className="block text-center bg-roman-blue text-roman-dark font-semibold px-4 py-2 rounded-lg hover:bg-sky-400 transition-colors">Get started</Link>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-1">Enterprise</h3>
              <p className="text-sm text-neutral-400 mb-4">For orgs that need control and scale.</p>
              <p className="text-3xl font-bold mb-4">Custom</p>
              <ul className="text-sm text-neutral-300 space-y-2 mb-6">
                <li>Unlimited tasks</li>
                <li>Custom integrations</li>
                <li>SSO, audit logs, SLA</li>
              </ul>
              <Link href="/get-started" className="block text-center border border-white/10 text-white font-semibold px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">Contact sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-roman-blue font-semibold text-sm tracking-wider uppercase mb-4">Examples</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">See Tony in action.</h2>
            <p className="text-neutral-400 text-lg">Real work, delivered. Across every team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Marketing Example */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-roman-blue/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-roman-blue/10 flex items-center justify-center text-roman-blue font-bold">M</div>
                <div>
                  <h3 className="font-semibold">Marketing</h3>
                  <p className="text-sm text-neutral-400">Campaigns, analytics, outreach</p>
                </div>
              </div>
              <div className="bg-roman-dark/50 rounded-xl p-4 space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs">LP</div>
                  <div className="flex-1 bg-white/5 rounded-lg p-3">
                    <p className="text-sm text-neutral-200">@Tony pull performance for all Instantly campaigns this month</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-roman-blue/20 flex items-center justify-center text-xs text-roman-blue">R</div>
                  <div className="flex-1 bg-roman-blue/10 border border-roman-blue/20 rounded-lg p-3">
                    <p className="text-sm text-neutral-200 mb-2">Instantly Breakdown: March 2026</p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400">
                      <div>Campaign Open: 62%</div>
                      <div>Reply: 8.4%</div>
                      <div>Meetings: 12</div>
                    </div>
                    <p className="text-xs text-roman-blue mt-2">Retargeting has the best reply rate...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Example */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-roman-blue/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">E</div>
                <div>
                  <h3 className="font-semibold">Engineering</h3>
                  <p className="text-sm text-neutral-400">Code, infrastructure, debugging</p>
                </div>
              </div>
              <div className="bg-roman-dark/50 rounded-xl p-4 space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs">AR</div>
                  <div className="flex-1 bg-white/5 rounded-lg p-3">
                    <p className="text-sm text-neutral-200">@Tony critical CVE in jsonwebtoken@9.0.0</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-roman-blue/20 flex items-center justify-center text-xs text-roman-blue">R</div>
                  <div className="flex-1 bg-roman-blue/10 border border-roman-blue/20 rounded-lg p-3">
                    <p className="text-sm text-neutral-200 mb-2">🚨 CVE-2026-1847 Analysis</p>
                    <p className="text-xs text-neutral-400 mb-2">Bumped to 9.0.3. Full test suite passing.</p>
                    <p className="text-xs text-roman-blue">PR ready. Recommend merging today.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Example */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-roman-blue/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold">P</div>
                <div>
                  <h3 className="font-semibold">Product</h3>
                  <p className="text-sm text-neutral-400">Analytics, user research, planning</p>
                </div>
              </div>
              <div className="bg-roman-dark/50 rounded-xl p-4 space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs">DK</div>
                  <div className="flex-1 bg-white/5 rounded-lg p-3">
                    <p className="text-sm text-neutral-200">@Tony build a dashboard with DAU, WAU, retention</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-roman-blue/20 flex items-center justify-center text-xs text-roman-blue">R</div>
                  <div className="flex-1 bg-roman-blue/10 border border-roman-blue/20 rounded-lg p-3">
                    <p className="text-sm text-neutral-200 mb-2">📊 Dashboard built</p>
                    <p className="text-xs text-neutral-400">DAU/WAU/MAU trends, retention cohorts, feature adoption</p>
                    <p className="text-xs text-roman-blue mt-1">Key insight: users with 3+ integrations in week 1 have 4.2x higher retention.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Example */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-roman-blue/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 font-bold">S</div>
                <div>
                  <h3 className="font-semibold">Sales</h3>
                  <p className="text-sm text-neutral-400">Prospecting, pipeline, intelligence</p>
                </div>
              </div>
              <div className="bg-roman-dark/50 rounded-xl p-4 space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs">JL</div>
                  <div className="flex-1 bg-white/5 rounded-lg p-3">
                    <p className="text-sm text-neutral-200">@Tony weekly competitor watch on Lemlist, Clay, Apollo</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-roman-blue/20 flex items-center justify-center text-xs text-roman-blue">R</div>
                  <div className="flex-1 bg-roman-blue/10 border border-roman-blue/20 rounded-lg p-3">
                    <p className="text-sm text-neutral-200 mb-2">🔍 Weekly Competitor Watch</p>
                    <p className="text-xs text-neutral-400 mb-1">• Lemlist moved downmarket</p>
                    <p className="text-xs text-neutral-400 mb-1">• Clay launched AI Agent workflows</p>
                    <p className="text-xs text-roman-blue">💡 Takeaway: We can own the enterprise gap.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="border-y border-white/5 py-24 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-roman-blue font-semibold text-sm tracking-wider uppercase mb-4">Watch Demo</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See Tony finish real tasks.</h2>
          <p className="text-neutral-400 text-lg mb-10">Replace this placeholder with your product demo.</p>
          <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-roman-dark/60" />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-neutral-300">Your demo video</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center bg-gradient-to-b from-roman-blue/20 to-transparent border border-roman-blue/20 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to meet your AI coworker?</h2>
          <p className="text-neutral-300 text-lg mb-8">Join teams shipping faster with Tony. Start free, no credit card required.</p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-roman-blue hover:bg-sky-400 text-roman-dark font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 text-lg"
          >
            Try Tony Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-roman-blue flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="font-semibold text-sm">Tony AI</span>
          </div>
          <div className="flex gap-6 text-sm text-neutral-400">
            <Link href="/compare" className="hover:text-white transition-colors">Compare</Link>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          <p className="text-sm text-neutral-500"> © 2026 Tony AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
