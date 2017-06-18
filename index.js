'use strict';

const TelegramBot = require('node-telegram-bot-api'),
       request = require('request'),
       fs = require('fs'),
       token = '420818563:AAHrPfIi3xc0FpEJYnyyI7bsQayndAPD1xw',
       bot = new TelegramBot(token,{polling:true});

bot.on('message', function (msg) {
	const id = msg.from.id,
	      _messageText = msg.text,
	      messageText = _messageText.toLowerCase();


	if (messageText === 'привет') {
		bot.sendMessage(id, 'Привет, я бот и это классно!' )
	}
});
