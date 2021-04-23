const database = require('croxydb');//krom code Krom#0516
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {//krom code Krom#0516
  //krom code Krom#0516
  if (!args[0]) {//krom code Krom#0516
    
  const kinda = new Discord.MessageEmbed() //krom code Krom#0516
  
  .setDescription('Lütfen **aç** Veya **kapat** Yazın. Örnek Kullanım : **.ever-here-engel aç/kapat**')//krom code Krom#0516
  .setColor("RED")//krom code Krom#0516

  return message.channel.send(kinda)//krom code Krom#0516
  }
  
  if (args[0] == 'aç') {//krom code Krom#0516
    
  db.set(`hereengel_${message.guild.id}`, 'acik')//krom code Krom#0516
    
  const kinda = new Discord.MessageEmbed() //krom code Krom#0516
  
  .setDescription('Ever-Here Engel Başarılı Bir Şekilde Aktif Edildi!')
  .setColor("GREEN")//krom code Krom#0516

  return message.channel.send(kinda)
  }

  if (args[0] == 'kapat') {
    //krom code Krom#0516
  db.set(`hereengel_${message.guild.id}`, 'kapali')//krom code Krom#0516
    //krom code Krom#0516
  const kinda = new Discord.MessageEmbed() //krom code Krom#0516
  
  .setDescription('Ever-Here Engel Başarılı Bir Şekilde Deaktif Edildi!')//krom code Krom#0516
  .setColor("GREEN")//krom code Krom#0516

  return message.channel.send(kinda)//krom code Krom#0516
  } 
  
  }//krom code Krom#0516
//krom code Krom#0516
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ever-here-engel','everhere-engel','ever-hereengel'],
  permLevel: 3
};

exports.help = {
  name: 'everhereengel',
  description: 'ever-here engel sistemi',
  usage: 'everhereengel'
};