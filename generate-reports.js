const { exec } = require('child_process');
const path = require('path');
const fs = require('fs').promises;
const { format } = require('date-fns');

// Formatea la fecha actual como aaaa-mm-dd-hh-mm-ss
const timestamp = format(new Date(), 'yyyy-MM-dd-HH-mm-ss');

const reportDir = path.join(__dirname, 'cypress/reports');
const mergedReportPath = path.join(reportDir, `reportAllTest-${timestamp}.json`);
const outputDir = path.join(__dirname, 'mochawesome-report');

function execPromise(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${stderr || error.message}`);
      } else {
        resolve(stdout);
      }
    });
  });
}

async function generateReports() {
  try {
    await fs.access(reportDir);

    console.log('Merging mochawesome reports...');
    await execPromise(`npx mochawesome-merge ${reportDir}/*.json > ${mergedReportPath}`);
    
    console.log('Generating HTML report...');
    await execPromise(`npx marge ${mergedReportPath} --reportDir ${outputDir}`);

    console.log('Report generated in:', outputDir);
  } catch (error) {
    console.error('Error generating reports:', error);
  }
}

generateReports();