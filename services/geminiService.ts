
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getChatRecommendation(query: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `O usuário está em um dashboard de conteúdos premium chamado HOTGRAM. Ele perguntou: "${query}". Responda de forma curta e engajadora como um assistente de concierge premium.`,
        config: {
          temperature: 0.7,
          maxOutputTokens: 150
        }
      });
      return response.text || "Desculpe, não consegui processar sua recomendação no momento.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Erro ao conectar com a inteligência artificial.";
    }
  }
}

export const geminiService = new GeminiService();
