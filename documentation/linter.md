# Super Linter setup
- Create a new file in your repository called .github/workflows/linter.yml
- Copy the example workflow from <https://github.com/marketplace/actions/super-linter> into that new file, no extra configuration required
- Commit that file to a new branch
- Open up a pull request and observe the action working
- Enjoy your more stable, and cleaner codebase

## Environment variables
LINTER_RULES_PATH: /
JAVASCRIPT_ES_CONFIG_FILE: .eslintrc.json
VALIDATE_JAVASCRIPT_STANDARD: false
VALIDATE_ALL_CODEBASE: false
VALIDATE_JSON: false
DEFAULT_BRANCH: main
GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}