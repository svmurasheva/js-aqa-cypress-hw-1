import { ContactUsPage } from "../pages/Contact-Us-Page.cy";
import { HomePage } from "../pages/home-page.cy"
import { GeneralStep } from "./general-step";
export class ContactUsStep extends GeneralStep {
    visit() {
      cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
      cy.url().should('include', 'contactus');
    }
    fillAndVerifyContactUsForm(user) {
      if (user.first_name) {
        ContactUsPage.getFirstName.type(user.first_name).should('have.value',user.first_name);
      }
      if (user.last_name) {
        ContactUsPage.getLastName.type(user.last_name).should('have.value',user.last_name);
      }
      if (user.email) {
        ContactUsPage.getEmail.type(user.email).should('have.value',user.email);
      }
      if (user.comment) {
        ContactUsPage.getComment.type(user.comment).should('have.value',user.comment);
      }
    }

    submitContactUsForm() {
      ContactUsPage.getSubmitButton.click();
    }

    verifyThatSuccessMessageIsDisplayed() {
      ContactUsPage.getSuccessSubmitMessage.should('exist');
      ContactUsPage.getAllFieldsAreRequaredError.should('not.exist');
      ContactUsPage.getInvalidEmailError.should('not.exist')
    }

    veryfyRedirectToContactUsPage() {
      HomePage.visit();
      HomePage.getButtonFindOutMore();
      cy.url().should('include', 'contactus');
      
    }
}
export const contactUsStep = new ContactUsStep();