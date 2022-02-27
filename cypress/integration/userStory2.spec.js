/// <reference types="cypress" />
import SavingsPage from './pageObject/savingsAccountPage.js'

const sizes = ['iphone-6', 'ipad-2', 'samsung-note9']
describe('Validating navigation flow for the relevant mobile devices', () => {
    sizes.forEach((size) => {
        
      // make assertions on the logo using
      // an array of different viewports
      it(`Should display logo on ${size} screen and navigate to the second page `, () => {
          const savingsPage = new SavingsPage();
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size);
        }
  
        cy.visit(Cypress.env('URIsavingsacctpage'))
        cy.wait(3000)
        savingsPage.validateseedlyLogoOnScreen();
        savingsPage.navigateToSecondPage();
        savingsPage.validateSecondPage();
      })
    })
  })
