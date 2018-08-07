#!/usr/bin/env node

const fs = require('fs')
const convert = require('./')

if (process.argv.includes('--help')) {
  console.error('Usage: gitignore-to-dockerignore')
} else {
  const input = fs.readFileSync('.gitignore').toString()
  fs.writeFileSync('.dockerignore', convert(input))
}
