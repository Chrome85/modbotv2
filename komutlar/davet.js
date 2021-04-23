const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
//krom code Krom#0516
exports.run = (client, message) => {
  const devtr = new Discord.MessageEmbed()
  .setTitle("Davet Linkleri Altta Belirtilmiştir")
  .setColor("RANDOM")//krom code Krom#0516
    .addField("» **Botun Sahibi**", "<@!769241220110352416>| Krom#0085 ")
    .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/cUF35cS)", )
    .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=774765565466116126&scope=bot&permissions=805314622)", )
    .setFooter('Krom Code <3', client.user.avatarURL())
    message.channel.send(devtr);   ///krom code Krom#0516
};//krom code Krom#0516

exports.conf = {//krom code Krom#0516
  enabled: true,//krom code Krom#0516
  guildOnly: false,//krom code Krom#0516
  aliases: [],
  permLevel: 0,
};//krom code Krom#0516

exports.help = {//krom code Krom#0516
  name: 'davet',
};//krom code Krom#0516