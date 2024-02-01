const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: 'https://loginxp.vercel.app',
    screenshotsFolder: "cypress/results/screenshots",
    videosFolder: "cypress/results/videos",
  },
  env: {
    allureAttachRequests: true,
    allureAddVideoOnPass: true
  }
})
