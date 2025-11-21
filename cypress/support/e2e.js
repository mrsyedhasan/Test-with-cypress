// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Mask sensitive fields (username and password) in screenshots by adding CSS
beforeEach(() => {
  cy.window().then((win) => {
    // Check if style already exists to avoid duplicates
    if (!win.document.getElementById('cypress-mask-style')) {
      // Add CSS to mask username and password fields in screenshots/browser preview
      const style = win.document.createElement('style')
      style.id = 'cypress-mask-style'
      style.textContent = `
        /* Mask password fields */
        input[type="password"],
        input[id*="password" i],
        input[name*="password" i],
        input[id="password"],
        input[name="password"] {
          -webkit-text-security: disc !important;
          text-security: disc !important;
        }
        /* Mask username fields - more specific selectors */
        input[id="username"],
        input[name="username"],
        input[id*="username" i],
        input[name*="username" i],
        input[type="text"][id*="user" i],
        input[type="text"][name*="user" i],
        input[type="email"][id*="user" i],
        input[type="email"][name*="user" i] {
          -webkit-text-security: disc !important;
          text-security: disc !important;
        }
      `
      win.document.head.appendChild(style)
    }
  })
})

// Alternatively you can use CommonJS syntax:
// require('./commands')

