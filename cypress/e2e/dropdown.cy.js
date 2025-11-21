import DropdownPage from '../pages/DropdownPage'

describe('Dropdown Tests', () => {
  const dropdownPage = new DropdownPage()

  beforeEach(() => {
    dropdownPage.visit()
  })

  it('should display dropdown with options', () => {
    dropdownPage
      .verifyDropdownDisplayed()
      .verifyDropdownHasOptions(2)
  })

  it('should select option 1', () => {
    dropdownPage
      .selectOption1()
      .verifySelectedValue('1')
  })

  it('should select option 2', () => {
    dropdownPage
      .selectOption2()
      .verifySelectedValue('2')
  })

  it('should select option by value', () => {
    dropdownPage
      .selectOptionByValue('1')
      .verifySelectedOptionText('Option 1')
  })
})

