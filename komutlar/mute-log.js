const Discord = require('discord.js')
const data = require('croxydb');
const database = require('croxydb');

exports.run = async(client, message, args) => {
  let yrol = await database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
        
        
        if(!message.mentions.channels.first()) 
        return message.channel.send(new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Bir hata oldu! ')
        .setThumbnail(message.author.avatarURL({dynamic:true}))
        .setDescription('Bir kanal etiketlemeyi unuttunuz.'));
  
  
        let mentionChannel = message.mentions.channels.first();
  
        data.set(`mute.log.${message.guild.id}`, mentionChannel.id);
  
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Başarılı!')
        .setColor("GREEN")
        .setThumbnail(message.author.avatarURL({dynamic:true}))
        .setDescription(`Mute sistemi başarıyla ${mentionChannel} kanalı olarak seçtiniz.`));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mute-log',
};