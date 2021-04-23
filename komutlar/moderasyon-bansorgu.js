const Discord = require('discord.js');
const db = require('croxydb');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**Yeterli yetkiniz yok**");
    let kullanici = args[0];
    if (!kullanici) return message.channel.send("**Bir kullanıcı ID girmen gerek**")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(`**Bu Kullanıcı Banlanmamış**`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {
        message.channel.send(`${user.tag} Adlı Kullanıcının Ban Nedeni **${reason}**`)

    })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bansor'],
    permLevel: 0
};

exports.help = {
    name: 'bansorgu',
    description: 'Ban sorgulama yaparsınız',
    usage: 'bansorgu'
};