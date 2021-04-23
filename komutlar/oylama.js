const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let yrol = database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
  
  message.delete();
  let question = args.join(" ");//krom code Krom#0516
  let user = message.author.username;//krom code Krom#0516
  if (!question)//krom code Krom#0516
  //krom code Krom#0516
    return message.channel
      .send(//krom code Krom#0516
        new Discord.MessageEmbed().addField(`❌ **Yazı Yazman Gerek** ❌`)
      )//krom code Krom#0516
      .then(m => m.delete(5000));
  console.log(//krom code Krom#0516
    "oylama komutu " +//krom code Krom#0516
      message.author.username +
      "#" +
      message.author.discriminator +
      " tarafından kullanıldı."
  );
  message.channel//krom code Krom#0516
    .send(//krom code Krom#0516
      new Discord.MessageEmbed()//krom code Krom#0516
        .setColor("RED")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter("Oylama Sistemi", client.user.avatarURL())
        .addField(`**Oylama**`, `**${question}**`)
    )
    .then(function(message) {//krom code Krom#0516
      message.react("✅");
      message.react("❌");
    });//krom code Krom#0516
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],
  permLevel: 2
};
exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",
  usage: "oylama <oylamaismi>"
};
