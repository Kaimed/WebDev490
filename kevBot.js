const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'kaimed01',
    password: 'oauth:coarh8w6fellg11u5zi6o4usmoakz2'
  },
  channels: [
    'kaimed00'
  ]
};

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim().toLowerCase();

  // If the command is known, let's execute it
  if (commandName === '!flap') {
    client.say(target,"I can open my fanny flaps in the night if I need a wee...");
    console.log("Fanny flaps opened");
  } else if (commandName == '!fart'){
    client.say(target,"BRRRRAAAAAAAAP");
    console.log("I farted");
  } else if(commandName == '!wink'){
    client.say(target, "I look at her fanny.. and it's winkin' at me!");
    console.log("Sophie quoted");
  } else if(commandName == "!w" || commandName == "!W"){
    client.say(target, "Wet, wide and horny. -Charlotte Crosby");
    console.log("No errors.");
  } else if(commandName == "!scat"){
    client.say(target, "Poo is just food that comes out your asshole..");
    console.log("Never getting partner");
  } else if(commandName == "!fff"){
    client.say(target, "I'm fit, I'm flirty, and I've got double F's.");
    console.log("I think that says it all...");
  } else if(commandName == "!secret"){
    client.say(target, "I'll never tell!!!");
    setTimeout(function(){
      client.say(target, "Or will I...");},
       3000
     );
    console.log("somehow this shit works");
  }
  else {
    console.log(`* Unknown command ${commandName}`);
  }
}
// Function called when the "dice" command is issued
function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
