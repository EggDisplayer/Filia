
global.owner = ['6282389924037']  
global.mods = ['6282389924037'] 
global.prems = ['6282389924037']

global.nameowner = 'Ytb Vynα Vαlerié.'
global.numberowner = '6282389924037' 
global.mail = 'vynaachan@gmail.com'
global.dana = '6282389924037'
global.pulsa = '6282389924037'
global.gopay = '6282389924037'

global.namebot = 'VynaaMD🦄'
global.gc = 'https://chat.whatsapp.com/CMK56xUxfTgAXGZjsZBmwf'
global.web = 'https://shoplinks.to/vyna-store'
global.instagram = 'https://instagram.com/_xwby_?igshid=ZDc4ODBmNjlmNQ=='

global.lolkey = 'ayakaviki'
global.rose = 'Rs-lojembot';
global.zenzkey = 'BagasPrdn'
global.btc = 'Admin'
global.wm = 'VynaaMD🦄'
global.watermark = wm
global.wm2 = 'Ytb Vynα Vαlerié.'
global.wm3 = 'VynaaMD'
global.wm4 = 'Ytb Vynα Vαlerié.'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.wait = '*Loading...*'
global.eror = 'Server Error'
global.rose = 'Rs-AgesuXD'
global.benar = 'Benar\n'
global.salah = 'Salah\n'
global.sourceUrl = "https://vynaachan.me"

global.stiker_wait = 'bentar beib..'
global.packname = '❏ sticker di buat oleh VynaaMD, wa.me/6283896757978❀▀▄🌺🌸'
global.author = 'Ytb Vynα Vαlerié.\n'

global.APIs = { 
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'https://api.botcahx.live',
  popcat: 'https://api.popcat.xyz',
  rey: 'https://sekha.me'
}
global.APIKeys = { // Tambahkan Apikey nya disini

  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.botcahx.live': 'QaepQXxR',
  'https://api.lolhuman.xyz': 'ayakaviki',
}

/*Yang Ini Untuk Setting Rpg Game Yah Kak*/
global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

/*Yang Ini Jangan Di Ubah Yah Kak*/
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

