const mongoose = require('mongoose');
const { v4 } = require('uuid');

const ChatSchema = new mongoose.Schema({
    userId: {
        type: string,
        required: true,
    },
    chatId: {
        type: string,
        required: true,
        default: v4()
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    created_at: {
        type: Number,
        required: true,
        default: new Date()
    },
    messages: {
        type: [String],
        required: false
    }
});

module.exports = mongoose.model('Chat', ChatSchema);