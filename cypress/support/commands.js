
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

