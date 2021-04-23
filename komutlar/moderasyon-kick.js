const Discord = require('discord.js');
const db = require('croxydb');

exports.run = async(client, message, args) => {

	let rol = db.fetch(`kickrol_${message.guild.id}`)
	if(!message.member.roles.cache.has(rol)&& !message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('<:nope:779036675338010654> ``Kick Yetkili Rolü Ayarlanmamış Veya <@&' + rol + '> Rolüne sahip değilsin.``')
	let kicklog = db.fetch(`kicklog_${message.guild.id}`)
	if(!kicklog) return message.channel.send('<:nope:779036675338010654> ``Kick Log Sistemi Ayarlanmamış.``')
    let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send(':red_circle: ``Bir kişi etiketlemelisin.``')
     if(user.id === message.author.id) return message.channel.send(':red_circle:``Kendini Kickleyemezsin``')
     if(user.id === client.user.id) return message.channel.send(':red_circle: ``Botu Kickleyemezsin``')
  if(user.id === message.guild.ownerID) return message.channel.send(':red_circle:``Sunucu sahibini Kickleyemessin Zaten Yetkim Yetmez :)``')
    if (!message.guild.member(user).bannable) return message.reply(':red_circle: ``Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.``');

   message.channel.send('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle Kicklemek istediğine eminmisin ?').then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).kick({
  	reason: `${sebep}`
          })
      let embed = new Discord.MessageEmbed()
    .setColor("#f6ff00")
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setTitle('Bir Kişi Kick Yedi')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Kicklenen Kişi', user)
    .addField('Sebep', sebep)
    client.channels.cache.get(kicklog).send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('<:onaytiki:813053491445760000> | **Kickleme İşlemi Başarıyla İptal Edildi**')
      })
    })
 })
} 
 
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "kick"
}