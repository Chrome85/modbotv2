const {ShardingManager} = require ('discord.js');
const manager = new ShardingManager ('./index.js', {totalShards: 'auto',
token:'ODE4ODI1MTMzNTgxOTI2NDIw.YEdsVA.5yn7qAZYwmBMhTYYRGIX8jVS7mY'}); // TOKEN discord.com/developers Alabilirsiniz!

manager.on ('shardCreate', shard => console.log (`Shardlar Başlatılıyor!`));
manager.spawn ();