import DynamicContentPage from '../pages/DynamicContentPage'

describe('Dynamic Content Tests', () => {
  const dynamicContentPage = new DynamicContentPage()

  it('should load dynamic content', () => {
    dynamicContentPage
      .visit()
      .waitForContentToLoad(10000, 3)
      .verifyContentBlocksVisible()
  })

  it('should reload dynamic content', () => {
    dynamicContentPage
      .visit(true) // Load with static content
      .reloadAndVerifyContent()
  })
})

