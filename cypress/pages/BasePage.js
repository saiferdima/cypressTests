class BasePage {

    headerElements = {

        baseHeaderMenu: () => cy.get(".header__menu-list"),
        logoButton: () => cy.get(".header__logo"),
        aboutButton: () => this.headerElements.baseHeaderMenu().find("[href*=about]"),
        servicesButton: () => this.headerElements.baseHeaderMenu().find("[href*=services]"),
        careersButton: () => this.headerElements.baseHeaderMenu().find("[href*= careers]"),
        contactButton: () => this.headerElements.baseHeaderMenu().find("[href*=contact]"),
        changeLanguageButton: () => cy.get(".header__lang-selected"),
        getInTouchButton: () => cy.get("a[href*=get-in-touch]").eq(0),
    }

    getAboutButton() {
        return this.headerElements.aboutButton()
    }

    getServicesButton() {
        return this.headerElements.servicesButton()
    }

    getCareersButton() {
        return this.headerElements.careersButton()
    }

    getGetInTouchButton() {
        return this.headerElements.getInTouchButton()
    }

}


export default BasePage
