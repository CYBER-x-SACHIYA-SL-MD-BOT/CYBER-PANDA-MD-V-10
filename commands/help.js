const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═══════════════════╗
╠ *🐼 𝘾𝙔𝘽𝙀𝙍 𝙋𝘼𝙉𝘿𝘼 𝙈𝘿 𝙑.10 🐼*
╚═══════════════════╝
╔═══════════════════╗
╠ 💗 *${settings.botName}*
╚═══════════════════╝
╔═══════════════════╗
╠ 💫 *𝐕𝐞𝐫𝐬𝐢𝐨𝐧: V.10*
╚═══════════════════╝
╔═══════════════════╗
╠ 🦾 *by ${settings.botOwner}*
╚═══════════════════╝
╔═══════════════════╗
╠ *🐼 𝐒𝐀𝐂𝐇𝐈𝐓𝐇 𝐂𝐇𝐀𝐍𝐃𝐑𝐀 🐼*
╚═══════════════════╝
╔═══════════════════╗
╠ 🚬 *𝐎𝐰𝐧𝐞𝐫 𝐍𝐮𝐦𝐛𝐞𝐫 0767233346*
╚═══════════════════╝

🐼 𝘾𝙔𝘽𝙀𝙍 𝙋𝘼𝙉𝘿𝘼 𝙈𝘿 𝙑.10 🐼

╔═════════════
╠ *𝐆𝐞𝐧𝐞𝐫𝐚𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬*
╚═════════════
╔═════════════
╠ ⛃ .ʜᴇʟᴘ
╠ ⛃ .ᴍᴇɴᴜ
╠ ⛃ .ᴘɪɴɢ
╠ ⛃ .ᴀʟɪᴠᴇ
╠ ⛃ .ᴛᴛꜱ
╠ ⛃ .ᴏᴡɴᴇʀ
╠ ⛃ .ᴡᴇᴀᴛʜᴇʀ
╠ ⛃ .ɴᴇᴡꜱ
╠ ⛃ .ᴀᴘᴘ
╠ ⛃ .ᴛʀᴛ
╠ ⛃ .ꜱꜱ
╠ ⛃ .ᴜʀʟ
╚════════════ 

╔════════════
╠ 🐼 *𝐀𝐝𝐦𝐢𝐧𝐠 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬* 🐼
╚════════════
╠ ⛃ .ᴋɪᴄᴋ @user
╠ ⛃ .ᴛᴀɢᴀʟʟ
╠ ⛃ .ʀᴇꜱᴇᴛʟɪɴᴋ
╠ ⛃ .ᴀɴᴛɪᴛᴀɢ
╠ ⛃ .ᴡᴇʟᴄᴏᴍᴇ
╠ ⛃ .ɢᴏᴏᴅʙʏᴇ
╠ ⛃ .ꜱᴇᴛɢᴅᴇꜱᴄ
╠ ⛃ .ꜱᴇᴛɢɴᴀᴍᴇ
╠ ⛃ .ꜱᴇᴛɢᴘᴘ
╚════════════

╔════════════
╠ 🐼 *𝐈𝐦𝐚𝐠𝐞 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬* 🐼
╠════════════
╠ 🐼 *𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬* 🐼
╚════════════
╠ ⛃ .ʙʟᴜʀ
╠ ⛃ .ꜱɪᴍᴀɢᴇ
╠ ⛃ .ꜱᴛɪᴄᴋᴇʀ
╠ ⛃ .ʀᴇᴍᴏᴠᴇʙɢ
╠ ⛃ .ᴛɢꜱᴛɪᴄᴋᴇʀ
╠ ⛃ .ᴇᴍᴏᴊɪᴍɪx
╠ ⛃ .ɪɢꜱ
╠ ⛃ .ɪɢꜱᴄ
╚════════════  

╔════════════
╠ 🐼 *𝐀𝐈 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬* 🐼
╚════════════
╠ ⛃ .ɢᴘᴛ <question>
╠ ⛃ .ɢɪᴍɪɴɪ <question>
╚════════════

╔════════════
╠ 🐼 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫* 🐼
╚════════════
╠ ⛃ .ᴘʟᴀʏ
╠ ⛃ .ꜱᴏɴɢ
╠ ⛃ .ꜱᴘᴏᴛɪꜰʏ
╠ ⛃ .ꜰᴀᴄᴇʙᴏᴏᴋ
╠ ⛃ .ᴛɪᴋᴛᴏᴋ
╠ ⛃ .ᴠɪᴅᴇᴏ
╠ ⛃ .ʏᴛᴍᴘ4 
╚════════════

╔════════════
╠ 🐼 *𝐆𝐢𝐭𝐡𝐮𝐛 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬* 🐼
╚════════════
╠ ⛃ .ɢɪᴛ
╠ ⛃ .ɢɪᴛʜᴜʙ
╠ ⛃ .ꜱᴄ
╠ ⛃ .ꜱᴄʀɪᴘᴛ
╠ ⛃ .ʀᴇᴘᴏ
╚════════════`;

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
