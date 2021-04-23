const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Cowboy bot Moderasyon Komutları')
.setTimestamp()
.addField('<a:maviyildiz:793539752858877952> .ban', 'Ban atarsınız')
.addField('<a:maviyildiz:793539752858877952> .byetkilirol', 'Ban yetkilirol ayarlar')
.addField('<a:maviyildiz:793539752858877952> .banlog', 'Banlog ayarlar')
.addField('<a:maviyildiz:793539752858877952> .bansor', 'Ban sebebini sorgularsınız')
.addField('<a:maviyildiz:793539752858877952> .banaffı', 'Sunucudaki bütün banları kaldırır')
.addField('<a:maviyildiz:793539752858877952> .sayaç', 'Sayaç Sistemi')
.addField('<a:maviyildiz:793539752858877952> .sa-as', 'Sa-as sistemi Sistemi')
.addField('<a:maviyildiz:793539752858877952> .rol-ver - .rol-al', 'Kullanıcıya belirtilen rolü verir/alır')
.addField('<a:maviyildiz:793539752858877952> .modlog', 'Modlog sistemi')
.addField('<a:maviyildiz:793539752858877952> .reklamengel', 'Reklam Engel ayarlar')
.addField('<a:maviyildiz:793539752858877952> .kick', 'Kick Atarsınız')
.addField('<a:maviyildiz:793539752858877952> .kicklog', 'Kick Logunu Ayarlarsınız')
.addField('<a:maviyildiz:793539752858877952> .kyetkilirol', 'Kick yetkilirol ayarlar')
.setFooter('Cowboy', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};