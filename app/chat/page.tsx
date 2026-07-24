"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Send, Loader2, User, Sparkles, Trash2, WifiOff, Zap } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const greetMessage: Message = {
  role: "assistant",
  content: "Hey! I'm Tony, your AI coworker. I can help with marketing, engineering, product, or sales tasks. What are you working on today?",
  timestamp: new Date(),
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([greetMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"demo" | "live">("demo");
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const apiKey =
        typeof window !== "undefined"
          ? (process.env.NEXT_PUBLIC_OPENROUTER_API_KEY as string | undefined)
          : undefined;

      if (apiKey) {
        setMode("live");

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": typeof window !== "undefined" ? window.location.origin : "http://localhost:3012",
            "X-Title": "Tony AI",
          },
          body: JSON.stringify({
            model: "openai/gpt-4o-mini",
            messages: [
              { role: "system", content: "You are Tony, an AI coworker that delivers finished work." },
              ...messages
                .concat(userMessage)
                .map((m) => ({ role: m.role, content: m.content })),
            ],
            max_tokens: 1024,
            temperature: 0.7,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData?.error?.message || `OpenRouter error ${response.status}`);
        }

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || "I'm here to help.";
        setMessages((prev) => [...prev, { role: "assistant", content: reply, timestamp: new Date() }]);
      } else {
        setMode("demo");
        const reply = generateContextualReply(userMessage.content);
        setMessages((prev) => [...prev, { role: "assistant", content: reply, timestamp: new Date() }]);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
      setMode("demo");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I couldn't reach the live AI service: ${message}`,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([greetMessage]);
    setMode("demo");
    setError(null);
  };

  return (
    <div className="flex h-screen bg-roman-dark text-white">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-white/10 flex-col bg-roman-dark/50">
        <div className="p-4 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-roman-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold tracking-tight">Tony AI</span>
          </Link>
        </div>
        <div className="p-3">
          <button
            onClick={clearChat}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            <Sparkles className="w-4 h-4" /> New Chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-3 space-y-1">
          <p className="text-xs text-neutral-500 px-3 py-2">Recent</p>
          <button className="w-full text-left px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white">
            Q1 Campaign Analysis
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            Engineering Migration
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            Content Plan Q2
          </button>
        </div>
        <div className="p-3 border-t border-white/10">
          <Link href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-400 hover:text-white transition-colors">
            ← Back to site
          </Link>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="border-b border-white/10 px-6 py-3 flex items-center justify-between bg-roman-dark/80 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-roman-blue/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-roman-blue" />
            </div>
            <div>
              <h1 className="font-semibold text-sm">Tony AI</h1>
              <p className="text-xs text-neutral-400">
                {mode === "live" ? "Live AI" : "Demo mode"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400 border border-white/10 rounded-lg px-3 py-1.5">
              {mode === "live" ? (
                <>
                  <Zap className="w-3.5 h-3.5 text-roman-blue" />
                  <span>OpenRouter</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Demo</span>
                </>
              )}
            </div>
            <button
              onClick={clearChat}
              className="p-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              title="Clear chat"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto py-6 px-4 space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-lg bg-roman-blue flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">T</span>
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-roman-blue text-roman-dark"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-lg bg-neutral-700 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-neutral-300" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4 justify-start">
                <div className="w-8 h-8 rounded-lg bg-roman-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">T</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-white/10 bg-roman-dark/80 backdrop-blur-xl">
          <div className="max-w-3xl mx-auto p-4">
            {error && (
              <div className="mb-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-400">
                {error}
              </div>
            )}
            <div className="flex gap-3 items-end">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message Tony..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 resize-none focus:outline-none focus:border-roman-blue"
                rows={1}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-roman-blue hover:bg-sky-400 disabled:bg-neutral-700 disabled:cursor-not-allowed text-roman-dark font-semibold px-4 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-neutral-500 mt-2 text-center">
              {mode === "live" ? "Live mode • OpenRouter" : "Demo mode • add NEXT_PUBLIC_OPENROUTER_API_KEY to go live"}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function generateContextualReply(userMessage: string): string {
  const lower = userMessage.toLowerCase();

  if (lower.includes("campaign") || lower.includes("marketing") || lower.includes("performance")) {
    return "I've analyzed your request.\n\n**Insights:**\n• Campaign performance is strong\n• Subject line optimization could improve outreach\n• Best channels: email, LinkedIn\n\nWant me to build the next actions?";
  }

  if (lower.includes("cve") || lower.includes("vulnerability") || lower.includes("security") || lower.includes("patch")) {
    return "Security analysis complete.\n\n**CVE:**\n• Severity: High\n• Action: Patch immediately\n\n**Steps:**\n1. Update dependency\n2. Run tests\n3. Deploy to staging\n\nReady when you are.";
  }

  if (lower.includes("dashboard") || lower.includes("analytics") || lower.includes("metrics")) {
    return "Dashboard built.\n\n**Metrics:**\n• DAU/WAU/MAU\n• Retention cohorts\n• Feature adoption\n\n**Key insight:** 3+ integrations in week 1 → 4.2x retention.\n\nWant me to add custom views?";
  }

  return "I can help with that. Want a quick summary, detailed analysis, or actionable next steps?";
}
