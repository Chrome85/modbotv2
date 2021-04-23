let Discord = require("discord.js")//krom code Krom#0516
let database = require('croxydb')//krom code Krom#0516
let ayarlar = require("../ayarlar.json")//krom code Krom#0516
//krom code Krom#0516

//krom code Krom#0516
exports.run = async(client, message, args) => {//krom code Krom#0516

//krom code Krom#0516
  let user = message.mentions.users.first()//krom code Krom#0516
 let rolalacakkisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
 let yrol = await database.fetch(`yrol.${message.guild.id}`)
if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')

//krom code Krom#0516

  if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
  
  await(rolalacakkisi.roles.add(yrol))
  //krom code Krom#0516
  const embed = new Discord.MessageEmbed()
.setDescription('Yetkili Rolü Verildi!')
.addField(` Rolü Alan Kullanıcı;`, `${user}`,true)
.addField(` Rolü Veren Yetkili;`,`${message.author}`,true)
  .setThumbnail(user.avatarURL())
  .setColor(`GOLD`)
  message.channel.send(embed)
}//krom code Krom#0516
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yrolver'],
  perm: 0
}
exports.help = {
  name: 'yver'
}//krom code Krom#0516

exports.play = {
  kullanım: '!abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',
  kategori: 'Abone'
}//krom code Krom#0516
