const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'ihjenn',
  e2e: {
    "baseUrl": "https://hypotheken.triodos.nl",
    // "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },
});