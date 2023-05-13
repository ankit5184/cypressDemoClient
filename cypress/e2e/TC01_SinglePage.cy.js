import SinglePerson from "../pages/SinglePerson";

const singleperson = new SinglePerson();

describe("test suite 1", function () {

    before(function () {
        cy.fixture("testdata").then(function (data) {
            this.data = data;
        })
    })
    
    it('Single Person',function(){
        const age = this.data.age
        const text2 = this.data.text2
        const text3 = this.data.text3
        const text4 = this.data.text4
        const text5 = this.data.text5
        const text6 = this.data.text6

        cy.visitPage();
        singleperson.allen(age,text2)
        singleperson.hoeveelkun(text3,text4,text5,text6)
    })
})
