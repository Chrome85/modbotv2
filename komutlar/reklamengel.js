const db = require('croxydb');//krom code Krom#0516

const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix//krom code Krom#0516
//krom code Krom#0516
exports.run = async (client, message, args) => {//krom code Krom#0516
  if (!message.member.hasPermission("BAN_MEMBERS")) {//krom code Krom#0516
    const embed = new Discord.MessageEmbed()
    let yetkilirol = await database.fetch(`yetkilirol.${message.guild.id}`)
      .setDescription(`Ne Yazık Ki Bu Komutu Kullanmaya Yetkin Yok.`)
      .setColor("RED");
//krom code Krom#0516
    message.channel.send(embed);
    return;//krom code Krom#0516
  }
  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Reklam-Engel Sistemi!")
      .setDescription(
        `Hatalı Kullanım! Örnek: **.reklam-engel aç & kapat**`
      );
//krom code Krom#0516
    message.channel.send(embed);
    return;//krom code Krom#0516
  }
  let kufur = await db.fetch(`kufur_${message.guild.id}`);
  if (args[0] == "aç") {//krom code Krom#0516
    if (kufur) {
      const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Reklam-Engel Sistemi!")
        .setDescription("**Görünüşe Göre Reklam-Engel Sistemi Zaten Aktif!**");

      message.channel.send(embed);
      return;
    } else {//krom code Krom#0516
      db.set(`kufur_${message.guild.id}`, "Açık");
      const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Reklam-Engel Sistemi!")
        .setDescription("Reklam-Engel Sistemi Başarıyla Açıldı!");

      message.channel.send(embed);
    }//krom code Krom#0516
  } else if (args[0] == "kapat") {
    db.delete(`kufur_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")//krom code Krom#0516
      .setTitle("Reklam-Engel Sistemi!")
      .setDescription("Reklam-Engel Sistemi Başarıyla Kapandı!");//krom code Krom#0516

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,//krom code Krom#0516
  guildOnly: true,
  aliases: ["reklamengel"],
  permLevel: 0
};//krom code Krom#0516

exports.help = {
  name: "reklam-engel"
};//krom code Krom#0516
