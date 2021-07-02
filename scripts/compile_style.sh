#!/bin/bash

npm run compile:tokens
npm run compile:sass

sed -i "" '1s/^/\/\/FILE GETS AUTO GENERATED - DO NOT EDIT MANUALLY\'$'\n/g' src/lib/style/variables.scss