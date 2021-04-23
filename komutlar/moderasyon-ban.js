const Discord = require('discord.js');
const db = require('croxydb');

exports.run = async(client, message, args) => {
	let rol = db.fetch(`banrol_${message.guild.id}`)
	if(!message.member.roles.cache.has(rol)&& !message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Ban yetkili rolü ayarlanmamış veya <@&' + rol + '> Rolüne sahip değilsin.')
	let banlog = db.fetch(`banlog_${message.guild.id}`)
	if(!banlog) return message.channel.send('Ban log sistemi ayarlanmamış.')
    let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send(':red_circle: ``Bir kişi etiketlemelisin.``')
     if(user.id === message.author.id) return message.channel.send(':red_circle:> ``Kendini banlayamazsın.``')
     if(user.id === client.user.id) return message.channel.send(':red_circle:``Botu banlayamazsın.``')
  if(user.id === message.guild.ownerID) return message.channel.send(':red_circle: ``Sunucu sahibini banlayamazsın.``')
    if (!message.guild.member(user).bannable) return message.reply(':red_circle:``Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.``');

   message.channel.send('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle banlamak istediğine eminmisin ?').then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).ban({
  	reason: `${sebep}`
          })
      let embed = new Discord.MessageEmbed()
    .setColor('#f6ff00')
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setTitle('Kişi banlandı')
    .addField('<:onaytiki:813053491445760000> Yetkili', `${message.author.tag}`)
    .addField('<:onaytiki:813053491445760000> Banlanan kişi', user)
    .addField('<:onaytiki:813053491445760000>  Sebep', sebep)
     client.channels.cache.get(banlog).send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('<:onaytiki:813053491445760000> | **Banlama İşlemi Başarıyla İptal Edildi.**')
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
	name: "ban"
}