

describe('verify login functionality', () => {
  
it('verify user is able to login successfully with correct credential', () => {
  cy.session('username', () => {
    cy.visit("http://zero.webappsecurity.com/login.html")
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    // cy.get('input[value="Sign in"]').click()
    cy.contains('Sign in').click()
   
    //assertion
    cy.get('.brand').should('contain','Zero Bank')
    
    })
  })

    it('user transaction details', ()=>{
      cy.visit("http://zero.webappsecurity.com/login.html")
      cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    // cy.get('input[value="Sign in"]').click()
    cy.contains('Sign in').click()
   
      cy.get('#transfer_funds_tab > a').click()
    })
  })