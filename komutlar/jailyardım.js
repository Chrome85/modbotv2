const Discord = require('discord.js');//krom code Krom#0516
//krom code Krom#0516
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:maviyildiz:793539752858877952> Jail Komutları')
.setTimestamp()
.addField('.jail-rol ','Jail Rolünü Ayarlarsınız.')
.addField('.jail-yetkili ','Jail Yetkilisi Ayarlarsınız.')
.addField('.jail-log ','Jail Logunu Ayarlarsınız.')
.addField('.jail ','Birisini jaile atarsınız.')
.setFooter('Cowboy', client.user.avatarURL())//krom code Krom#0516
.setTimestamp()
.setThumbnail(client.user.avatarURL())//krom code Krom#0516
message.channel.send(embed)//krom code Krom#0516
};
//krom code Krom#0516
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], //krom code Krom#0516
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',//krom code Krom#0516
  usage: 'yardım'//krom code Krom#0516
};//krom code Krom#0516