
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getGearAdvice(userMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are 'Mav', the expert AI assistant for Mav's Motorsports. You are rugged, professional, and friendly. You provide expert advice on motorcycle parts, riding gear, and accessories. Keep answers concise and helpful. Recommend users visit the shop at 1120 W Ward Ave, Ridgecrest for specific fitments.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I'm having a little trouble connecting right now. Give the shop a call at (760) 382-9231 instead!";
  }
}
