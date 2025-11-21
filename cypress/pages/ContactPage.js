import BasePage from './BasePage'

/**
 * Contact Page Object Model
 * Contains all selectors and methods for the Contact form page
 */
class ContactPage extends BasePage {
  // Selectors
  get firstNameInput() {
    return cy.get('#firstName')
  }

  get lastNameInput() {
    return cy.get('#lastName')
  }

  get emailInput() {
    return cy.get('#email')
  }

  get messageInput() {
    return cy.get('#message')
  }

  get submitButton() {
    return cy.get('button[type="submit"]')
  }

  get successMessage() {
    return cy.get('.success, .alert-success, #success')
  }

  get errorMessage() {
    return cy.get('.error, .alert-error, #error')
  }

  // Page Actions
  /**
   * Navigate to the contact page
   */
  visit() {
    cy.visit('/contact')
    return this
  }

  /**
   * Enter first name
   * @param {string} firstName - First name
   */
  enterFirstName(firstName) {
    this.firstNameInput.type(firstName)
    return this
  }

  /**
   * Enter last name
   * @param {string} lastName - Last name
   */
  enterLastName(lastName) {
    this.lastNameInput.type(lastName)
    return this
  }

  /**
   * Enter email
   * @param {string} email - Email address
   */
  enterEmail(email) {
    this.emailInput.type(email)
    return this
  }

  /**
   * Enter message
   * @param {string} message - Message text
   */
  enterMessage(message) {
    this.messageInput.type(message)
    return this
  }

  /**
   * Fill out the contact form
   * @param {Object} formData - Form data object
   * @param {string} formData.firstName - First name
   * @param {string} formData.lastName - Last name
   * @param {string} formData.email - Email address
   * @param {string} formData.message - Message text
   */
  fillForm(formData) {
    if (formData.firstName) this.enterFirstName(formData.firstName)
    if (formData.lastName) this.enterLastName(formData.lastName)
    if (formData.email) this.enterEmail(formData.email)
    if (formData.message) this.enterMessage(formData.message)
    return this
  }

  /**
   * Submit the form
   */
  submitForm() {
    this.submitButton.click()
    return this
  }

  /**
   * Fill and submit the form in one action
   * @param {Object} formData - Form data object
   */
  fillAndSubmitForm(formData) {
    this.fillForm(formData).submitForm()
    return this
  }

  /**
   * Verify form is on contact page
   */
  verifyOnContactPage() {
    this.verifyUrlContains('/contact')
    return this
  }

  /**
   * Verify success message is displayed
   * @param {string} message - Expected success message (optional)
   */
  verifySuccessMessage(message) {
    if (message) {
      this.successMessage.should('be.visible').and('contain', message)
    } else {
      this.successMessage.should('be.visible')
    }
    return this
  }

  /**
   * Verify error message is displayed
   * @param {string} message - Expected error message (optional)
   */
  verifyErrorMessage(message) {
    if (message) {
      this.errorMessage.should('be.visible').and('contain', message)
    } else {
      this.errorMessage.should('be.visible')
    }
    return this
  }
}

export default ContactPage

