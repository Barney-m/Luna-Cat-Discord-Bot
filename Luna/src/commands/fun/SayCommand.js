const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }

  async run(client, message, args) {
    const messageToSay = args.join(" ");
    const sayEmbed = new Discord.MessageEmbed()
                            .setTitle(`${message.author.tag} says: ${messageToSay}`)
                            .setFooter(message.author.tag, message.author.displayAvatarURL())
                            .setColor("#04daf8")
                            .setTimestamp();

    try{
      await message.channel.send(sayEmbed);
    } catch (err){
      console.log(err);
      message.channel.send("I'm not able to say that message");
    }
  }
}