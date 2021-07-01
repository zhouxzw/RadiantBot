const { Client, Attachment, MessageAttachment } = require("discord.js");

const bot = new Client();
bot.once("ready", () => {
  console.log("Radiant Bot Online!");
});

bot.login(process.env.TOKEN);
const PREFIX = "!";
const agentList = [
  {
    name: "Astra",
    url: "https://static.wikia.nocookie.net/valorant/images/8/8a/Astra_artwork.png",
  },
  {
    name: "Breach",
    url: "https://static.wikia.nocookie.net/valorant/images/5/5c/Breach_artwork.png",
  },
  {
    name: "Brimstone",
    url: "https://static.wikia.nocookie.net/valorant/images/3/37/Brimstone_artwork.png",
  },
  {
    name: "Viper",
    url: "https://static.wikia.nocookie.net/valorant/images/9/91/Viper_artwork.png",
  },
  {
    name: "Cypher",
    url: "https://static.wikia.nocookie.net/valorant/images/b/bb/Cypher_artwork.png",
  },
  {
    name: "Jett",
    url: "https://static.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png",
  },
  {
    name: "Killjoy",
    url: "https://static.wikia.nocookie.net/valorant/images/8/8c/Killjoy.png",
  },
  {
    name: "Omen",
    url: "https://static.wikia.nocookie.net/valorant/images/0/06/Omen_artwork.png",
  },
  {
    name: "Phoenix",
    url: "https://static.wikia.nocookie.net/valorant/images/f/fa/Phoenix_artwork.png",
  },
  {
    name: "Raze",
    url: "https://static.wikia.nocookie.net/valorant/images/c/c4/Raze_artwork.png",
  },
  {
    name: "Reyna",
    url: "https://static.wikia.nocookie.net/valorant/images/4/41/Reyna_artwork.png",
  },
  {
    name: "Sage",
    url: "https://static.wikia.nocookie.net/valorant/images/1/1e/Sage_artwork.png",
  },
  {
    name: "Skye",
    url: "https://static.wikia.nocookie.net/valorant/images/b/b9/Skye_Keyart_final.png",
  },
  {
    name: "Sova",
    url: "https://static.wikia.nocookie.net/valorant/images/6/61/Sova_artwork.png",
  },
  {
    name: "Yoru",
    url: "https://static.wikia.nocookie.net/valorant/images/a/a1/Yoru2.png",
  },
  {
    name: "Kay/o",
    url: "https://static.wikia.nocookie.net/valorant/images/8/83/KAYO_KeyArt.png",
  },
];

bot.on("message", (message) => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "agent":
      const randomNumber = Math.floor(Math.random() * agentList.length);
      const randomAgent = agentList[randomNumber].name;
      const agentUrl = agentList[randomNumber].url;
      const attachment = new MessageAttachment(agentUrl);
      message.channel.send("Random Agent: " + randomAgent);
      message.channel.send(attachment);

      console.log(message.member.user.username + " is playing " + randomAgent);
      break;
  }
});
