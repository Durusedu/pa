import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not defined in the environment.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateInsight = async (topic: string, details: string[]): Promise<string> => {
  try {
    const ai = getClient();
    const prompt = `
      You are a senior process automation consultant. 
      The user is interested in the topic: "${topic}".
      
      Key points provided:
      ${details.map(d => `- ${d}`).join('\n')}
      
      Please provide a concise, high-level strategic executive summary (approx 150-200 words) on how to successfully implement this in a modern enterprise. 
      Focus on best practices and common pitfalls. 
      Format the response in Markdown, using bullet points where appropriate.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No insight generated.";
  } catch (error) {
    console.error("Error generating insight:", error);
    return "Unable to generate insights at this time. Please check your API configuration.";
  }
};