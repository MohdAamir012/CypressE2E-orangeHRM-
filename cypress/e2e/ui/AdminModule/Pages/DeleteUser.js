import AdminSearchUser from "./AdminSearchUser";

const adminbtn="//a[@href='/web/index.php/admin/viewAdminModule']";
const verifyTitle ='.orangehrm-modal-header >p';

export default class DeleteUser{
    
    deleteUser(name,empName,role,status){
    cy.xpath(adminbtn).click();
    const obj=new AdminSearchUser();
    obj.searchUser(name,empName,role,status);
        const xpathfordel =`//div[text()="${name}"]/parent:: div/following-sibling::div[4]/child ::div/child ::button`
        cy.clickBtnByXpath(xpathfordel);
        cy.wait(1000);
        cy.get(verifyTitle).should('have.text',"Are you Sure?")
        cy.wait(1000);
        cy.clickBtn(' Yes, Delete ');
        cy.wait(1000);
    }
}