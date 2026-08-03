const { InferenceClient } = require("@huggingface/inference");
const { HF_API_KEY, HF_MODEL } = require("../config/env");

const client = new InferenceClient(HF_API_KEY);

async function generateResponse(prompt) {
  try {
    const response = await client.chatCompletion({
      model: HF_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI assistant. Format responses using Markdown. Use headings, bullet lists, numbered lists, and code blocks whenever they improve readability. Avoid long walls of text.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 300,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Hugging Face Error:", error);
    throw new Error("Failed to generate AI response.");
  }
}

module.exports = {
  generateResponse,
};
