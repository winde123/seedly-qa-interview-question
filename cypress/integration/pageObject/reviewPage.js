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
}

export default ReviewPage