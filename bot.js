const http = require('http')

const PORT = process.env.PORT || 3000

http.createServer((req, res) => {
  res.write('Bot is running')
  res.end()
}).listen(PORT, () => {
  console.log('Web server running on ' + PORT)
})

const mineflayer = require('mineflayer')

function createBot() {
  console.log("Starting Minecraft bot...")

  const bot = mineflayer.createBot({
    host: 'PB36-SMP1.aternos.me',
    port: 24464,
    username: 'SHAANKRAAAAAAA',
    version: '1.21.4'
  })

  bot.on('spawn', () => {
  console.log('Bot joined!')

  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => {
      bot.setControlState('jump', false)
    }, 500)

    console.log('Bot moving')
  }, 10000)
})

  bot.on('error', (err) => {
    console.log('Error:', err.message)
  })

  bot.on('end', () => {
    console.log('Disconnected! Reconnecting in 10 seconds...')
    setTimeout(createBot, 10000)
  })
}

createBot()
