/// <reference types="cypress" />
import ReviewPage from './pageObject/reviewPage.js'

context('User Story 1', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit(Cypress.env('URI'))
    cy.wait(2000)
  })
    it('validate url of review page',()=> {
    cy.url().should('eq',Cypress.env('URI'))
})

    it('User should be able to enter input for all prod search bar',()=>{
      const reviewPage = new ReviewPage();
      reviewPage.enterSearchTermAllProd('test');
      cy.get(reviewPage.searchTermboxAllProd()).should('have.value','test');
})

    it('User is able to enter input for main nav search bar ',() =>{
        const reviewPage = new ReviewPage();
        reviewPage.enterSearchTermMainNav('test');
        cy.get(reviewPage.searchTermboxMainNav()).should('have.value','test');
    })

    it('User is able to search for a related term on the main nav bar and click on it',()=>{
        const reviewPage = new ReviewPage();
        reviewPage.enterSearchTermMainNav('tuas');
        cy.get(reviewPage.searchTermboxAllProd()).realClick();
        reviewPage.clickOnTuasOption();
    })

    it('User is able to search for the same result for partial searches', ()=>{
      const reviewPage = new ReviewPage();
      reviewPage.enterSearchTermMainNav('tu');
      cy.get(reviewPage.searchTermboxAllProd()).realClick();
      reviewPage.clickOnTuasOption();
      cy.url().should('contain','tuas')

    })
    



})
