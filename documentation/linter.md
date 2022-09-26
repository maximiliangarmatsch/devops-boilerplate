# Super Linter setup

- Create a new file in your repository called .github/workflows/linter.yml
- Copy the example workflow from <https://github.com/marketplace/actions/super-linter> into that new file, no extra configuration required
- Commit that file to a new branch
- Open up a pull request and observe the action working

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

For all Environment variables [Click Here](https://github.com/marketplace/actions/super-linter#environment-variables)

## Run Super-Linter outside GitHub Actions(Locally)

If you want to test locally against the Super-Linter to test your branch of code, you will need to complete the following:

- Clone your testing source code to your local environment
- Install Docker to your local environment
- Pull the container down
- Run the container
- Debug/Troubleshoot

## Install Docker to your local machine

- [Docker Installation Doc](https://docs.docker.com/get-docker/)

## Download the latest Super-Linter Docker container

- Pull the latest Docker container down from DockerHub
  - `docker pull github/super-linter:latest` Once the container has been downloaded to your local environment, you can then begin the process, or running the container against your codebase.

## Run the container Locally

- You can run the container locally with the following **Base** flags to run your code:
  - `docker run -e RUN_LOCAL=true -e USE_FIND_ALGORITHM=true -v /path/to/local/codebase:/tmp/lint github/super-linter`
    - To run against a single file you can use: `docker run -e RUN_LOCAL=true -e USE_FIND_ALGORITHM=true -v /path/to/local/codebase/file:/tmp/lint/file github/super-linter`
  - **NOTE:** You need to pass the `RUN_LOCAL` flag to bypass some of the GitHub Actions checks, as well as the mapping of your local codebase to `/tmp/lint` so that the linter can pick up the code
  - **NOTE:** If you want to override the `/tmp/lint` folder, you can set the `DEFAULT_WORKSPACE` environment variable to point to the folder you'd prefer to scan.
  - **NOTE:** The flag:`RUN_LOCAL` will set: `VALIDATE_ALL_CODEBASE` to true. This means it will scan **all** the files in the directory you have mapped. If you want to only validate a subset of your codebase, map a folder with only the files you wish to have linted
  - **NOTE:** Add the `--rm` docker flag to automatically remove the container after execution.

## Troubleshooting

### Run container and gain access to the command-line

If you need to run the container locally and gain access to its command line, you can run the following command:

- `docker run -it --entrypoint /bin/bash github/super-linter`
- This will drop you in the command-line of the docker container for any testing or troubleshooting that may be needed.
