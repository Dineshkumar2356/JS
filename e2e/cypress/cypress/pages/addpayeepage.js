import selectors from "../utils/selectors";

export default class AddPayeePage{

    static goToPaybillPage() {
        const { payBillTab1 } = selectors;
        cy.get(payBillTab1).click();
    }

    static addPayee(payeename, address, accNo, details){
        const {addnewPayee, payeeName, payeeAdd, payeeAcc, payeeDetails, addPayeeBtn } = selectors
        cy.get(addnewPayee).click()
        cy.get(payeeName).type(payeename)
        cy.get(payeeAdd).type(address)
        cy.get(payeeAcc).type(accNo)
        cy.get(payeeDetails).type(details)
        cy.get(addPayeeBtn).click()
        
    }
    
    static verifysuccessMsg(){
        const {addSuccessMsg} = selectors
        cy.get(addSuccessMsg).should('contain', 'The new payee test was successfully created.')
    }
}