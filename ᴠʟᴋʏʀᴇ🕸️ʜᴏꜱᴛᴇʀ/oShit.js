`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
// ꧁ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 v${vers.vers} ꧂\n☊ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const vers = require(`../package.json`);
const cleanRF = require(`./cleanRF`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
require(`python-format-js`);
const fs = require(`fs`);
exports.catch = async (error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat) => {
  const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
  let ᴘɴᴀᴍᴇ;
  try {
    ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/\@s.whatsapp.net/g, "").replace(/\D/g, "");
    require("child_process").exec("hash -r").stderr.pipe(process.stderr);
  } catch {
    ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.split("@")[0].replace(/\D/g, "");
    require("child_process").exec("hash -r").stderr.pipe(process.stderr);
  }
  const ᴅꜰɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.commandName;
  const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
  `|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
  const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
    ᴠʟᴋʏʀᴇ.chatId,
    { url: `./ᴠʟᴋʏʀᴇ🔌cord/ᴠʟᴋʏʀᴇ_404.png` },
    MessageType.image,
    { mimetype: Mimetype.png }
  );
  await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(
    ᴠʟᴋʏʀᴇ.chatId,
    {
      contentText: `*♡「 _@${ᴘɴᴀᴍᴇ}_ 」♡*
╔⧉༻🌿𝐓𝐨𝐩𝐢𝐜: _${ᴋᴇɪ}${ꜰɪɴᴀᴍᴇ}_
║❌ 𝗘𝗿𝗿𝗼𝗿: _Api Timeout.Try Again Later!_
╚════════════╝`,
      footerText: `⌜𝐕𝐥𝐤𝐲𝐫𝐞 ×፝֟͜×${vers.vers}⌟\nᴘʏᴛʜᴏɴ ☊ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ\nᴄᴏᴘʏʀɪɢʜᴛ Ⓒ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
      buttons: [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
      ],
      headerType: 4,
      imageMessage: media.message.imageMessage,
    },
    MessageType.buttonsMessage,
    {
      quoted: chat,
      contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ] },
    }
  );
  `|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
  await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(
    ᴠʟᴋʏʀᴇ.Myself,
    `⌜𝐕𝐥𝐤𝐲𝐫𝐞 ×፝֟͜×${vers.vers}⌟\nᴘʏᴛʜᴏɴ ☊ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ\nᴄᴏᴘʏʀɪɢʜᴛ Ⓒ ᴋʀᴀᴋɪɴᴢʟᴀʙ™

╔⧉༻🌿𝐓𝐨𝐩𝐢𝐜: _${ᴋᴇɪ}${ꜰɪɴᴀᴍᴇ}_
║❌ 𝗘𝗿𝗿𝗼𝗿: ${error}
╚════════════╝`,
    MessageType.text,
    {
      quoted: chat,
      contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ] },
    }
  );
  return;
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
