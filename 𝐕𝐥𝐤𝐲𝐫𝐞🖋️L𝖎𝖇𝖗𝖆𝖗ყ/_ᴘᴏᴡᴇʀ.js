("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
require("./𝕷𝖆ყO𝖚𝖙")
let { Caught } = require("../Vlkyre👒Hat/Caught");
let { Image_Button } = require("../Vlkyre👒Hat/Image_Button");
let UserPrivate = require(`../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/private`);
exports._ᴘᴏᴡᴇʀ = async (𝖍𝖆𝖜ӄ, 𝐕𝐥𝐤𝐲𝐫𝐞) => {
await UserPrivate.findOne(
{
ID: 𝐕𝐥𝐤𝐲𝐫𝐞.sender,
},
async (𝕰𝖗𝖗𝖔𝖗, user) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(𝖍𝖆𝖜ӄ, 𝐕𝐥𝐤𝐲𝐫𝐞, 𝕰𝖗𝖗𝖔𝖗);
if (!user) {
var newUser = new UserPrivate({
ID: 𝐕𝐥𝐤𝐲𝐫𝐞.sender,
Amount: 1,
});
await newUser.save().catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, 𝐕𝐥𝐤𝐲𝐫𝐞, 𝕰𝖗𝖗𝖔𝖗));
return await Image_Button(
𝖍𝖆𝖜ӄ,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_Red.png",
`✋🏽‍𝐖𝐚𝐢𝐭 𝐅𝐨𝐫 𝐌𝐲 𝐎𝐰𝐧𝐞𝐫 𝐓𝐨 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
• Dear Random User, This Private Is Being Guarded By Vlkyre AI!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: 1/4
• You Will be Auto-Blocked After 4 warnings!`
);
} else if (user.Amount < 4) {
user.Amount = user.Amount + 1;
await user.save().catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, 𝐕𝐥𝐤𝐲𝐫𝐞, 𝕰𝖗𝖗𝖔𝖗));
return await Image_Button(
𝖍𝖆𝖜ӄ,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_Red.png",
`✋🏽‍𝐖𝐚𝐢𝐭 𝐅𝐨𝐫 𝐌𝐲 𝐎𝐰𝐧𝐞𝐫 𝐓𝐨 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
• Dear Random User, This Private Is Being Guarded By Vlkyre AI!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: ${user.Amount}/4
• You Will be Auto-Blocked After 4 warnings!`
);
} else {
await user.delete().catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, 𝐕𝐥𝐤𝐲𝐫𝐞, 𝕰𝖗𝖗𝖔𝖗));
return await 𝖍𝖆𝖜ӄ.updateBlockStatus(𝐕𝐥𝐤𝐲𝐫𝐞.sender, "block").catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, 𝐕𝐥𝐤𝐲𝐫𝐞, 𝕰𝖗𝖗𝖔𝖗));
}
}
);
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
