class HomePage{
    
      /* 
    Page Web Elements
    */
    accept_cookies = '[class="btn btn-outline-primary"]'

    navigate(){
        cy.visit('/')
        cy.get(this.accept_cookies).should('be.visible').contains('Akkoord').click()
    }
}
export default HomePage