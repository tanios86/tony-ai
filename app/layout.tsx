import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tony AI — Your AI Coworker That Delivers Finished Work",
    template: "%s | Tony AI",
  },
  description:
    "Tony is your AI coworker that lives in Slack, connects to 3,000+ tools, and actually finishes work instead of giving suggestions. Automated engineering, marketing, product, and sales tasks.",
  openGraph: {
    title: "Tony AI — Your AI Coworker That Delivers Finished Work",
    description:
      "Stop managing work. Start doing work. Tony connects to your tools and delivers finished tasks in Slack, Teams, and the web.",
    type: "website",
    url: "https://www.getroman.ai",
    siteName: "Tony AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony AI — Your AI Coworker That Delivers Finished Work",
    description:
      "Tony lives in Slack, connects to your stack, and actually finishes tasks. Meet your AI coworker.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{__html: `body{background:#111;color:#fff;font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased} a{color:inherit;text-decoration:inherit} .min-h-screen{min-height:100vh} .bg-roman-dark{background:#111} .text-white{color:#fff} .text-roman-blue{color:#0ea5e9} .text-neutral-300{color:#d4d4d4} .text-neutral-400{color:#a1a1a1} .text-neutral-600{color:#525252} .text-neutral-500{color:#737373} .text-neutral-200{color:#e5e5e5} .bg-white\\/5{background:#ffffff0d} .bg-white\\/10{background:#ffffff1a} .bg-roman-blue{background:#0ea5e9} .bg-roman-dark\\/50{background:#11111180} .border-white\\/10{border-color:#ffffff1a} .border-white\\/5{border-color:#ffffff0d} .border-roman-blue\\/20{border-color:#0ea5e933} .bg-roman-blue\\/10{background:#0ea5e91a} .bg-roman-blue\\/20{background:#0ea5e933} .bg-neutral-700{background:#404040} .bg-emerald-500\\/10{background:#00bb7f1a} .bg-purple-500\\/10{background:#ac4bff1a} .bg-orange-500\\/10{background:#fe6e001a} .flex{display:flex} .grid{display:grid} .flex-col{flex-direction:column} .flex-wrap{flex-wrap:wrap} .items-center{align-items:center} .justify-center{justify-content:center} .justify-between{justify-content:space-between} .gap-2{gap:.5rem} .gap-3{gap:.75rem} .gap-4{gap:1rem} .gap-6{gap:1.5rem} .gap-8{gap:2rem} .px-6{padding-inline:1.5rem} .py-10{padding-block:2.5rem} .py-12{padding-block:3rem} .py-20{padding-block:5rem} .py-24{padding-block:6rem} .pt-32{padding-top:8rem} .pb-20{padding-bottom:5rem} .p-6{padding:1.5rem} .p-12{padding:3rem} .p-4{padding:1rem} .mb-6{margin-bottom:1.5rem} .mb-8{margin-bottom:2rem} .mb-10{margin-bottom:2.5rem} .mb-12{margin-bottom:3rem} .mb-16{margin-bottom:4rem} .mb-4{margin-bottom:1rem} .mb-2{margin-bottom:.5rem} .mt-2{margin-top:.5rem} .mt-4{margin-top:1rem} .text-center{text-align:center} .text-left{text-align:left} .text-xs{font-size:.75rem} .text-sm{font-size:.875rem} .text-lg{font-size:1.125rem} .text-xl{font-size:1.25rem} .text-2xl{font-size:1.5rem} .text-3xl{font-size:1.875rem} .text-4xl{font-size:2.25rem} .text-5xl{font-size:3rem} .font-semibold{font-weight:600} .font-bold{font-weight:700} .tracking-tight{letter-spacing:-.025em} .tracking-wider{letter-spacing:.05em} .tracking-widest{letter-spacing:.1em} .uppercase{text-transform:uppercase} .whitespace-nowrap{white-space:nowrap} .rounded{border-radius:.25rem} .rounded-lg{border-radius:.5rem} .rounded-xl{border-radius:.75rem} .rounded-2xl{border-radius:1rem} .rounded-3xl{border-radius:1.5rem} .rounded-full{border-radius:9999px} .border{border-width:1px;border-style:solid} .border-y{border-block-width:1px;border-block-style:solid} .border-t{border-top-width:1px;border-top-style:solid} .border-b{border-bottom-width:1px;border-bottom-style:solid} .opacity-50{opacity:.5} .hover\\:text-white:hover{color:#fff} .hover\\:bg-white\\/10:hover{background:#ffffff1a} .hover\\:bg-sky-400:hover{background:#00bcfe} .hover\\:scale-105:hover{scale:1.05} .transition-all{transition:all .15s cubic-bezier(.4,0,.2,1)} .hidden{display:none} .md\\:flex{display:flex} .md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))} @media(min-width:48rem){.md\\:flex{display:flex}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:text-4xl{font-size:2.25rem}.md\\:text-5xl{font-size:3rem}.md\\:text-7xl{font-size:4.5rem}.md\\:text-xl{font-size:1.25rem}} @media(min-width:40rem){.sm\\:flex-row{flex-direction:row}}`}} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
