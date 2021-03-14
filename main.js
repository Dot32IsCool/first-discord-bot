const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';

client.once('ready', () => {
	console.log('human is ready')
});

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();

	if(command === 'ping'){
		message.channel.send('pong-');
	}
});

client.login('ODAxNDYzMTY0Mzg1ODg2MjEw.YAhCvA.UxyutS-e4XW1uadSd74ccp5T8Ds');

// run `node main.js` from terminal to boot