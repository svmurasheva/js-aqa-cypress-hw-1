class HomePage {

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
    return cy.get('#button-find-out-more')
        .should('be.visible')
        .click();
  }

  getFindOutMoreModal() {
    return cy.get('div.modal-content')
  }

  getModalButtonClose() {
    return cy.contains('button.btn.btn-default', 'Close')
        .should('be.visible')
        .click();
  }

  getModalButtonFindOutMore() {
    return cy.contains('button.btn.btn-default', 'Find Out More')
        .should('be.visible')
        .click();
  }

  getModalButtonX() {
    return cy.get('div.modal-header>button.close')
        .should('be.visible')
        .click();
  }
}

export default HomePage



