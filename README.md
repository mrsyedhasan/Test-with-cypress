# Cypress Test Project

## Quick Start

```bash
npm install
cp .env.example .env
# Update .env with your credentials
npm run cypress:open
```

## Important Notes

### Security
- **Never commit `.env` file** - Contains sensitive credentials
- Always use `Cypress.env('username')` and `Cypress.env('password')` in tests
- Use `typeUsername()` and `typePassword()` commands to mask values in logs
- Credentials are automatically masked in screenshots, videos, and command logs

### Page Object Model
- All tests use Page Object Model pattern
- Page objects located in `cypress/pages/`
- Tests located in `cypress/e2e/`
- All page objects extend `BasePage` for common functionality

### Environment Variables
- Credentials stored in `.env` file (gitignored)
- Access via `Cypress.env('username')` and `Cypress.env('password')`
- `.env.example` provided as template

### Commands
- `npm run cypress:open` - Open Cypress Test Runner
- `npm run cypress:run` - Run tests in headless mode

### Test Structure
```
cypress/
  pages/          # Page Object Models
  e2e/            # Test files
  support/         # Custom commands and config
```
