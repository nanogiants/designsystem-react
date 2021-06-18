const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const TOKEN_SOURCE_FILE = require('../src/lib/tokens');
const VARIABLES_DESTINATION_PATH = path.join(
  __dirname,
  '../src/lib/style/variables.scss'
);

const TEMP_FOLDER = 'temp';

const TEMP_FILES = path.join(__dirname, `./${TEMP_FOLDER}/*.*`);

fs.mkdirSync(path.join(__dirname, TEMP_FOLDER));

Object.entries(TOKEN_SOURCE_FILE).forEach(([key, value]) => {
  fs.writeFileSync(
    path.join(__dirname, TEMP_FOLDER, `${key}.js`),
    `module.exports = ${JSON.stringify(value, undefined, 2)}`
  );
});

fs.unlinkSync(VARIABLES_DESTINATION_PATH);

exec(
  `node_modules/.bin/json-to-scss "${TEMP_FILES}" "${VARIABLES_DESTINATION_PATH}" && npm run compile-sass`,
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    fs.rmdirSync(path.join(__dirname, TEMP_FOLDER), { recursive: true });
  }
);
