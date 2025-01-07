// unhosted
// Inspired by similar projects
// Note for high seas reviewers - Some code is tested in Replit, and if it works i copy it over to here (which is why a giant code snippet just appears)
const express = require("express")
const app = express()
app.listen(3000, () => {
    console.log("Bot is running")
})
app.get("/", (req, res) => {
    res.send("Hello, World!")
})
let embed = new Discord.MessageEmbed()
const { GatewayIntentBits, PermissionsBitField } = require("discord.js")
const Discord = require("discord.js")
const client = new Discord.Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]})
// Brainrot Filter
client.on("messageCreate", (message) => {
    const rebuttals = [
      "GEN ALPHA DETECTED  A NUKE HAS BEEN LAUNCHED AT YOU.",
      "I AM THE SIGMA .",
      "NO BRAINROT .",
      "IT SHOULD BE AN INTERNATIONAL CRIME TO SPEAK BRAINROT.",
      "YOUR MESSAGE WAS DELETED FOR INCLUDING BRAINROT.",
      "just stop with the brainrot.",
      "no brainrotted individuals allowed here."
    ];
  
    const brainrotKeywords = ["gyatt", "skibidi", "ohio"];
  
    const isBrainrot = brainrotKeywords.some((keyword) =>
      message.content.toLowerCase().includes(keyword)
    );
  
    if (isBrainrot) {
      message.delete();
      const randomRebuttal = rebuttals[Math.floor(Math.random() * rebuttals.length)];
      message.channel.send(`${message.author.toString()} ${randomRebuttal}`);
    }
  }); 
  //  Bot Latency Check
    client.on("messageCreate", message => {
        if(message.content.toLowerCase().includes("latency") && !message.author.bot) {
            const latency = Date.now() - message.createdTimestamp
            message.channel.send("The latency is " + latency + " ms.")
        }
    })

//  ignore all my extremely inefficient message listeners
    client.on("messageCreate", message => {
      if(message.author.bot) return
        if(message.content.toLowerCase().includes("game")) {
           const games = ["Rock Paper Scissors", "Guess the Number"]
            const randomNumber = Math.floor(Math.random() * games.length)
            let game = games[randomNumber]
            
            if(game === "Rock Paper Scissors") {embed = {
            title : "Sure! Let's play " + game,
            description : "Type your option: rock, paper or scissor.",
            footer : {text: "The bot will randomly choose an option."}}}
            message.channel.send({embeds: [embed]})} else if (game === "Guess the Number") {
              const numberToGuess = Math.floor(Math.random() * 10) + 1
            embed = {
              title: "Sure! Let's play " + game,
              description: "I'm thinking of a number 1-10... Make a guess!",
              footer: {text: "Type your guess"}
            }
            message.channel.send({embeds: [embed]})
            } if(!isNaN(parseInt(message.content))) {
              if(message.content > numberToGuess) {
                message.channel.send("Too low!")
              } else if (message.content < numberToGuess) {
                message.channel.send("Too high!")
              } else {message.channel.send("Correct!")}
            }
         if(message.content.toLowerCase().includes("rock") || message.content.toLowerCase().includes("paper") || message.content.toLowerCase().includes("scissor")) {
            let computerChoices = ["rock", "paper", "scissors"]
            let random = Math.floor(Math.random() * computerChoices.length)
            let computerChoice = computerChoices[random]
            const userChoice = message.content.toLowerCase()
            let result;
            if(userChoice === computerChoice) { 
              result = "It's a tie."
            } else if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice  === "rock" || userChoice === "scissors" && computerChoice === "paper") {
              result = "You win!"
            } else {result = The computer wins!}
            const resultEmbed = {
              title: "Rock Paper Scissors",
              description: "You chose *" + userChoice + "*"\n\n "Bot chose *" + computerChoice + "*"
              
            }
            message.channel.send({embeds[resultEmbed]})
          // important note: code was optimised and tweaked on replit where the bot is hosted
          }})

// Would you Rather
const questions = [
  // these are stolen
  {question: "Would you rather have the ability to fly or be invisible"}, option1: {"Fly"}, option2: {"Be Invisible"},
  {question: "Would you rather live in a world without music or without movies?", option1: "Without Music", option2: "Without Movies"},
  {question: "Would you rather always be 10 minutes late or always be 20 minutes early?", option1: "10 Minutes Late", option2: "20 Minutes Early"},
  {question: "Would you rather have unlimited free travel or free food forever?", option1: "Free Travel", option2: "Free Food"},
  {question: "Would you rather be able to talk to animals or speak every language?", option1: "Talk to Animals", option2: "Speak Every Language"},
  {question: "Would you rather be able to talk in every language besides English or only be able to speak in English?", option1: "Speak every language besides English", option2: "Speak only English"},
  {question: "Would you rather never use social media again or never watch another movie?", option1: "No Social Media", option2: "No Movies"},
  {question: "Would you rather have a personal chef or a personal driver?", option1: "Personal Chef", option2: "Personal Driver"
    // ignore these i was trying to make something but my time didnt track 
  ]
client.login(process.env.token)