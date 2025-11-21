import LoginPage from '../pages/LoginPage'

describe('Login Page Tests', () => {
  const loginPage = new LoginPage()
  let testData

  before(() => {
    cy.fixture('testData').then((data) => {
      testData = data
    })
  })

  beforeEach(() => {
    loginPage.visit()
  })

  it('should display login form', () => {
    loginPage.verifyLoginPageDisplayed()
  })

  it('should show error message for invalid credentials', () => {
    loginPage
      .enterUsername(testData.users.invalid.username)
      .enterPassword(testData.users.invalid.password)
      .clickLogin()
      .verifyErrorMessage(testData.errorMessages.invalidLogin)
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

