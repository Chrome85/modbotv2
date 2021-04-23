const Discord = require('discord.js')
const db = require('croxydb');


const embed1 = new Discord.MessageEmbed()
.setTitle('Bu komutu sadece botun sahibi kullanabilir.')
.setColor('BLUE')

const embed2 = new Discord.MessageEmbed()
.setTitle('Lütfen **ekle** veya **çıkar** yazınız.\nKullanıcının karaliste bilgisini görmek için **bilgi** kullanın ör:`!karaliste bilgi `.')
.setColor('BLUE')

const embed3 = new Discord.MessageEmbed()
.setTitle('Bir kişiyi etiketlemelisin veya id sini yazmalısın.')
.setColor('BLUE')

exports.run = async(client, message, args) => {  
let user = message.mentions.users.first() || client.users.cache.get(args.slice(1).join(' '))
if(!args[0]) return message.channel.send(embed2)
switch(args[0]) {
  case "ekle":
    if (!user) return message.channel.send(embed3)

   
    db.set(`cokaradalistere_${user.id}`, true)
const embed4 = new Discord.MessageEmbed()
.setTitle(`\`${user.tag}\` **artık botu kullanamayacak.**`)
.setColor('BLUE')

    message.channel.send(embed4)
    break;
  case "çıkar":
    if (!user) return message.channel.send(embed3)
    db.delete(`cokaradalistere_${user.id}`)
    const embed5 = new Discord.MessageEmbed()
    .setTitle(`\`${user.tag}\` **artık botu kullanabilir.**`)
    .setColor('BLUE')
    message.channel.send(embed5)
    break;
  case "bilgi":
    if (!user) return message.channel.send(embed3)
let i = db.fetch(`cokaradalistere_${user.id}`)

const embed6 = new Discord.MessageEmbed()
.setTitle(`\`${user.tag}\` botu şu anda **kullanamıyor.** \nkendisi karalistede.`)
.setColor('BLUE')

const embed7 = new Discord.MessageEmbed()
.setTitle(`\`${user.tag}\` botu şu anda **kullanabiliyor.** \nkendisi karalistede bulunmuyor.`)
.setColor('BLUE')

      if(i == true) message.channel.send(embed6)
      else message.channel.send(embed7)
    break;
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["karaliste"],
  permLevel: 4,
  kategori: "geliştirici"
};
//codare
exports.help = { 
	name: 'blacklist', 
	description: 'Belirlenen kişinin botu kullanmasını engeller.', 
  usage: 'blacklist  '
};