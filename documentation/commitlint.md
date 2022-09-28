# Commit lint setup

- install commitlint-cli using : <br/>
  `npm install @commitlint/cli @commitlint/config-conventional --save-dev `
- create a new file 'commitlint.config.js' in root of project and add following configuration:
  ```
  module.exports = {
        extends: [
            "@commitlint/config-conventional"
        ],
    }
  }
  ```
- install husky and enable husky hooks
  `npm install husky --save-dev`
  `npx husky install`
- Add following script to enable commitlint with husky
  `npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"`
