const Discord = require("discord.js");//krom code Krom#0516
const { stripIndents } = require("common-tags");//krom code Krom#0516
const database = require('croxydb');//krom code Krom#0516

//krom code Krom#0516
//krom code Krom#0516
exports.run = (client, msg, args) => {
  let x;
  let x2;
  let x3;
  let x4;
  let x5;
  let x6;
  let x7;
  let x8;
  let x9;
  let x10;
  let x11;

  //yönetici
  if (msg.member.hasPermission("ADMINISTRATOR")) x = "✔";
  if (!msg.member.hasPermission("ADMINISTRATOR")) x = "❌";
//krom code Krom#0516
  //Denetim kaydı
  if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "✔";
  if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "❌";

  //Sunucuyu yönet
  if (msg.member.hasPermission("MANAGE_GUILD")) x3 = "✔";
  if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = "❌";

  //Rolleri yönet
  if (msg.member.hasPermission("MANAGE_ROLES")) x4 = "✔";
  if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = "❌";
//krom code Krom#0516
  //Kanalları yönet
  if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "✔";
  if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "❌";
//krom code Krom#0516
  //üyeleri at
  if (msg.member.hasPermission("KICK_MEMBERS")) x6 = "✔";
  if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = "❌";
//krom code Krom#0516
  //üyeleri yasakla                   //krom code Krom#0516
  if (msg.member.hasPermission("BAN_MEMBERS")) x7 = "✔";
  if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = "❌";
//krom code Krom#0516
  //mesajları yönet
  if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "✔";
  if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "❌";

  //kullanıcı adlarını yönet
  if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "✔";
  if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "❌";

  //emojileri yönet
  if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "✔";
  if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "❌";//krom code Krom#0516

  //webhookları yönet
  if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "✔";//krom code Krom#0516

  if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "❌";//krom code Krom#0516


  msg.channel.send(stripIndents`
    \`\`\`diff
    ${x} Yönetici
${x2} Denetim Kaydını Görüntüle
${x3} Sunucuyu Yönet
${x4} Rolleri Yönet
${x5} Kanalları Yönet
${x6} Üyeleri At
${x7} Üyeleri Yasakla
${x8} Mesajları Yönet
${x9} Kullanıcı Adlarını Yönet
${x10} Emojileri Yönet
${x11} Webhook'ları Yönet
\`\`\`
   `);
  msg.channel.send(
    '```md\n# Başında "❌" olanlar o yetkiye sahip olunmadığını gösterir. \n# Başında "✔" olanlar o yetkiye sahip olunduğunu gösterir. \n```'
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["izinlerim"],
  permLevel: 0,//krom code Krom#0516

  kategori: "kullanıcı"//krom code Krom#0516

};
//krom code Krom#0516
exports.help = {
  name: "yetkilerim",
  description:
    "Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.",
  usage: "yetkilerim"
};