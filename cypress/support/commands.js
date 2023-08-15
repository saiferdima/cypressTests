// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('invokeDefaultBeforeScript', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.intercept("GET",`**/page-data/index/page-data.json`,{response:200,fixture: "index.json"})
    cy.intercept("GET",`**/page-data/careers/page-data.json`,{response:200,fixture: "careers.json"})
    cy.intercept("GET",`**/page-data/about/page-data.json`,{response:200,fixture: "about.json"})
    cy.intercept("GET",`**/page-data/services/page-data.json`,{response:200,fixture: "services.json"})
    cy.intercept("GET",`**/page-data/get-in-touch/page-data.json`,{response:200,fixture: "getInTouch.json"})
    cy.intercept("GET",`**/page-data/contact/page-data.json`,{response:200,fixture: "contact.json"})
    cy.visit('')
    cy.get("#rcc-confirm-button").click()



})

