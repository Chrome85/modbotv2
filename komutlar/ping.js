const Discord = require('discord.js');
const database = require('croxydb');//krom code Krom#0516

exports.run = async (app, message, client) => {
  
  const kinda = new Discord.MessageEmbed()
  
  .setColor("RED")//krom code Krom#0516
  .setDescription('Ping Hesaplanıyor...')//krom code Krom#0516
  
   let start = Date.now(); 
   let mesaj = await message.channel.send(kinda)//krom code Krom#0516
   let diff = (Date.now() - start); //krom code Krom#0516
   let API = (app.ws.ping).toFixed(2)
    //krom code Krom#0516
    setInterval(() => {
        //krom code Krom#0516
   const only = new Discord.MessageEmbed()
   
   .setDescription(`\nMesaj Gecikme Süresi ; **${diff}Ms** \n\nBot Gecikme Süresi ; **${API}Ms**`)
   .setColor('GREEN')
   //krom code Krom#0516
    mesaj.edit(only);//krom code Krom#0516
      //krom code Krom#0516
    }, 5000)//krom code Krom#0516
  //krom code Krom#0516
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ms'],
  permLevel: 0
};

exports.help = {
  name: 'ping'
};