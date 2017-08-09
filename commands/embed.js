/*
 Write message with an embed style into it
*/
const Discord = require('discord.js');

module.exports.run = async (client, message) => {
	const arg = message.content.split(' ').slice(1).join(' ');
	message.delete();
	const embed = new Discord.RichEmbed()
  .setDescription(arg);
	message.channel.send({
		embed
	});
};

module.exports.help = {
	category: 'fun',
	name: 'embed',
	description: 'Try to do that without a bot (you won\'t be able too)'
};
