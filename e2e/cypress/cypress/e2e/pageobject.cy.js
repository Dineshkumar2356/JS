/// <reference types= "cypress" />


import AddPayeePage from "../pages/addpayeepage"
import LoginPage from "../pages/loginpage"
import PaybillPage from "../pages/paybills"
import TransferPage from "../pages/transferfundpage"

describe("Page Object Model",()=>{
   

        beforeEach(() => {
        
       cy.fixture("loginCred").then((data)=>{
        LoginPage.navigateToUrl('http://zero.webappsecurity.com/login.html')
        LoginPage.loginToApplication(data.userName,data.password)
        LoginPage.successfullyLogin()
        
       })
    
    })

    it('should transfer funds successfully', () => {
       
        TransferPage.goToTransferPage();
        cy.wait(3000)
        TransferPage.transferFunds('100', 'For groceries');
        
        TransferPage.transfersuccessMsg()
  
    });

    it('should pay bills successfully', () => {
      
        PaybillPage.goToPaybillPage()
        cy.wait(3000)
        PaybillPage.payBill('100','For Rent')
        
        PaybillPage.payBillSuccessMsg()
   
    });

    
    it('should add new Payee successfully', () => {
  
        AddPayeePage.goToPaybillPage()
        AddPayeePage.addPayee('test','Bangalore','1234567895','test')
        cy.wait(5000)
        AddPayeePage.verifysuccessMsg()
        
    });
    
})
