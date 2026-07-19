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
  const bot = mineflayer.createBot({
    host: 'PB36-SMP1.aternos.me',
    port: 24464,
    username: 'SHAANKRAAAAAAA',
    version: '1.21.4'
  })

  bot.on('spawn', () => {
    console.log('Bot joined!')

    setInterval(() => {
      bot.swingArm('right')
      console.log('Bot active')
    }, 10000)

    setInterval(() => {
      bot.setControlState('forward', true)

      setTimeout(() => {
        bot.setControlState('forward', false)
      }, 1000)

    }, 30000)
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
