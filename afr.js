/*
      SC CASE BY AFR TEAM
      Created on: 30 Januari 2025
            
      saluran update sc ini ☟☟
        https://whatsapp.com/channel/0029Vajf99IKbYMLNn7qKS3i
        
        YANG DISHARE SECARA GRATIS DILARANG JUAL!!

*/
//════════════════════════\\
require("./settings")
require("./menu/menu_list") 
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')
const { 
    FajarNews, 
    BBCNews, 
    metroNews, 
    CNNNews, 
    iNews, 
    KumparanNews, 
    TribunNews, 
    DailyNews, 
    DetikNews, 
    OkezoneNews, 
    CNBCNews, 
    KompasNews, 
    SindoNews, 
    TempoNews, 
    IndozoneNews, 
    AntaraNews, 
    RepublikaNews, 
    VivaNews, 
    KontanNews, 
    MerdekaNews, 
    KomikuSearch, 
    AniPlanetSearch, 
    KomikFoxSearch, 
    KomikStationSearch, 
    MangakuSearch, 
    KiryuuSearch, 
    KissMangaSearch, 
    KlikMangaSearch, 
    PalingMurah, 
    LayarKaca21, 
    AminoApps, 
    Mangatoon, 
    WAModsSearch, 
    Emojis, 
    CoronaInfo, 
    JalanTikusMeme,
    Cerpen, 
    Quotes, 
    Couples, 
    Darkjokes 
    } = require("dhn-api");
const { exec, spawn, execSync } = require("child_process")
const nodeCron = require("node-cron");
const { 
    igdl, 
    fbdl, 
    ytmp3, 
    ytmp4, 
    } = require('ruhend-scraper')
const { translate } = require('@vitalets/google-translate-api')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const yts = require('./lib/yt-search')
const { ytSearch } = require('./lib/yt')
const similarity = require('similarity');
const threshold = 0.72
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const chalk = require('chalk')
const FormData = require('form-data');
const cheerio = require('cheerio')
const moment = require("moment-timezone")
const { addExif } = require('./lib/function/exif')
const { smsg, formatDate, getTime, getGroupAdmins, formatp, await, sleep, runtime, clockString, msToDate, sort, toNumber, enumGetKey, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, fetchBuffer, buffergif, GIFBufferToVideoBuffer, totalcase } = require('./lib/function/myfunc'); 
const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, shorturl, color } = require("./lib/function/funcc");
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/function/converter')
const uploadImage = require('./lib/function/uploadImage');
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredPremiumCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/function/premium');
const { 
    tiktoksearch, 
    tiktokdl, 
    Facebook 
    } = require('./lib/scraper/downloader.js');
const { remini } = require('./lib/scraper/remini')
const { remini2, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./lib/scraper/scrape2")
const { 
        addResponList, 
        delResponList, 
        isAlreadyResponList, 
        isAlreadyResponListGroup, 
        sendResponList, 
        updateResponList, 
        getDataResponList 
        } = require('./lib/function/responlist');
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
const ntilink = JSON.parse(fs.readFileSync("./database/antilink.json"))
const upchUsage = require('./database/upchUsage.json')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4800)

// start dari sini
module.exports = afr = async (afr, m, chatUpdate, store) => {
try {
const body = (m && m.mtype) ? (
m.mtype === 'conversation' ? m.message?.conversation :
m.mtype === 'imageMessage' ? m.message?.imageMessage?.caption :
m.mtype === 'videoMessage' ? m.message?.videoMessage?.caption :
m.mtype === 'extendedTextMessage' ? m.message?.extendedTextMessage?.text :
m.mtype === 'buttonsResponseMessage' ? m.message?.buttonsResponseMessage?.selectedButtonId :
m.mtype === 'listResponseMessage' ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
m.mtype === 'templateButtonReplyMessage' ? m.message?.templateButtonReplyMessage?.selectedId :
m.mtype === 'messageContextInfo' ? (
m.message?.buttonsResponseMessage?.selectedButtonId || 
m.message?.listResponseMessage?.singleSelectReply?.selectedRowId || 
m.text
) : ''
) : '';

const budy = (m && typeof m.text === 'string') ? m.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m.pushName || "No Name";
const botNumber = await afr.decodeJid(afr.user.id);
const { type, fromMe } = m
const sender = m.sender
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const isPrem = (m && m.sender && [botNumber, ...global.premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const itsMe = (m && m.sender && m.sender == botNumber) || false;
const text = q = args.join(" ");
let txt = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
var msg_text = (typeof m.text === 'string') ? m.text : '';
const fatkuns = m && (m.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const groupMetadata = m.isGroup ? await afr.groupMetadata(m.chat).catch(e => {}) : {};
const participants = m.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isBot = botNumber.includes(senderNumber)
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const isPremium = isCreator || isCreator || isPrem || checkPremiumUser(m.sender, premium); expiredPremiumCheck(afr, m, premium);
const isBan = banned.includes(m.sender)
const AntiLink = m.isGroup ? ntilink.includes(m.chat) : false 
const groupOwner = m.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;

const hariini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const salam = 'Selamat '+dt.charAt(0).toUpperCase() + dt.slice(1)    
let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)
const lilydate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (time2 < "23:59:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'; }
if (time2 < "19:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'; }
if (time2 < "18:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'; }
if (time2 < "15:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'; }
if (time2 < "10:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'; }
if (time2 < "05:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'; }
if (time2 < "03:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'; }

if (time2 < "23:59:00") { var emojiwaktu = `🌌`; }
if (time2 < "19:00:00") { var emojiwaktu = `🌙`; }
if (time2 < "18:00:00") { var emojiwaktu = `🌅`; }
if (time2 < "17:00:00") { var emojiwaktu = `🌅`; }
if (time2 < "15:00:00") { var emojiwaktu = `☀️`; }
if (time2 < "11:00:00") { var emojiwaktu = `🌄`; }
if (time2 < "05:00:00") { var emojiwaktu = `🌙`; }

try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limit.premium : global.limit.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
                if (!isNumber(user.balance)) user.balance = 0
                if (!isNumber(user.exp)) user.exp = 0
                if (!isNumber(user.maxexp)) user.maxexp = 1000
                if (!isNumber(user.level)) user.level = 0
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser, 
                balance: 0,
                exp: 0,
                maxexp: 1000,
                level: 0,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkv2' in chats)) chats.antilinkv2 = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                antilinkv2: false,
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!('autoread' in setting)) setting.autoread = true
            } else global.db.data.settings[botNumber] = {
                autoread: true, 
            }
        } catch (err) {
            console.error(err)
        }

const userdb = global.db.data.users[m.sender]
const chatdb = global.db.data.chats[m.chat]

let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.kuismath = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let tebakkalimat = db.data.game.tebakkalimat = []
let tebaklirik = db.data.game.tebaklirik = []
let tebaktebakan = db.data.game.tebaktebakan = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakbendera2 = db.data.game.tebakbendera2 = []
let tebakkimia = db.data.game.tebakkimia = []
let tebakasahotak = db.data.game.tebakasahotak = []
let tebaksiapakahaku = db.data.game.tebaksiapakahaku = []
let tebaksusunkata = db.data.game.tebaksusunkata = []
let tebaktekateki = db.data.game.tebaktekateki = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []

        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }

        if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                m.reply(`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return m.reply(`Ehh ternyata bot belum jadi admin.`)
                let gclink = (`https://chat.whatsapp.com/` + await afr.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return m.reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata`)
                if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin`)
                if (isCreator) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata`)
                afr.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                afr.sendMessage(m.chat, { delete: m.key })
            }
        }
        if (db.data.chats[m.chat].antilinkv2) {
            if (budy.match(`chat.whatsapp.com`)) {
                m.reply(`「 ANTI LINK WHATSAPP 」\n\n*JANGAN SHARE GC LAIN!!!*`)
                if (!isBotAdmins) return m.reply(`Ehh Bot Gak Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await afr.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return m.reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata`)
                if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin`)
                if (isCreator) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata`)
                afr.sendMessage(m.chat, { delete: m.key })
            }
        }

const totalFitur = () => {
    var mytext = fs.readFileSync("./afr.js").toString();
    var numUpper = (mytext.match(/case '/g) || []).length;
    return numUpper;
};

        function sort(property, ascending = true) {
            if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
            else return (...args) => args[ascending & 1] - args[!ascending & 1]
        }

        function toNumber(property, _default = 0) {
            if (property) return (a, i, b) => {
            return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
        }
        else return a => a === undefined ? _default : a
        }

        function enumGetKey(a) {
             return a.jid
        }

const pickRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};
 
try {
    var ppuser = await afr.profilePictureUrl(m.sender, 'image');
} catch (err) {
    var ppuser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg';
}

let ppnyauser = await getBuffer(ppuser);

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
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
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await afr.sendText(room.x, str, m, { mentions: parseMention(str) } )
await afr.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
afr.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
afr.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) afr.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) afr.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) afr.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
afr.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) afr.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) afr.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
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
afr.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

        if (m.message) {
            if (global.db.data.settings[botNumber].autoread) {
                afr.readMessages([m.key])
            }
        }
        
        const cron = require('node-cron')
        cron.schedule('30 23 * * *', () => {
            let user = Object.keys(global.db.data.users)
            for (let jid of user) global.db.data.users[jid].limit = 20
            console.log('Reseted Limit')
            afr.sendMessage(global.ownernumber + "@s.whatsapp.net", { text: "Sukses Reset Limit User" })
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        });
        
async function loading () {
var afrteam = [
"████▒▒▒▒▒▒30%",
"█████▒▒▒▒▒50%", 
"████████▒▒80%", 
"██████████100%", 
"⋘ SUCCES. ⋙", 
]
let { key } = await afr.sendMessage(m.chat, {text: "█▒▒▒▒▒▒▒▒▒10%",},  { quoted: m })

for (let i = 0; i < afrteam.length; i++) {
await sleep(100)
await afr.sendMessage(m.chat, {text: afrteam[i], edit: key }, { quoted: m });
}
}

const reply = (teks) => {
afr.sendMessage(m.chat, { text: teks, contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idch, 
               newsletterName: global.titlech, 
                serverMessageId: -1
            },
            forwardingScore: 256,
        externalAdReply: {
        showAdAttribution: true,
        title: global.wm,
        body: `Jangan Spam Bot!!`,
        thumbnailUrl: global.thumbnail,
        sourceUrl: "", 
        mediaType: 1,
        renderLargerThumbnail: false
        }
        }}, { quoted: m })}

        if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
        var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
        if (get_data_respon.isImage === false) {
        afr.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
        quoted: m
        })
        } else {
        afr.sendMessage(m.chat, {
            image: await getBuffer(get_data_respon.image_url),
            caption: get_data_respon.response,
        }, {
        quoted: m
        })
        }
        }

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`🚫 *Jangan tag dia!*
 ❏  *Dia sedang AFK* ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
 ❏  *Selama* ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`${pushname} Telah Kembali Dari Afk\n\n ❏ ${user.afkReason ? ' *Dengan Alasan* : ' + user.afkReason : ''}\n\n ❏  *Selama* : ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//================== [ CONSOL LOGG] ==================//
if (m.message) {            
    console.log(chalk.cyan(`────────────『 ${chalk.redBright('ᴵᴺᶠᴼ ᴹᴱˢˢᴬᴳᴱ')} 』────────────`));
    console.log(`   ${chalk.cyan('» Message Type')}: ${m.mtype}`);
    console.log(`   ${chalk.cyan('» Sent Time')}: ${time2}`);
    console.log(`   ${chalk.cyan('» Sender Name')}: ${pushname || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Chat ID')}: ${m.chat.split('@')[0]}`);
    console.log(`   ${chalk.cyan('» Chat Name')}: ${budy || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Author By')}: AFR MD`);
    console.log(chalk.cyan('───────────────────────────────────⳹\n'));
}

//-- STAFF SYSTEM 
let list_staff = [];
  let staff_domp = global.owner;
  for (let i of staff_domp) {
  let name_staff = await afr.getName(i + "@s.whatsapp.net")   
    list_staff.push({
      displayName: await afr.getName(i + "@s.whatsapp.net"),
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${name_staff}\nFN:${name_staff}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Hubungi staff kami 💬\nitem2.EMAIL;type=INTERNET:${global.mail}\nitem2.X-ABLabel:Email\nitem3.URL:${global.web}\nitem3.X-ABLabel:Website\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
    });
}

        // untuk otomatis naik level ketika exp mencapai max exp
        if (userdb.exp > userdb.maxexp) {
            userdb.exp = 0
            userdb.level += 1
            userdb.balance += 100
        }

const dellimit = () => {
if (!isPremium) {
    if (userdb.limit < 1) {
        return reply(mess.limit);
    } else {
        userdb.limit -= 1;
        userdb.exp += 100;
        return;
    }
} else {
return;
}}

switch(command) {

case 'menu':
case 'help': {
let teksmenu = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.listmenu}`
/*afr.sendMessage(m.key.remoteJid, {
    image: { url: global.thumbnail },
    caption: teksmenu,
    footer: "© AFR BOT MD",
    buttons: [
        {
            buttonId: '.sc',
            buttonText: {
                displayText: 'Script'
            },
            type: 1
        }, 
        {
            buttonId: '.allmenu',
            buttonText: {
                displayText: 'Allmenu'
            },
            type: 1
        }
    ],
    headerType: 1,
    viewOnce: true
}, { quoted: m });*/
reply(teksmenu)
await sleep(150)
afr.sendMessage(m.chat, { audio: fs.readFileSync('./media/menu.mp3'), mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
break
//=================================================//
case 'allmenu':
case 'menuall':
let menuall = `┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.allmenu}`
reply(menuall)
break
//=================================================//
case 'mainmenu':
case 'menumain': {
let menu1 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.mainmenu}`
reply(menu1)
}
break
//=================================================//
case 'downloadmenu':
case 'menudownload': {
let menu2 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.downloadmenu}`
reply(menu2)
}
break
//=================================================//
case 'convertmenu':
case 'menuconvert': {
let menu3 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.convertmenu}`
reply(menu3)
}
break
//=================================================//
case 'gamemenu':
case 'menugame': {
let menu4 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.gamemenu}`
reply(menu4)
}
break
//=================================================//
case 'ownermenu':
case 'menuowner': {
let menu5 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.ownermenu}`
reply(menu5)
}
break
//=================================================//
case 'groupmenu':
case 'menugroup': {
let menu6 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.groupmenu}`
reply(menu6)
}
break
//=================================================//
case 'storemenu':
case 'menustore': {
let menu7 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.storemenu}`
reply(menu7)
}
break
//=================================================//
case 'funmenu':
case 'menufun': {
let menu8 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.funmenu}`
reply(menu8)
}
break
//=================================================//
case 'aimenu':
case 'menuai': {
let menu9 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.aimenu}`
reply(menu9)
}
break
//=================================================//
case 'beritamenu':
case 'menuberita': {
let menu10 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.beritamenu}`
reply(menu10)
}
break
//=================================================//
case 'primbonmenu':
case 'menuprimbon': {
let menu11 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.primbonmenu}`
reply(menu11)
}
break
//=================================================//
case 'animemenu':
case 'menuanime': {
let menu12 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.animemenu}`
reply(menu12)
}
break
//=================================================//
case 'randommenu':
case 'menurandom': {
let menu13 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.randommenu}`
reply(menu13)
}
break
//=================================================//
case 'toolsmenu':
case 'menutools': {
let menu14 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.toolsmenu}`
reply(menu14)
}
break
//=================================================//
case 'soundmenu':
case 'menusound': {
let menu15 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.soundmenu}`
reply(menu15)
}
break
//=================================================//
case 'ephotomenu':
case 'menuephoto': {
let menu16 = `
┏──「 *Info Bot* 」──
│ ❏ Name Bot: ${global.botname}
│ ❏ Version: ${global.bot_version}
│ ❏ Creator: wa.me/${global.ownernumber}
│ ❏ Mode: ${afr.public ? 'Public' : 'Private'}
│ ❏ Runtime: ${runtime(process.uptime())}
│ ❏ Total Fitur: ${totalFitur()}
│──「 *Info User* 」──
│ ❍ Username: ${pushname}
│ ❍ Status: ${isPremium ? 'Premium User' : 'Free User'}
│ ❍ Balance: ${userdb.balance}
│ ❍ Level: ${userdb.level}
┗──────╶
${readmore}
${global.ephotomenu}`
reply(menu16)
}
break
//=================================================//
                // V E R S I O N   1
                    // FITUR V1
                // V E R S I O N   1
//=================================================//
        case 'tqto': 
        case 'thanksto': {
            let caption = `ㅡThanks To:\n`
                caption += `• Penyedia Base\n`
                caption += `• Penyedia Scrape\n`
                caption += `• Penyedia Apikey\n`
                caption += `• Team AFR (recode)\n`
                caption += `• Yt Review\n\n\n`
                caption += `INFO UPDATE SC INI\n`
                caption += `https://whatsapp.com/channel/0029Vajf99IKbYMLNn7qKS3i`
            reply(caption)
        }
        break;
//=================================================//
case 'owner':
case 'creator': {  
  afr.sendMessage(m.chat, {
    contacts: {
      displayName: `${list_staff.length} Contact`,
      contacts: list_staff
    }
  }, {
    quoted: m
  });
}
break;
//=================================================//
        case 'afk': {
            userdb.afkTime = + new Date
            userdb.afkReason = txt
                reply(`${pushname}... Telah Afk ${txt ? 'Dengan Alasan: ' + txt : 'Tanpa Alasan'}`)
        }
        break
//=================================================//
        case 'runtime': {
            reply(`Runtime: *${runtime(process.uptime())}*`)
        }
        break
//=================================================//
case 'ping':
case 'botstatus':
case 'statusbot': {
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
respon = `
‣ Kecepatan Respon *${latensi.toFixed(4)} _Second_* \n *${oldd - neww} _miliseconds_*\n\n‣ *Runtime* : ${runtime(process.uptime())}

▧「 *INFO SERVER* 」
‣ *RAM* : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

${cpus[0] ? `▧「 *TOTAL CPU USAGE* 」\n‣ ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
‣ CPU Core(s) Usage (${cpus.length} Core CPU)` : ''}
`.trim()
await afr.sendMessage(m.chat, {
    text: respon,
        contextInfo: {
        externalAdReply: {
        showAdAttribution: true,
            title: 'STATUS SERVER',
            body: `${latensi.toFixed(4)} Second`,
            thumbnailUrl: global.thumbnail, 
            sourceUrl: global.url, 
            mediaType: 1,
            renderLargerThumbnail: true
}}}, { quoted: m })
}
break
//=================================================//
        case 'totalfitur':
        case 'fitur': 
            reply(`Total fitur: ${totalFitur()}`)
        break
//=================================================//        
            case 'script':
            case 'sc': {
                reply('Link sc ini ada di channel\nhttps://whatsapp.com/channel/0029Vajf99IKbYMLNn7qKS3i\n\nNo enc berbayar :b')
            }
            break
//=================================================//
case 'limit': {
    reply(`🎟 Total Limit Kamu: *[ ${isPremium ? '∞' : userdb.limit} ]*`)
}
break
//=================================================//
case 'balance': {
    reply(`💸 Total Balance Kamu: *[ ${userdb.balance} ]*`)
}
break
//=================================================//
case 'addprem':
    if (!isCreator) return reply(mess.owner)
    if (args.length < 2)
        return reply(`Example: ${prefix + command} @tag/nomor waktu\n\nContoh : ${prefix + command} @tag/nomor 30d`)
            if (m.mentionedJid.length !== 0) {
            for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[0], args[1], premium)
        }
        reply("Sukses menjadikan user sebagai user premium")
        } else {
            addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
        reply("Sukses menjadikan user sebagai user premium")
}
break
//=================================================//
case 'delprem':
    if (!isCreator) return reply(mess.owner)
        if (args.length < 1) return reply(`Example: ${prefix + command} @tag/nomor`)
        if (m.mentionedJid.length !== 0) {
            for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
            fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
        }
        reply("Done Delete Premium User")
        } else {
            premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
            fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
        reply("Done Delete Premium User")
}
break
//=================================================//
case 'listprem': {
if (!isCreator) return reply(mess.owner)
        let data = require('./database/premium.json')
        let txtp = `*×「 LIST PREMIUM 」×*\n\n`
        for (let x of data) {
            txtp += `No : ${x.id}\n`
            txtp += `Waktu : ${x.expired}\n`
    afr.sendMessage(m.chat, {
        text: txtp, 
        mentions: x
    }, {
        quoted: m
    })
}
}
break
//=================================================//
    case 'ban':  {
            if (!isCreator) return reply(mess.owner)
        if (!args[0]) return reply(`*Contoh : ${prefix + command} add/del 628xxx*`)
        if (args[1]) {
        orgnye = args[1] + "@s.whatsapp.net"
        } else if (m.quoted) {
        orgnye = m.quoted.sender
        }
        const isBane = banned.includes(orgnye)
        if (args[0] === "add") {
        if (isBane) return reply('*Pengguna Ini telah Di Ban*')
        banned.push(orgnye)
        reply(`Succes ban Pengguna Ini`)
        } else if (args[0] === "del") {
        if (!isBane) return reply('*Pengguna Ini Telah Di hapus Dari Ban*')
        let delbans = banned.indexOf(orgnye)
        banned.splice(delbans, 1)
        reply(`*Berhasil Menghapus Pengguna yang Di Ban*`)
        } else {
        reply("Error")
        }
    }
    break
//=================================================//
    case 'listban':
        if (isBan) return reply(mess.banned)
        teksooop = `▧ 「 *L I S T - B A N* 」\n`
        for (let ii of banned) {
        teksooop += `   ∘  ${ii}\n`
        }
        reply(teksooop)
    break
//=================================================//
        case 'autoread': {
            if (!isCreator) return reply(mess.owner)
            if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
            if (q === 'on'){
            global.db.data.settings[botNumber].autoread = true
            reply(`Berhasil mengubah autoread ke true`)
            } else if (q === 'off'){
            global.db.data.settings[botNumber].autoread = false
            reply(`Berhasil mengubah autoread ke false`)
            }
        }
        break
//=================================================//
        case 'join': {
            if (!isCreator) return reply(mess.owner)
            if (!txt) reply('Masukkan Link Group!')
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
            let result = args[0].split('https://chat.whatsapp.com/')[1]
            await afr.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
        }
        break
//=================================================//
case 'sendlinkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)

if (!txt) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
bnnd = txt.split("|")[0]+'@s.whatsapp.net'
let response = await afr.groupInviteCode(m.chat)
afr.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
        case 'leavegc':
        case 'leave': {
                if (!isCreator) return reply(mess.owner)
                reply("👋🏻 Sayonara Minasan~")
                await afr.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
        }
        break
//=================================================//









case 'addcase': {
if (!isCreator) return reply(mess.owner)
    if (!txt) return ('Tambahkan case yang ingin di masukan');
const namaFile = './afr.js';
const caseBaru = `${txt}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Error File:', err);
            } else {
                reply('Sukses Menambahkan case');
            }
        });
    } else {
        reply('Gagal Menambahkan case');
    }
});
}
break;
//=================================================//









case 'delcase': {
 if (!isCreator) return reply(mess.owner);
 if (!txt) return reply('Mana case yang ingin dihapus?');

 // Nama file yang akan dimodifikasi
 const namaFile = './afr.js';

 // Case yang ingin Anda hapus
 const caseToDelete = `case '${txt}':`;

 // Baca isi file
 fs.readFile(namaFile, 'utf8', (err, data) => {
 if (err) {
 console.error('Terjadi kesalahan saat membaca file:', err);
 return reply('Terjadi kesalahan saat membaca file.');
 }
const posisiCase = data.indexOf(caseToDelete);
 if (posisiCase === -1) {
 return reply(`Case '${txt}' tidak ditemukan dalam file.`);
 }

 // Cari posisi break; berikutnya setelah case
 const posisiBreak = data.indexOf('break;', posisiCase);
 if (posisiBreak === -1) {
 return reply('Tidak dapat menemukan "break;" setelah case yang ingin dihapus.');
 }

 // Potong data untuk menghapus case
 const kodeBaruLengkap = data.slice(0, posisiCase) + data.slice(posisiBreak + 'break;'.length);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
 if (err) {
 console.error('Terjadi kesalahan saat menulis file:', err);
 return reply('Terjadi kesalahan saat menulis file.');
 } else {
 return reply(`Case '${txt}' berhasil dihapus.`);
 }
 });
 });
    }
 break;
//=================================================//
 
 
 
 
 
 
 
 
 
 
            case 'antilink': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botadmin)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya`)
                    db.data.chats[m.chat].antilink = true
                    reply(`Antilink Group WhatsApp Aktif`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return reply(`Sudah Nonaktif Sebelumnya`)
                    db.data.chats[m.chat].antilink = false
                    reply(`Antilink Group WhatsApp Nonaktif`)
                } else {
                    reply(`Contoh: ${prefix + command} on/off`)
                }
            }
            break
//=================================================//
            case 'antilinkv2': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botadmin)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinkv2) return reply(`Sudah Aktif Sebelumnya`)
                    db.data.chats[m.chat].antilinkv2 = true
                    reply(`Antilinkv2 Group WhatsApp Aktif`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinkv2) return reply(`Sudah Nonaktif Sebelumnya`)
                    db.data.chats[m.chat].antilinkv2 = false
                    reply(`Antilinkv2 Group WhatsApp Nonaktif`)
                } else {
                    reply(`Contoh: ${prefix + command} on/off`)
                }
            }
            break
//=================================================//
            case 'mutegc': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botadmin)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
                    db.data.chats[m.chat].mute = true
                    reply(`Bot telah di mute di group ini`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
                    db.data.chats[m.chat].mute = false
                    reply(`Bot telah di unmute di group ini`)
                } else {
                   reply(`Ketik ${prefix + command} on/off`)
                }
            }
            break
//=================================================//
case 'linkgroup': case 'linkgc': {
    if (!isAdmins) return reply(mess.admin)
    if (!m.isGroup) return reply(mess.group)
    if (!isBotAdmins) return reply(mess.botadmin)

let response = await afr.groupInviteCode(m.chat)
afr.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'resetlinkgc': {
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)

afr.groupRevokeInvite(m.chat)
reply("sukses reset link group")
}
break
//=================================================//
case 'hitamkan':
case 'tendang':
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins) return reply(mess.admin)

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await afr.groupParticipantsUpdate(m.chat, [users], 'remove')
}
break
//=================================================//
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins) return reply(mess.admin)

let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await afr.groupParticipantsUpdate(m.chat, [users], 'add')
}
break
//=================================================//
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins) return reply(mess.admin)

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await afr.groupParticipantsUpdate(m.chat, [users], 'promote')
}
break
//=================================================//
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins) return reply(mess.admin)

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await afr.groupParticipantsUpdate(m.chat, [botNumber], 'demote')
}
break
//=================================================//
        case 'h':
        case 'ht':
        case 'hidetag': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
            afr.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
        }
        break
//=================================================//
case 'everyone': {
if (!m.isGroup) return
if (!isAdmins) return
 afr.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await afr.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: 'everyone' 
}
]
}
}
)
   setTimeout(async () => {
            }, 1120)
            }
        break
//=================================================//
   case 'g':
   case 'gb':
   case 'gc':
   case 'grub':
   case 'group': {   
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botadmin)
        if (!isAdmins) return reply(mess.admin)
            if (args[0] === 'close'){
                await afr.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
            } else if (args[0] === 'open'){
                await afr.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
            } else {
                reply(`Contoh: ${prefix + command} open/close`)
            }
   }
   break
//=================================================//
   case 'editnamagroup':     
   case 'editsubjek': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botadmin)
        if (!isAdmins) return reply(mess.admin)
        if (!txt) throw 'Text nya ?'
        await afr.groupUpdateSubject(m.chat, txt).then((res)).catch((err) => reply(jsonformat(err)))
    }
    break
//=================================================//
    case 'editdeskripsi':
    case 'editdesk': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botadmin)
        if (!isAdmins) return reply(mess.admin)
        if (!txt) throw 'Text Nya ?'
        await afr.groupUpdateDescription(m.chat, txt).then((res)).catch((err) => reply(jsonformat(err)))
    }
    break
//=================================================//
        case 'tagall': {
            if (!m.isGroup) return reply(mess.group)
            if (!isAdmins) return reply(mess.admin)
                let teks = `══✪〘 *👥 Tag All* 〙✪══
                 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
            }
            afr.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
        }
        break
//=================================================//
        case 'demoteall':
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botadmin)
                if (!isAdmins) return reply(mess.admin)
                
                var groupe = await afr.groupMetadata(m.chat)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                afr.groupParticipantsUpdate(m.chat, mems, 'demote')
        break
//=================================================//
        case 'promoteall':
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botadmin)
                if (!isAdmins) return reply(mess.admin)
                
                var groupe = await afr.groupMetadata(m.chat)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                afr.groupParticipantsUpdate(m.chat, mems, 'promote')
        break
//=================================================//
case 'tebakgambar':
if (isBan) return reply(mess.banned)
dellimit()
        if (userdb.tebakgambar === true) return reply("Ada soal yang belum terjawab.");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json');
         let result = anu[Math.floor(Math.random() * anu.length)];
    userdb.game = true
    afr.sendMessage(m.chat, {
        image: {
            url: result.img
        },
        caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
    }, {
        quoted: m
    }).then(() => {
      tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase().trim().replace(/\s+/g, ' ');
    });
    console.log("Jawaban: " + result.jawaban);
    userdb.jawaban = result.jawaban
    userdb.tebakgambar = true;
    await sleep(60000);
     if (userdb.tebakgambar === false) return 
    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
        console.log("Jawaban: " + userdb.jawaban);
        afr.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m);
        userdb.tebakgambar = false;
        delete tebakgambar[m.sender.split('@')[0]];
    }
break;
//=================================================//
case 'tebakkata':
if (isBan) return reply(mess.banned)
dellimit()
        if (userdb.tebakkata === true) return reply("Ada soal yang belum terjawab.");
        const anuvd9 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json');
        const result99 = anuvd9[Math.floor(Math.random() * anuvd9.length)];
    afr.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result99.soal}\nWaktu : 60s`, m).then(() => {
    tebakkata[m.sender.split('@')[0]] = result99.jawaban.toLowerCase();
    });
    userdb.jawaban = result99.jawaban
    userdb.tebakkata = true
    userdb.game = true
    console.log("Jawaban: " + result99.jawaban);
    await sleep(60000);
    if (userdb.tebakkata === false) return 
    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
    afr.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m);
    userdb.tebakkata = false
    userdb.game = false
    delete tebakkata[m.sender.split('@')[0]];
    }
break
//=================================================//
case 'tebakkalimat':
if (isBan) return reply(mess.banned)
dellimit()
    if (userdb.tebakkalimat === true) return reply("Ada soal yang belum terjawab.");
    let anuka = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json');
    let result09 = anuka[Math.floor(Math.random() * anuka.length)];
        afr.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result09.soal}\nWaktu : 60s`, m).then(() => {
        tebakkalimat[m.sender.split('@')[0]] = result09.jawaban.toLowerCase();
        });
        userdb.jawaban = result09.jawaban
        userdb.tebakkalimat = true
        userdb.game = true
        console.log("Jawaban: " + result09.jawaban);
        await sleep(60000);
        if (userdb.tebakkalimat === false) return 
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
        afr.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m);
        userdb.tebakkalimat = false
        userdb.game = false
        delete tebakkalimat[m.sender.split('@')[0]];
        }
break
//=================================================//
case 'tebaklirik':
if (isBan) return reply(mess.banned)
dellimit()
        if (userdb.tebaklirik === true) return reply("Ada soal yang belum terjawab.");
        let anuoo = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json');
        let result098 = anuoo[Math.floor(Math.random() * anuoo.length)];
            afr.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result098.soal}*?\nWaktu : 60s`, m).then(() => {
            tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
            });
            userdb.jawaban = result098.jawaban
            userdb.tebaklirik = true
            userdb.game = true
            console.log("Jawaban: " + result098.jawaban);
            await sleep(60000);
            if (userdb.tebaklirik === false) return 
            if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
            afr.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m);
            userdb.tebaklirik = false
            userdb.game = false
            delete tebaklirik[m.sender.split('@')[0]];
            }
break
//=================================================//
case 'tebaktebakan':
if (isBan) return reply(mess.banned)
dellimit()
if (userdb.tebaktebakan === true) return reply("Ada soal yang belum terjawab.");
try {
let anubvb = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json');
let result77 = anubvb[Math.floor(Math.random() * anubvb.length)];
afr.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result77.soal}*?\nWaktu : 60s`, m).then(() => {
tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
const jawabnyuhbh = result77.jawaban
userdb.jawaban = jawabnyuhbh.charAt(0).toLowerCase() + jawabnyuhbh.slice(1);
userdb.tebaktebakan = true
userdb.game = true
console.log("Jawaban: " + result77.jawaban);
await sleep(60000);
if (userdb.tebaktebakan === false) return 
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebaktebakan = false
userdb.game = false
afr.sendText(m.chat, `Waktu Habis\nJawaban: ${userdb.jawaban}`, m);
delete tebaktebakan[m.sender.split('@')[0]];
}
} catch (e) {
reply(util.format(e))
}
break
//=================================================//
case 'tebakkimia':
if (isBan) return reply(mess.banned)
dellimit()
if (userdb.tebakkimia === true) return reply("Ada soal yang belum terjawab.");
let anucro = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json');
let resultkon = anucro[Math.floor(Math.random() * anucro.length)];
afr.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${resultkon.unsur}\nWaktu : 60s`, m).then(() => {
tebakkimia[m.sender.split('@')[0]] = resultkon.lambang.toLowerCase();
});
const jawabnyuhbhvv = resultkon.lambang
userdb.jawaban = jawabnyuhbhvv.charAt(0).toLowerCase() + jawabnyuhbhvv.slice(1);
userdb.tebakkimia = true
userdb.game = true
console.log("Jawaban: " + resultkon.lambang);
await sleep(60000);
if (userdb.tebakkimia === false) return 
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebakkimia = false
userdb.game = false
afr.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m);
delete tebakkimia[m.sender.split('@')[0]];
}
break
//=================================================//
case 'tekateki':
case 'tebaktekateki':
if (isBan) return reply(mess.banned)
dellimit()
if (userdb.tebaktekateki === true) return reply("Ada soal yang belum terjawab.");
let anukontolid = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json');
let resultkontil = anukontolid[Math.floor(Math.random() * anukontolid.length)];
afr.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${resultkontil.soal}\nWaktu : 60s`, m).then(() => {
tebaktekateki[m.sender.split('@')[0]] = resultkontil.jawaban.toLowerCase();
});
const jawabnyuhbhvvvv = resultkontil.jawaban
userdb.jawaban = jawabnyuhbhvvvv.charAt(0).toLowerCase() + jawabnyuhbhvvvv.slice(1);
userdb.tebaktekateki = true
userdb.game = true
console.log("Jawaban: " + resultkontil.jawaban);
await sleep(60000);
if (userdb.tebaktekateki === false) return 
if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebaktekateki = false
userdb.game = false
afr.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m);
delete tebaktekateki[m.sender.split('@')[0]];
}
break
//=================================================//
case 'susunkata':
case 'tebaksusunkata':
if (isBan) return reply(mess.banned)
dellimit()
if (userdb.tebaksusunkata === true) return reply("Ada soal yang belum terjawab.");
let anu018 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json');
let result01012 = anu018[Math.floor(Math.random() * anu018.length)];
afr.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result01012.soal}\nTipe : ${result01012.tipe}\nWaktu : 60s`, m).then(() => {
tebaksusunkata[m.sender.split('@')[0]] = result01012.jawaban.toLowerCase();
});
const jawabnyuhbhvvvvc = result01012.jawaban
userdb.jawaban = jawabnyuhbhvvvvc
userdb.tebaksusunkata = true
userdb.game = true
console.log("Jawaban: " + result01012.jawaban);
await sleep(60000);
if (userdb.tebbaksusunkata === false) return
if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebbaksusunkata = false
userdb.game = false
afr.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m);
delete tebaksusunkata[m.sender.split('@')[0]];
}
break
//=================================================//
case 'siapakahaku':
case 'tebaksiapaaku':
if (isBan) return reply(mess.banned)
dellimit()
if (userdb.tebaksiapaaku === true) return reply("Ada soal yang belum terjawab.");
let anufujo0 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json');
let resultanaka = anufujo0[Math.floor(Math.random() * anufujo0.length)];
afr.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${resultanaka.soal}\nWaktu : 60s`, m).then(() => {
tebaksiapakahaku[m.sender.split('@')[0]] = resultanaka.jawaban.toLowerCase();
});
const jawabnyuhbhvvvvc0 = resultanaka.jawaban
userdb.jawaban = jawabnyuhbhvvvvc0.charAt(0).toLowerCase() + jawabnyuhbhvvvvc0.slice(1);
userdb.tebaksiapaaku = true
userdb.game = true
console.log("Jawaban: " + resultanaka.jawaban);
await sleep(60000);
if (userdb.tebaksiapaaku === false) return
if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebaksiapaaku = false
userdb.game = false
afr.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m);
delete tebaksiapakahaku[m.sender.split('@')[0]];
}
break
//=================================================//
case 'asahotak':
case 'tebakasahotak':
if (isBan) return reply(mess.banned)
dellimit()
if (userdb.tebakasahotak === true) return reply("Ada soal yang belum terjawab.");
let anuxxx1 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json');
let resultomeg1 = anuxxx1[Math.floor(Math.random() * anuxxx1.length)];
afr.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${resultomeg1.soal}\nWaktu : 60s`, m).then(() => {
tebakasahotak[m.sender.split('@')[0]] = resultomeg1.jawaban.toLowerCase();
});
const jawabnyuhbhvvvvc00 = resultomeg1.jawaban
userdb.jawaban = jawabnyuhbhvvvvc00.charAt(0).toLowerCase() + jawabnyuhbhvvvvc00.slice(1);
userdb.tebakasahotak = true
userdb.game = true
console.log("Jawaban: " + resultomeg1.jawaban);
await sleep(60000);
if (userdb.tebakasahotak === false) return
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebakasahotak = false
userdb.game = false
afr.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m);
delete tebakasahotak[m.sender.split('@')[0]];
}
break
//=================================================//
            case 'kuismath': 
            case 'math': {
            if (isBan) return reply(mess.banned)
            if (!isPremium && userdb.limit < 1) return reply(mess.limit)
                userdb.limit -= 1
            if (userdb.kuismath === true) return reply("Ada soal yang belum terjawab.");
            let { genMath, modes } = require('./lib/math.js')
                if (!txt) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
                let resultmathjs = await genMath(txt.toLowerCase())
                afr.sendText(m.chat, `*Berapa hasil dari: ${resultmathjs.soal.toLowerCase()}*?\n\nWaktu: 20 detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = resultmathjs.jawaban
                })
                console.log("Jawaban: " + resultmathjs.jawaban)
                userdb.jawaban = `${resultmathjs.jawaban}`
                userdb.kuismath = true
                await sleep(20000)
                if (userdb.kuismath === false) return
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    userdb.kuismath = false
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break   
//=================================================//
case 'caklontong':
if (isBan) return reply(mess.banned)
dellimit()
   if (userdb.caklontong === true) return reply("Jawab dulu yang tadi")
 let anucaklontong = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let fetchcaklont = anucaklontong[Math.floor(Math.random() * anucaklontong.length)]
 userdb.game = true
 afr.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n*${fetchcaklont.soal}*\nWaktu : 2 menit`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = fetchcaklont.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = fetchcaklont.deskripsi
 })
 console.log("Jawaban: " + fetchcaklont.jawaban)
 userdb.caklontong = true
 userdb.jawaban = fetchcaklont.jawaban.toLowerCase()
 await sleep(60000)
  if (userdb.caklontong === false) return
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 userdb.game = false
 afr.sendMessage(m.chat, {text: `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik .caklontong`}, {quoted: m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
break;
//=================================================//
case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return reply(mess.banned)
dellimit()
 let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
reply('Partner ditemukan!')
room.o = from
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
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await afr.sendText(room.x, str, m, { mentions: parseMention(str) } )
await afr.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
//=================================================//
case 'delttc': case 'delttt': {
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) reply(`Kamu sedang tidak berada di room tictactoe !`)
delete this.game[roomnya.id]
reply(`Berhasil delete session room tictactoe !`)
}
break
//=================================================//
case 'suitpvp': case 'suit': {
if (isBan) return reply(mess.banned)
dellimit()
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await afr.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) afr.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//=================================================//
case 'sticker':
case 'stiker':
case 's': {
    if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`);

    if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await afr.sendImageAsSticker(m.chat, media, m, {
            packname: global.packname,
            author: global.author
        });
        await fs.unlinkSync(encmedia);
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!');
        let media = await quoted.download();
        let encmedia = await afr.sendVideoAsSticker(m.chat, media, m, {
            packname: global.packname,
            author: global.author
        });
        await fs.unlinkSync(encmedia);
    } else {
        return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`);
    }
}
break 
//=================================================//
case 'smeme': {
    let respond = `Send/Reply image with caption ${prefix + command} txt-bawah|txt-atas`;
    if (!/image/.test(mime)) return m.reply(respond);
    if (!txt) return m.reply(respond);

    m.reply(mess.wait);
    const atas = txt.split('|')[0] ? txt.split('|')[0] : '';
    const bawah = txt.split('|')[1] ? txt.split('|')[1] : '';
    
    let dwnld = await afr.downloadAndSaveMediaMessage(qmsg);
    let fatGans = await uploadToCatbox(dwnld);
    let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`;
    
    let pop = await afr.sendImageAsSticker(m.chat, smeme, m, {
        packname: packname,
        author: author
    });
    fs.unlinkSync(pop);
}
break
//=================================================//
case 'brat': {
    let text;

    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return m.reply("Input teks atau reply teks yang ingin dijadikan brat!");
    }

    if (!txt) {
        return m.reply(`Penggunaan: ${prefix + command} <teks>`);
    }

    let ngawiStik = await getBuffer(`https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(txt)}`);
    await afr.sendImageAsSticker(m.chat, ngawiStik, m, {
        packname: `𓄯ִ ── ꯭𐑈ƚꪱִ𝖼𝗄ᧉׄ𝗋 ᎓`,
        author: `${pushname}\n\n\n\n\n\n\n\n\n\ncredit: ${global.botname}\nCreated: ${hariini}\n${time2}`
    });
}
break;
//=================================================//
case 'wm': {
if (isBan) return reply(mess.banned)
let teks = `${txt}`
try {
 if (!quoted) reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await afr.sendImageAsSticker(m.chat, media, m, { packname: `${teks}`, author: `` })
await fs.unlinkSync(encmedia)
}
} catch (e) {
reply(mess.error)
console.error(e)
}
}
break
//=================================================//
case 'wmvideo': {
if (isBan) return reply(mess.banned)
let teks = `${txt}`
try {
 if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await afr.sendVideoAsSticker(m.chat, media, m, { packname: `${teks}`, author: `` })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
} catch (e) {
reply(mess.error)
}
}
break
//=================================================//
case 'emojimix': { 
if (isBan) return reply(mess.banned)
 let [emoji1, emoji2] = txt.split`+`
if (!emoji1) reply(`Example : ${prefix + command} 😅+🤔`) 
if (!emoji2) reply(`Example : ${prefix + command} 😅+🤔`) 

let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await afr.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) return reply(mess.banned)
 if (!txt) reply(`Example : ${prefix + command} 😅`)
 
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(txt)}`)
for (let res of anu.results) {
let encmedia = await afr.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'tt':
case 'tiktok':
case 'tiktokdl': {
    let text;
    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return m.reply("Input URL atau Reply URL tiktok yang ingin di download!");
    }

    await afr.sendMessage(m.chat, { react: { text: "🕐", key: m.key } });

    let old = new Date();
    let tanaka = await tiktokdl(text);
    
    await afr.sendMessage(m.chat, { 
        video: { url: tanaka.hdplay }, 
        caption: tanaka.title 
    }, { quoted: m });
}
break; 
//=================================================//
case 'tiktoksearch':
case 'ttsearch': {
    if (!txt) return m.reply(`• *Example :* .${command} jedag jedug`);
    
    afr.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
    
    let lily = await tiktoksearch(`${txt}`);
    await afr.sendMessage(m.key.remoteJid, {
    video: { url: lily.media[0].no_watermark },
    caption: lily.title,
    footer: global.namebot, 
    buttons: [{
            buttonId: `${prefix}ttsearch ${txt}`,
            buttonText: {
                displayText: 'NEXT'
            },
            type: 1
        }
    ],
    headerType: 1,
    viewOnce: true
}, { quoted: m });
}
break
//=================================================//
case 'instagram': 
case 'igdl': 
case 'ig': 
case 'igvideo': 
case 'igimage': 
case 'igvid': 
case 'igimg': {
	  if (!txt) return reply(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    let res = await igdl(txt)
    await afr.sendFile(m.chat, `${res.data[0].url}`, '', mess.done, m)
  } catch (error) {
    return reply(`An error occurred: ${error.message}`)
  }
}
break
//=================================================//
case 'facebok': case 'fb':
if (isBan) return reply(mess.banned)
if (!txt) return reply(`Link?`)

try {
let res = await fbdl(txt);
let cap = `🍂 Done... Res: 720p`
afr.sendMessage(m.chat, { video: { url: res.data[0].url }, caption: cap })
} catch (e) {
reply(mess.error)
}
break
//=================================================//
case 'play': {
if (isBan) return reply(mess.banned)
if (!txt) return reply(`Example: ${prefix + command} bad - wave to earth`)

let ress = await yts(txt)
let url = ress.all;
let result = url[Math.floor(Math.random() * url.length)];
let res = await ytmp3(result.url);
        await afr.sendMessage(m.chat, { audio: {url: res.audio},
            mimetype: 'audio/mp4',
            fileName: res.title,
            contextInfo: {
                mentionedJid: [
                    m.sender
                ],
                forwardingScore: 10,
                isForwarded: true,
                externalAdReply: {
                    showAdAttribution: true,
                    title: res.title,
                    body: `Upload: ${res.upload}`,
                    thumbnailUrl: res.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    mediaUrl: txt,
                    sourceUrl: `https://whatsapp.com/channel/0029Vajf99IKbYMLNn7qKS3i`,
                },
            },
        }, { quoted: m });
}
break
//=================================================//
case 'ytmp3': {
    if (!txt) return m.reply("Linknya?");
    await afr.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
    try {
        let res = await ytmp3(txt);
        await afr.sendMessage(m.chat, { audio: {url: res.audio},
            mimetype: 'audio/mp4',
            fileName: res.title,
            contextInfo: {
                mentionedJid: [
                    m.sender
                ],
                forwardingScore: 10,
                isForwarded: true,
                externalAdReply: {
                    showAdAttribution: true,
                    title: res.title,
                    body: `Upload: ${res.upload}`,
                    thumbnailUrl: res.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    mediaUrl: txt,
                    sourceUrl: txt,
                },
            },
        }, { quoted: m });
        } catch (error) {
        m.reply("Terjadi kesalahan, coba lagi nanti!");
        console.error(error); 
        }
        await afr.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
        }
        break
//=================================================//
            case 'ytmp4':
            if (isBan) return reply(mess.banned)
			if (!txt) return reply(`Example: ${prefix + command} link lu`)
			
			try {
			let ytmp4api = 
			await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${global.lolkey}&url=${txt}`).then(result => result.json())
			const hytmp4 = ytmp4api.result
			
			await afr.sendMessage(m.chat, { video: { url: hytmp4.link, caption: 'YouTube MP4' } }, { quoted:m })
			dellimit() 
			} catch (error) {
                reply(mess.error);
                console.error(error); 
            }
			break
//=================================================//
case 'addlist':
    if (!m.isGroup) return reply(mess.group)
    if (!isAdmins) return reply(mess.admin)
        var args1 = q.split("|")[0].toLowerCase()
        var args2 = q.split("|")[1]
            if (!q.includes("|")) return reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
            if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (/image/.test(mime)) {
            let media = await afr.downloadAndSaveMediaMessage(quoted)
            const fd = new FormData();
            fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
            fetch('https://i.supa.codes/api/upload', {
            method: 'POST',
            body: fd
            }).then(res => res.json())
            .then((json) => {
            addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
            reply(`Sukses set list message dengan key : *${args1}*`)
            if (fs.existsSync(media)) fs.unlinkSync(media)
            })
            } else {
            addResponList(m.chat, args1, args2, false, '-', db_respon_list)
            reply(`Sukses set list message dengan key : *${args1}*`)
            }
break
//=================================================//
case 'list': case 'ceklist': {
    if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
    if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
        let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
        for (let i of db_respon_list) {
        if (i.id === m.chat) {
        teks += `- ${i.key.toUpperCase()}\n`
        }
        }
        teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} kepada bot`
        afr.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break
//=================================================//
case 'dellist':
    if (!m.isGroup) return reply(messs.group)
    if (!isAdmins) return reply(mess.admin) 
        if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            if (!txt) return reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
            if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
            delResponList(m.chat, q.toLowerCase(), db_respon_list)
            reply(`Sukses delete list message dengan key *${q}*`)
break
//=================================================//
case 'updatelist': case 'uplist':
    if (!m.isGroup) return reply(mess.group) 
    if (!isAdmins) return reply(mess.admin)
        var args1 = q.split("|")[0].toLowerCase()
        var args2 = q.split("|")[1]
            if (!q.includes("|")) return reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
            if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (/image/.test(mime)) {
            let media = await afr.downloadAndSaveMediaMessage(quoted)
            const fd = new FormData();
            fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
            fetch('https://i.supa.codes/api/upload', {
            method: 'POST',
            body: fd
            }).then(res => res.json())
            .then((json) => {
            updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
            reply(`Sukses update respon list dengan key *${args1}*`)
            if (fs.existsSync(media)) fs.unlinkSync(media)
            })
            } else {
            updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
            reply(`Sukses update respon list dengan key *${args1}*`)
            }
break
//=================================================//
case 'tambah': {
    if (!txt.includes('+')) return reply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
        arg = args.join(' ')
        atas = arg.split('+')[0]
        bawah = arg.split('+')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
                reply(`${nilai_one + nilai_two}`)}
break
//=================================================//
case 'kurang': {
    if (!txt.includes('-')) return reply(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
        arg = args.join(' ')
        atas1 = arg.split('-')[0]
        bawah1 = arg.split('-')[1]
            var nilai_one1 = Number(atas1)
            var nilai_two1 = Number(bawah1)
        reply(`${nilai_one1 - nilai_two1}`)}
break
//=================================================//
case 'kali': {
    if (!txt.includes('*')) return reply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
        arg = args.join(' ')
        atas2 = arg.split('*')[0]
        bawah2 = arg.split('*')[1]
            var nilai_one2 = Number(atas2)
            var nilai_two2 = Number(bawah2)
        reply(`${nilai_one2 * nilai_two2}`)}
break
//=================================================//
case 'bagi': {
    if (!txt.includes('/')) return reply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
        arg = args.join(' ')
        atas3 = arg.split('/')[0]
        bawah3 = arg.split('/')[1]
            var nilai_one3 = Number(atas3)
            var nilai_two3 = Number(bawah3)
        reply(`${nilai_one3 / nilai_two3}`)}
break
//=================================================//
                // V E R S I O N   2
                    // FITUR V2
                // V E R S I O N   2
//=================================================//
        case 'self':
            if (!isCreator) return m.reply(mess.owner)
            afr.public = false
        reply("sukses self bot")
        break
//=================================================//
                case 'public':
                    if (!isCreator) return m.reply(mess.owner)
                    afr.public = true
                reply("suskes public bot")
                break
//=================================================//
case 'lb':
case 'leaderboard': {
let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedBalance = users.map(toNumber('balance')).sort(sort('balance'))
  let usersBalance = sortedBalance.map(enumGetKey)
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let usersLevel = sortedLevel.map(enumGetKey)
  let len = args[0] && args[0].length > 0 ? Math.min(10, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedLevel.length)
  let text = `    • *Balance Leaderboard Top ${len}* •
Kamu: *${usersBalance.indexOf(m.sender) + 1}* dari *${usersBalance.length}*

${sortedBalance.slice(0, len).map(({ jid, balance }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${afr.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Balance ${balance}*`).join`\n`}

    • *Level Leaderboard Top ${len}* •
Kamu: *${usersLevel.indexOf(m.sender) + 1}* dari *${usersLevel.length}*

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${afr.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Level ${level}*`).join`\n`}`.trim()
reply(text)
}
break
//=================================================//
case 'resetlimit': {
if (!isCreator) return reply(mess.owner)
let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 20 : isNumber(args[0]) ? parseInt(args[0]) : 20
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		afr.sendMessage(m.chat, {text: `*🕊️ Limit berhasil direset ${lim} / user*`}, { quoted: m })
		}
break
//=================================================//
case 'addlimit': {
if (!isCreator) return reply(mess.owner)
if (!txt) return reply('Masukkan Jumlah Limit Yang Akan Diberi')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag Orangnya'
    let txt = txt.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya Angka'
    let poin = parseInt(txt)
    let limit = poin
    if (limit < 1) throw 'Minimal 1'
    let user = global.db.data.users
    user[who].limit += poin
    if (limit > 9999999) return reply('Jangan Terlalu Banyak') 
    afr.sendMessage(m.chat, {text: `Selamat @${who.split`@`[0]}. Kamu Mendapatkan +${poin} Limit!`}, {quoted:m})
    }
break
//=================================================//
case 'creategc': case 'creategroup': {
if (!isCreator) return reply(mess.owner)
if (!args.join(" ")) return reply(`Use ${prefix + command} groupname`)
try {
let cret = await afr.groupCreate(args.join(" "), [])
let response = await afr.groupInviteCode(cret.id)
teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}

https://chat.whatsapp.com/${response}
`
afr.sendMessage(m.chat, { text:teks, mentions: await afr.parseMention(teks)}, {quoted:m})
} catch {
reply("Error!")
}
}
break
//=================================================//
case 'totag': {
if (!m.isGroup) return reply(mess.group) 
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
               if (!m.quoted) return reply(`Reply message with caption ${prefix + command}`)
               afr.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
//=================================================//
case 'opentime': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(messa.adminbot)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
afr.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}
break
//=================================================//
case 'closetime': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(messa.adminbot)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
afr.groupSettingUpdate(m.chat, 'announcement')
reply(close)
}, timer)
}
break
//=================================================//
            case 'rate': {
            	if (!txt) return reply(`Example : ${prefix + command} kegantengan ku`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${txt}*\nAnswer : ${kah}%`                
            await reply(jawab)
            }
            break
//=================================================//
            case 'gantengcek':
            case 'cekganteng': {
                if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
                const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const teng = gan[Math.floor(Math.random() * gan.length)]
                reply(`Nama : ${q}\nJawaban : *${teng}%`)
                }
            break
//=================================================//
            case 'cantikcek':
            case 'cekcantik': {
                if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
                const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const tik = can[Math.floor(Math.random() * can.length)]
                reply(`Nama : ${q}\nJawaban : *${tik}%`)
                }
            break
//=================================================//
            case 'sangecek':
            case 'ceksange':
            case 'gaycek':
            case 'cekgay':
            case 'lesbicek':
            case 'ceklesbi': 
            case 'tololcek':
            case 'cektolol':
            case 'pintarcek':
            case 'cekpintar': {
                if (!txt) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
                const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                reply(`Nama : ${txt}\nJawaban : *${sange}%*`)
                }
            break
//=================================================//
            case 'wangy': {
                if (!q) return reply(`Contoh : .wangy kingkong`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                afr.sendMessage(m.chat, { text: awikwok }, { quoted: m })
                }
            break
//=================================================//
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                if (!m.quoted && !txt) return reply(`Kirim/reply text dengan caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
            break
//=================================================//
case 'git': case 'gitclone':
if (isBan) return reply(mess.banned)
dellimit()
                if (!args[0]) return reply(`Mana link nya?`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)                
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                afr.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
            .catch(console.error)
            break
//=================================================//
case 'ai':
case 'luminai':
   if (!txt) return reply(`mau nanya apa?`) 
var kolbekai = await fetchJson(`https://afr-team.biz.id/ai/luminai?text=${txt}`)
			      var airespon = kolbekai.result
           let Fue = "`"
         await reply (`*${Fue}[ ${command} ]${Fue}*\n\n${airespon}`)
        break
//=================================================//
case 'fajar':
if (isBan) return reply(mess.banned)
dellimit()
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'cnn':
if (isBan) return reply(mess.banned)
dellimit()
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca':
if (isBan) return reply(mess.banned)
dellimit()
if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc':
if (isBan) return reply(mess.banned)
dellimit()
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
afr.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'tribun':
if (isBan) return reply(mess.banned)
dellimit()
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
afr.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'indozone':
if (isBan) return reply(mess.banned)
dellimit()

IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
afr.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'kompas':
if (isBan) return reply(mess.banned)
dellimit()
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
afr.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'detik':
if (isBan) return reply(mess.banned)
dellimit()
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
afr.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'daily':
if (isBan) return reply(mess.banned)
dellimit()
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
afr.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'inews':
if (isBan) return reply(mess.banned)
dellimit()
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone':
if (isBan) return reply(mess.banned)
dellimit()
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
afr.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'sindo':
if (isBan) return reply(mess.banned)
dellimit()
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo':
if (isBan) return reply(mess.banned)
dellimit()
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
afr.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'antara':
if (isBan) return reply(mess.banned)
dellimit()
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
afr.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'kontan':
if (isBan) return reply(mess.banned)
dellimit()

KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
afr.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'merdeka':
if (isBan) return reply(mess.banned)
dellimit()
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
afr.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'jalantikus':
case 'jalantikus-meme':
if (isBan) return reply(mess.banned)
dellimit()
var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
afr.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break
//=================================================//
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} udin`) 
 let anu = await primbon.tafsir_mimpi(txt)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} Agus, 7, 7, 2005, Putri, 16, 11, 2004`)
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = txt.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} agus`)
 let anu = await primbon.arti_nama(txt)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} Agus, 7, 7, 2005`)
 let [nama, tgl, bln, thn] = txt.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} agus|Putri`) 
 let [nama1, nama2] = txt.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return reply(anu.message)
 afr.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} 6, 12, 2020`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!ext)reply(`Example : ${prefix+ command} 28, 12, 2021`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} 7, 7, 2005`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} 7, 7, 2005`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : 7, 7, 2005`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} 7, 7, 2005`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} 7, 7, 2005`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} agus, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
 let [nama, gender, tahun] = txt.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} 7, 7, 2005`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} 7, 7, 2005`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} 7, 7, 2005`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} 7, 7, 2005`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} 7, 7, 2005`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} agus, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`) 
 let [nama, tgl, bln, thn, untuk] = txt.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} 7, 7, 2005`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} agus, 7, 7, 2005`) 
 let [nama, tgl, bln, thn] = txt.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} agus, 7, 7, 2005`) 
 let [nama, tgl, bln, thn] = txt.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} 12, 1, 2022`) 
 let [tgl, bln, thn] = txt.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (isBan) return reply(mess.banned)
dellimit()
 if (!txt) reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`) 
 let [tgl, bln, thn, siklus] = txt.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
if (isBan) return reply(mess.banned)
dellimit()

 if (!txt) reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`) 
 let anu = await primbon.shio(txt)
 if (anu.status == false) return reply(anu.message)
 afr.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================//
case 'jodoh': {
if (!m.isGroup) return
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ""
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            subtitle: "",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"😳","id":""}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [me, jodoh], 
                  forwardingScore: 999,
                  isForwarded: false
                }
        })
    }
  }
}, {})

await afr.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
//=================================================//
                // V E R S I O N   3
                    // FITUR V3
                // V E R S I O N   3
//=================================================//
        case 'elaina':
        case 'naruto':
        case 'boruto':
        case 'asuna':
        case 'nezuko':
        case 'akira':
        case 'akiyama':
        case 'kagura':
        case 'chiho':
        case 'chitoge':
        case 'deidara':
        case 'hinata':
        case 'inori':
        case 'itachi':
        case 'kaori':
        case 'kurumi':
        case 'mikasa':
        case 'sakura':
        case 'sasuke':
        case 'ayuzawa': {
        dellimit()
        
            await afr.sendFile(m.chat, `https://afr-team.biz.id/anime/${command}`, null, mess.done, m)
        }
        break
//=================================================//
                case 'truth':
                case 'dare': {
                        const daortr = await fetch(`https://afr-team.biz.id/game/${command}`).then(result => result.json())

                let truorda =`──「 *${command}* 」──\n\n${daortr.soal}`
                reply(truorda)
                }
                break
//=================================================//
    case 'bts':
    case 'blackpink':
    case 'darkjokes':
    case 'exo':
    case 'husbu':
    case 'waifu':
    case 'neko': {
    dellimit()
           await afr.sendFile(m.chat, `https://afr-team.biz.id/random/${command}`, null, mess.done, m)
        }
    break
//=================================================//        
                case 'bluearchive':
                case 'ba':
                dellimit()
                    await afr.sendFile(m.chat, `https://afr-team.biz.id/random/ba`, null, mess.done, m)
                break
//=================================================//        
        case 'pantun':
                const resp = await fetch(`https://afr-team.biz.id/random/pantun`).then(result => result.json())

        let ntun =`\`[ PANTUN ]\`\n\n${resp.pantun}`
        reply(ntun)
        break
//=================================================//
case 'quotes':
{
    const resq = await fetch(`https://afr-team.biz.id/random/quotes`).then(result => result.json())
let otes =`\`[ QUOTES ]\`

${resq.result.quotes}`
    reply(otes)
}
break        
//=================================================//
//💬 *UPCH SUPPORT ALL MEDIA + COOLDOWN SYSTEM (Case)*
//👤 by afr (DEV)
//> OFFICIAL SALURAN: https://whatsapp.com/channel/0029Vb2yuC8Lo4hXBVm0UD1p
case 'upch': {
    if (!isCreator) return reply(mess.owner)
    try {
        // [1] Baca database penggunaan
        
        // kalau mau ada cooldown hapus dari /* sampai */
        /*let upchUsage = {}
        try {
            upchUsage = JSON.parse(fs.readFileSync('./database/upchUsage.json'))
        } catch {
            fs.writeFileSync('./database/upchUsage.json', '{}')
        }

        // [2] Cooldown System
        onconst lastUsed = upchUsage[m.sender] || 0
        const cooldown = 24 * 60 * 60 * 1000 // 24 jam
        const remainingTime = cooldown - (Date.now() - lastUsed)

        if (remainingTime > 0) {
            const hours = Math.floor(remainingTime / (1000 * 60 * 60))
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
            return reply(`⏳ *Cooldown Active!*\nKamu bisa menggunakan fitur ini lagi dalam *${hours} jam ${minutes} menit*`)
        }

        // [3] Update waktu penggunaan terakhir
        upchUsage[m.sender] = Date.now()
        fs.writeFileSync('./database/upchUsage.json', JSON.stringify(upchUsage, null, 2))*/

        // [4] Handle Text dan Media
        try {
            ppuser = await afr.profilePictureUrl(m.sender, 'image')
        } catch (err) {
            ppuser = 'https://files.catbox.moe/j9k007.jpg'
        }
        let fotoProfil = await getBuffer(ppuser)
        let pelers = `Message from ${m.pushName}`
        
        // [PERUBAHAN PENTING] Logic text diutamakan
        const media = mime ? await quoted.download() : null
        const textMessage = text ? text : "✨ Pesan dikirim via bot ✨"

        if (/image/.test(mime)) {
            await afr.sendMessage(global.idch, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: pelers,
                        mediaType: 1,
                        previewType: 1,
                        body: 'Massage to channel',
                        thumbnail: fotoProfil,
                        renderLargerThumbnail: false,
                        mediaUrl: '',
                        souceUrl: 'https://whatsapp.com/channel/0029Vajf99IKbYMLNn7qKS3i'
                    }
                },
                image: media,
                caption: textMessage // Text sebagai caption
            })
            reply(`✅ Gambar + Text berhasil diupload!`)
        
        } else if (/video/.test(mime)) {
            await afr.sendMessage(global.idch, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: pelers,
                        mediaType: 1,
                        previewType: 1,
                        body: 'Massage to channel',
                        thumbnail: fotoProfil,
                        renderLargerThumbnail: false,
                        mediaUrl: '',
                        souceUrl: 'https://whatsapp.com/channel/0029Vajf99IKbYMLNn7qKS3i'
                    }
                },
                video: media,
                caption: textMessage // Text sebagai caption
            })
            reply(`✅ Video + Text berhasil diupload!`)
        
        } else if (/audio/.test(mime)) {
            await afr.sendMessage(global.idch, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: pelers,
                        mediaType: 1,
                        previewType: 1,
                        body: 'Massage to channel',
                        thumbnail: fotoProfil,
                        renderLargerThumbnail: false,
                        mediaUrl: '',
                        souceUrl: 'https://whatsapp.com/channel/0029Vajf99IKbYMLNn7qKS3i'
                    }
                },
                audio: media,
                mimetype: mime,
                ptt: true,
                caption: textMessage // Text sebagai caption untuk audio
            })
            reply(`✅ Audio + Text berhasil dikirim!`)
        
        } else if (text) { // [FIX] Handle text-only
            await afr.sendMessage(global.idch, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: pelers,
                        mediaType: 1,
                        previewType: 1,
                        body: 'Massage to channel',
                        thumbnail: fotoProfil,
                        renderLargerThumbnail: false,
                        mediaUrl: '',
                        souceUrl: 'https://whatsapp.com/channel/0029Vajf99IKbYMLNn7qKS3i'
                    }
                },
                text: textMessage // Text utama
            })
            reply(`✅ Text berhasil dikirim!\n✉️ Pesan: "${text}"`)
        
        } else {
            reply(`❌ Harap sertakan media ATAU text!`)
        }

    } catch (error) {
        console.error('Upch Error:', error)
        reply(`🚨 Gagal mengirim! Error: ${error.message}`)
    } 
}
break
//=================================================//
case 'pin':
case 'pinterest': {
    if (!txt) reply('apa yang ingin kamu cari');
    try {
    let response = await fetch(`https://afr-team.biz.id/search/pinterest?q=${txt}`);
      let data = await response.json();
      if (!data.result || data.result.length === 0) throw 'Tidak ada hasil ditemukan.';
      let i = Math.floor(Math.random() * data.result.length);
        let hasil = data.result[i];

        afr.sendFile(m.chat, hasil.imageUrl, null, hasil.link, m);
    } catch (e) {
    reply(mess.error)
    console.error(e)
    }
}
break;
//=================================================//
    case 'latukam':
   if (!txt) return reply(`mau nanya apa?`) 
        var latukamai = await fetchJson(`https://api.siputzx.my.id/api/ai/latukam?content=${txt}`)
			      var latures = latukamai.data
         await reply (`${latures}`)
    break
//=================================================//
case 'hd':
case 'remini':
case 'hdfree': {
if (!/image/.test(mime)) return reply(`Kirim/Reply Image/Gambar Yang Ingin Di Enchance !!`)
dellimit()
const meks = await quoted.download()
const proses = await remini(meks, "enhance");
afr.sendMessage(m.chat, {image: proses, mimetype: 'image/png'}, {quoted:m})
}
break
//=================================================//
case 'blok':
case 'block': {
if (!isCreator) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await afr.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'unblok':
case 'unblock': {
if (!isCreator) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await afr.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'qc': {
    if (!txt) return reply(`Contoh: ${prefix + command} halo sayang\n\nMax 25 text`)
let teks = m.quoted ? quoted.text : txt
    try {
        try {
    pic = await afr.profilePictureUrl(m.sender, 'image')
        } catch {
    pic = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
         }
         const obj = {
            "type": "quote",
            "format": "png",
            "backgroundColor": "#FFFFFF",
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
               "entities": [],
               "avatar": true,
               "from": {
                  "id": 1,
                  "name": pushname,
                  "photo": {
                     "url": ppuser
                  }
               },
               "text": teks,
               "replyMessage": {}
            }]
         }
         const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
            headers: {
               'Content-Type': 'application/json'
            }
         })
    const buffer = Buffer.from(json.data.result.image, 'base64') 
        afr.sendImageAsSticker(m.chat, buffer, m, {
                  packname: global.packname , author: global.author
               })
               dellimit()
      } catch (e) {
         console.log(e)
         reply(mess.error)
      }
      }
      break
//=================================================//
case 'translate':
case 'tr': {
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else throw `Ex: ${prefix + command} id hello i am robot`
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return reply(`Error : Bahasa"${lang}" Tidak Support`)
reply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
}
break
//=================================================//
case 'ss': case 'ssweb': {
if (!/^https?:\/\//.test(txt)) return reply('Awali *URL* dengan http:// atau https://')
let krt = await ssweb(txt)
afr.sendMessage(m.chat,{image: krt.result},{quoted:m})
}
break
//=================================================//
case 'kalkulator': {
 val = txt
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return reply('Isinya?')
reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}
break
//=================================================//
case 'jarak': {
var [dari, to] = txt.split`|`
if (!(dari && to)) return reply(`Ex: ${prefix + command} jakarta|bandung`)
var data = await jarak(dari, to)
if (data.img) return afr.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted:m })
else reply(data.desc)
}
break
//=================================================//
 case 'tts': {
     if (!txt) return reply(`[ ! ] .${command} halo world`)
     const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", {
         text: txt,
         voice: "id_001"
     }, {
         headers: {
             Referer: "https://gesserit.co/tiktok",
             "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
             responseType: "arraybuffer"
         }
     })).data
     const b = Buffer.from(a.audioUrl)
     afr.sendMessage(m?.chat, {
         audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
         mimetype: "audio/mpeg"
     }, { quoted:m })
 }
 break
//=================================================// 
 case 'remini2': {
     if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
     if (!/image/.test(mime)) return reply("hanya support gambar")
     let media = await quoted.download()
     const This = await remini2(media, "enhance");
     afr.sendFile(m.chat, This, "", mess.done, m);
 }
 break
//=================================================//
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
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
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                
                let media = await afr.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                afr.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
//=================================================//
case 'toimage': case 'toimg': {
if (isBan) return reply(mess.banned)
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix + command}*`) 
let media = await afr.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
afr.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (isBan) return reply(mess.banned)
if (!quoted) return reply(`Balas sticker video Dengan Caption ${prefix + command}`)
if (/video/.test(mime)) {
let { webp2mp4File } = require('./lib/uploader')
let media = await afr.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await afr.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, {quoted:m})
await fs.unlinkSync(media)
}
}
break
//=================================================//
case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
if (!quoted) return reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`) 
let media = await afr.downloadMediaMessage(quoted)
let audio = await toAudio(media, 'mp4')
afr.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${afr.user.name}.mp3`}, { quoted : m })
}
break
//=================================================//
case 'toaudio': case 'audio': {
if (isBan) return reply(mess.banned)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`) 
if (!quoted) return reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`) 
let media = await afr.downloadMediaMessage(quoted)
let audio = await toAudio(media, 'mp4')
afr.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
//=================================================//
case 'tovn': case 'voice': {
if (isBan) return reply(mess.banned)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`) 
if (!quoted) return reply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`) 
reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let audio = await toPTT(media, 'mp4')
afr.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://whatsapp.com/channel/0029Vajf99IKbYMLNn7qKS3i',
title: global.wm,
sourceUrl: `https://whatsapp.com/channel/0029Vajf99IKbYMLNn7qKS3i`, 
thumbnail: global.thumbnail
}
}})
}
break
//=================================================//
case 'togif': {
if (isBan) return reply(mess.banned)
if (!quoted) return reply('Reply Image') 
if (!/webp/.test(mime)) return reply(`*reply sticker with caption* *${prefix + command}*`) 
 let { webp2mp4File } = require('./lib/uploader')
let media = await afr.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await afr.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
break
//=================================================//
case  'qcstick':{
if (isBan) return reply(mess.banned)
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await afr.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await afr.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await afr.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, 
author: global.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 
//=================================================//
case 'cekasalmember': {
  if (!m.isGroup) return reply(mess.group)
  const participants = await afr.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  reply(replyMessage);
  }
  break
//=================================================//
                  // V E R S I O N   4
                    // FITUR V4
                // V E R S I O N   4
//=================================================//
case 'anonymhacker': case 'aovwall': case 'avatardota': case 'avatarlolnew': case 'birthdaycake': case 'beautifulflower': case 'birthdayday': case 'cartoongravity': case 'fpslogo': case 'freefire': case 'galaxybat': case 'galaxystyle': case 'galaxywallpaper': case 'glittergold': case 'glossychrome': case 'goldplaybutton': case 'greenbush': case 'greenneon': case 'heartshaped': case 'hologram3d': case 'logogaming': case 'lolbanner': case 'luxurygold': case 'metallogo': case 'mlwall': case 'multicolor3d': case 'noeltext': case 'pubgmaskot': case 'royaltext': case 'silverplaybutton': case 'snow3d': case 'textbyname': case 'textcake': case 'watercolor': case 'wetglass': case 'wooden3d': case 'writegalacy': {

    if (!txt) return reply('masukan text')
    dellimit()
    let ephoto = `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${global.lolkey}&text=${txt}`
    
    await afr.sendFile(m.chat, ephoto, '', mess.done, m)
}
break
//=================================================//
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
case 'sound161': {
dellimit()
var resttt = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
    afr.sendMessage(m.chat, { audio: resttt, mimetype: 'audio/mp4', ptt: true }, {quoted:m})
}
break
//=================================================//
case 'cekkhodam': case 'cekkodam': {

    if (!txt) return reply('nama siapa yang mau di cek khodam nya')
	const khodam = pickRandom([
"Kaleng Cat Avian",
"Pipa Rucika",
"King Hitam",
"Lemari dua Pintu",
"Kacang Hijau",
"Kulkas mini",
"Burung beo",
"Air",
"Api",
"Batu",
"Magnet",
"Sempak",
"Botol Tupperware",
"Badut Mixue",
"Sabun GIV",
"Sandal Swallow",
"Jarjit",
"Ijat",
"Fizi",
"Mail",
"Ehsan",
"Upin",
"Ipin",
"sungut lele",
"Tok Dalang",
"Opah",
"Opet",
"Alul",
"Pak Vinsen",
"Maman Resing",
"Pak RT",
"Admin ETI",
"Bung Towel",
"Lumpia Basah",
"Bjorka",
"Hacker",
"Martabak Manis",
"Baso Tahu",
"Tahu Gejrot",
"Dimsum",
"Seblak",
"Aromanis",
"Gelembung sabun",
"Kuda",
"Seblak Ceker",
"Telor Gulung",
"Tahu Aci",
"Tempe Mendoan",
"Nasi Kucing",
"Kue Cubit",
"Tahu Sumedang",
"Nasi Uduk",
"Wedang Ronde",
"Kerupuk Udang",
"Cilok",
"Cilung",
"Kue Sus",
"Jasuke",
"Seblak Makaroni",
"Sate Padang",
"Sayur Asem",
"Kromboloni",
"Marmut Pink",
"Belalang Mullet",
"Kucing Oren",
"Lintah Terbang",
"Singa Paddle Pop",
"Macan Cisewu",
"Vario Mber",
"Beat Mber",
"Supra Geter",
"Oli Samping",
"Knalpot Racing",
"Jus Stroberi",
"Jus Alpukat",
"Alpukat Kocok",
"Es Kopyor",
"Es Jeruk",
"@whiskeysockets/baileys",
"chalk",
"gradient-string",
"@adiwajshing",
"d-scrape",
"undefined",
"cannot read properties",
"performance-now",
"os",
"node-fetch",
"form-data",
"axios",
"util",
"fs-extra",
"scrape-primbon",
"child_process",
"emoji-regex",
"check-disk-space",
"perf_hooks",
"moment-timezone",
"cheerio",
"fs",
"process",
"require( . . . )",
"import ... from ...",
"rate-overlimit",
"Cappucino Cincau",
"Jasjus Melon",
"Teajus Apel",
"Pop ice Mangga",
"Teajus Gulabatu",
"Air Selokan",
"Air Kobokan",
"TV Tabung",
"Keran Air",
"Tutup Panci",
"Kotak Amal",
"Tutup Termos",
"Tutup Botol",
"Kresek Item",
"Kepala Casan",
"Ban Serep",
"Kursi Lipat",
"Kursi Goyang",
"Kulit Pisang",
"Warung Madura",
"Gorong-gorong",
	])
	const response = `*Khodam ${txt} adalah:* ${khodam}`
 reply(response)
 }
break
//=================================================//
case 'tolol':
case 'gaguna':
case 'jomok':
case 'idiot':
case 'gay':
case 'lesbi':
case 'anjink':
case 'babi':
case 'kucing':
case 'beban':
case 'bebankeluarga':
case 'gadakeluarga':
case 'miskin':
case 'sampah':
case 'wibu':
case 'cantik':
case 'ganteng':
case 'tampan':
case 'cute':
case 'kind':
case 'Islam':
case 'kristen':
case 'hindu':
case 'katolik':
case 'gandu':
case 'madarchod':
case 'kala':
case 'gora':
case 'chutiya':
case 'nibba':
case 'nibbi':
case 'bhosdiwala':
case 'chutmarika':
case 'bokachoda':
case 'suarerbaccha':
case 'bolochoda':
case 'muthal':
case 'muthbaaz':
case 'randibaaz':
case 'topibaaz':
case 'cunt':
case 'nerd':
case 'behenchod':
case 'behnchoda':
case 'bhosdika':
case 'nerd':
case 'mc':
case 'bsdk':
case 'bhosdk':
case 'nigger':
case 'loda':
case 'laund':
case 'nigga':
case 'noobra':
case 'tharki':
case 'nibba':
case 'nibbi':
case 'mumu':
case 'rascal':
case 'scumbag':
case 'nuts':
case 'comrade':
case 'fagot':
case 'scoundrel':
case 'ditch':
case 'dope':
case 'gucci':
case 'lit':
case 'dumbass':
case 'sexy':
case 'crackhead':
case 'motherfucker':
case 'dogla':
case 'bewda':
case 'boka':
case 'khanki':
case 'bal':
case 'sucker':
case 'fuckboy':
case 'playboy':
case 'fuckgirl':
case 'playgirl':
case 'hot': {
if (!m.isGroup) return reply(mess.group)
    let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
    let hasilpp = `*Ni orangnya @${org.split("@")[0]} dia ${command}*`
        reply(hasilpp)
}
break
//=================================================//
case 'bucin':
case 'faktaunik':
case 'katabijak':
case 'katacinta':
case 'katailham':
case 'katahacker':
case 'katasenja':
case 'katasindiran':
case 'motivasi':
case 'quotespubg':
case 'quotesislamic':
    const resssr = await fetch(`https://afr-team.biz.id/random/${command}`).then(result => result.json())
let ranquo =`\`[ ${command} ]\`

${resssr.result}`
    reply(ranquo)
break
//=================================================//
        case 'quotesanime':
                const animex = await fetch(`https://afr-team.biz.id/random/quotesanime`).then(result => result.json())
            let nimex =`\`[ QUOTES ANIME ]\`
*Quotes*: ${animex.result.quotes}
*Anime*: ${animex.result.anime}
*Character*: ${animex.result.character}
*Episode*: ${animex.result.episode}`
            reply(nimex)
        break
//=================================================//
case 'bratvideo':
case 'videobrat':
case 'bratvid':
case 'vidbrat':

    if (!txt) return reply(`Penggunaan: ${prefix + command} <teks>`)
    
    try {
    let resbratv = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(txt)}&modeBlur=true&isVideo=true`
    await afr.sendVideoAsSticker(m.chat, resbratv, m, {
            packname: global.packname,
            author: global.author
        });
    dellimit() 
    } catch (e) {
    reply(mess.error)
    console.error(e)
    }
break
//=================================================//

default:

if (userdb.game) {
     if (budy) {
         if (userdb.tebakgambar === true) {
             kuis = true;
             let jawaban = userdb.jawaban
             let userJawaban = m.text.toUpperCase();
             if (m.text == "nyerah") {
                 userdb.game = false
                 await reply('*Anda Telah menyerah*');
                 delete tebakgambar[m.sender.split('@')[0]];
                 userdb.tebakgambar = false;
             } else if (userJawaban === jawaban) {
                 await afr.sendText(m.chat, '*`[ Tebak Gambar ]`*\n\nJawaban Benar 🎉\n- mendapat 499 balance', m);
                 delete tebakgambar[m.sender.split('@')[0]];
                 userdb.balance += 499
                 userdb.exp += 250
                 userdb.tebakgambar = false;
             } else {
                 if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                 reply('*Jawaban Salah!*');
             }
         } else if (userdb.tebakkata === true) {
             kuis = true;
             jawaban = userdb.jawaban
             jawabres = m.text.toUpperCase();
             if (m.text == "nyerah") {
                 userdb.game = false
                 await reply('*Anda Telah menyerah*')
                 userdb.tebakkata = false
                 delete tebakkata[m.sender.split('@')[0]]
             } else if (jawabres === jawaban) {
                 await afr.sendText(m.chat, '*`[ Tebak Kata ]`*\n\nJawaban Benar 🎉\n- mendapat 499 balance', m);
                 userdb.tebakkata = false
                 userdb.balance += 499
                 userdb.exp += 250
                 delete tebakkata[m.sender.split('@')[0]]
             } else {
                 if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                 reply('*Jawaban Salah!*')
             }
         } else if (userdb.tebakkalimat === true) {
             kuis = true;
             jawaban = userdb.jawaban
             jawabres = m.text
             if (m.text == "nyerah") {
                 userdb.game = false
                 await reply('*Anda Telah menyerah*')
                 userdb.tebakkalimat = false
                 delete tebakkalimat[m.sender.split('@')[0]]
             } else if (jawabres === jawaban) {
                 await afr.sendText(m.chat, '*`[ Tebak Kalimat ]`*\n\nJawaban Benar 🎉\n- mendapat 499 balance', m);
                 userdb.tebakkalimat = false
                 userdb.balance += 499
                 userdb.exp += 250
                 delete tebakkalimat[m.sender.split('@')[0]]
             } else {
                 if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                 reply('*Jawaban Salah!*')
             }
         } else if (userdb.tebaklirik === true) {
             kuis = true;
             jawabanban = userdb.jawaban
             jawabresres = m.text.charAt(0).toUpperCase() + m.text.slice(1);
             if (m.text == "nyerah") {
                 userdb.game = false
                 await reply('*Anda Telah menyerah*')
                 userdb.tebaklirik = false
                 delete tebaklirik[m.sender.split('@')[0]]
             } else if (jawabresres === jawabanban) {
                 await afr.sendText(m.chat, '*`[ Tebak Lirik ]`*\n\nJawaban Benar 🎉\n- mendapat 499 balance', m);
                 userdb.tebaklirik = false
                 userdb.balance += 499
                 userdb.exp += 250
                 delete tebaklirik[m.sender.split('@')[0]]
             } else {
                 if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                 reply('*Jawaban Salah!*')
             }

         } else if (userdb.tebaktebakan === true) {
             try {
                 kuis = true;
                 jawabanya = userdb.jawaban
                 jawabresya = m.text
                 if (m.text == "nyerah") {
                     userdb.game = false
                     await reply('*Anda Telah menyerah*')
                     userdb.tebaktebakan = false
                     delete tebaktebakan[m.sender.split('@')[0]]
                 } else if (jawabresya === jawabanya) {
                     await afr.sendText(m.chat, '*`[ Tebak Tebakan ]`*\n\nJawaban Benar 🎉\n- mendapat 499 balance', m);
                     userdb.tebaktebakan = false
                     userdb.balance += 499
                     userdb.exp += 250
                     delete tebaktebakan[m.sender.split('@')[0]]
                 } else {
                     if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                     reply('*Jawaban Salah!*')
                 }
             } catch (e) {
                 reply(util.format(e))
             }
         } else if (userdb.tebakbendera === true) {
             kuis = true;
             jawabanyaa = userdb.jawaban
             jawabresyaa = m.text
             if (m.text == "nyerah") {
                 userdb.game = false
                 await reply('*Anda Telah menyerah*')
                 userdb.tebakbendera = false
                 delete tebakbendera[m.sender.split('@')[0]]
             } else if (jawabresyaa === jawabanyaa) {
                 await afr.sendText(m.chat, '*`[ Tebak Bendera ]`*\n\nJawaban Benar 🎉\n- mendapat 499 balance', m);
                 userdb.tebakbendera = false
                 userdb.balance += 499
                 userdb.exp += 250
                 delete tebakbendera[m.sender.split('@')[0]]
             } else {
                 if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                 reply('*Jawaban Salah!*')
             }
         } else if (userdb.tebakkimia === true) {
             kuis = true;
             jawabanyaaa = userdb.jawaban
             jawabresyaaa = m.text
             if (m.text == "nyerah") {
                 userdb.game = false
                 await reply('*Anda Telah menyerah*')
                 userdb.tebakkimia = false
                 delete tebakkimia[m.sender.split('@')[0]]
             } else if (jawabresyaaa === jawabanyaaa) {
                 await afr.sendText(m.chat, '*`[ Tebak Kimia ]`*\n\nJawaban Benar 🎉\n- mendapat 499 balance', m);
                 userdb.tebakkimia = false
                 userdb.balance += 499
                 userdb.exp += 250
                 delete tebakkimia[m.sender.split('@')[0]]
             } else {
                 if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                 reply('*Jawaban Salah!*')
             }

         } else if (userdb.tebaktekateki === true) {
             if (m.text == "nyerah") {
                 userdb.game = false
                 await reply('*Anda Telah menyerah*')
                 userdb.tebaktekateki = false
                 delete tebaktekateki[m.sender.split('@')[0]]
             } else if (m.text === userdb.jawaban) {
                 await afr.sendText(m.chat, '*`[ Tebak Teka-Teki ]`*\n\nJawaban Benar 🎉\n- mendapat 499 balance', m);
                 userdb.tebaktekateki = false
                 userdb.balance += 499
                 userdb.exp += 250
                 delete tebaktekateki[m.sender.split('@')[0]]
             } else {
                 if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                 reply('*Jawaban Salah!*')
             }
         } else if (userdb.tebaksusunkata === true) {
             if (m.text == "nyerah") {
                 userdb.game = false
                 await reply('*Anda Telah menyerah*')
                 userdb.tebaksusunkata = false
                 delete tebaksusunkata[m.sender.split('@')[0]]
             } else if (m.text === userdb.jawaban) {
                 await afr.sendText(m.chat, '*`[ Tebak Susun Kata ]`*\n\nJawaban Benar 🎉\n- mendapat 499 balance', m);
                 userdb.tebaksusunkata = false
                 userdb.balance += 499
                 userdb.exp += 250
                 delete tebaksusunkata[m.sender.split('@')[0]]
             } else {
                 if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                 reply('*Jawaban Salah!*')
             }
         } else if (userdb.tebaksiapaaku === true) {
             if (m.text == "nyerah") {
                 userdb.game = false
                 await reply('*Anda Telah menyerah*')
                 userdb.tebaksiapaaku = false
                 delete tebaksiapakahaku[m.sender.split('@')[0]]
             } else if (m.text === userdb.jawaban) {
                 await afr.sendText(m.chat, '*`[ Tebak Siapa Aku- ]`*\n\nJawaban Benar 🎉\n- mendapat 499 balance', m);
                 userdb.tebaksiapaaku = false
                 userdb.balance += 499
                 userdb.exp += 250
                 delete tebaksiapakahaku[m.sender.split('@')[0]]
             } else {
                 if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                 reply('*Jawaban Salah!*')
             }
         } else if (userdb.tebakasahotak === true) {
             if (m.text == "nyerah") {
                 userdb.game = false
                 await reply('*Anda Telah menyerah*')
                 userdb.tebakasahotak = false
                 delete tebakasahotak[m.sender.split('@')[0]]
             } else if (m.text === userdb.jawaban) {
                 await afr.sendText(m.chat, '*`[ Tebak Asah Otak ]`*\n\nJawaban Benar 🎉\n- mendapat 499 balance', m);
                 userdb.tebakasahotak = false
                 userdb.balance += 499
                 userdb.exp += 250
                 delete tebakasahotak[m.sender.split('@')[0]]
             } else {
                 if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                 reply('*Jawaban Salah!*')
             }
         } else if (userdb.kuismath === true) {
             if (m.text == "nyerah") {
                 userdb.game = false
                 await reply('*Anda Telah menyerah*')
                 userdb.kuismath = false
                 delete kuismath[m.sender.split('@')[0]]
             } else if (m.text === userdb.jawaban) {
                 await afr.sendText(m.chat, '*`[ Learn - Math ]`*\n\nJawaban Benar 🎉\n- mendapat 499 balance', m);
                 userdb.kuismath = false
                 userdb.balance += 499
                 userdb.exp += 250
                 delete kuismath[m.sender.split('@')[0]]
             } else {
                 if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                 reply('*Jawaban Salah!*')
             }
         } else if (userdb.caklontong === true) {
             if (m.text == "nyerah") {
                 userdb.game = false
                 await reply('*Anda Telah menyerah*');
                 userdb.caklontong = false;
                 delete caklontong[m.sender.split('@')[0]]
                 delete caklontong_desk[m.sender.split('@')[0]]
             } else if (m.text.replace(" ", "") === userdb.jawaban) {
                 userdb.caklontong = false;
                 userdb.balance += 499
                 userdb.exp += 250;
                 userdb.game = false
                 await reply(`Selamat Jawaban Kamu Benar\n\nJawaban: ${m.text}`);
                 delete caklontong[m.sender.split('@')[0]]
                 delete caklontong_desk[m.sender.split('@')[0]]
             } else {
                 reply("Jawaban Salah 🤦🏽‍♂️");
             }
         } else {}
     }
 }
 
if (budy.startsWith('$')) {
    if (!isCreator) return reply(mess.owner);
    exec(budy.slice(2), (err, stdout) => {
        if (err) return m.reply(err);
        if (stdout) return m.reply(stdout);
    });
}

if (budy.startsWith('>')) {
    if (!isCreator) return reply(mess.owner);
    try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        await m.reply(evaled);
    } catch (err) {
        await m.reply(String(err));
    }
}

if (budy.startsWith('=>')) {
    if (!isCreator) return reply(mess.owner);

    function Return(sul) {
        let sat = JSON.stringify(sul, null, 2);
        let bang = util.format(sat);
        if (sat === undefined) {
            bang = util.format(sul);
        }
        return m.reply(bang);
    }

    try {
        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)));
    } catch (e) {
        m.reply(String(e));
    }
}

if (budy.startsWith('bot')) {
    reply('Bot Active ✅')
}

if (budy.startsWith('afr')) {
    reply('bot ini menggunakan sc afr md v4')
}

if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
await afr.sendMessage(m.chat, {react: {text: `🤨`,key: m.key,}})
let teks = 'group apa itu'
reply(teks)
}

//batas euy 
}
} catch (err) {
  let formattedError = util.format(err);
  let errorMessage = String(formattedError);
  let stackTrace = err.stack ? err.stack : "Stack trace not available";
  if (typeof err === 'string') {
    m.reply(`Terjadi error:\n\nKeterangan Error: ${errorMessage}`);
  } else {
    console.log(formattedError);
  }
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
