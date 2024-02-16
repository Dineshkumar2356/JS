/// <reference types= "cypress" />

describe('template spec', () => {
  it('modify user personal details',()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
  cy.get('.oxd-button').click()
  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()
    cy.get(':nth-child(1) > .oxd-form > :nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Rakesh')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('467')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('cc467')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('NKL564863')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type('2026-11-23')
    cy.get(':nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('558')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('435')
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

  })
})