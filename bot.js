const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'PB36-SMP1.aternos.me',
  port: 24464,
  username: 'AFK_Bot',
  version: false
})

bot.on('spawn', () => {
  console.log('Bot joined!')
})

bot.on('end', () => {
  console.log('Disconnected!')
})

bot.on('error', console.log)
