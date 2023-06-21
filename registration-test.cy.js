///<reference types="Cypress"/>

import { users } from "./pages/test-data/Users-test-data";
import ContactUsPage from "./pages/Contact-Us-Page.cy";
  

const contactUsPage = new ContactUsPage();
const userWithValidData = users[0];
const userEmptyEmail = users[1];
const userEmptyFirstName = users[2];
const userEmptyLastName = users[3];
const userEmptyComments = users[4];
  
describe('Contct US form', () => {
  
    it(`Open and fill in the contact US form - with test case name ${userWithValidData.testName}`, () => {
      contactUsPage.visit();
      contactUsPage.fillContactUsForm(userWithValidData);
      contactUsPage.getSuccessSubmitMessage().should('exist');
      contactUsPage.getAllFieldsAreRequaredError().should('not.exist');
      contactUsPage.getInvalidEmailError().should('not.exist')

    })
    it(`Open and fill in the contact US form - with test case name ${userEmptyEmail.testName}`, () => {
      contactUsPage.visit();
      contactUsPage.fillContactUsForm(userEmptyEmail);
      contactUsPage.getAllFieldsAreRequaredError().should('exist');
      contactUsPage.getInvalidEmailError().should('exist')

    })
    it(`Open and fill in the contact US form - with test case name ${userEmptyFirstName.testName}`, () => {
      contactUsPage.visit();
      contactUsPage.fillContactUsForm(userEmptyFirstName);
      contactUsPage.getAllFieldsAreRequaredError().should('exist');
      contactUsPage.getInvalidEmailError().should('not.exist')

    })
    it(`Open and fill in the contact US form - with test case name ${userEmptyLastName.testName}`, () => {
      contactUsPage.visit();
      contactUsPage.fillContactUsForm(userEmptyLastName);
      contactUsPage.getAllFieldsAreRequaredError().should('exist');
      contactUsPage.getInvalidEmailError().should('not.exist')

    })
    it(`Open and fill in the contact US form - with test case name ${userEmptyComments.testName}`, () => {
      contactUsPage.visit();
      contactUsPage.fillContactUsForm(userEmptyComments);
      contactUsPage.getAllFieldsAreRequaredError().should('exist');
      contactUsPage.getInvalidEmailError().should('not.exist')

    })
  
})



