const Discord = require('discord.js')
const data = require('croxydb');
const database = require('croxydb');

exports.run = async(client, message, args) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
  
  
        if(!message.mentions.roles.first()) 
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle('Bir hata oldu!')
  .setThumbnail(message.author.avatarURL({dynamic: true}))
  .setDescription('Bir rol etiketlemeyi unuttunuz.'));
  
  let mentionRole = message.mentions.roles.first();

  
  data.set(`muteyetki.role.${message.guild.id}`, mentionRole.id);
  
  message.channel.send(new Discord.MessageEmbed()
  .setTitle('Başarılı!')
  .setColor(`GREEN`)
  .setThumbnail(message.author.avatarURL({dynamic: true}))
  .setDescription(`Mute yetkisi olarak kullanılacak: ${mentionRole} rolü olarak seçtiniz.`));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["muteyetkilirol"],
  permLevel: 0
};

exports.help = {
  name: 'mute-yetkili-rol',
};