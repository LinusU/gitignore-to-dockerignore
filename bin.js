#!/usr/bin/env node

import fs from 'node:fs'
import convert from './index.js'

if (process.argv.includes('--help')) {
  console.error('Usage: gitignore-to-dockerignore')
} else {
  const input = fs.readFileSync('.gitignore').toString()
  fs.writeFileSync('.dockerignore', convert(input))
}
