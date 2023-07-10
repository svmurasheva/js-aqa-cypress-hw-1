
 export class HomePage {

  constructor(domainName) {
    this.domainName = domainName;
  }

  visit() {
    cy.visit(`http://${this.domainName}/Page-Object-Model/index.html`)
  }

  verifyHeadingTitles() {
    const expectedHeadings = ['Who Are We?', 'GREAT SERVICE!', 'Why Choose Us?', 'Excellent Customer Service!'];
    for (let heading of expectedHeadings) {
      cy.contains('p.sub-heading', heading).should('have.length', 1);
    }
  }

  getCarouselLeftControl() {
    return cy.get('a.left.carousel-control')
          .should('be.visible')
          .click();
  }

  getCarouselRightControl() {
    return cy.get('a.right.carousel-control')
        .should('be.visible')
        .click();
  }

  getImages() {
    return cy.get('img.slide-image');
  }

  getButtonFindOutMore() {
    return cy.get('button#button-find-out-more')
        .should('be.visible')
        .click();
  }

  getFindOutMoreModal() {
    return cy.get('div.modal-content')
  }

  getModalButtonClose() {
    return cy.xpath('//button[contains(text(), "Close")]')
        .should('be.visible')
        .click();
  }

  getModalButtonFindOutMore() {
    return cy.xpath('//button[contains(text(), "Find Out More")]') 
        .should('be.visible')
        .click();
  }

  getModalButtonX() {
    return cy.xpath('//button[@class="close"]')
        .should('be.visible')
        .click();
  }
}





