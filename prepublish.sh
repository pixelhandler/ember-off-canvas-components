#!/bin/sh

echo "clean vendor directory..."
npm run clean

echo "build and test..."
npm run sass
ember build
ember test

echo "building global/shim dist files..."
rm -fr ./dist
cd ./packaging
../node_modules/.bin/broccoli build ../dist
