# Gitignore → Dockerignore

Generate an equivalent `.dockerignore` file from existing `.gitignore` files.

New in 3.0, handles multiple `.gitignore` files in a directory and its subdirectories, just like Git does.

## Installation

```sh
npm install --save gitignore-to-dockerignore
```

## Usage

### API

#### Directory input

```js
import generateDockerignore from 'gitignore-to-dockerignore'

console.log(await generateDockerignore(process.cwd()))
// .git/
// node_modules/
// **/*.log
//
// # From tests/.gitignore
// tests/**/*.log
```

#### String input

```js
import { convertToDockerignore } from 'gitignore-to-dockerignore'

const input = `
/node_modules/
*.log
`

console.log(convertToDockerignore(input))
// .git/
// node_modules/
// **/*.log
```

### CLI

```sh
# Write a single .dockerignore file from .gitignore files in the current directory and subdirectories
gitignore-to-dockerignore
```
