// write tests here
describe('Quotes app', () => {
    beforeEach(() => {
      // arbitrary code you want running
      // before each test
      cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passInput = () => cy.get('input[name="password"]')
    const tosInput = () => cy.get('input[name="termsOfService"]')
    const subButton = () => cy.get('#submitBtn')

    it('Fill out the form', () => {
        nameInput()
            .type('Fatima Rizvi')
            .should('have.value', 'Fatima Rizvi')
        emailInput()
            .type('fatimarizvi@lambda.com')
            .should('have.value', 'fatimarizvi@lambda.com')
        passInput()
            .type('12345678')
            .should('have.value', '12345678')
    })

    it('check to see if a user can check the terms of service box', () => {
        tosInput()
            //click once to check
            .click()
            //click again to unselect
            .click()            
    })

    it('check to see if a user can submit form data', () => {
        //Fill out the form
        nameInput()
            .type('Fatima Rizvi')
        emailInput()
            .type('fatimarizvi@lambdastudents.com')
        passInput()
            .type('12345678')
        //Check box
        tosInput()
            .click()
        //Click submit button
        subButton()
            .click()
    })

    it('check for form validation if name input is empty', () => {
        //Check with if name is empty
        nameInput()
            .clear()
        emailInput()
            .type('hi@hello.com')
        passInput()
            .type('123456')
        tosInput()
            .click()
        //Check to see if the submit button is disabled and is unaffected by click
        subButton()
            .should('be.disabled')
    })

    it('check for form validation if email input is empty', () => {
        //Check everything again with email empty
        nameInput()
            .type('Percy')
        emailInput()
            .clear()
        passInput()
            .type('123456')
        tosInput()
            .click()
        subButton()
            .should('be.disabled')
    })

    it('check for form validation if password input is empty', () => {
        //Check everything again with password empty
        nameInput()
            .type('Piper')
        emailInput()
            .type('piper@gmail.com')
        passInput()
            .clear()
        tosInput()
            .click()
        subButton()
            .should('be.disabled')
    })

    it('check for form validation if Terms of Service input is not clicked', () => {
        //Check everything again with Terms of Service unclicked
        nameInput()
            .type('Hazel')
        emailInput()
            .type('hazel@gmail.com')
        passInput()
            .clear('123456')
        subButton()
            .should('be.disabled')
    })

})