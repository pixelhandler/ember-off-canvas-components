#!/bin/sh

echo "postinstall..."

echo "installing bower dependendies"
npm install bower
./node_modules/.bin/bower install

echo "installing node-sass"
npm install node-sass

echo "compiling CSS to /vendor with node-sass"
npm run sass
