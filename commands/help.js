const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭━〔 🐼 CYBER PANDA MD V10 🐼
┃
┃ 👤 User        : @${userName}
┃ 🤖 Bot Name    : ${settings.botName || 'CYBER-PANDA-MD'}
┃ 🧠 Version     : ${stats.version || settings.version || '1.0.0'}
┃ 👑 Owner       : ${settings.botOwner || 'CYBER-PANDA-MD'}
┃ 📺 YouTube     : ${global.ytch}
┃ 📞 Owner No    : 0760220052
┃ 📥 Prefix      : ${prefix}
┃ 🌍 TimeZone    : ${settings.timezone}
┃ ⏰ Time        : ${greeting.time}
┃ ${dayInfo.emoji} Day         : ${dayInfo.day}
┃ 💻 Mode        : ${currentBotMode}
┃ 📊 Commands    : ${totalCommands}
┃ 📅 Date        : ${getLocalizedTime()}
┃ 📡 Platform    : ${userPlatform}
┃ 👥 Active Now  : ${stats.activeUsers}
┃ 📈 Total Users : ${stats.totalUsers}
┃
╰━━━━━━━━━━━━━━━━━━

〔 🐼 CYBER PANDA MD COMMANDS 🐼 〕

╠═ 🌐 GENERAL 🌍 
║ ➤ 📜 .help / .menu
║ ➤ ⚡ .ping / ❤️ .alive
║ ➤ 🔊 .tts <text> / 👑 .owner
║ ➤ 😂 .joke / 💬 .quote / 🧠 .fact
║ ➤ 🌦️ .weather / 📰 .news
║ ➤ 🎨 .attp / 🎵 .lyrics
║ ➤ 🎱 .8ball / 👥 .groupinfo
║ ➤ 🛡️ .admins / .staff
║ ➤ 🔍 .vv / 🆔 .jid / 🔗 .url
║ ➤ 🌍 .trt / 📸 .ss
╠════════════════════╣
║
╠═ 👮 ADMIN 🛡️ 
║
║ ➤ 🚫 .ban / 👢 .kick
║ ➤ ⬆️ .promote / ⬇️ .demote
║ ➤ 🔇 .mute / 🔊 .unmute
║ ➤ ⚠️ .warn / 📊 .warnings
║ ➤ ❌ .delete / .del
║ ➤ 🔗 .antilink / 🤬 .antibadword
║ ➤ 🧹 .clear / ♻️ .resetlink
║ ➤ 📢 .tag / 📣 .tagall / 🕵️ .hidetag
║ ➤ 🚷 .tagnotadmin
║ ➤ 🤖 .chatbot / 🚫 .antitag
║ ➤ 👋 .welcome / 👋 .goodbye
║ ➤ 📝 .setgname / 📄 .setgdesc
║ ➤ 🖼️ .setgpp
╠══════════════════╣
║
╠═ 🔒 OWNER 👑 
║
║ ➤ 🌍 .mode
║ ➤ 🔄 .update / ⚙️ .settings
║ ➤ 🧹 .clearsession / 🗑️ .cleartmp
║ ➤ 👁️ .antidelete
║ ➤ ❤️ .autoreact / 📡 .autostatus
║ ➤ ⌨️ .autotyping / 📖 .autoread
║ ➤ 📵 .anticall / 🚫 .pmblocker
║ ➤ 🖼️ .setpp / 🏷️ .setmention
║ ➤ 🔔 .mention
╠═════════════════╣
║
╠═ 🎨 MEDIA 🖌️
║
║ ➤ 🧩 .sticker / 🖼️ .simage
║ ➤ 🌫️ .blur / ✂️ .crop
║ ➤ 🧼 .removebg / ✨ .remini
║ ➤ 😂 .meme / 📦 .tgsticker
║ ➤ 🎁 .take
║ ➤ 😍 .emojimix
║ ➤ 📸 .igs / 📥 .igsc
╠═════════════════╣
║
╠═ 🖼 PICS 📷 
║
║ ➤ 🌍 .pies
║ ➤ 🇨🇳 .china / 🇯🇵 .japan
║ ➤ 🇰🇷 .korea / 🇮🇩 .indonesia
║ ➤ 🧕 .hijab
╠═════════════════╣
║
╠═ 🎮 GAMES 🕹️
║ 
║ ➤ ❌⭕ .tictactoe
║ ➤ 🪢 .hangman / 🔤 .guess
║ ➤ ❓ .trivia / 💡 .answer
║ ➤ 😈 .truth / 😏 .dare
╠═════════════════╣
║
╠═ 🤖 AI 🧠 
║
║ ➤ 💬 .gpt / 🔮 .gemini
║ ➤ 🎨 .imagine
║ ➤ ⚡ .flux / 🎥 .sora
╠═════════════════╣
║
╠═ 🎯 FUN 🎉 
║
║ ➤ 😊 .compliment / 😒 .insult
║ ➤ ❤️ .flirt / ✍️ .shayari
║ ➤ 🌙 .goodnight / 🌹 .roseday
║ ➤ 🎭 .character / 💀 .wasted
║ ➤ 💞 .ship / 🥺 .simp / 🤪 .stupid
╠═════════════════╣
║
╠═ 🔤 TEXT MAKER ✨ 
║
║ ➤ 🔩 .metallic / ❄️ .ice / 🌨️ .snow
║ ➤ 💎 .impressive / 🖥️ .matrix
║ ➤ 💡 .light / 🌈 .neon / 😈 .devil
║ ➤ 💜 .purple / ⚡ .thunder
║ ➤ 🍃 .leaves / 🎖️ .1917 / 🏟️ .arena
║ ➤ 💻 .hacker / 🏖️ .sand
║ ➤ 💖 .blackpink / 👾 .glitch / 🔥 .fire
╠════════════════╣
║
╠═ 📥 DOWNLOADER ⬇️ 
║
║ ➤ 🎵 .play / 🎶 .song / 🎧 .spotify
║ ➤ 📸 .instagram / 📘 .facebook
║ ➤ 🎬 .tiktok / 📹 .video
║ ➤ ⬇️ .ytmp4
╠════════════════╣
║
╠═ 🧩 MISC 🧠 
║
║ ➤ ❤️ .heart / 🔵 .circle / 🏳️‍🌈 .lgbt
║ ➤ 🚔 .lolice / 🪪 .namecard
║ ➤ 🐦 .tweet / 💬 .ytcomment
║ ➤ ☭ .comrade / 🧊 .glass
║ ➤ 🔒 .jail / ✅ .passed / ⚡ .triggered
╠════════════════╣
║
╠═ 🖼 ANIME 🎌 
║
║ ➤ 😋 .nom / 👉 .poke / 😭 .cry
║ ➤ 😘 .kiss / 🤗 .pat / 🤍 .hug
║ ➤ 😉 .wink / 🤦 .facepalm
╠════════════════╣
║
╠═ 💻 GITHUB 🌐 
║
║ ➤ 🧑‍💻 .git / 🐙 .github
║ ➤ 📂 .sc / 📜 .script / 📁 .repo
╚════════════════╝`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'CYBER-PANDA-MD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'CYBER-PANDA-MD By Sachith Chandra',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
