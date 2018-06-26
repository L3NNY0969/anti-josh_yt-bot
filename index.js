const bot = new (require("discord.js").Client)();
const prefix = "aj.";

bot.on("ready", () => console.log("I'm ready. Kthx"));

bot.on("message", msg => {
    if (!msg.content.startsWith(prefix.length) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "truth") return msg.channel.send('Josh gay. ');

    }
});

bot.login(process.env.TOKEN);
