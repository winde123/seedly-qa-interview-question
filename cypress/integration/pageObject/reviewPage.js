class ReviewPage {

    searchTermboxAllProd(){
        return 'input[class="sc-2830a6e7-4 lhtioH"]'
    }
    enterSearchTermAllProd(searchterm) {
        cy.get('input[class="sc-2830a6e7-4 lhtioH"]').clear().type(searchterm)
        return this
    }
    searchTermboxMainNav(){
        return 'input[class="sc-8e8c8c51-1 WpvuK"]'
    }
    enterSearchTermMainNav(searchterm) {
        cy.get('input[class="sc-8e8c8c51-1 WpvuK"]').clear().type(searchterm)
        return this
    }
    clickOnTuasOption(){
        cy.get('[href="/reviews/open-electricity-market/tuas-power"] > .sc-87a2472b-1').click();
        return this
    }
    totalValidoptionsTuasSelector(){
        return 'div.sc-87a2472b-0.iJDkZc>a[data-gtm=search-suggestion]'
    }
    validatingSearchFirstResultAviva(){
        cy.get('a[href="/reviews/mortgage-insurance/aviva-myprotector-mortgage-insurance"]').first().should('have.text','AVIVA MyProtector Mortgage Insurance')
        return this 
    }
}

export default ReviewPage