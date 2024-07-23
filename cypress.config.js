const { defineConfig } = require("cypress");
const path = require("path");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.advantageonlineshopping.com',
    specPattern: 'cypress/integrations/**/*.spec.js',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
      reportFilename: 'report-[name]'
    },
    setupNodeEvents(on, config) {
      on('after:run', (results) => {
        if (results) {
          const reportDir = path.join(__dirname, 'cypress/reports');
          
          // Renombrar archivos con timestamp
          fs.readdir(reportDir, (err, files) => {
            if (err) throw err;

            files.forEach(file => {
              if (file.startsWith('report') && file.endsWith('.json')) {
                const timestamp = Date.now();
                const newFileName = `${path.parse(file).name}-${timestamp}.json`;
                fs.renameSync(path.join(reportDir, file), path.join(reportDir, newFileName));
              }
            });
          });
        }
      });
    },
  },
});