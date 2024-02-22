/// <reference types="cypress" />



describe('custom command', () => {
    it.only('read and assert file content', () => {
        const filePath = 'C:/Users/dineshk/Desktop/JavaScript Programming/jslearning/cypress/e2e/cypress/InputFiles/text.txt';
        const expectedContent = 'Hello World';

        // Use the custom command to read and assert the file content
        cy.readAndAssertFileContent(filePath, expectedContent);
    });
});
