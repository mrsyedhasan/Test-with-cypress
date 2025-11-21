import CheckboxesPage from '../pages/CheckboxesPage'

describe('Checkboxes Tests', () => {
  const checkboxesPage = new CheckboxesPage()

  beforeEach(() => {
    checkboxesPage.visit()
  })

  it('should display checkboxes', () => {
    checkboxesPage.verifyCheckboxesDisplayed(2)
  })

  it('should check and uncheck checkboxes', () => {
    // First checkbox should be unchecked by default
    checkboxesPage.verifyFirstUnchecked()
    
    // Check the first checkbox
    checkboxesPage.checkFirst().verifyFirstChecked()
    
    // Uncheck the first checkbox
    checkboxesPage.uncheckFirst().verifyFirstUnchecked()
  })

  it('should toggle checkbox state', () => {
    checkboxesPage
      .verifyLastChecked()
      .uncheckLast()
      .verifyLastUnchecked()
  })
})

