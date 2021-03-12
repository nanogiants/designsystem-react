const fs = require('fs');
const path = require('path');

const mainPackageJson = require('./package.json');
const distPackageJson = require('./src/package.json');

distPackageJson.version = mainPackageJson.version;

fs.writeFileSync(
  path.join(__dirname, './src/package.json'),
  JSON.stringify(distPackageJson, null, 2)
);
