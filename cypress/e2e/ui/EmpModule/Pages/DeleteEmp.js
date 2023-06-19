import PIMSearchEmp from "./PIMSearchEmp";
const adminbtn="//a[@href='/web/index.php/admin/viewAdminModule']";
const verifyTitle ='.orangehrm-modal-header >p';

export default class DeleteEmp{
    
    deleteEmp(name,id){
    cy.xpath(adminbtn).click();
    const obj=new PIMSearchEmp();
    obj.searchEmp(name,id);
        const xpathfordel =`//div[text()=${id}]/parent:: div/following-sibling::div[7]/child ::div/button[1]`
        cy.clickBtnByXpath(xpathfordel);
        cy.wait(1000);
        cy.get(verifyTitle).should('have.text',"Are you Sure?")
        cy.wait(1000);
        cy.clickBtn(' Yes, Delete ');
        cy.wait(1000);
    }
}