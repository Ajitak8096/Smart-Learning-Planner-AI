const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173",
    "X-Title": "Smart Learning Planner AI",
  },
});

const generateQuiz = async (
  topic,
  difficulty
) => {

  const prompt = `
Generate exactly 10 multiple choice questions.

Topic: ${topic}

Difficulty: ${difficulty}

Return ONLY valid JSON.

Format:

[
{
"question":"...",
"options":["A","B","C","D"],
"answer":"A",
"explanation":"..."
}
]

No markdown.
`;

  const completion =
    await client.chat.completions.create({

      model: "google/gemma-4-31b-it:free",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.6,

    });

  return completion.choices[0].message.content;
};

module.exports = generateQuiz;