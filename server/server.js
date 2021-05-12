const express = require('express');
const { content: messages } = require('./messages.json');
const channels = require('./channels.json');

const app = express();

app.get('/messages', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const { search = '', limit = messages.length, skip = 0 } = req.query;
    let messagesToSend = [...messages];

    if (search) {
        const lowerCasedSearch = search.toLowerCase();
        messagesToSend = messagesToSend.filter(message => (
            message.from.toLowerCase().startsWith(lowerCasedSearch) ||
            message.content.toLowerCase().startsWith(lowerCasedSearch) ||
            channels[message.channelId].name.toLowerCase().startsWith(lowerCasedSearch)
        ));
    }

    messagesToSend = messagesToSend
        .slice(skip, Number(skip) + Number(limit))
        .map(message => ({
            ...message,
            color: channels[message.channelId].color,
            channel: channels[message.channelId].name,
        }));

    res.send(messagesToSend);
});

app.listen(3001, function () {
    console.log(`app listening on port ${3001}`);
});

module.exports = app;
