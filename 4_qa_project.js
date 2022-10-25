const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `testname${id}`

describe('Testing QA App', () => {
  it('Creates project', () => {

    // Visit Bitband
    cy.visit('https://app-qa.bitband.com/', {
  auth: {
    username: 'pmfrontend',
    password: '2j$s1ATkQ7%8',
  },
})

    //Log in
    cy.get('#email')
    .type('anita@bitband.com')
      //.should('have.value', 'anita@bitband.com')
    cy.get('#pass')
    .type('QATesting123{enter}')
      //.should('have.value', 'QATesting123')

    //To avoid timeout error
    cy.wait(2000)

    //Adjusting view for video
    //cy.get('.boardcontainer').scrollTo(0, 1000)

    //Creates new project
    cy.get('.projicon').click()
    cy.get('.projectsgroup__addnew').click()
    cy.get('#prname')
      .type(testname).type('{enter}')

    cy.wait(2000)
    
    //Takes a screenshot at the end - makes video complete
    cy.screenshot()
  })
})