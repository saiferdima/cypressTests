/// <reference types="cypress" />
import BasePage from "../../pages/BasePage"
import AboutPage from "../../pages/AboutPage"
import GetInTouchPage from "../../pages/GetInTouchPage"
import teamMembers from "../../fixtures/team"

const basePage = new BasePage
const aboutPage = new AboutPage
const getInTouchPage = new GetInTouchPage
describe('Demo tests', () => {

    beforeEach(() => {
        cy.invokeDefaultBeforeScript()
    })


    it('Main page basic verification', () => {
        basePage.getAboutButton().should("be.visible")
        basePage.getServicesButton().should("be.visible")
        basePage.getCareersButton().should("be.visible")
        basePage.getGetInTouchButton().should("be.visible")
    })



    it('Get in touch form verification', () => {
        basePage.getGetInTouchButton()
            .click()
        getInTouchPage.getYourNameInput().should("be.visible").as("name")
        getInTouchPage.getCompanyNameInput().should("be.visible").as("companyName")
        getInTouchPage.getMessageInput().should("be.visible").as("message")
        getInTouchPage.getEmailInput().should("be.visible").as("email")
        getInTouchPage.getSubmitButton().should("be.visible").as("submitButton")
            .click()
        cy.get(".get-in-touch__form").scrollIntoView().scrollTo("top", {ensureScrollable: false})
        cy.get("@name").should("have.class", "error").scrollIntoView()
            .type("User Name", {force: true})
        cy.get("@message").should("have.class", "error").scrollIntoView()
            .type("Message")
        cy.get("@email").should("have.class", "error")
        cy.get("@submitButton").click()
        cy.get("@email").should("have.class", "error")
        cy.get("@name").should("not.have.class", "error")
        cy.get("@message").should("not.have.class", "error")
    })

    teamMembers.teamNames.forEach((name) =>
        it(`About Page: Team member  ${name} is present `, () => {
            basePage.getAboutButton().should("be.visible").click()
            aboutPage.getMainPageTitle().should("be.visible")
            aboutPage.verifyPersonPresent(name)
        })
    );


})
