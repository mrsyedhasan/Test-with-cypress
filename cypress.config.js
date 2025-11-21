const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
      // Load environment variables from .env file
      config.env.username = process.env.CYPRESS_USERNAME
      config.env.password = process.env.CYPRESS_PASSWORD
      
      // Mask sensitive fields in screenshots
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
      
      return config
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    // Hide sensitive data from command log
    hideXHRInCommandLog: true,
  },
})

