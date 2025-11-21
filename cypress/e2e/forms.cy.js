import ContactPage from '../pages/ContactPage'

describe('Form Tests', () => {
  const contactPage = new ContactPage()
  let testData

  before(() => {
    cy.fixture('testData').then((data) => {
      testData = data
    })
  })

  beforeEach(() => {
    contactPage.visit()
  })

  it('should fill and submit contact form', () => {
    contactPage
      .fillForm(testData.contactForm.valid)
      .submitForm()
      .verifyOnContactPage()
  })

  it('should submit form with minimal data', () => {
    contactPage
      .fillForm(testData.contactForm.minimal)
      .submitForm()
      .verifyOnContactPage()
  })

  it('should submit form with long message', () => {
    contactPage
      .fillForm(testData.contactForm.longMessage)
      .submitForm()
      .verifyOnContactPage()
  })
})

