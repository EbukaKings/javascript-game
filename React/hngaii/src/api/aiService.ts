import axios from "axios";

const AI_API_BASE = "https://chrome-ai-api.com"; // Replace with actual Chrome API endpoint

// Language Detection API
export const detectLanguage = async (text: string) => {
  try {
    const response = await axios.post(`${AI_API_BASE}/detect-language`, { text });
    return response.data.language; // e.g., "en"
  } catch (error) {
    console.error("Language detection failed", error);
    return null;
  }
};

// Summarization API
export const summarizeText = async (text: string) => {
  try {
    const response = await axios.post(`${AI_API_BASE}/summarize`, { text });
    return response.data.summary;
  } catch (error) {
    console.error("Summarization failed", error);
    return null;
  }
};

// Translation API
export const translateText = async (text: string, targetLang: string) => {
  try {
    const response = await axios.post(`${AI_API_BASE}/translate`, { text, targetLang });
    return response.data.translation;
  } catch (error) {
    console.error("Translation failed", error);
    return null;
  }
};
