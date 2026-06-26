const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5000",
    "X-Title": "Smart Learning Planner AI",
  },
});

const generateRecommendation = async (planner) => {
  try {
    if (!planner) {
      throw new Error("Planner data not found.");
    }

    const examName = planner.examName || "Unknown Exam";
    const goal = planner.goal || "Study";
    const dailyHours = planner.dailyHours || 2;
    const weakSubjects = planner.weakSubjects
      ? planner.weakSubjects.join(", ")
      : "None";
    const progress = planner.progress || 0;
    const readiness = planner.readiness || 0;

    const prompt = `
You are an AI Study Coach.

Student Details:

Exam: ${examName}
Goal: ${goal}
Daily Study Hours: ${dailyHours}
Weak Subjects: ${weakSubjects}
Progress: ${progress}%
Readiness: ${readiness}%

Give:

1. Motivation
2. Today's Study Plan
3. Weak Subject Tips
4. Productivity Advice

Keep it under 150 words.
`;

    const completion = await client.chat.completions.create({
      model: "google/gemma-4-31b-it:free",
      messages: [
        {
          role: "system",
          content: "You are a professional study coach.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 250,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.log("\n========== OPENROUTER ERROR ==========\n");

    console.dir(error, {
      depth: null,
    });

    console.log("\n======================================\n");

    return "Unable to generate AI recommendation.";
  }
};

module.exports = generateRecommendation;