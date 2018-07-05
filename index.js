const bot = new (require("discord.js").Client)();
const prefix = "js.";

bot.on("ready", () => console.log("Yea, im online now."));

bot.on("message", msg => {
    if (!msg.content.startsWith(prefix.length) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "ping") return msg.channel.send('Pong?');

    }
});

bot.login(process.env.TOKEN);
