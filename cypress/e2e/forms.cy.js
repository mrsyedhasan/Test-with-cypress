import ContactPage from '../pages/ContactPage'

describe('Form Tests', () => {
  const contactPage = new ContactPage()

  it('should fill and submit contact form', () => {
    cy.fixture('testData').then((data) => {
      contactPage
        .visit()
        .fillForm(data.contactForm.valid)
        .submitForm()
        .verifyOnContactPage()
    })
  })

  it('should submit form with minimal data', () => {
    cy.fixture('testData').then((data) => {
      contactPage
        .visit()
        .fillForm(data.contactForm.minimal)
        .submitForm()
        .verifyOnContactPage()
    })
  })

  it('should submit form with long message', () => {
    cy.fixture('testData').then((data) => {
      contactPage
        .visit()
        .fillForm(data.contactForm.longMessage)
        .submitForm()
        .verifyOnContactPage()
    })
  })
})

