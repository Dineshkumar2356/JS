
/// <reference types= "cypress" />
describe('verify login functionality', () => {

//   Cypress.config('experimentalSessionSupport', true)

// let sessionCallCount = 0;

// Cypress.session.clearAllSavedSessions()   // to avoid caching across browser reload

// beforeEach(() => {                   
//   cy.session('mySession', () => {     
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
//       onBeforeLoad: (window) => {
//         window.sessionStorage.setItem('myKey', 'someInfo')
//         sessionCallCount++
//       }
//     })
//   })
// })
  
  it('verify user is able to login successfully with correct credential', () => {
    
    cy.visit("https://www.saucedemo.com")
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.app_logo').should('contain','Swag Labs')
    
    })

  it('select product to add cart', ()=>{

    cy.visit("https://www.saucedemo.com")
    cy.get('input[id="user-name"]').type('standard_user')
    cy.get('input[id="password"]').type('secret_sauce')

    //Assertion to validate the value which we inserted is correct or not
    cy.get('#user-name').should('have.value', 'standard_user')
    cy.get('#password').should('have.value', 'secret_sauce')
    cy.get('#login-button').click()
    cy.get('.app_logo').should('contain','Swag Labs')
    cy.get('#item_4_title_link > .inventory_item_name').should('be.visible').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
    //class name
    cy.get('.shopping_cart_link').should('be.visible').click()
    cy.get('[data-test="checkout"]').click()
    cy.wait(5000)
    cy.get('[data-test="firstName"]').type('testfname');
    cy.get('[data-test="lastName"]').type('testlname');
    cy.get('[data-test="firstName"]').should('have.value', 'testfname');
    cy.get('[data-test="lastName"]').should('have.value', 'testlname');
    cy.get('[data-test="postalCode"]').type('636895')
    cy.get('[data-test="continue"]').click()



  })

  it('checkout product from cart',()=>{

    cy.visit("https://www.saucedemo.com")
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()


    // Assertions after login
    cy.get('.app_logo').should('contain','Swag Labs')

    // cy.get('#user-name').should('have.value', 'standard_user')
    // cy.get('#password').should('have.value', 'secret_sauce')

    // Add product to cart
    cy.get('#item_4_title_link > .inventory_item_name').should('be.visible').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').trigger('mouseover')
    cy.wait(3000)
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click({force:true})

    // Assertions after adding product to cart9
    cy.get('.shopping_cart_link').should('be.visible')
    // cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack') // Ensure the correct product is added
    cy.get('.shopping_cart_badge').should('contain', '1').click()

    // Go to checkout
    cy.get('[data-test="checkout"]').click()

    // Assertions on the checkout page
    cy.url().should('include', '/checkout-step-one') // Ensure the URL reflects the checkout step
    // cy.get('.summary_subtotal_label').should('contain', 'Total:') // Verify the presence of total amount label
    // cy.get('.summary_subtotal_label').next('.summary_value_label').should('contain', '$29.99')   

    // Fill user information
    cy.get('[data-test="firstName"]').type('testfname')
    cy.get('[data-test="lastName"]').type('testlname')
    cy.wait(5000)
    // Assertions after entering user information
    cy.get('[data-test="firstName"]').should('have.value', 'testfname')
    cy.get('[data-test="lastName"]').should('have.value', 'testlname')
    // Continue to the next step
    cy.get('[data-test="postalCode"]').type('636895')
    cy.wait(5000)
    cy.get('[data-test="continue"]').click()

     // Additional assertions after submitting user information
     cy.url().should('include', '/checkout-step-two') // Ensure the URL reflects the next step
    //  cy.get('.summary_subtotal_label').should('contain', 'Total:') 
    //  cy.get('.summary_subtotal_label').next('.summary_value_label').should('contain', '$29.99') // Adjust with the correct total amount

     cy.wait(5000)
    cy.get('.title').should('contain','Checkout')
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('have.text','Thank you for your order!')
    
  })

    
  })