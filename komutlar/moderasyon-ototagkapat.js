const Discord = require('discord.js');
const db = require('croxydb')
const ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async(client, message, args) =>{

let frenzy_ibrahim = await db.fetch(`Frenzy?Code?Ototag_${message.guild.id}`) || await db.fetch(`Frenzy?Code?OtotagKanal_${message.guild.id}`)
if(!frenzy_ibrahim) return message.reply(`:negative_squared_cross_mark: Bu sistem zaten kapalı durumda. Açmak için **${prefix}ototag rol kanal**`)
db.delete(`Frenzy?Code?Ototag_${message.guild.id}`) 
db.delete(`Frenzy?Code?OtotagKanal_${message.guild.id}`)
message.channel.send(`<:onaytiki:813053491445760000>| **Ototag kapatıldı!**\n <:onaytiki:813053491445760000>| **Yeni gelen kullanıcılara hiç bir rol vermeyeceğim.**`)
};  
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: ['ototag-kapat'],
  permLevel: 0 
};
exports.help = {
  name: 'ototag-kapat',
  description: 'Ototag Sistemi - Spallers ',
  usage: 'ototagkapat'
};
