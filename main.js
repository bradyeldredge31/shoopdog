const Discord = require('discord.js');

const client = new Discord.Client();
client.login(ODQ2NzIzMTA1ODk5ODA2NzYx.YKzqVw.lymSw0pd0yAEoIsxjiqN4QcTFu4);
client.on('message', message => {
  if (message.content === 'h!help') {
    message.channel.send('Welcome to the Shoop Dog discord bot. My prefix is h! Here is a list of commands:');
   message.channel.send('buy: buy an item. I will DM a Head Admin.');
   message.channel.send('help: get commands.');


   

    
  }

  if (message.content === 'h!buy') {
       message.channel.send('Who is sending the order?');
       var sender = message.content;      
       message.channel.send('What would you like to buy?.');
      var itemname = message.content;
      message.channel.send('How many will you buy?');
      var quantity = message.content;
      message.channel.send('Type any additional notes below, such as location.');
      var notes = message.content;




client.users.get("476073687435706389").send("A purchase order has been made by "+sender+"!");
client.users.get("476073687435706389").send("Contents:");
client.users.get("476073687435706389").send(+quantity+" "+itemname+"(s)");
client.users.get("476073687435706389").send("Notes: "+notes);





  }
});









//add secret

// get that line of code from david
