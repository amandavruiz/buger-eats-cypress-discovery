const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //projectId: 'qcip3z',
  e2e: {
    projectId: 'qcip3z',
    baseUrl: 'https://buger-eats-qa.vercel.app',
    viewportWidth: 1440,
    viewportHeight: 900,
  },
});