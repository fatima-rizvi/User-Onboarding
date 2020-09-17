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

    it('Fill out the form', () => {
        nameInput()
            .type('Fatima Rizvi')
            .should('have.value', 'Fatima Rizvi')
        emailInput()
            .type('fatimarizvi@lambdastudents.com')
            .should('have.value', 'fatimarizvi@lambdastudents.com')
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
    })
})