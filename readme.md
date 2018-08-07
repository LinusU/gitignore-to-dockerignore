# Gitignore → Dockerignore

Generate an equivalent `.dockerignore` file from an existing `.gitignore` file.

## Installation

```sh
npm install --save gitignore-to-dockerignore
```

## Usage

### API

```js
const gitignoreToDockerignore = require('gitignore-to-dockerignore')

const input = `
/node_modules/
*.log
`

console.log(gitignoreToDockerignore(input))
// .git/
// node_modules/
// **/*.log
```

### CLI

```sh
# Write a .dockerignore file from .gitignore
gitignore-to-dockerignore
```
