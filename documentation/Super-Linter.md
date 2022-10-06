## Learning

- Super-linter action: https://github.com/marketplace/actions/super-linter
- Super-linting implementation video:
  https://www.youtube.com/watch?v=BCrtoZ04L1Y

# Usage

## Environment variables

| ENV VAR                      | Description                                   |
| ---------------------------- | --------------------------------------------- |
| LINTER_RULES_PATH            | Directory for all linter configuration rules. |
| JAVASCRIPT_ES_CONFIG_FILE    | Filename for ESLint configuration             |
| VALIDATE_ALL_CODEBASE        | Will parse the entire repository              |
|                              | and find all files to validate across         |
|                              | all types.                                    |
| VALIDATE_JAVASCRIPT_STANDARD | Flag to enable or disable the linting process |
|                              | of the JavaScript language                    |
| DEFAULT_BRANCH               | The name of the repository default branch.    |
|                              |                                               |

For all Environment variables
[Click Here](https://github.com/marketplace/actions/super-linter#environment-variables)

## Run the container Locally

- `docker run -e RUN_LOCAL=true -e USE_FIND_ALGORITHM=true -v /path/to/local/codebase:/tmp/lint github/super-linter`
  - To run against a single file you can use:
    `docker run -e RUN_LOCAL=true -e USE_FIND_ALGORITHM=true -v /path/to/local/codebase/file:/tmp/lint/file github/super-linter`
- **NOTE:** You need to pass the `RUN_LOCAL` flag to bypass some of the GitHub
  Actions checks, as well as the mapping of your local codebase to `/tmp/lint`
  so that the linter can pick up the code
- **NOTE:** If you want to override the `/tmp/lint` folder, you can set the
  `DEFAULT_WORKSPACE` environment variable to point to the folder you'd prefer
  to scan.
- **NOTE:** The flag:`RUN_LOCAL` will set: `VALIDATE_ALL_CODEBASE` to true. This
  means it will scan **all** the files in the directory you have mapped. If you
  want to only validate a subset of your codebase, map a folder with only the
  files you wish to have linted
- **NOTE:** Add the `--rm` docker flag to automatically remove the container
  after execution.

## Troubleshooting

If you need to run the container locally use this command:

- `docker run -it --entrypoint /bin/bash github/super-linter`
