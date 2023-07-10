class ProductPage {

    constructor(domainName) {
        this.domainName = domainName;
    }

    visit() {
        cy.visit(`http://${this.domainName}/Page-Object-Model/products.html`)
    }

    getSpecialOffers() {
        cy.get('div#container-special-offers');
    }

    getCameras() {
        return cy.get('div#cameras');
    }

    getNewLaptops() {
        return cy.get('div#new-laptops');
    }

    getUsedLaptops() {
        return cy.get('div#used-laptops');
    }

    getGameConsoles() {
        return cy.get('div#game-consoles');
    }

    getComponents() {
        return cy.get('div#components');
    }

    getDesktopSystems() {
        return cy.get('div#desktop-systems');
    }

    getAudio() {
        return cy.get('div#audio');
    }

    getProductItems() {
        return cy.xpath('//div[@data-target="#myModal"]');
    }

    getProductHeadings() {
        return cy.xpath('//p[@class="sub-heading"]');
    }

    getProductImages() {
        return cy.xpath('//div[@class="caption"]/img');
    }

    getSpecialOfferModalContent() {
        return cy.xpath('//div[@class="modal-content"]');
    }

    getSpecialOfferModalFadeIn() {
        return cy.get('div#myModal');
    }

    getSpecialOfferModalDismissButtons() {
        return cy.xpath('//button[@data-dismiss="modal"]');
    }

}

export default ProductPage