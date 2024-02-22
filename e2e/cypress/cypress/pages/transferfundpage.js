import selectors from "../utils/selectors";

export default class TransferPage {
    static goToTransferPage() {
        const { transferFundsTab } = selectors;
        cy.get(transferFundsTab).click();
    }

    static transferFunds(amount, description) {
        const { transferAmountInput, transferDescriptionInput, continueButton, submitBtn } = selectors;
        cy.get(transferAmountInput).type(amount);
        cy.get(transferDescriptionInput).type(description);
        cy.get(continueButton).click();
        cy.wait(3000)
        cy.get(submitBtn).click();
        
    }

    static transfersuccessMsg(){
        const {transfersuccess} = selectors
        cy.get(transfersuccess).should('contain','You successfully submitted your transaction.')
    }
}

    

    

