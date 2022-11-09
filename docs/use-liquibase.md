### Example usage

- Initialise Liquibase, in project-root of Database
  `$ liquibase init project`

- Make changes in Database, e.g execute SQL script
  `--changeset moses:1
  create table company (
      id int primary key,
      name varchar(50) not null,
  )`
- Update database
`liquibase update`

Liquibase command list
<https://docs.liquibase.com/commands/home.html>
Liquibase Concepts
<https://docs.liquibase.com/concepts/home.html>

### Deployment
- [Deploy Liquibase to GitHub](./deploy-liquibase-to-github.md)