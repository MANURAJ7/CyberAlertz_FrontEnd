import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    console.log("new Request");
    const genAI = new GoogleGenerativeAI(process.env.NEXT_GEMINI_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const data = await req.json();

    const prompt = data.body;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    const output = await response.text();
    return NextResponse.json({ status: "ok", output: output });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ status: "error", output: err.message });
  }
}
