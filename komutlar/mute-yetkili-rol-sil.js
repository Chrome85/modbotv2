const Discord = require('discord.js')
const data = require('croxydb');
const database = require('croxydb');

exports.run = async(client, message, args) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
  
        data.delete(`muteyetki.role.${message.guild.id}`);
  
        message.channel.send(new Discord.MessageEmbed()
  .setTitle('Başarılı!')
  .setThumbnail(message.author.avatarURL({dynamic:true}))
.setColor("GREEN")
  .setDescription(`Ayarlanmış mute yetkili rolü başarıyla silindi.`));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'muteyetki-sil',
};