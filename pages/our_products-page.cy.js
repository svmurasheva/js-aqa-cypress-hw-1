class ProductPage {

    constructor(domainName) {
        this.domainName = domainName;
    }

    visit() {
        cy.visit(`http://${this.domainName}/Page-Object-Model/products.html`)
    }

    getSpecialOffers() {
        cy.get('#container-special-offers');
    }

    getCameras() {
        return cy.get('#cameras');
    }

    getNewLaptops() {
        return cy.get('#new-laptops');
    }

    getUsedLaptops() {
        return cy.get('#used-laptops');
    }

    getGameConsoles() {
        return cy.get('#game-consoles');
    }

    getComponents() {
        return cy.get('#components');
    }

    getDesktopSystems() {
        return cy.get('#desktop-systems');
    }

    getAudio() {
        return cy.get('#audio');
    }

    getProductItems() {
        return cy.get('div.row>div[data-target="#myModal"]');
    }

    getProductHeadings() {
        return cy.get('div.row>div[data-target="#myModal"]>a>div.thumbnail>div.section-title>p.sub-heading');
    }

    getProductImages() {
        return cy.get('div.row>div[data-target="#myModal"]>a>div.thumbnail>div.caption>img');
    }

    getSpecialOfferModalContent() {
        return cy.get('div#myModal>div>div.modal-content');
    }

    getSpecialOfferModalFadeIn() {
        return cy.get('div#myModal');
    }

    getSpecialOfferModalDismissButtons() {
        return cy.get('div#myModal> * button[data-dismiss="modal"]');
    }

}

export default ProductPage