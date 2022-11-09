- Initialize & create same tests
- Prompt to create a CI pipeline for you.<br/>
    `npm init playwright@latest`

### Run E2E-Tests locally

    - `npx playwright test`

### Run E2E-Tests in pipeline

  - Create `/github/workflows/playwright.yml`
  
        name: Playwright Tests
    
        on: push
     
        jobs:
     
          test:
          
            timeout-minutes: 60
            
            runs-on: ubuntu-latest
            
            steps:
            
              uses: actions/checkout@v2
              
              uses: actions/setup-node@v2
              
                with:
                
                  node-version: "14.x"
                  
              name: Install dependencies
              
              run: npm ci
              
                name: Install Playwright Browsers
                
              run: npx playwright install --with-deps
              
                name: Start Server
                
              run: |
              
                npm install -g serve
                
                serve ./build -l 1234 &
                
              name: Run Playwright tests
              
              run: npx playwright test
              
              uses: actions/upload-artifact@v2
              
              if: always()
              
              with:
              
                name: playwright-report
                
                path: playwright-report/
                
                retention-days: 30

### Playwright Documentation

  - Config: https://github.com/maximiliangarmatsch/devops-boilerplate/blob/playwright-test/playwright.config.js
  - Docs: https://playwright.dev/docs/test-configuration
