const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'PB36-SMP1.aternos.me',
  port: 24464,
  username: 'SHAANKRAAAAAAA',
  version: 1.21.8
})

bot.on('spawn', () => {
  console.log('Bot joined!')
})

bot.on('error', (err) => {
  console.log('Error:', err)
})

bot.on('end', () => {
  console.log('Disconnected!')
})
