import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [userMessage, setUserMessage] = useState('');
    const [botResponse, setBotResponse] = useState('');

    const sendMessage = async () => {
        try {
            const { data } = await axios.post('/api/chatbot/chat', { userMessage });
            setBotResponse(data.botResponse);
        } catch (err) {
            console.error('Error chatting with bot:', err);
        }
    };

    return (
        <div>
            <h2>Chat with our Mental Health Bot</h2>
            <textarea
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your message here..."
            />
            <button onClick={sendMessage}>Send</button>
            <div>
                <h3>Bot's Response:</h3>
                <p>{botResponse}</p>
            </div>
        </div>
    );
};

export default Chatbot;
