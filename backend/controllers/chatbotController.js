const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Chatbot handler
const chatWithBot = async (req, res) => {
    const { userMessage } = req.body;

    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-4',
            messages: [{ role: 'user', content: userMessage }],
        });

        const botResponse = response.data.choices[0].message.content;
        res.status(200).json({ botResponse });
    } catch (err) {
        res.status(500).json({ error: 'Chatbot failed to respond' });
    }
};

module.exports = { chatWithBot };
