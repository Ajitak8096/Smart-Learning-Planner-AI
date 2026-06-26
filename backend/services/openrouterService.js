const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173",
    "X-Title": "Smart Learning Planner AI",
  },
});

const askAI = async (messages) => {
  try {
    const completion = await client.chat.completions.create({
      model: "google/gemma-4-31b-it:free",

      messages,

      temperature: 0.7,

      max_tokens: 500,
    });

    return completion.choices[0].message.content;
  } catch (err) {
    console.log(err);

    return "Unable to generate response.";
  }
};

module.exports = askAI;