// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/**
 * Type text securely without showing the actual value in command log
 * Uses native DOM methods to avoid Cypress logging
 * @param {string} text - The text to type
 * @param {string} mask - The mask to show in logs (default: '****')
 */
Cypress.Commands.add('typeSecure', { prevSubject: 'element' }, (subject, text, mask = '****') => {
  return cy.wrap(subject, { log: false }).then(($el) => {
    const el = $el[0]
    el.value = ''
    el.value = text
    
    // Apply text-security CSS for visual masking
    el.style.setProperty('-webkit-text-security', 'disc', 'important')
    el.style.setProperty('text-security', 'disc', 'important')
    
    // Trigger events to ensure frameworks detect the change
    el.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }))
    el.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }))
    
    return cy.wrap($el, { log: false })
  })
})

/**
 * Type username securely (shows masked value in logs)
 * Uses typeSecure internally to avoid code duplication
 */
Cypress.Commands.add('typeUsername', { prevSubject: 'element' }, (subject, username) => {
  const log = Cypress.log({
    name: 'typeUsername',
    message: '****',
    $el: subject,
    consoleProps: () => ({
      'Username': '**** (masked)',
      'Selector': subject.selector || 'element'
    })
  })
  
  return cy.wrap(subject, { log: false }).typeSecure(username, '****').then(($el) => {
    log.set({ $el: $el, message: `**** (${username?.length || 0} chars)` })
    return cy.wrap($el, { log: false })
  })
})

/**
 * Type password securely (shows masked value in logs)
 * Uses typeSecure internally to avoid code duplication
 */
Cypress.Commands.add('typePassword', { prevSubject: 'element' }, (subject, password) => {
  const log = Cypress.log({
    name: 'typePassword',
    message: '****',
    $el: subject,
    consoleProps: () => ({
      'Password': '**** (masked)',
      'Selector': subject.selector || 'element'
    })
  })
  
  return cy.wrap(subject, { log: false }).typeSecure(password, '****').then(($el) => {
    log.set({ $el: $el, message: `**** (${password?.length || 0} chars)` })
    return cy.wrap($el, { log: false })
  })
})

