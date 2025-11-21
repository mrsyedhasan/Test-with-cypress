import BasePage from './BasePage'

/**
 * Login Page Object Model
 * Contains all selectors and methods for the Login page
 */
class LoginPage extends BasePage {
  // Selectors
  get heading() {
    return cy.get('h2')
  }

  get usernameInput() {
    return cy.get('#username')
  }

  get passwordInput() {
    return cy.get('#password')
  }

  get loginButton() {
    return cy.get('button[type="submit"]')
  }

  get flashMessage() {
    return cy.get('#flash')
  }

  // Page Actions
  /**
   * Navigate to the login page
   */
  visit() {
    cy.visit('/login')
    return this
  }

  /**
   * Verify login page is displayed
   */
  verifyLoginPageDisplayed() {
    this.heading.should('contain', 'Login Page')
    this.usernameInput.should('be.visible')
    this.passwordInput.should('be.visible')
    this.loginButton.should('be.visible')
    return this
  }

  /**
   * Enter username securely (masked in logs)
   * @param {string} username - The username to enter
   */
  enterUsername(username) {
    this.usernameInput.typeUsername(username)
    return this
  }

  /**
   * Enter password securely (masked in logs)
   * @param {string} password - The password to enter
   */
  enterPassword(password) {
    this.passwordInput.typePassword(password)
    return this
  }

  /**
   * Click the login button
   */
  clickLogin() {
    this.loginButton.click()
    return this
  }

  /**
   * Login with credentials
   * @param {string} username - The username
   * @param {string} password - The password
   */
  login(username, password) {
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
    return this
  }

  /**
   * Verify error message is displayed
   * @param {string} message - Expected error message
   */
  verifyErrorMessage(message) {
    this.flashMessage.should('be.visible').and('contain', message)
    return this
  }

  /**
   * Verify successful login
   */
  verifySuccessfulLogin() {
    cy.url().should('include', '/secure')
    this.flashMessage.should('contain', 'You logged into a secure area!')
    return this
  }
}

export default LoginPage

