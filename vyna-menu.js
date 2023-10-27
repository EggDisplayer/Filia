/* Owner: Ytb Vynα Vαlerié.i */
/* wa.me/6282389924037*/



let axios = require('axios')

let handler = async (m, {
	conn
}) => {
	let user = global.db.data.users[m.sender]
	let name = conn.getName(m.sender)
	let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Makassar'})
	let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Makassar', hour: 'numeric', minute: 'numeric', hour12: true})
	let version = require('../package.json').version
	let author = require('../package.json').author.name
	let greeting = ''

	if (new Date().getHours() >= 0 && new Date().getHours() < 4) {
		greeting = '👋 Good night'
	} else if (new Date().getHours() >= 4 && new Date().getHours() < 12) {
		greeting = '👋 Good morning'
	} else if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
		greeting = '👋 Good afternoon'
	} else if (new Date().getHours() >= 18 && new Date().getHours() < 24) {
		greeting = '👋 Good evening'
	}
	let mainmenu = `${greeting} *@${user.name}*, *ᴠʏɴᴀᴀ ɪꜱ ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ* ᴛʜᴀᴛ ʏᴏᴜ ᴄᴀɴ ᴜꜱᴇ ᴀꜱ ᴀ ᴛᴏᴏʟ ᴛᴏ ᴍᴀᴋᴇ ꜱᴛɪᴄᴋᴇʀꜱ, ʟɪꜱᴛᴇɴ ᴛᴏ ᴍᴜꜱɪᴄ, ᴀɴᴅ ᴘʟᴀʏ ʀᴘɢ ɢᴀᴍᴇꜱ ɪɴ ʀᴇᴀʟ-ᴛɪᴍᴇ

*ᴠʏɴᴀᴀ* ɪꜱ ᴀʟꜱᴏ ᴀ ʙᴏᴛ ᴛʜᴀᴛ ꜱᴛʀɪᴄᴛʟʏ ᴍᴀɪɴᴛᴀɪɴꜱ ᴛʜᴇ *ᴘʀɪᴠᴀᴄʏ* ᴏꜰꜰ ɪᴛꜱ ᴜꜱᴇʀ'ꜱ, ᴛʜᴇ ᴅᴀᴛᴀ ꜱᴛᴏʀᴇᴅ ᴏɴ *ᴠʏɴᴀᴀ* ᴡɪʟʟ ʙᴇ *ᴅᴇꜱᴛʀᴏʏᴇᴅ* ᴇᴠᴇʀʏ ᴡᴇᴇᴋ, ꜱᴏ ʏᴏᴜʀ ᴅᴀᴛᴀ ᴡɪʟʟ ɴᴏᴛ ʙᴇ ꜱᴇᴇɴ ʙʏ ᴀɴʏᴏɴᴇ.

╭─ •  *「 VynaaMD 」*
│  ◦  ᴄʟᴏᴄᴋ : *${time}* (RIAU)
│  ◦  ᴅᴀᴛᴇ : *${date}*
│  ◦  ᴠᴇʀꜱɪᴏɴ : *${version}*
│  ◦  ᴀᴜᴛʜᴏʀ : *Ytb Vynα Vαlerié.*
│  ◦  ᴘʀᴇꜰɪx :  *.*
│  ◦  ꜱʜᴏᴡ ᴀʟʟ ᴍᴇɴᴜ : *.allmenu*
│  ◦  ꜱʜᴏᴡ ᴀʙᴏᴜᴛ : *.about*
╰──── •`

	let thumbnailUrl = "https://link.sazumiviki.me/3i61F1"
	let sourceUrl = "https://shoplinks.to/vyna-store"

	conn.reply(m.chat, mainmenu, m, {
		contextInfo: {
			externalAdReply: {
				title: `VynaaMD 🦄`,
				body: "Hi, welcome to Vynaa Bot Whatsapp",
				thumbnailUrl: thumbnailUrl,
				sourceUrl: sourceUrl,
				mediaType: 1,
				renderLargerThumbnail: true
			}
		}
	})

	let songUrl = 'https://e.top4top.io/m_2703kkbxo1.mp3'
	let res2 = await axios.get(songUrl, {
		responseType: 'arraybuffer'
	})
	await conn.sendFile(m.chat, Buffer.from(res2.data), 'song.mp3', '', m)
}

handler.command = /^menu$/i
handler.help = ['menu']
handler.tags = ['main']
handler.register = true
handler.limit = true

module.exports = handler