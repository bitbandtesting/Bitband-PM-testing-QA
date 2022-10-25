describe('Testing QA App', () => {
  it('Navigates to App logs in', () => {

    // Visit Bitband QA
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
    //cy.get('.btn').click()
    //cy.url().should('include', '/bb/projects')
    
     cy.wait(2000)

    //Takes a screenshot at the end - makes video complete
    cy.screenshot()
  })
})