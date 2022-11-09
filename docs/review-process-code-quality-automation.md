### Steps

1. Pipeline review
    - GitHub Actions
    - SonarCloud
    - Performance Testing
      - Server Performance Tests with K6 (not confirmed yet)
      - e.g "User interactions should take 100ms"

    - Unit-Test Coverage checks
    - E2E-Test Coverage ?
    - Dependabot (Creates PR with new package versions)
    - Security Tests:
      - SonarQube's SAST (checks security during PR)<https://www.sonarqube.org/features/security/sast/?gads_campaign=ROW-1-Generic&gads_ad_group=SAST&gads_keyword=software%20security%20testing&gclid=Cj0KCQjwmouZBhDSARIsALYcouou4usnt_Yx0vbCO-4ui6th0-g19MQNp_vJx4k_6PJCNOjmtBbkMF0aAtzXEALw_wcB>
    - Commit rules [link to very strict rules]
      - TBD:
      - e.g exactly one unit test
      - e.g no more than 100 lines changed
      - e.g only 2-3 files changed
      - e.g All PRs must have a similar size!
2. Self Code-Review
3. Buddy Code-Review
4. Tester & design review
    - Metasploit (Database Security Check)
    - Browserstack.com
5. Mid-level dev Code-Review (6 months in project)
6. Beta-User review (in release-branch)
7. Senior-dev review (should only do "complete" review of the application)
8. Product owner review (in the release branch)

    Green = Cheap

    Yellow = Average

    Red = Expensive