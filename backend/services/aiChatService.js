const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

const chatWithAI = async (message) => {
  const completion = await client.chat.completions.create({
    model: "google/gemma-3n-e4b-it:free",

    messages: [
      {
        role: "system",
        content:
          "You are an expert AI study coach. Help students prepare for exams, explain concepts, solve doubts and motivate them.",
      },
      {
        role: "user",
        content: message,
      },
    ],

    temperature: 0.7,
    max_tokens: 500,
  });

  return completion.choices[0].message.content;
};

module.exports = chatWithAI;