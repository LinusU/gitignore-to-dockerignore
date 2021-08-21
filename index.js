function transformLine (line) {
  if (line.trim() === '') return ''
  if (line.startsWith('#')) return line

  if (line.startsWith('!/')) return '!' + line.slice(2)
  if (line.startsWith('!')) return '!**/' + line.slice(1)
  if (line.startsWith('/')) return line.slice(1)

  return '**/' + line
}

export default function gitignoreToDockerignore (input) {
  return '.git/\n' + input.split(/\r?\n/g).map(transformLine).join('\n')
}
