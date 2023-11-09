const Discord = require('discord.js');
const client = new Discord.client();
const token = 'TOKEN HERE!'

client.login(token);

client.on('message', message => {
    if(message.content.toLowerCase() === 'hello')
    message.channel.send('Hey There!' + message.author);

    else if(message.content.toLowerCase() ==='ping')
     message.channel.send('pong');

});