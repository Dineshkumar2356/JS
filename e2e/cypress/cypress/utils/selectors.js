/**
 * This object consists of selectors for login page
 */

export default{

    // Login selectors
    userNameInput:'#user_login',
    passwordInput:'#user_password',
    signInButton:'input[name=submit]',
    loginSuccessMsg:'.brand',


    // Transfer fund selectors
    transferFundsTab: '#transfer_funds_tab > a',
    transferAmountInput: '#tf_amount',
    transferDescriptionInput: '#tf_description',
    continueButton: '#btn_submit',
    submitBtn:'#btn_submit',
    transfersuccess:'.alert',

    //Pay bill selectors

    payBillTab:'#pay_bills_tab > a',
    payee:'#sp_payee',
    accountType:'#sp_account',
    enterAmout:'#sp_amount',
    datesel:'#sp_date',
    descInput:'#sp_description',
    payBtn:'#pay_saved_payees',
    payBillScsMsg:'#alert_content > span',

    //Add new Payee

    payBillTab1:'#pay_bills_tab > a',
    addnewPayee:'a[href="#ui-tabs-2"]',
    payeeName:'#np_new_payee_name',
    payeeAdd:'#np_new_payee_address',
    payeeAcc:'#np_new_payee_account',
    payeeDetails:'#np_new_payee_details',
    addPayeeBtn:'#add_new_payee',
    addSuccessMsg:'#alert_content'


}





