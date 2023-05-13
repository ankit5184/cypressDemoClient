import PartnerPage from "../pages/PartnerPage";

const partnerpage = new PartnerPage();

describe("test suite 2", function () {

    before(function () {
        cy.fixture("testdata").then(function (data) {
            this.data = data;
        })
    })

    it('With Partner',function(){
        const myage = this.data.myage
        const partnerage = this.data.partnerage
        const annaulIncome = this.data.annaulIncome

        cy.visitPage();
        partnerpage.withPartner(myage,partnerage);
        partnerpage.incomeDetails(annaulIncome);
        partnerpage.obligations()
        partnerpage.mortage()
    })
})
