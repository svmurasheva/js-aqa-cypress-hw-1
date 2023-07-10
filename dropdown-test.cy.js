import { DropdownPage } from "./pages/dropdown-page";
import { dropdown1 } from "./pages/test-data/dropdowns-values";
import { dropdown2 } from "./pages/test-data/dropdowns-values";
import { dropdown3 } from "./pages/test-data/dropdowns-values";
import { allTitles } from "./pages/test-data/dropdowns-values";

const dropdown = new DropdownPage()

describe('Dropdown', () =>{
    it('Select dropdown', () => {
        dropdown.visit();
        dropdown.verifyAllDivTitle(allTitles);
        dropdown.verifyAllDropdownOptions(dropdown1, 1);
        dropdown.verifyAllDropdownOptions(dropdown2, 2);
        dropdown.verifyAllDropdownOptions(dropdown3, 3);
    })

    it('Checkboxes', () => {
        dropdown.visit();
        // dropdown.get1Option().click().should('be.checked');
        // dropdown.get2Option().click().should('be.checked');
        // dropdown.get3Option().uncheck().should('not.be.checked');
        // dropdown.get4Option().click().should('be.checked');
        dropdown.getAllCheckboxes().each($el => {
            let el = $el
            cy.wrap(el).check().should('be.checked');
        })
        
        .check().should('be.checked');

    })
    
    it.only('Radio Button(s)', () => {
        dropdown.visit();
        //dropdown.getAllRadioButtons().first().click();
        dropdown.getAllRadioButtons().check('orange').should('be.checked');
        cy.get('input[value="yellow"]').should('not.be.checked');
        cy.get('body').document(doc => {
            const test = doc.querySelector('#button2')
        })
    })
})