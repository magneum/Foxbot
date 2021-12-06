// ===============================================================================
// 🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
const { MessageType } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ULTƦON/catch");
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `groupdp`,
  commandType: "Administration🐙",
  description: `Use this command to change the group's icon.
Tag image with the command or send the desired image with caption as the command`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
    try {
      if (!ULTƦON.isGroup) {
        await υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `This command is only applicable in a group chat.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      }
      if (!ULTƦON.isImage && !ULTƦON.isReplyImage) {
        await υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `Please reply or caption the image you want to make the group icon.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      }
      var update = await υℓтяσηℓιєηт
        .sendMessage(
          ULTƦON.chatId,
          `Chnaging icon/group image...`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      var imageId = chat.key.id;
      const fileName = `./ᴛᴇᴍᴘ/change_pic` + imageId;
      if (ULTƦON.isImage) {
        var filePath = await υℓтяσηℓιєηт
          .downloadAndSaveMediaMessage(
            {
              message: chat.message,
            },
            fileName
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      } else {
        var filePath = await υℓтяσηℓιєηт
          .downloadAndSaveMediaMessage(
            {
              message:
                chat.message.extendedTextMessage.contextInfo.quotedMessage,
            },
            fileName
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      }

      const imagePath = `./ᴛᴇᴍᴘ/image-` + imageId + `.png`;
      ffmpeg(filePath)
        .outputOptions([`-y`, `-vcodec png`, `-s 500x500`])
        .videoFilters(
          `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease:eval=frame,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2,setsar=1:1`
        )
        .save(imagePath)
        .on(`end`, async () => {
          υℓтяσηℓιєηт
            .updateProfilePicture(ULTƦON.chatId, fs.readFileSync(imagePath))
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
            });
          fs.unlink(imagePath, (cᴇʀʀᴏʀ) => {
            if (cᴇʀʀᴏʀ) console.log(cᴇʀʀᴏʀ);
            else {
              console.log("Deleted!");
            }
          });
          fs.unlink(filePath, (cᴇʀʀᴏʀ) => {
            if (cᴇʀʀᴏʀ) console.log(cᴇʀʀᴏʀ);
            else {
              console.log("Deleted!");
            }
          });
        });
    } catch (cᴇʀʀᴏʀ) {
      await υℓтяσηℓιєηт.sendMessage(
        ULTƦON.chatId,
        `*🎮ULTƦON™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ꜱɪɢɴ.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
    return;
  },
};
// ===============================================================================
// 🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
