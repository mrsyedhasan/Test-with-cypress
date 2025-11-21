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
  // Create a custom log entry with masked value
  const log = Cypress.log({
    name: 'typeSecure',
    message: mask,
    $el: subject,
    consoleProps: () => {
      return {
        'Masked Value': mask,
        'Element': subject
      }
    }
  })
  
  // Use native DOM methods to set value without Cypress logging
  return cy.wrap(subject, { log: false }).then(($el) => {
    const el = $el[0]
    
    // Clear existing value
    el.value = ''
    
    // Set the value directly using native DOM
    el.value = text
    
    // Trigger input events to ensure React/Vue/etc. frameworks detect the change
    const inputEvent = new Event('input', { bubbles: true })
    const changeEvent = new Event('change', { bubbles: true })
    el.dispatchEvent(inputEvent)
    el.dispatchEvent(changeEvent)
    
    log.set({ $el: $el })
    return cy.wrap($el, { log: false })
  })
})

/**
 * Type username securely (shows masked value in logs)
 * Completely hides the actual value from all Cypress logs and console
 */
Cypress.Commands.add('typeUsername', { prevSubject: 'element' }, (subject, username) => {
  // Create minimal log with only masked value
  const log = Cypress.log({
    name: 'typeUsername',
    message: '****',
    $el: subject,
    // Override consoleProps to ensure no value leaks
    consoleProps: () => {
      return {
        'Username': '**** (masked)',
        'Selector': subject.selector || 'element'
      }
    }
  })
  
  // Use native DOM - completely bypass Cypress type command
  return cy.wrap(subject, { log: false }).then(($el) => {
    const el = $el[0]
    
    // Store original value length for masking display if needed
    const length = username ? username.length : 0
    
    // Clear and set value using native DOM (no Cypress logging)
    el.value = ''
    el.value = username
    
    // Apply text-security CSS directly to the element to ensure masking
    el.style.setProperty('-webkit-text-security', 'disc', 'important')
    el.style.setProperty('text-security', 'disc', 'important')
    
    // Trigger events to ensure frameworks detect the change
    const inputEvent = new Event('input', { bubbles: true, cancelable: true })
    const changeEvent = new Event('change', { bubbles: true, cancelable: true })
    el.dispatchEvent(inputEvent)
    el.dispatchEvent(changeEvent)
    
    // Update log with element but no value
    log.set({ 
      $el: $el,
      message: `**** (${length} chars)`
    })
    
    // Return wrapped element without logging
    return cy.wrap($el, { log: false })
  })
})

/**
 * Type password securely (shows masked value in logs)
 * Completely hides the actual value from all Cypress logs and console
 */
Cypress.Commands.add('typePassword', { prevSubject: 'element' }, (subject, password) => {
  // Create minimal log with only masked value
  const log = Cypress.log({
    name: 'typePassword',
    message: '****',
    $el: subject,
    // Override consoleProps to ensure no value leaks
    consoleProps: () => {
      return {
        'Password': '**** (masked)',
        'Selector': subject.selector || 'element'
      }
    }
  })
  
  // Use native DOM - completely bypass Cypress type command
  return cy.wrap(subject, { log: false }).then(($el) => {
    const el = $el[0]
    
    // Store original value length for masking display if needed
    const length = password ? password.length : 0
    
    // Clear and set value using native DOM (no Cypress logging)
    el.value = ''
    el.value = password
    
    // Apply text-security CSS directly to the element to ensure masking
    el.style.setProperty('-webkit-text-security', 'disc', 'important')
    el.style.setProperty('text-security', 'disc', 'important')
    
    // Trigger events to ensure frameworks detect the change
    const inputEvent = new Event('input', { bubbles: true, cancelable: true })
    const changeEvent = new Event('change', { bubbles: true, cancelable: true })
    el.dispatchEvent(inputEvent)
    el.dispatchEvent(changeEvent)
    
    // Update log with element but no value
    log.set({ 
      $el: $el,
      message: `**** (${length} chars)`
    })
    
    // Return wrapped element without logging
    return cy.wrap($el, { log: false })
  })
})

