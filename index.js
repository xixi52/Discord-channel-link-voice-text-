const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'XXXXXXXXXXXXXXXXX';


bot.on("ready",()=>{
    console.log(`Connecté en tant que ${bot.user.tag}!`);
});



bot.on("voiceStateUpdate",(ancien,nouveau)=>{

    var texte = nouveau.guild.channels.get('ID-SALON-TEXTE');


    if(nouveau.voiceChannelID == 'ID-SALON-VOCAL'){


      texte.overwritePermissions(nouveau,{
        "SEND_MESSAGES":true,
        "READ_MESSAGES":true,
});
    }else{

        texte.overwritePermissions(nouveau,{
          "SEND_MESSAGES":false,
          "READ_MESSAGES":false,
  });
    }
});

bot.login(token);
