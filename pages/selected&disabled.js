export class SelectedAndDisabled {
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    }

    getDropdownFruitMenu() {
        cy.xpath('//div[@class="thumbnail"]/*[contains(text(), "Selected & Disabled")]/..//select[@id="fruit-selects"]')
    }
}