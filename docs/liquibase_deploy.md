Steps

- Init file, in project-root
  - .github/workflows/<example>.yml
- Specify deployment workflow, In .yml file:
  
      on: [push, pull_request]

      jobs:
  
        test-liquibase-action:
  
          runs-on: ubuntu-latest
  
          name: Test Liquibase Action
  
          steps:
  
          uses: actions/checkout@v2
  
          uses: liquibase/liquibase-github-action@v7
 
            with:
  
              operation: 'update'
  
              classpath: 'example/changelogs'
  
              changeLogFile: 'profile.test.sql'
  
              username: ...
  
              password: ...
  
              url: ${{secrets.URL}}
  