import assert from 'node:assert'
import fs from 'node:fs/promises'
import path from 'node:path'

import temp from 'fs-temp/promises'

import generateDockerignore from './index.js'

const root = await temp.mkdir()

await fs.writeFile(path.join(root, '.gitignore'), '/a/\n/hello.txt\n')
await fs.writeFile(path.join(root, 'hello.txt'), 'hello')

await fs.mkdir(path.join(root, 'a'))
await fs.writeFile(path.join(root, 'a/.gitignore'), '/do-not-include.txt\n')
await fs.writeFile(path.join(root, 'a/do-not-include.txt'), 'hello')

await fs.mkdir(path.join(root, 'b'))
await fs.writeFile(path.join(root, 'b/.gitignore'), '/ignore-me.txt\n*.mp4\n')
await fs.writeFile(path.join(root, 'b/ignore-me.txt'), 'hello')

await fs.mkdir(path.join(root, 'c'))
await fs.writeFile(path.join(root, 'c/.gitignore'), `## Various settings
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3
xcuserdata/`)

const actual = await generateDockerignore(root)
const expected = `
.git/
a/
hello.txt

# From b/.gitignore
b/ignore-me.txt
b/**/*.mp4

# From c/.gitignore
## Various settings
c/**/*.pbxuser
!c/**/default.pbxuser
c/**/*.mode1v3
!c/**/default.mode1v3
c/**/*.mode2v3
!c/**/default.mode2v3
c/**/*.perspectivev3
!c/**/default.perspectivev3
c/**/xcuserdata/
`

assert.strictEqual(actual.trim(), expected.trim())
