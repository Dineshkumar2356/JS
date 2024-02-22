

import selectors from "../utils/selectors"


export default class LoginPage{
    static navigateToUrl(url){
        cy.visit(url)
    }

    static loginToApplication(username,password){
        const { userNameInput, passwordInput, signInButton } = selectors;
    
        cy.get(userNameInput).type(username);
        cy.get(passwordInput).type(password);
        cy.get(signInButton).click();
       

    }

    static successfullyLogin(){
        const {loginSuccessMsg} = selectors
        cy.get(loginSuccessMsg).should('contain','Zero Bank')
    }
}