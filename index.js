import walk from 'ignore-walk'

import { basename, dirname, join } from 'node:path'
import { promisify } from 'node:util'
import { readFile } from 'node:fs/promises'

const walkAsync = promisify(walk)

function transformLine (line) {
  if (line.trim() === '') return ''
  if (line.startsWith('#')) return line

  if (line.startsWith('!/')) return '!' + line.slice(2)
  if (line.startsWith('!')) return '!**/' + line.slice(1)
  if (line.startsWith('/')) return line.slice(1)

  return '**/' + line
}

export function convertToDockerignore (input) {
  return '.git/\n' + input.split(/\r?\n/g).map(transformLine).join('\n')
}

export default async function generateDockerignore (directory) {
  const allFiles = await walkAsync({ path: directory, ignoreFiles: ['.gitignore'] })
  const ignoreFiles = allFiles.filter(file => basename(file) === '.gitignore')

  let result = '.git/\n'

  for (const file of ignoreFiles) {
    const lines = (await readFile(join(directory, file), 'utf8')).split(/\r?\n/g)

    // Top-most file
    if (file === '.gitignore') {
      result += lines.map(transformLine).join('\n') + '\n'
      continue
    }

    result += '# From ' + file + '\n'

    for (const line of lines) {
      const out = transformLine(line)

      if (out === '' || out.startsWith('#')) {
        result += out + '\n'
      } else if (out.startsWith('!')) {
        result += '!' + dirname(file) + '/' + out.slice(1) + '\n'
      } else {
        result += dirname(file) + '/' + out + '\n'
      }
    }
  }

  return result
}
