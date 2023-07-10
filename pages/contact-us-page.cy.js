import { errors } from "./test-data/errors"
export class ContactUsPage {

    
    static get getFirstName() {
        return cy.xpath('//input[@name="first_name"]')
    }

    static get getLastName() {
       return cy.xpath('//input[@name="last_name"]')
    }


    static get getEmail() {
        return cy.xpath('//input[@name="email"]')
    }

    static get getComment() {
        return cy.xpath('//textarea[@name="message"]')
    }

    static get getSubmitButton() {
       return cy.xpath('//input[@type="submit"]');
    }

    static get getResetButton() {
        return cy.xpath('//input[@type="reset"]');
    }

    static get getContactUsHeader() {
       return cy.xpath('//h2[@name="contactme"]')
    }

    static get getSuccessSubmitMessage() {
      return cy.xpath('//h1[.="Thank You for your Message!"]');
    }

    fillContactUsForm(user) {
        if (user.first_name) {
            ContactUsPage.getFirstName.type(user.first_name);
        }
        if (user.last_name) {
            ContactUsPage.getLastName.type(user.last_name);
        }
        if (user.email) {
            ContactUsPage.getEmail.type(user.email);
        }
        if (user.comment) {
            ContactUsPage.getComment.type(user.comment);
        }
        ContactUsPage.getSubmitButton.click();
    }

    verifyContactUsForm(user) {
        if (user.first_name) {
            ContactUsPage.getFirstName.should('have.value', user.first_name)
        }
        if (user.last_name) {
            ContactUsPage.getFirstName.should('have.value', user.last_name)
        }
        if (user.email) {
            ContactUsPage.getFirstName.should('have.value', user.email)
        }
        if (user.comment) {
            ContactUsPage.getFirstName.should('have.value', user.comment)
        }
    }

    static get getInvalidEmailError() {
        return cy.contains(errors.invalidEmail);
    }

    static get getAllFieldsAreRequaredError() {
       return cy.contains(errors.allFieldsAreRequired);
    }
}
