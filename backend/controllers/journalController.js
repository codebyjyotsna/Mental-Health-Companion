const Journal = require('../models/Journal');

// Create a journal entry
const createJournalEntry = async (req, res) => {
    const { userId, content } = req.body;
    try {
        const journal = new Journal({ userId, content, date: new Date() });
        await journal.save();
        res.status(200).json({ message: 'Journal entry saved successfully', journal });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save journal entry' });
    }
};

// Get all journal entries for a user
const getJournalEntries = async (req, res) => {
    const { userId } = req.params;
    try {
        const entries = await Journal.find({ userId }).sort({ date: -1 });
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch journal entries' });
    }
};

module.exports = { createJournalEntry, getJournalEntries };
