import BasePage from './BasePage'

/**
 * Checkboxes Page Object Model
 * Contains all selectors and methods for the Checkboxes page
 */
class CheckboxesPage extends BasePage {
  // Selectors
  get checkboxes() {
    return cy.get('input[type="checkbox"]')
  }

  get firstCheckbox() {
    return this.checkboxes.first()
  }

  get lastCheckbox() {
    return this.checkboxes.last()
  }

  // Page Actions
  /**
   * Navigate to the checkboxes page
   */
  visit() {
    cy.visit('/checkboxes')
    return this
  }

  /**
   * Verify checkboxes are displayed
   * @param {number} expectedCount - Expected number of checkboxes
   */
  verifyCheckboxesDisplayed(expectedCount = 2) {
    this.checkboxes.should('have.length', expectedCount)
    return this
  }

  /**
   * Check the first checkbox
   */
  checkFirst() {
    this.firstCheckbox.check()
    return this
  }

  /**
   * Uncheck the first checkbox
   */
  uncheckFirst() {
    this.firstCheckbox.uncheck()
    return this
  }

  /**
   * Check the last checkbox
   */
  checkLast() {
    this.lastCheckbox.check()
    return this
  }

  /**
   * Uncheck the last checkbox
   */
  uncheckLast() {
    this.lastCheckbox.uncheck()
    return this
  }

  /**
   * Verify first checkbox is checked
   */
  verifyFirstChecked() {
    this.firstCheckbox.should('be.checked')
    return this
  }

  /**
   * Verify first checkbox is unchecked
   */
  verifyFirstUnchecked() {
    this.firstCheckbox.should('not.be.checked')
    return this
  }

  /**
   * Verify last checkbox is checked
   */
  verifyLastChecked() {
    this.lastCheckbox.should('be.checked')
    return this
  }

  /**
   * Verify last checkbox is unchecked
   */
  verifyLastUnchecked() {
    this.lastCheckbox.should('not.be.checked')
    return this
  }

  /**
   * Toggle first checkbox (check if unchecked, uncheck if checked)
   */
  toggleFirst() {
    this.firstCheckbox.then(($checkbox) => {
      if ($checkbox.is(':checked')) {
        this.uncheckFirst()
      } else {
        this.checkFirst()
      }
    })
    return this
  }

  /**
   * Toggle last checkbox (check if unchecked, uncheck if checked)
   */
  toggleLast() {
    this.lastCheckbox.then(($checkbox) => {
      if ($checkbox.is(':checked')) {
        this.uncheckLast()
      } else {
        this.checkLast()
      }
    })
    return this
  }
}

export default CheckboxesPage

