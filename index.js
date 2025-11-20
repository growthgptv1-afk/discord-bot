const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once("ready", () => {
    console.log(`Bot logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === "ping") {
        message.reply("Pong!");
    }
});

// 👇 IMPORTANT: Keep the bot alive on Railway
setInterval(() => {}, 1000);

client.login(process.env.DISCORD_TOKEN);
