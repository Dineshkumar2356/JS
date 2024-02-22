/// <reference types="cypress" />

describe('read file', () => {

    it.only('read txt file', () => {
        cy.readFile('C:/Users/dineshk/Desktop/JavaScript Programming/jslearning/cypress/e2e/cypress/InputFiles/text.txt').should('eq', 'Hello World')

        cy.readFile('C:/Users/dineshk/Desktop/JavaScript Programming/jslearning/cypress/e2e/cypress/InputFiles/text.json').its('Company').should('eq','CodeCraft')

        cy.readFile('C:/Users/dineshk/Desktop/JavaScript Programming/jslearning/cypress/e2e/cypress/InputFiles/text.json').its('Location').should('eq','Banglore')
    })
})
