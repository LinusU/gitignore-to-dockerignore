#!/usr/bin/env node

import fs from 'node:fs'
import generateDockerignore from './index.js'

if (process.argv.includes('--help')) {
  console.error('Usage: gitignore-to-dockerignore')
} else {
  fs.writeFileSync('.dockerignore', await generateDockerignore(process.cwd()))
}
