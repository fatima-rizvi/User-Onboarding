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
    const errors = () => cy.get('.errors')

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

    it('check for name validation errors', () => {
        //Check error if name is less than 3 chars
        nameInput()
            .type('Jo')
        errors()
            .contains('Name must be 3 chars or longer')
        //Check error if name is empty
        nameInput()
            .type('{backspace}{backspace}')
        errors()
            .contains('Name is required')
        //Check to see if form can be submitted without name being filled
        emailInput()
            .type('hi@hello.com')
        passInput()
            .type('123456')
        tosInput()
            .click()
        //Check to see if the submit button is disabled
        subButton()
            .should('be.disabled')
        //Make the errors go away
        nameInput()
            .type('Joe')
        errors()
            .should('not.be.visible')
    })

    it('check for email validation errors', () => {
        //Check error if email isn't valid
        emailInput()
            .type('ha')
        errors()
            .contains('Must be a valid email')
        //Check error if email is empty
        emailInput()
            .type('{backspace}{backspace}')
        errors()
            .contains('Email is required')
        //Check to see if form can be submitted without email being filled
        nameInput()
            .type('Harry')
        passInput()
            .type('123456')
        tosInput()
            .click()
        //Check to see if the submit button is disabled
        subButton()
            .should('be.disabled')
        //Make the errors disappear
        emailInput()
            .type('harrypotter@hogwarts.com')
        errors()
            .should('not.be.visible')
    })

    it('check for password validation errors', () => {
        //Check error if password isn't valid
        passInput()
            .type('12')
        errors()
            .contains('Password must be 6 chars or longer')
        //Check error if password is empty
        passInput()
            .type('{backspace}{backspace}')
        errors()
            .contains('Password is required')
        //Check to see if form can be submitted without password being filled
        nameInput()
            .type('Buddy')
        emailInput()
            .type('buddy@gmail.com')
        tosInput()
            .click()
        //Check to see if the submit button is disabled
        subButton()
            .should('be.disabled')
        //Make the errors disappear
        passInput()
            .type('123456')
        errors()
            .should('not.be.visible')
    })

    it('check for Terms of Service validation errors', () => {
        //Check to see if form can be submitted without TOS being clicked
        nameInput()
            .type('Pam')
        passInput()
            .type('123456')
        emailInput()
            .type('pam@dundler-mifflin.com')
        //Check to see if the submit button is disabled
        subButton()
            .should('be.disabled')
        //Make the errors disappear
        tosInput()
            .click()
        errors()
            .should('not.be.visible')
    })

})