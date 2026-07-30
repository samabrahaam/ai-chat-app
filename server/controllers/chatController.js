const { generateResponse } = require("../services/huggingFaceService");

exports.chat = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || !prompt.trim()) {
      return res.status(400).json({
        error: "Prompt is required.",
      });
    }

    const aiResponse = await generateResponse(prompt);

    res.json({
      response: aiResponse,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to generate AI response.",
    });
  }
};
