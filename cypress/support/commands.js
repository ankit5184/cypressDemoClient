
import HomePage from "../pages/HomePage"
const homepage = new HomePage();

Cypress.Commands.add('visitPage', () => {
    // cy.viewport(1500,1050)
    homepage.navigate()
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})