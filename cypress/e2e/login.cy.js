import LoginPage from '../pages/LoginPage'

describe('Login Page Tests', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit()
  })

  it('should display login form', () => {
    loginPage.verifyLoginPageDisplayed()
  })

  it('should show error message for invalid credentials', () => {
    cy.fixture('testData').then((data) => {
      loginPage
        .enterUsername(data.users.invalid.username)
        .enterPassword(data.users.invalid.password)
        .clickLogin()
        .verifyErrorMessage(data.errorMessages.invalidLogin)
    })
  })

  it('should login successfully with valid credentials', () => {
    loginPage
      .login(
        Cypress.env('username'),
        Cypress.env('password')
      )
      .verifySuccessfulLogin()
  })
})

