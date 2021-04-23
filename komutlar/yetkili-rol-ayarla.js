let database = require('croxydb')
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let yrol = message.mentions.roles.first()
  if(!yrol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonerol @rol`)
  
  //krom code Krom#0516
  database.set(`yrol.${message.guild.id}`, yrol.id)
  message.channel.send(`Yetkili rolü başarıyla ${yrol} olarak ayarlandı.`)
}
//krom code Krom#0516
exports.conf = {
  enabled: true,//krom code Krom#0516
  guildOnly: false,
  aliases: ['yetkili-rol'],
  perm: 0//krom code Krom#0516
}
exports.help = {//krom code Krom#0516
  name: 'yetkilirol'
}

exports.play = {
  kullanım: 'abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}