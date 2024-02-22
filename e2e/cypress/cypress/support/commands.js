
import './commands'


Cypress.Commands.add('readAndAssertFileContent', (filePath, expectedContent) => {
    cy.readFile(filePath).should('eq', expectedContent);
});
