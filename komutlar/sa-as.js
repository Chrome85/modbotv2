const db = require('croxydb')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {


  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
  if (!args[0]) return message.channel.send(':no_entry: Sa-as yazısını açmak için; `.sa-as aç veya kapat`')

  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
      message.channel.send(`<:onaytiki:813053491445760000>  | **Sa-As Sistemi Başarıyla Açıldı** `)
   
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
      message.channel.send(`<:onaytiki:813053491445760000> | **Sa-As Sistemi Başarıyla Kapandı** `)
   
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: 'sa-as'
};