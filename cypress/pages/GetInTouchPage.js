var BasePage = require ('../pages/basepage');
class GetInTouchPage extends BasePage {

    elements = {
        yourNameInput: () => cy.get("input[name*=name]"),
        companyNameInput: () => cy.get("input[name*=companyName]"),
        messageInput: () => cy.get("textArea[name*=message]"),
        emailInput: () => cy.get("input[name*=email]"),
        submitButton: () => cy.get("button.get-in-touch__button-submit").contains("Submit"),
    }

    getYourNameInput() {
        return this.elements.yourNameInput()
    }

    getCompanyNameInput() {
        return this.elements.companyNameInput()
    }

    getMessageInput() {
        return this.elements.messageInput()
    }

    getEmailInput() {
        return this.elements.emailInput()
    }

    getSubmitButton() {
        return this.elements.submitButton()
    }
}

export default GetInTouchPage
