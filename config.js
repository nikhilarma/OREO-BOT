import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '33757051153', process.env.OWNER_NAME || '•⏤⵿༄ 𝆺𝅥⃝⃪⃜❤️ᴄ͢͢͢ʀɪᴍɪɴᴀʟ𓆪ꪾ❦︎ 𝆺𝅥⃝🍷', true],
  ['33757051153', '•⏤⵿༄ 𝆺𝅥⃝⃪⃜❤️ᴄ͢͢͢ʀɪᴍɪɴᴀʟ𓆪ꪾ❦︎ 𝆺𝅥⃝🍷', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || '•⏤⵿༄ 𝆺𝅥⃝⃪⃜❤️ᴄ͢͢͢ʀɪᴍɪɴᴀʟ𓆪ꪾ❦︎ 𝆺𝅥⃝🍷'
global.botname = process.env.BOT_NAME || 'Nik'

//Extra Shortcuts
global.smlink = process.env.SOCIAL_MEDIA_LINK || 'https://www.instagram.com/sanataan_009'
global.gclink = process.env.GROUP_LINK || 'https://chat.whatsapp.com/gghhhjjjok'
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.stkpack = process.env.BOT_NAME || '•⏤⵿༄ 𝆺𝅥⃝⃪⃜❤️ᴄ͢͢͢ʀɪᴍɪɴᴀʟ𓆪ꪾ❦︎ 𝆺𝅥⃝🍷'
global.stkowner = process.env.OWNER_NAME || '𝐃𝚫𝚪𝐊 𝚴𝚰𝐊'

//Watermark
global.maker = process.env.MAKER || 'Made with ❤️ by  𝐃𝚫𝚪𝐊 𝚴𝚰𝐊'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
