var BasePage = require ('../pages/basepage');
class AboutPage extends BasePage {

    elements = {
        mainPageTitle: () => cy.get("h1").contains("Who we are"),

    }

    getMainPageTitle() {
        return this.elements.mainPageTitle()
    }

    verifyPersonPresent(name){
        cy.get("p.body-large").contains(name).should("exist")

    }

}


export default AboutPage
