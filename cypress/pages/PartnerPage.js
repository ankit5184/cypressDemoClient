class PartnerPage{

    myage_xp = '(//input[@type="text"])[1]'
    partnerage_xp = '(//input[@type="text"])[2]'
    following_button_1 = '(//button[@class="btn btn-primary"])[1]'
    partner_button = '(//button[@class="btn btn-outline-primary"])[2]'
    annual_income_xp = '(//input[@type="text"])[3]'
    helpbutton_xp = '(//button[@class="btn btn-link btn__help"])[1]'
    grossannaul_xp = '(//input[@type="text"])[4]'
    holiday_xp = '(//button[@class="btn btn-outline-primary"])[2]'
    month_xp = '(//button[@class="btn btn-outline-primary"])[3]'
    calculate_xp = '(//button[@class="btn btn-primary"])[2]'
    retire_xp = '(//button[@class="btn btn-outline-primary"])[6]'
    current_income_xp = '(//button[@class="btn btn-outline-primary"])[6]'   
    text_xp = '(//input[@type="text"])[8]'
    button2_xp = '(//button[@class="btn btn-outline-primary"])[14]'
    following_button_2 = '(//button[@class="btn btn-primary"])[6]'
    No_button_1 = '(//button[@class="btn btn-outline-primary"])[15]'
    No_button_2 = '(//button[@class="btn btn-outline-primary"])[16]'
    No_button_3 = '(//button[@class="btn btn-outline-primary"])[17]'
    No_button_4 = '(//button[@class="btn btn-outline-primary"])[18]'
    following_button_3 = '(//button[@class="btn btn-primary"])[7]'
    title_assertion = '//div[@class="result__box"]/child::h4'
    button3_xp = '(//button[@class="btn btn-link"])[3]'
    label_xp = '//label[@class="radio__label--a2"]'

    withPartner(myage,partnerage){
        cy.wait(5000)
        cy.xpath(this.partner_button).click({force: true})
        cy.xpath(this.myage_xp).type(myage,{force: true})
        cy.xpath(this.partnerage_xp).type(partnerage,{force: true})
        cy.xpath(this.following_button_1).click({force: true})
    }

    incomeDetails(annaulIncome){
        cy.get('select').select('Vast dienstverband',{force: true})
        cy.xpath(this.annual_income_xp).type(annaulIncome,{force: true})
        cy.xpath(this.helpbutton_xp).click()
        cy.xpath(this.grossannaul_xp).type('10000',{force:true})
        cy.xpath(this.holiday_xp).click({force: true})
        cy.xpath(this.month_xp).click({force: true})
        cy.xpath(this.calculate_xp).click()
        cy.xpath(this.retire_xp).click()
        cy.xpath(this.current_income_xp).click()
        cy.get('select').last().select('Vast dienstverband')
        cy.wait(3000)
        cy.xpath(this.text_xp).type("5246",{force:true})
        cy.xpath(this.button2_xp).click()
        cy.xpath(this.following_button_2).click()
    }

    obligations(){
        cy.xpath(this.No_button_1).click()
        cy.xpath(this.No_button_2).click()
        cy.xpath(this.No_button_3).click()
        cy.xpath(this.No_button_4).click()
        cy.xpath(this.following_button_3).click()
        cy.wait(5000)
        cy.xpath(this.title_assertion).should('have.text', 'Je maximale hypotheek')
    }

    mortage(){
        cy.xpath(this.button3_xp).click()
        cy.xpath(this.label_xp).click()
    }
}
export default PartnerPage