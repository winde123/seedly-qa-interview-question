class SavingsAcctPage {
    validateseedlyLogoOnScreen(){
        cy.get('a.sc-2f43f128-0.eVMkWO>svg').should('be.visible')
        return this
    }
    navigateToSecondPage(){
        cy.get('a[aria-label="Page 2"]').click()
        return this
    }
    validateSecondPage(){
        cy.get('a.page-link.page-active-link').should('have.text','2')
        return this
    }
}

export default SavingsAcctPage