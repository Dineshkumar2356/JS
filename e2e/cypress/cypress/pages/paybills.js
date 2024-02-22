import selectors from "../utils/selectors";

export default class PaybillPage{

    static goToPaybillPage() {
        const { payBillTab } = selectors;
        cy.get(payBillTab).click();
    }

    static payBill(amount,description){
        const { payee, accountType, enterAmout, datesel, descInput, payBtn} = selectors
        cy.get(payee).select('Bank of America')
        cy.get(accountType).type('Savings')
        cy.get(enterAmout).type(amount)
        cy.get(datesel).click()
        const selectedDate = '2022-02-28';
        cy.get(datesel).type(selectedDate).type('{enter}')
        cy.get(descInput).type(description)
        cy.get(payBtn).click()
       

    }

    static payBillSuccessMsg(){
        const {payBillScsMsg} = selectors
        cy.get(payBillScsMsg).should('contain','The payment was successfully submitted.')
    }
}