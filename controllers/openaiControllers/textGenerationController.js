

// Import OpenAI service
import { generateText as _generateText } from '../../services/openaiService.js';

// Example controller function to handle text generation request
async function generateText(req, res) {
    try {
        const { prompt } = req.body;
        // Call OpenAI service to generate text
        const generatedText = await _generateText(prompt);
        // Send generated text as response
        res.status(200).json({ generatedText });
    } catch (error) {
        console.error('Error generating text:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default {
    generateText
};
