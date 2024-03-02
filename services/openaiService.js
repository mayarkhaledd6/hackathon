// services/openaiService.js

// Import OpenAI SDK
import OpenAI from 'openai';

// Configure OpenAI API key
const openai = new OpenAI('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');

// Function to generate text using OpenAI service
async function generateText(prompt) {
    try {
        // Make request to OpenAI text generation API
        const response = await openai.complete({
            engine: 'davinci',
            prompt: prompt,
            maxTokens: 50
        });
        // Extract and return generated text
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating text:', error);
        throw new Error('Error generating text');
    }
}

export default {
    generateText
};
