const Discord = require('discord.js');
const db = require('croxydb')
const ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async(client, message, args) =>{

if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Ototagı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')  
let frenzy_ibrahim = await db.fetch(`Frenzy?Code?Ototag_${message.guild.id}`) || await db.fetch(`Frenzy?Code?OtotagKanal_${message.guild.id}`)
if(frenzy_ibrahim) return message.reply(`:x: Bu sistem zaten aktif durumda. Kapatmak için **${prefix}ototag-kapat**`)
let frenzy_kanal = message.mentions.channels.first()
let frenzy_tag = args.sl

ice(1).join(' ')
if(!frenzy_kanal || !frenzy_tag) return message.reply(`**Ototag sistemini ayarlamak için **kanal ve tag** belirtmelisin.**`)
  
db.set(`Frenzy?Code?Ototag_${message.guild.id}`,frenzy_tag) 
db.set(`Frenzy?Code?OtotagKanal_${message.guild.id}`,frenzy_kanal.id)
message.channel.send(`<:onaytiki:813053491445760000> | **Ototag aktif edildi!**\n <:onaytiki:813053491445760000>| **Yeni gelen kullanıcılara **${frenzy_tag}** vereceğim.**`)
};  
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: ['ototagayarla'],
  permLevel: 3 
};
exports.help = {
  name: 'ototag',
  description: 'Ototag Sistemi - Frenzy Code',
  usage: 'ototag kanal tag'
};
