// controllers/htmlTranslationController.js

const fs = require('fs');
const cheerio = require('cheerio');
const translationService = require('../services/translationService');

// Controller function to handle HTML translation request
async function translateHTML(req, res) {
    try {
        const { targetLanguage } = req.body;

        // Read HTML content from file
        const htmlContent = fs.readFileSync('example.html', 'utf8');

        // Load HTML content using Cheerio
        const $ = cheerio.load(htmlContent);

        // Extract text content from HTML elements
        const textContent = $('body').text();

        // Call translation service to translate text
        const translatedText = await translationService.translateText(textContent, targetLanguage);

        // Create a new HTML file with translated text
        const translatedHTML = `<html><body><div>${translatedText}</div></body></html>`;
        fs.writeFileSync('translated.html', translatedHTML);

        // Send the path to the translated HTML file as response
        res.status(200).json({ translatedHTMLFile: 'translated.html' });
    } catch (error) {
        console.error('Error translating HTML:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    translateHTML
};
