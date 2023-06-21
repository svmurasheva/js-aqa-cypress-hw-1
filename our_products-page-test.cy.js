///<reference types="Cypress"/>

import ProductPage from "./pages/our_products-page.cy";

const productPage = new ProductPage('www.webdriveruniversity.com');

describe('Our Products page elements', () => {
    it('All product items are visible', () => {
        productPage.visit();
        productPage.getProductItems()
            .should('have.length', 8)
            .each(element => cy.wrap(element).should('be.visible'))
    })
    it('All items contain headings', () => {
        productPage.visit();
        productPage.getProductHeadings()
            .should('have.length', 8)
            .each(heding => cy.wrap(heding).should('be.visible'));
    })
    it('All items contain images', () => {
        productPage.visit();
        productPage.getProductImages()
            .should('have.length', 8)
            .each(heding => cy.wrap(heding).should('be.visible'));
    })
    it('All product modals are visible ', () => {
        productPage.visit();
        productPage.getProductItems().each(item => {
            cy.wrap(item).click();
            productPage.getSpecialOfferModalContent().should('be.visible').should('include.text', 'SPECIAL OFFER!');
            productPage.getSpecialOfferModalFadeIn().should('be.visible');
            productPage.getSpecialOfferModalFadeIn().click();
        });
    })
    it('Verify product modal buttons ', () => {
        productPage.visit();
        productPage.getProductItems().each(item => {
            cy.wrap(item).click();
            productPage.getSpecialOfferModalContent().should('be.visible');
            productPage.getSpecialOfferModalDismissButtons().should('have.length', 3).first().click();
        });
    })
})
