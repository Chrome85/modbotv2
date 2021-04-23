const db = require('croxydb');
        const Discord = require("discord.js") 
exports.run = (client, message) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
  .setColor('#f6ff00')
  .setDescription(`<a:siren:778777832976416778> **HATA** <a:siren:778777832976416778> - Bu sunucuda yetkili değilsin.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    const member = new Discord.MessageEmbed()
.setColor('#f6ff00')
.setDescription(`<a:siren:778777832976416778> **HATA** <a:siren:778777832976416778> - Bir kanal etiketle.`)
      if(reklam) {
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(member)
      db.set(`reklam.${message.guild.id}.kanal`,kanal.id)
      message.channel.send(`<a:tmdir:778774341357797378> **Başarılı ile reklam log kanalı ayarlandı.** `).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
     message.channel.send(`<a:tmdir:778774341357797378> **Reklam engel açık değil.**`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-log"],
  permLevel: 0
};

exports.help = {
  name: 'reklamlog',
  description: 'Spallers',
  usage: 'Spallers'
}