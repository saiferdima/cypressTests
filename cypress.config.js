const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.solvexus.com/',
    specPattern: "cypress/e2e/demo/**/*.cy.{js,jsx,ts,tsx}",
    watchForFileChanges: false,
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/my-test-output-[hash].xml',
      toConsole: true,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
