import BasePage from './BasePage'

/**
 * Dropdown Page Object Model
 * Contains all selectors and methods for the Dropdown page
 */
class DropdownPage extends BasePage {
  // Selectors
  get dropdown() {
    return cy.get('#dropdown')
  }

  get dropdownOptions() {
    return cy.get('#dropdown option')
  }

  get selectedOption() {
    return cy.get('#dropdown option:selected')
  }

  // Page Actions
  /**
   * Navigate to the dropdown page
   */
  visit() {
    cy.visit('/dropdown')
    return this
  }

  /**
   * Verify dropdown is displayed
   */
  verifyDropdownDisplayed() {
    this.dropdown.should('be.visible')
    return this
  }

  /**
   * Verify dropdown has options
   * @param {number} minCount - Minimum number of options expected
   */
  verifyDropdownHasOptions(minCount = 2) {
    this.dropdownOptions.should('have.length.at.least', minCount)
    return this
  }

  /**
   * Select an option by text
   * @param {string} optionText - The text of the option to select
   */
  selectOptionByText(optionText) {
    this.dropdown.select(optionText)
    return this
  }

  /**
   * Select an option by value
   * @param {string} value - The value of the option to select
   */
  selectOptionByValue(value) {
    this.dropdown.select(value)
    return this
  }

  /**
   * Select Option 1
   */
  selectOption1() {
    this.selectOptionByText('Option 1')
    return this
  }

  /**
   * Select Option 2
   */
  selectOption2() {
    this.selectOptionByText('Option 2')
    return this
  }

  /**
   * Verify selected option value
   * @param {string} expectedValue - Expected value
   */
  verifySelectedValue(expectedValue) {
    this.dropdown.should('have.value', expectedValue)
    return this
  }

  /**
   * Verify selected option text
   * @param {string} expectedText - Expected text
   */
  verifySelectedOptionText(expectedText) {
    this.selectedOption.should('contain', expectedText)
    return this
  }

  /**
   * Get selected option value
   */
  getSelectedValue() {
    return this.dropdown.invoke('val')
  }

  /**
   * Get selected option text
   */
  getSelectedOptionText() {
    return this.selectedOption.invoke('text')
  }
}

export default DropdownPage

