# Gitignore → Dockerignore

Generate an equivalent `.dockerignore` file from an existing `.gitignore` file.

## Installation

For a local installation, run:
```sh
npm install --save gitignore-to-dockerignore
```
If you desire to [make it global](https://stackoverflow.com/questions/28440893/install-a-locally-developed-npm-package-globally), run:
```sh
npm link
```
Otherwise, run a [global installation](https://stackoverflow.com/questions/13167588/what-does-the-g-flag-do-in-the-command-npm-install-g-something):
```sh
npm install -g --save gitignore-to-dockerignore
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
