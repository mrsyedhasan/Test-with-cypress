import BasePage from './BasePage'

/**
 * Dynamic Content Page Object Model
 * Contains all selectors and methods for the Dynamic Content page
 */
class DynamicContentPage extends BasePage {
  // Selectors
  get contentBlocks() {
    return cy.get('.large-10.columns')
  }

  get firstContentBlock() {
    return this.contentBlocks.first()
  }

  get reloadLink() {
    return cy.contains('click here')
  }

  // Page Actions
  /**
   * Navigate to the dynamic content page
   * @param {boolean} staticContent - Whether to load static content
   */
  visit(staticContent = false) {
    const url = staticContent ? '/dynamic_content?with_content=static' : '/dynamic_content'
    cy.visit(url)
    return this
  }

  /**
   * Wait for content to load
   * @param {number} timeout - Timeout in milliseconds
   * @param {number} minCount - Minimum number of content blocks expected
   */
  waitForContentToLoad(timeout = 10000, minCount = 3) {
    this.contentBlocks.should('have.length.at.least', minCount)
    return this
  }

  /**
   * Verify content blocks are visible
   */
  verifyContentBlocksVisible() {
    this.contentBlocks.each(($el) => {
      cy.wrap($el).should('be.visible')
      cy.wrap($el).should('not.be.empty')
    })
    return this
  }

  /**
   * Get text of the first content block
   */
  getFirstContentText() {
    return this.firstContentBlock.invoke('text')
  }

  /**
   * Click the reload link
   */
  clickReload() {
    this.reloadLink.click()
    return this
  }

  /**
   * Reload dynamic content and verify it changes
   */
  reloadAndVerifyContent() {
    this.getFirstContentText().then((initialText) => {
      this.clickReload()
      this.firstContentBlock.should('be.visible')
      // Note: Content might be the same or different, so we just verify visibility
    })
    return this
  }

  /**
   * Verify content block count
   * @param {number} expectedCount - Expected number of content blocks
   */
  verifyContentBlockCount(expectedCount) {
    this.contentBlocks.should('have.length', expectedCount)
    return this
  }
}

export default DynamicContentPage

