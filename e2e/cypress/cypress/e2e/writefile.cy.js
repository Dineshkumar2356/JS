/// <reference types="cypress" />

function writeToFile(filePath, content) {
 
    cy.writeFile(filePath, content);
}

describe('write to file', () => {
    it.only('write txt file', () => {
        const filePath = 'C:/Users/dineshk/Desktop/JavaScript Programming/jslearning/cypress/e2e/cypress/InputFiles/output.txt';
        const contentToWrite = 'Hello, this is the content to be written to the file.';

        writeToFile(filePath, contentToWrite);

        cy.readFile(filePath).should('eq', contentToWrite);
    });
});
