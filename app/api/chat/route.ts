import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages array is required" }, { status: 400 });
    }
    const lastMessage = messages[messages.length - 1]?.content || "";
    const lower = lastMessage.toLowerCase();
    if (lower.includes("campaign") || lower.includes("marketing") || lower.includes("performance")) {
      return NextResponse.json({ reply: "Demo reply: use the web chat for live OpenRouter responses." });
    }
    if (lower.includes("cve") || lower.includes("security") || lower.includes("patch")) {
      return NextResponse.json({ reply: "Demo reply: security task noted." });
    }
    if (lower.includes("dashboard") || lower.includes("analytics") || lower.includes("metrics")) {
      return NextResponse.json({ reply: "Demo reply: dashboard request received." });
    }
    return NextResponse.json({ reply: "Demo reply: I can help with that. Want a summary, analysis, or next steps?" });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
