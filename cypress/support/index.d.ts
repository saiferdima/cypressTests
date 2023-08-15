/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {


        /**
         * Default before tests scripts
         * @example
         * cy.invokeDefaultBeforeScript()
         */
        invokeDefaultBeforeScript(): Chainable<false>
        /**
         * Just Example
         * @example
         * cy.exampleWithInputs('title')
         */
        exampleWithInputs(title: string): Chainable<any>

    }
}
