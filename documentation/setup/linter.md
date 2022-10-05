# Super Linter setup

- Create a new file in your repository called .github/workflows/linter.yml
- Copy the example workflow from <https://github.com/marketplace/actions/super-linter> into that new file, no extra configuration required
- Commit that file to a new branch
- Open up a pull request and observe the action working

## Setup Super-Linter outside GitHub Actions(Locally)

- Clone your testing source code to your local
- Install Docker
- Pull the container down
- Run the container
- Troubleshoot

## Install Docker locally 

- [Docker Installation Doc](https://docs.docker.com/get-docker/)

## Download Super-Linter Docker container

- Pull the latest Docker container down from DockerHub
  - `docker pull github/super-linter:latest` Once the container has been downloaded locally,


