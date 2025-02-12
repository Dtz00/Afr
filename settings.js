/*
      SC CASE BY AFR TEAM
      Created on: 30 Januari 2025
            
      saluran update sc ini ☟☟
        https://whatsapp.com/channel/0029Vajf99IKbYMLNn7qKS3i
        
        YANG DISHARE SECARA GRATIS DILARANG JUAL!!

*/
//════════════════════════\\
const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

// ═══『 Owner 』═══ \\
global.pairing = '6288276763256'
global.owner = [ '6288276763256', '6282258138037' ]
global.ownernumber = '6282258138037'
global.ownername = "Termux TEAM"
global.mail = "@gmail.com"
// ═══『 Bot 』═══ \\
global.botnumber = '6282258138037'
global.botname = 'termuX MD'
global.bot_version = '4.0.0'
// ═══『 Sticker 』═══ \\
global.packname = `Sticker By\n---\nTrmx MD\n---\nCreated: ${hariini}`
global.author = ``
// ═══『 Channel 』═══ \\
global.idch = '120369999574255@newsletter'
global.titlech = '</> TerMX - MD </>'
// ═══『 Other 』═══ \\
global.web = "https://whatsapp.com/channel/0029999999YMLNn7qKS3i"
global.prefa = ['/','!','.','#','&']
global.themeemoji = '🕊️'
global.wm = "termux MultiDevice"
global.thumbnail = 'https://i.supa.codes/MJUTI'
global.url = 'https://whatsapp.com/channel/0029Vajf999MLNn7qKS3i'
global.premium = ['6282258138037']
global.lolkey = 'isi_api_mu' // dapatkan api nya di web https://api.lolhuman.xyz
global.notif_bot_on = false // untuk mengirim notifikasi bot online kepada nomor owner
global.public = true // untuk bisa diakses oleh orang lain
global.anticall = false // untuk auto block kepada yang call no bot
global.welcome = true // untuk sambutan kepada member baru sekaligus ucapan untuk member keluar
global.detect = true // untuk mendeteksi jika ada yang jadi admin dan di unadmin
// ═══『 Message 』═══ \\
global.mess = {
    done: '*( ✅ )* Success!!',
    prem: '*( ❌ )* fitur ini khusus user premium!! silakan up menjadi user premium dahulu.',
    limit: '*( ❌ )* limit kamu habis, silakan beli premium atau tunggu reset limit.', 
    admin: '*( ❌ )* Fitur ini khusus admin grup!!',
    botadmin: '*( ❌ )* Sepertinya bot bukan admin!!',
    owner: '*( ❌ )* Fitur khusus owner!! emang lu siapa??!!',
    group: '*( ❌ )* Fitur ini khusus didalam group..',
    private: '*( ❌ )* Fitur ini khusus private chat..',
    wait: '*( ⏳ )* Tunggu 1 abad..',
    error: '*( ❌ )* Terjadi kesalahan..',
    banned: '*( ❌ )* Kamu dibanned oleh owner!!', 
}
// ═══『 Limit 』═══ \\
global.limit = {
    free: 20,
    premium: 1000
}

/*
      info update
      => https://whatsapp.com/channel/0029Vajf99IKbYMLNn7qKS3i

      developer/supporter
      => wa.me/6283182419578

hubungi no diatas jika ada fitur error atau ingin request fitur.
*/

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update'${__filename}'`)
    delete require.cache[file]
    require(file)
})