const Discord = require('discord.js');
const db = require('croxydb');

exports.run = async(client, message, args) => {

     if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')

    let rol = message.mentions.roles.first()
    if(!rol) return message.channel.send('```Bir rol etiketlemelisin (Eğer rolü bulamıyorsan kanalı görebildiğinden veya etkietlenebilir olduğundan emin ol)```')
   db.set(`kickrol_${message.guild.id}`, rol.id)
   return message.channel.send('<:onaytiki:813053491445760000> | **Kick Yetkili Rolü Başarıyla <@&' + rol+ '> Olarak ayarlandı**')
} 

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:['kyetkilirol'],
	permlevel: 0
};

exports.help = {
	name: "kick-yetkili-rol"
}