describe('launch zendy', function () {
  it('go to stage and check the registration form', () => {
    cy.visit(`https://app.staging.zendy.io/`)
    cy.get('#continue_btn_available_countries_success').should('be.visible')
  })
})
