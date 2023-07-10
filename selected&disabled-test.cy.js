import { SelectedAndDisabled } from "./pages/selected&disabled";

const selectedAndDisabled = new SelectedAndDisabled() 

describe('Selected and disabled list', () => {
    it('Check list "Selected & Disabled"', () => {
        selectedAndDisabled.visit();
        selectedAndDisabled.getDropdownFruitMenu()
        cy.contains('Grape').should('be.visible');
    })
}) 