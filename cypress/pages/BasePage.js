/**
 * Base Page Object Model
 * Contains common functionality that all page objects can inherit
 */
class BasePage {
  /**
   * Get current URL
   */
  getCurrentUrl() {
    return cy.url()
  }

  /**
   * Verify URL contains a specific path
   * @param {string} path - The path to verify
   */
  verifyUrlContains(path) {
    cy.url().should('include', path)
    return this
  }

  /**
   * Take a screenshot
   * @param {string} name - Screenshot name
   */
  takeScreenshot(name) {
    cy.screenshot(name)
    return this
  }
}

export default BasePage

