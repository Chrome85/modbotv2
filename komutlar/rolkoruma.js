const Discord = require('discord.js')
const db = require('croxydb');
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
  let prefix = ayarlar.prefix

  if (!args[0]) {
 message.channel.send(`**Örnek Kullanım:** ${prefix}rol-koruma aç/kapat`)
  }
  if (args[0] === 'aç') {
    db.set(`rolk_${message.guild.id}`, "Aktif")
     message.channel.send(`Rol Koruma Başarıyla Açıldı!`)
  }
   if (args[0] === 'kapat') {
    db.delete(`rolk_${message.guild.id}`)
    message.channel.send(`Rol Koruma Başarıyla Kapatıldı!`)
  }
};
exports.conf = {
  aliases: ['rolkoruma'],
  permLevel: 0
};
exports.help = {
  name: 'rol-koruma'
};