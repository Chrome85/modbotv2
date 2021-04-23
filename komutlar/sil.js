const Discord = require('discord.js');
const database = require('croxydb');


exports.run = async (client, message, args) => {
  let yrol = database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle('Silinecek miktar giriniz.'));
if(args[0] > 100) return message.channel.send(new Discord.MessageEmbed().setTitle('Mesaj silme limiti `100` üzeri mesajı aynı anda silemem.'));
message.channel.bulkDelete(args[0]);
return message.channel.send(new Discord.MessageEmbed()
.addField(`Temizleyen Yetkili`, `<@${message.author.id}>`)
.setTitle('Tamamdır Patron! '+`${args[0]}`+' adet mesaj silindi.')).then(m => m.delete({timeout: 3900}));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sil'
};