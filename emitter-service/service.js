const express = require('express');
const fs = require('fs');

// Read and parse the config.json file
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// Make emitter client
const client = require('emitter-io').connect({
    host: config.host,
    port: config.port,
    secure: false
});

const app = express();
app.use(express.json());
app.post('/publish/7a243c0f-b573-42b6-9e8d-6cd6827ebfc6', (req, res) => {
    const { channel, message } = req.body;

    if (!channel || !message) {
        return res.status(400).send('Channel and message are required');
    }

    const channelKey = config.keys[channelName] || null;;

    if (!channelKey) {
        return res.status(404).send(`Channel key for [${channel}] not found`);
    }

    client.publish({
        key: channelKey,
        channel: channel,
        message: message
    });
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
