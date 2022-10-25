describe('Testing QA App', () => {
  it('Creates ticket', () => {

    // Visit Bitband
    cy.visit('https://app-qa.bitband.com/', {
  auth: {
    username: 'pmfrontend',
    password: '2j$s1ATkQ7%8',
  },
})

    //Log in
     //cy.contains('Login').click()
    cy.get('#email')
    .type('anita@bitband.com')
      //.should('have.value', 'anita@bitband.com')
    cy.get('#pass')
    .type('QATesting123{enter}')
      //.should('have.value', 'QATesting123')

    //To avoid timeout error
    cy.wait(2000)

    //Adjusting view for video
    cy.get('.boardcontainer').scrollTo(0, 1000)

    //Create new task
    cy.get('.addtasksect').first().click()
    .type('New task{enter}')

    cy.wait(2000)

    //Deletes task
    cy.get('.tasksbox').last().click()
    cy.get('.card__dots').click()
    cy.get('.orangebtn').last().click()

    cy.wait(2000)

    //Takes a screenshot at the end - makes video complete
    cy.screenshot()
  })
})