import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(req, res) {
  const { text, question } = req.body;
  const aiResponse = await fetch("https://learnwise.onrender.com/followup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
      question: question,
    }),
  });
  const aiResponseJSON = await aiResponse.json();
  console.log(aiResponseJSON, "aiResponseJSON");
  return NextResponse.json({ ai: aiResponseJSON, parsedText: text });
}
