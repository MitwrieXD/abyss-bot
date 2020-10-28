const Discord = require('discord.js');

const client = new Discord.Client();


const PREFIX = '$';

client.on('ready', () => {
    console.log('Abyss Is Online!');
    client.user.setActivity('no')
});

 client.on('message', message=> {
    // let args = message.content.substring(PREFIX.length).split(" ");
    let args = message.content.split(" ");
    //let args = message.content;

    console.log (args); 
    
    switch(args[0]){
        case '$die':
        message.channel.send('I Thought We Were Freinds');
        break;

        case '$beg':
            message.channel.send('Drake: Can You Not');
            break;

        case '$money':
            message.channel.send('Im Not Rich Ok Im Just A Bot');
            break;

        case '$dance':
            message.channel.send("Sure", {files: ["./files/sansdance.gif"]});
            break;

        case '$dab':
            message.channel.send("Its Cringe But You Told Me To...", {files: ["./files/dab.jpg"]});
            break;

            case '$cake':
            message.channel.send("Here You Go", {files: ["./files/cake.jpg"]});
            break;

            case '$art':
            message.channel.send("I Worked Hard To Make This Piece Of Art", {files: ["./files/art.jpg"]});
            break;

            case '$cute':
            message.channel.send("What A Cutie", {files:["./files/doge.jpg"]});
             break;

        case '$kick':
            if (!args [1]) 
            {
                message.channel.send('You Need To Specify A Person!');
                break;
            }

            const user = message.mentions.users.first();

            if(user){
                const member = message.guild.member(user);

                if (member){
                    member.kick('You Were Kicked For Breaking Rules').then(() =>{
                        message.reply(`Successfully Kicked ${user.tag}`)

                    }).catch(err =>{
                        message.reply('You Do Not Have Permison To Kick This Member');
                        console.log(err);


                    });
                } else{
                    message.reply('That User Is Not In The Server')
                }
            }else {
                message.reply('That User Is Not In The Server');
            }
            break;

        case '$ban':
            if (!args [1]) 
            {
                message.channel.send('You Need To Specify A Person!');
                break;
            }

            const usertoban = message.mentions.users.first();

            if(usertoban){
                const member = message.guild.member(usertoban);

                if (member){
                    member.ban().then(() =>{
                        message.reply(`Successfully Banned ${usertoban.tag}`)

                    }).catch(err =>{
                        message.reply('You Do Not Have Permison To Ban This Member');
                        console.log(err);


                    });
                } else{
                    message.reply('That User Is Not In The Server')
                }
            }else {
                message.reply('That User Is Not In The Server');
            }
            break;


            


           

            


    }

 });





  
client.login('');


 
 
