const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173",
    "X-Title": "Smart Learning Planner AI",
  },
});

const generateNotes = async (topic) => {
  try {
    const completion = await client.chat.completions.create({
      model: "google/gemma-4-31b-it:free", // Same model that worked for your AI Recommendation
      messages: [
        {
          role: "system",
          content:
            "You are an expert teacher. Generate beautiful study notes in Markdown with headings, bullet points, examples, key points, and a short summary at the end.",
        },
        {
          role: "user",
          content: `Generate detailed study notes for: ${topic}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1200,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.log("NOTES AI ERROR");
    console.log(error);

    throw error;
  }
};

module.exports = generateNotes;