///<reference types="Cypress"/>

import { users } from "./pages/test-data/Users-test-data";
import { ContactUsPage } from "./pages/Contact-Us-Page.cy.js";
import { contactUsStep } from "./steps/contact-us-step";


const contactUsPage = new ContactUsPage();
const userWithValidData = users[0];
const userEmptyEmail = users[1];
const userEmptyFirstName = users[2];
const userEmptyLastName = users[3];
const userEmptyComments = users[4];




describe('Contact US form', () => {

  it.only(`Open and fill in the contact US form - with test case name ${userWithValidData.testName}`, () => {
    contactUsStep.visit();
    contactUsStep.fillAndVerifyContactUsForm(userWithValidData);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyThatSuccessMessageIsDisplayed();
    contactUsStep.openManePage();
    
  })

  it(`Open and fill in the contact US form - with test case name ${userEmptyEmail.testName}`, () => {
    contactUsPage.visit();
    contactUsPage.fillAndVarifyContactUsForm(userEmptyEmail);
    contactUsPage.getAllFieldsAreRequaredError().should('exist');
    contactUsPage.getInvalidEmailError().should('exist')

  })
  it(`Open and fill in the contact US form - with test case name ${userEmptyFirstName.testName}`, () => {
    contactUsPage.visit();
    contactUsPage.fillAndVarifyContactUsForm(userEmptyFirstName);
    contactUsPage.getAllFieldsAreRequaredError().should('exist');
    contactUsPage.getInvalidEmailError().should('not.exist')

  })
  it(`Open and fill in the contact US form - with test case name ${userEmptyLastName.testName}`, () => {
    contactUsPage.visit;
    contactUsPage.fillAndVarifyContactUsForm(userEmptyLastName);
    contactUsPage.getAllFieldsAreRequaredError.should('exist');
    contactUsPage.getInvalidEmailError().should('not.exist')

  })
  it(`Open and fill in the contact US form - with test case name ${userEmptyComments.testName}`, () => {
    contactUsPage.visit;
    contactUsPage.fillAndVarifyContactUsForm(userEmptyComments);
    contactUsPage.getAllFieldsAreRequaredError.should('exist');
    contactUsPage.getInvalidEmailError().should('not.exist')

  })

})



