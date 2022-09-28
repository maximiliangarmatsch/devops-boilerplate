# Commit lint setup

- install commitlint-cli using : <br/>
  `npm install @commitlint/cli @commitlint/config-conventional --save-dev `
- create a new file 'commitlint.config.js' in root of project and add following configuration:
  ```module.exports = {
    module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ],
  }
  }
  ```
