const express = require('express');
const router = express.Router();
const { createJournalEntry, getJournalEntries } = require('../controllers/journalController');

// Create a journal entry
router.post('/create', createJournalEntry);

// Get all journal entries for a user
router.get('/entries/:userId', getJournalEntries);

module.exports = router;
