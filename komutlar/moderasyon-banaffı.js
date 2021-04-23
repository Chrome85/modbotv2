const Discord = require('discord.js'); 
const db = require('croxydb');

exports.run = (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
   message.channel.send('<a:tmdir:778774341357797378> | **İşlem Başarılı!\n<a:tmdir:778774341357797378> | Sunucudaki Tüm Yasakları Kaldırdım**')

  message.guild.fetchBans().then(bans => {
      bans.cache.forEach(user => {
        message.guild.unban(user)
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-affı","kaldır"],
  permLevel: 0
};

exports.help = {
  name: 'banaffı',
  description: '',
  usage: ''
};