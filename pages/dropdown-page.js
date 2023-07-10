export class DropdownPage {
    visit() {
        return cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
    }

    getDivByTitle(title) {
        return cy.xpath(`//div[@class="thumbnail"]/*[contains(text(), "${title}")]`);
    }

    getDropdownById(id) {
        return cy.xpath(`//div[@class="thumbnail"]/*[contains(text(), "Dropdown Menu(s)")]/..//select[@id="dropdowm-menu-${id}"]`);
    }

    verifyAllDropdownOptions(arrayOfDropdownValues, dropdownID) {
        arrayOfDropdownValues.forEach(value => {
            let el = value.toLowerCase().trim();
            this.getDropdownById(dropdownID).should('exist').select(el).invoke('val').should('eq', el);
        })
    }

    verifyAllDivTitle(allTitles) {
        allTitles.forEach(title => {
            this.getDivByTitle(title).should('exist');
    })
        
    }

    getCheckboxDiv() {
        return cy.xpath('//div[@id="checkboxes"]');
    }

    get1Option() {
        return cy.get("input[value='option-1']");
    }

    get2Option() {
        return cy.get("input[value='option-2']");
    }

    get3Option() {
        return cy.get("input[value='option-3']");
    }

    get4Option() {
        return cy.get("input[value='option-4']");
    }

    getAllCheckboxes() {
        return cy.get('input[type="checkbox"]');
    }

    radioButtonsForm() {
        return cy.get('form[id=radio-buttons');
    }

    getAllRadioButtons() {
        return cy.xpath('//form[@id="radio-buttons"]//input[@type="radio"]')
    }

}