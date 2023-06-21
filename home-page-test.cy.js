///<reference types="Cypress"/>

import HomePage from "./pages/home-page.cy";

const homePage = new HomePage('www.webdriveruniversity.com');

describe('Home page elements', () => {
    it('title contain heading titles', () => {
        homePage.visit();
        homePage.verifyHeadingTitles();
    })
    it('The carousel-button left is clicable', () => {
        homePage.visit();
        homePage.getCarouselLeftControl()
    })
    it('The carousel-button right is clicable', () => {
        homePage.visit();
        homePage.getCarouselRightControl()
            
    })
    it('The button "Find Out More!" is visible & clicable', () => {
        homePage.visit();
        homePage.getButtonFindOutMore()
            
    })
    it('"Find Out More" modal is visible', () => {
        homePage.visit();
        homePage.getButtonFindOutMore()
        homePage.getFindOutMoreModal().should('be.visible');
    })
    it('Make sure that"Find Out More","Close","X" modal buttons is working', () => {
        homePage.visit();
        homePage.getButtonFindOutMore()

        //Close button    
        homePage.getFindOutMoreModal().should('be.visible');
        homePage.getModalButtonClose()
        homePage.getFindOutMoreModal().should('not.be.visible');

        //Find Out More button
        homePage.getButtonFindOutMore()
        homePage.getModalButtonFindOutMore()
        homePage.getFindOutMoreModal().should('not.be.visible');

        //X button
        homePage.getButtonFindOutMore()
        homePage.getModalButtonX()
        homePage.getFindOutMoreModal().should('not.be.visible');
    })
})