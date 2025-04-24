exports = async function (changeEvent) {
    const { updateDescription, fullDocument } = changeEvent;

    // Check if mood field is updated
    if (updateDescription.updatedFields.mood) {
        const mood = fullDocument.mood;

        // Perform analytics or send personalized notifications
        console.log(`Mood updated to: ${mood}`);
        
        // Example: Send a recommendation based on mood
        if (mood === 'sad') {
            const userId = fullDocument.userId;
            const message = "Hey, it seems like you're feeling down. How about journaling to express your thoughts?";
            await context.functions.execute('sendNotification', userId, message);
        }
    }
};
