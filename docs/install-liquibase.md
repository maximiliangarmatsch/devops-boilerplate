### Goal

- Liquibase can be installed and used in any repository

### Steps

1. In Terminal, in project-root, run:<br/>
     `liquibase init project`
2. Configure the liquibase.properties file to connect to a local test database:

    | Parameters | Value |
    | --- | ---|
    | changeLogFile | path to the sql script containing your changes |
    | url | url to the target database  |
    | User | The target database username |
    | Password | The target database username |

3. Liquibase properties config
    - <https://docs.liquibase.com/concepts/connections/database-connections.html>

### Why Liquibase
  - Liquibase is a database schema change management tool
  - Supports code branching and merging
    - Multiple schema change scripts can automatically be version-tracked
  - Easily rollback changes
    - Essentially, I can deploy and roll back changes for specific schema versions without needing to know what has already been deployed.
  - Generate Database change documentation
  - Automatically generates SQL scripts for code review
  - Supports multiple developers
  - Does not require a live database connection
  - Real-time monitoring & visibility through the Liquibase Hub
- Pricing
  - <https://www.liquibase.com/pricing>
  - It has a free open source community license
  - PRO version sits as $5000/year <https://www.liquibase.com/pricing/pro>, also has a free trial package
  - Enterprise version is negotiable on contact but comes with Advanced rules and strict deployment checks <https://www.liquibase.com/pricing/enterprise>

### Usage
- [Use-liquibase](./use-liquibase.md)