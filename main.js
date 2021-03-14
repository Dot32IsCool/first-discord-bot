var Discord = require('discord.js');
var client = new Discord.Client();

var greetings = ['hey', 'hello', 'yo', 'hi', 'greetings', 'sup', 'wassup', 'hey sexy :smirk:', 'uwu', 'gday', 'wadup', 'bro', 'i hate you', 'you underestimate my power', 'hellohello', 'Im feeling kinda tired sorry', 'youre boring', 'stop texting me', 'you be spamming', 'hiya!', 'goodmorning/night bc idk what time of day it is']
var greetLength = greetings.length

client.once('ready', () => {
	console.log('human is ready')
});

client.on('message', message => {
	if(message.author.bot) return;

	// if(message.content.startsWith('hey')){
	// 	message.channel.send('hey sexy :smirk:');
	// }
	for (var i = 0; i < greetLength; i++) {
    //console.log(greetings[i]);
    if(message.content.startsWith(greetings[i])){
			message.channel.send(greetings[Math.floor(Math.random() * greetLength)]);
		}
	}
});

client.login('ODAxNDYzMTY0Mzg1ODg2MjEw.YAhCvA.UxyutS-e4XW1uadSd74ccp5T8Ds');

// run `node main.js` from terminal to boot