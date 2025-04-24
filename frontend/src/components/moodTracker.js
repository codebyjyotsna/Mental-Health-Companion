import React, { useState } from 'react';
import axios from 'axios';

const MoodTracker = () => {
    const [mood, setMood] = useState('');

    const submitMood = async () => {
        try {
            await axios.post('/api/mood', { mood });
            alert('Mood saved successfully!');
        } catch (err) {
            console.error('Error saving mood:', err);
        }
    };

    return (
        <div>
            <h2>How are you feeling today?</h2>
            <select value={mood} onChange={(e) => setMood(e.target.value)}>
                <option value="">Select Mood</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="stressed">Stressed</option>
                <option value="angry">Angry</option>
            </select>
            <button onClick={submitMood}>Submit</button>
        </div>
    );
};

export default MoodTracker;
