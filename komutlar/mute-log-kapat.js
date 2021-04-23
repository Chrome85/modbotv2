const Discord = require('discord.js')
const data = require('croxydb');
const database = require('croxydb');

exports.run = async(client, message, args) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
        data.delete(`mute.log.${message.guild.id}`);
  
  message.channel.send(new Discord.MessageEmbed()
  .setTitle('Başarılı! ')
  .setColor("GREEN")
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  .setDescription(`Mute sistem kanalı başarıyla kapatıldı.`));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mute-log-kapat',
};