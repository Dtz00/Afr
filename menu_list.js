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

global.listmenu = `
╭━━『 *LIST MENU* 』━━
┃ [ • ]  .allmenu
┃ [ • ]  .aimenu
┃ [ • ]  .mainmenu
┃ [ • ]  .downloadmenu
┃ [ • ]  .convertmenu
┃ [ • ]  .gamemenu
┃ [ • ]  .funmenu
┃ [ • ]  .ownermenu
┃ [ • ]  .groupmenu
┃ [ • ]  .storemenu
┃ [ • ]  .beritamenu
┃ [ • ]  .primbonmenu
┃ [ • ]  .animemenu
┃ [ • ]  .randommenu
┃ [ • ]  .toolsmenu
┃ [ • ]  .soundmenu
┃ [ • ]  .ephotomenu
╰━━━━━━•∘∘`

global.mainmenu = `
╭━━『 *MAIN MENU* 』━━
┃ [ • ]  .allmenu
┃ [ • ]  .menu
┃ [ • ]  .tqto
┃ [ • ]  .owner
┃ [ • ]  .creator
┃ [ • ]  .afk
┃ [ • ]  .runtime
┃ [ • ]  .ping
┃ [ • ]  .totalfitur
┃ [ • ]  .script
┃ [ • ]  .limit
┃ [ • ]  .balance
┃ [ • ]  .leaderboard
╰━━━━━━•∘∘`

global.downloadmenu = `
╭━━『 *DOWNLOAD MENU* 』━━
┃ [ • ]  .tt
┃ [ • ]  .tiktoksearch
┃ [ • ]  .instagram
┃ [ • ]  .facebook
┃ [ • ]  .play
┃ [ • ]  .ytmp3
┃ [ • ]  .ytmp4
┃ [ • ]  .gitclone
┃ [ • ]  .pinterest
╰━━━━━━•∘∘`

global.convertmenu = `
╭━━『 *CONVERT MENU* 』━━
┃ [ • ]  .sticker
┃ [ • ]  .smeme
┃ [ • ]  .brat
┃ [ • ]  .bratvideo
┃ [ • ]  .wm
┃ [ • ]  .wmvideo
┃ [ • ]  .emojimix
┃ [ • ]  .emojimix2
┃ [ • ]  .qc
┃ [ • ]  .qcstik
┃ [ • ]  .toimage
┃ [ • ]  .tovideo
┃ [ • ]  .togif
┃ [ • ]  .tomp3
┃ [ • ]  .toaudio
┃ [ • ]  .tovn
┃ [ • ]  .bass
┃ [ • ]  .blown
┃ [ • ]  .deep
┃ [ • ]  .earrape
┃ [ • ]  .fast
┃ [ • ]  .fat
┃ [ • ]  .nightcore
┃ [ • ]  .reverse
┃ [ • ]  .robot
┃ [ • ]  .slow
┃ [ • ]  .smooth
┃ [ • ]  .tupai
╰━━━━━━•∘∘`

global.gamemenu = `
╭━━『 *GAME MENU* 』━━
┃ [ • ]  .siapakahaku
┃ [ • ]  .susunkata
┃ [ • ]  .tekateki
┃ [ • ]  .asahotak
┃ [ • ]  .caklontong
┃ [ • ]  .tebakgambar
┃ [ • ]  .tebakkata
┃ [ • ]  .tebakkalimat
┃ [ • ]  .tebaklirik
┃ [ • ]  .tebaktebakan
┃ [ • ]  .tebakkimia
┃ [ • ]  .ttc
┃ [ • ]  .delttc
┃ [ • ]  .suitpvp
┃ [ • ]  .math noob
┃ [ • ]  .math easy
┃ [ • ]  .math medium
┃ [ • ]  .math hard
┃ [ • ]  .math extreme
┃ [ • ]  .math impossible
╰━━━━━━•∘∘`

global.ownermenu = `
╭━━『 *OWNER MENU* 』━━
┃ [ • ]  .addprem
┃ [ • ]  .delprem
┃ [ • ]  .self
┃ [ • ]  .public
┃ [ • ]  .listprem
┃ [ • ]  .ban add
┃ [ • ]  .ban del
┃ [ • ]  .listban
┃ [ • ]  .autoread *on/off*
┃ [ • ]  .join
┃ [ • ]  .addcase
┃ [ • ]  .delcase
┃ [ • ]  .sendlinkgc
┃ [ • ]  .leavegc
┃ [ • ]  .resetlimit
┃ [ • ]  .addlimit
┃ [ • ]  .creategc
┃ [ • ]  .upch
┃ [ • ]  .block
┃ [ • ]  .unblock
╰━━━━━━•∘∘`

global.groupmenu = `
╭━━『 *GROUP MENU* 』━━
┃ [ • ]  .antilink *on/off*
┃ [ • ]  .antilinkv2 *on/off*
┃ [ • ]  .mutegc *on/off*
┃ [ • ]  .linkgc
┃ [ • ]  .resetlinkgc
┃ [ • ]  .add
┃ [ • ]  .kick
┃ [ • ]  .promote
┃ [ • ]  .demote
┃ [ • ]  .hidetag
┃ [ • ]  .everyone
┃ [ • ]  .group *open/close*
┃ [ • ]  .editsubject
┃ [ • ]  .editdesk
┃ [ • ]  .tagall
┃ [ • ]  .promoteall
┃ [ • ]  .demoteall
┃ [ • ]  .totag
┃ [ • ]  .closetime
┃ [ • ]  .opentime
┃ [ • ]  .cekasalmember
╰━━━━━━•∘∘`

global.storemenu = `
╭━━『 *STORE MENU* 』━━
┃ [ • ]  .addlist
┃ [ • ]  .dellist
┃ [ • ]  .ceklist
┃ [ • ]  .uplist
┃ [ • ]  .tambah
┃ [ • ]  .kurang
┃ [ • ]  .kali
┃ [ • ]  .bagi
╰━━━━━━•∘∘`

global.funmenu = `
╭━━『 *FUN MENU* 』━━
┃ [ • ]  .rate
┃ [ • ]  .gantengcek
┃ [ • ]  .cantikcek
┃ [ • ]  .sangecek
┃ [ • ]  .gaycek
┃ [ • ]  .lesbicek
┃ [ • ]  .tololcek
┃ [ • ]  .pintarcek
┃ [ • ]  .wangy
┃ [ • ]  .halah
┃ [ • ]  .hilih
┃ [ • ]  .huluh
┃ [ • ]  .heleh
┃ [ • ]  .holoh
┃ [ • ]  .jodoh
┃ [ • ]  .truth
┃ [ • ]  .dare
┃ [ • ]  .cekkhodam
┃ [ • ]  .tolol
┃ [ • ]  .gaguna
┃ [ • ]  .jomok
┃ [ • ]  .idiot
┃ [ • ]  .gay
┃ [ • ]  .lesbi
┃ [ • ]  .anjink
┃ [ • ]  .babi
┃ [ • ]  .kucing
┃ [ • ]  .beban
┃ [ • ]  .bebankeluarga
┃ [ • ]  .gadakeluarga
┃ [ • ]  .miskin
┃ [ • ]  .sampah
┃ [ • ]  .wibu
┃ [ • ]  .cantik
┃ [ • ]  .ganteng
┃ [ • ]  .tampan
┃ [ • ]  .cute
┃ [ • ]  .kind
┃ [ • ]  .Islam
┃ [ • ]  .kristen
┃ [ • ]  .hindu
┃ [ • ]  .katolik
┃ [ • ]  .gandu
┃ [ • ]  .madarchod
┃ [ • ]  .kala
┃ [ • ]  .gora
┃ [ • ]  .chutiya
┃ [ • ]  .nibba
┃ [ • ]  .nibbi
┃ [ • ]  .bhosdiwala
┃ [ • ]  .chutmarika
┃ [ • ]  .bokachoda
┃ [ • ]  .suarerbaccha
┃ [ • ]  .bolochoda
┃ [ • ]  .muthal
┃ [ • ]  .muthbaaz
┃ [ • ]  .randibaaz
┃ [ • ]  .topibaaz
┃ [ • ]  .cunt
┃ [ • ]  .nerd
┃ [ • ]  .behenchod
┃ [ • ]  .behnchoda
┃ [ • ]  .bhosdika
┃ [ • ]  .nerd
┃ [ • ]  .mc
┃ [ • ]  .bsdk
┃ [ • ]  .bhosdk
┃ [ • ]  .nigger
┃ [ • ]  .loda
┃ [ • ]  .laund
┃ [ • ]  .nigga
┃ [ • ]  .noobra
┃ [ • ]  .tharki
┃ [ • ]  .nibba
┃ [ • ]  .nibbi
┃ [ • ]  .mumu
┃ [ • ]  .rascal
┃ [ • ]  .scumbag
┃ [ • ]  .nuts
┃ [ • ]  .comrade
┃ [ • ]  .fagot
┃ [ • ]  .scoundrel
┃ [ • ]  .ditch
┃ [ • ]  .dope
┃ [ • ]  .gucci
┃ [ • ]  .lit
┃ [ • ]  .dumbass
┃ [ • ]  .sexy
┃ [ • ]  .crackhead
┃ [ • ]  .motherfucker
┃ [ • ]  .dogla
┃ [ • ]  .bewda
┃ [ • ]  .boka
┃ [ • ]  .khanki
┃ [ • ]  .bal
┃ [ • ]  .sucker
┃ [ • ]  .fuckboy
┃ [ • ]  .playboy
┃ [ • ]  .fuckgirl
┃ [ • ]  .playgirl
┃ [ • ]  .hot
╰━━━━━━•∘∘`

global.aimenu = `
╭━━『 *AI MENU* 』━━
┃ [ • ]  .ai
┃ [ • ]  .luminai
┃ [ • ]  .latukam
┃ [ • ]  .gemini
┃ [ • ]  .gemini-img
╰━━━━━━•∘∘`

global.beritamenu = `
╭━━『 *BERITA MENU* 』━━
┃ [ • ]  .fajar
┃ [ • ]  .cnn
┃ [ • ]  .layarkaca
┃ [ • ]  .cnbc
┃ [ • ]  .tribun
┃ [ • ]  .indozone
┃ [ • ]  .kompas
┃ [ • ]  .detik
┃ [ • ]  .daily
┃ [ • ]  .inews
┃ [ • ]  .okezone
┃ [ • ]  .sindo
┃ [ • ]  .tempo
┃ [ • ]  .antara
┃ [ • ]  .kontan
┃ [ • ]  .merdeka
┃ [ • ]  .jalantikus-meme
╰━━━━━━•∘∘`

global.primbonmenu = `
╭━━『 *PRIMBON MENU* 』━━
┃ [ • ]  .artimimpi
┃ [ • ]  .ramalanjodoh
┃ [ • ]  .artinama
┃ [ • ]  .kecocokannama
┃ [ • ]  .kecocokanpasangan
┃ [ • ]  .jadianpernikahan
┃ [ • ]  .sifatusaha
┃ [ • ]  .rezeki
┃ [ • ]  .pekerjaan
┃ [ • ]  .ramalannasib
┃ [ • ]  .potensipenyakit
┃ [ • ]  .artitarot
┃ [ • ]  .fengshui
┃ [ • ]  .haribaik
┃ [ • ]  .harisangar
┃ [ • ]  .harinaas
┃ [ • ]  .harinaga
┃ [ • ]  .arahrezeki
┃ [ • ]  .peruntungan
┃ [ • ]  .weton
┃ [ • ]  .wetonjawa
┃ [ • ]  .sifat
┃ [ • ]  .keberuntungan
┃ [ • ]  .memancing
┃ [ • ]  .masasubur
┃ [ • ]  .shio
╰━━━━━━•∘∘`

global.animemenu = `
╭━━『 *ANIME MENU* 』━━
┃ [ • ]  .elaina
┃ [ • ]  .naruto
┃ [ • ]  .boruto
┃ [ • ]  .asuna
┃ [ • ]  .nezuko
┃ [ • ]  .akira
┃ [ • ]  .akiyama
┃ [ • ]  .kagura
┃ [ • ]  .chiho
┃ [ • ]  .chitoge
┃ [ • ]  .deidara
┃ [ • ]  .hinata
┃ [ • ]  .inori
┃ [ • ]  .itachi
┃ [ • ]  .kaori
┃ [ • ]  .kurumi
┃ [ • ]  .mikasa
┃ [ • ]  .sakura
┃ [ • ]  .sasuke
┃ [ • ]  .ayuzawa
╰━━━━━━•∘∘`

global.randommenu = `
╭━━『 *RANDOM MENU* 』━━
┃ [ • ]  .bts
┃ [ • ]  .blackpink
┃ [ • ]  .exo
┃ [ • ]  .darkjokes
┃ [ • ]  .bluearchive
┃ [ • ]  .pantun
┃ [ • ]  .quotes
┃ [ • ]  .husbu
┃ [ • ]  .waifu
┃ [ • ]  .neko
┃ [ • ]  .bucin
┃ [ • ]  .faktaunik
┃ [ • ]  .katabijak
┃ [ • ]  .katacinta
┃ [ • ]  .katailham
┃ [ • ]  .katahacker
┃ [ • ]  .katasenja
┃ [ • ]  .katasindiran
┃ [ • ]  .motivasi
┃ [ • ]  .quotespubg
┃ [ • ]  .quotesislamic
┃ [ • ]  .quotesanime
╰━━━━━━•∘∘`

global.toolsmenu = `
╭━━『 *TOOLS MENU* 』━━
┃ [ • ]  .hd
┃ [ • ]  .remini
┃ [ • ]  .remini2
┃ [ • ]  .translate
┃ [ • ]  .ssweb
┃ [ • ]  .kalkulator
┃ [ • ]  .jarak
┃ [ • ]  .tts
╰━━━━━━•∘∘`

global.soundmenu = `
╭━━『 *SOUND MENU* 』━━
┃ [ • ]  .sound1
┃ [ • ]  .sound2
┃ [ • ]  .sound3
┃ [ • ]  .sound4
┃ [ • ]  .sound5
┃ [ • ]  .sound6
┃ [ • ]  .sound7
┃ [ • ]  .sound8
┃ [ • ]  .sound9
┃ [ • ]  .sound10
┃ [ • ]  .sound11
┃ [ • ]  .sound12
┃ [ • ]  .sound13
┃ [ • ]  .sound14
┃ [ • ]  .sound15
┃ [ • ]  .sound16
┃ [ • ]  .sound17
┃ [ • ]  .sound18
┃ [ • ]  .sound19
┃ [ • ]  .sound20
┃ [ • ]  .sound21
┃ [ • ]  .sound22
┃ [ • ]  .sound23
┃ [ • ]  .sound24
┃ [ • ]  .sound25
┃ [ • ]  .sound26
┃ [ • ]  .sound27
┃ [ • ]  .sound28
┃ [ • ]  .sound29
┃ [ • ]  .sound30
┃ [ • ]  .sound31
┃ [ • ]  .sound32
┃ [ • ]  .sound33
┃ [ • ]  .sound34
┃ [ • ]  .sound35
┃ [ • ]  .sound36
┃ [ • ]  .sound37
┃ [ • ]  .sound38
┃ [ • ]  .sound39
┃ [ • ]  .sound40
┃ [ • ]  .sound41
┃ [ • ]  .sound42
┃ [ • ]  .sound43
┃ [ • ]  .sound44
┃ [ • ]  .sound45
┃ [ • ]  .sound46
┃ [ • ]  .sound47
┃ [ • ]  .sound48
┃ [ • ]  .sound49
┃ [ • ]  .sound50
┃ [ • ]  .sound51
┃ [ • ]  .sound52
┃ [ • ]  .sound53
┃ [ • ]  .sound54
┃ [ • ]  .sound55
┃ [ • ]  .sound56
┃ [ • ]  .sound57
┃ [ • ]  .sound58
┃ [ • ]  .sound59
┃ [ • ]  .sound60
┃ [ • ]  .sound61
┃ [ • ]  .sound62
┃ [ • ]  .sound63
┃ [ • ]  .sound64
┃ [ • ]  .sound65
┃ [ • ]  .sound66
┃ [ • ]  .sound67
┃ [ • ]  .sound68
┃ [ • ]  .sound69
┃ [ • ]  .sound70
┃ [ • ]  .sound71
┃ [ • ]  .sound72
┃ [ • ]  .sound73
┃ [ • ]  .sound74
┃ [ • ]  .sound75
┃ [ • ]  .sound76
┃ [ • ]  .sound77
┃ [ • ]  .sound78
┃ [ • ]  .sound79
┃ [ • ]  .sound80
┃ [ • ]  .sound81
┃ [ • ]  .sound82
┃ [ • ]  .sound83
┃ [ • ]  .sound84
┃ [ • ]  .sound85
┃ [ • ]  .sound86
┃ [ • ]  .sound87
┃ [ • ]  .sound88
┃ [ • ]  .sound89
┃ [ • ]  .sound90
┃ [ • ]  .sound91
┃ [ • ]  .sound92
┃ [ • ]  .sound93
┃ [ • ]  .sound94
┃ [ • ]  .sound95
┃ [ • ]  .sound96
┃ [ • ]  .sound97
┃ [ • ]  .Sound98
┃ [ • ]  .sound99
┃ [ • ]  .sound100
┃ [ • ]  .sound101
┃ [ • ]  .sound102
┃ [ • ]  .sound103
┃ [ • ]  .sound104
┃ [ • ]  .sound105
┃ [ • ]  .sound106
┃ [ • ]  .sound107
┃ [ • ]  .sound108
┃ [ • ]  .sound109
┃ [ • ]  .sound110
┃ [ • ]  .sound111
┃ [ • ]  .sound112
┃ [ • ]  .sound113
┃ [ • ]  .sound114
┃ [ • ]  .sound115
┃ [ • ]  .sound116
┃ [ • ]  .sound117
┃ [ • ]  .sound118
┃ [ • ]  .sound119
┃ [ • ]  .sound120
┃ [ • ]  .sound121
┃ [ • ]  .sound122
┃ [ • ]  .sound123
┃ [ • ]  .sound124
┃ [ • ]  .sound125
┃ [ • ]  .sound126
┃ [ • ]  .sound127
┃ [ • ]  .sound128
┃ [ • ]  .sound129
┃ [ • ]  .sound130
┃ [ • ]  .sound131
┃ [ • ]  .sound132
┃ [ • ]  .sound133
┃ [ • ]  .sound134
┃ [ • ]  .sound135
┃ [ • ]  .sound136
┃ [ • ]  .sound137
┃ [ • ]  .sound138
┃ [ • ]  .sound139
┃ [ • ]  .sound140
┃ [ • ]  .sound141
┃ [ • ]  .sound142
┃ [ • ]  .sound143
┃ [ • ]  .sound144
┃ [ • ]  .sound145
┃ [ • ]  .sound146
┃ [ • ]  .sound147
┃ [ • ]  .sound148
┃ [ • ]  .sound149
┃ [ • ]  .sound150
┃ [ • ]  .sound151
┃ [ • ]  .sound152
┃ [ • ]  .sound153
┃ [ • ]  .sound154
┃ [ • ]  .sound155
┃ [ • ]  .sound156
┃ [ • ]  .sound157
┃ [ • ]  .sound158
┃ [ • ]  .sound159
┃ [ • ]  .sound160
┃ [ • ]  .sound161
╰━━━━━━•∘∘`

global.ephotomenu = `
╭━━『 *EPHOTO MENU* 』━━
┃ [ • ]  .anonymhacker
┃ [ • ]  .aovwall 
┃ [ • ]  .avatardota
┃ [ • ]  .avatarlolnew
┃ [ • ]  .birthdaycake
┃ [ • ]  .beautifulflower
┃ [ • ]  .birthdayday
┃ [ • ]  .cartoongravity
┃ [ • ]  .fpslogo
┃ [ • ]  .freefire
┃ [ • ]  .galaxybat
┃ [ • ]  .galaxystyle
┃ [ • ]  .galaxywallpaper
┃ [ • ]  .glittergold
┃ [ • ]  .glossychrome
┃ [ • ]  .goldplaybutton
┃ [ • ]  .greenbush
┃ [ • ]  .greenneon
┃ [ • ]  .heartshaped
┃ [ • ]  .hologram3d
┃ [ • ]  .logogaming
┃ [ • ]  .lolbanner
┃ [ • ]  .luxurygold
┃ [ • ]  .metallogo
┃ [ • ]  .mlwall
┃ [ • ]  .multicolor3d
┃ [ • ]  .noeltext
┃ [ • ]  .pubgmaskot
┃ [ • ]  .royaltext
┃ [ • ]  .silverplaybutton
┃ [ • ]  .snow3d
┃ [ • ]  .textbyname
┃ [ • ]  .textcake
┃ [ • ]  .watercolor
┃ [ • ]  .wetglass
┃ [ • ]  .wooden3d
┃ [ • ]  .writegalacy
╰━━━━━━•∘∘`

global.allmenu = `
${global.mainmenu}
${global.aimenu}
${global.downloadmenu}
${global.convertmenu}
${global.gamemenu}
${global.funmenu}
${global.ownermenu}
${global.groupmenu}
${global.storemenu}
${global.beritamenu}
${global.primbonmenu}
${global.animemenu}
${global.randommenu}
${global.toolsmenu}
${global.soundmenu}
${global.ephotomenu}`

//batas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update'${__filename}'`)
    delete require.cache[file]
    require(file)
})