const express = require('express');

const app = express();
app.use(express.json()); 
const port = 80;

app.post('/publish/7a243c0f-b573-42b6-9e8d-6cd6827ebfc6', (req, res) => {
    const { channel, message } = req.body;

    // Validate input
    if (!channel || !message) {
        return res.status(400).send('Channel and message are required');
    }

    // todo :  Use your message service to publish the message
    res.send('Message sent to channel: ' + channel);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

