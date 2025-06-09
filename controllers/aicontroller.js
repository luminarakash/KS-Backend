import { generateContent } from '../services/aiservice.js';

export const getReview = async (req, res) => {
  const prompt = req.body.prompt;

  if (!prompt) {
    return res.status(400).send('Prompt is required');
  }

  try {
    const response = await generateContent(prompt);
    res.send(response);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal server error');
  }
};
