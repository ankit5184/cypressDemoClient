class SinglePerson{
   
    allen_button = '[class="btn btn-outline-primary"]'
    allen_text = '(//input[@type="text"])[1]'
    volgende = '[class="btn btn-primary"]'
    text_field_1 = '(//input[@type="text"])[3]'
    text_field_8 = '(//input[@type="text"])[8]'
    text_filed_9 = '(//input[@type="text"])[9]'
    text_field_10 = '(//input[@type="text"])[10]'
    text_field_11 = '(//input[@type="text"])[11]'
    button_8 = '(//button[@class="btn btn-outline-primary"])[8]'
    button_9 = '(//button[@class="btn btn-outline-primary"])[9]'
    button_10 = '(//button[@class="btn btn-outline-primary"])[10]'
    button_11 = '(//button[@class="btn btn-outline-primary"])[11]'
    button_12 = '(//button[@class="btn btn-outline-primary"])[12]'
    button_13 = '(//button[@class="btn btn-outline-primary"])[13]'
    button_14 = '(//button[@class="btn btn-outline-primary"])[14]'
    submit_button_4 = '(//button[@class="btn btn-primary"])[4]'
    submit_button_5 = '(//button[@class="btn btn-primary"])[5]'
    title_assertion = '//div[@class="result__box"]/child::h4'
    

    allen(age,text2){
        cy.wait(5000)
        cy.get(this.allen_button).contains('Alleen').click();
        cy.xpath(this.allen_text).click({force:true}).type(age)
        cy.get(this.volgende).contains('Volgende').click()
        cy.get('select').select('Vast dienstverband')
        cy.xpath(this.text_field_1).click({force: true}).type(text2)
        cy.xpath(this.button_8).click({force: true})
        cy.xpath(this.button_9).click({force: true})
        cy.xpath(this.submit_button_4).click({force: true})
    }

    hoeveelkun(text3,text4,text5,text6){
        cy.wait(5000)
        cy.xpath(this.button_10).click({force: true})
        cy.xpath(this.text_field_8).click({force: true}).type(text3)
        cy.xpath(this.button_11).click({force: true})
        cy.xpath(this.button_12).click({force: true})
        cy.xpath(this.text_filed_9).click({force: true}).type(text4)
        cy.xpath(this.button_13).click({force: true})
        cy.xpath(this.text_field_10).click({force: true}).type(text5)
        cy.xpath(this.button_14).click({force: true})
        cy.xpath(this.text_field_11).click({force: true}).type(text6)
        cy.wait(5000)
        cy.xpath(this.submit_button_5).click({force: true})
        cy.wait(5000)
        cy.xpath(this.title_assertion).should('have.text', 'Je maximale hypotheek')
    }
}
export default SinglePerson