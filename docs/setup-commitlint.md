### Commitlint

- Commitlint: <https://commitlint.js.org/>

### setup

1. install commitlint-cli using : <br/>
  `npm install @commitlint/cli @commitlint/config-conventional --save-dev`
2. create a new file 'commitlint.config.js' in root of project and add following
  configuration:

  ```
  module.exports = {
        extends: [
            "@commitlint/config-conventional"
        ],
    }
  }
  ```

3. install husky and enable husky hooks <br/> `npm install husky --save-dev`
  <br/> `npx husky install`
4. Add following script to enable commitlint with husky <br/>
  `npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"`

### Usage

- Format of commit message is <br /> `git commit -m 'subject(scope?): message'`
- subject should be one of follwing types: <br />
  `[build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]`
- scope is optional

### Example

- `git commit -m 'test:this is a test'`
- `git commit -m 'docs(commitlint): documentation'`