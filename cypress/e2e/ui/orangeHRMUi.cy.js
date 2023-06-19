/// <reference types="Cypress"/>
/// <reference types="Cypress-xpath"/>

import AdminAddUser from "./AdminModule/Pages/AdminAddUser";
import AdminSearchUser from "./AdminModule/Pages/AdminSearchUser";
import DeleteUser from "./AdminModule/Pages/DeleteUser";
import Login from "../validation/LoginModule/Login";
import PIMAddEmp from "./EmpModule/Pages/PIMAddEmp";
import PIMSearchEmp from "./EmpModule/Pages/PIMSearchEmp";
import DeleteEmp from "./EmpModule/Pages/DeleteEmp";

describe('template spec',  {
  retries: {
    runMode: 1,
    openMode: 1,
  },
},() => {
  beforeEach('visiting the url', () => {
    const obj =new Login();
    cy.fixture('urlProvider').then((urls) => {
      obj.login(urls.url);
    })
  })

  it('add employee',()=>{
    const obj =new PIMAddEmp();
    cy.fixture('dataForEmp').then((empList)=>{
      empList.emp.forEach(myFunction);
function myFunction(item) {
  obj.addEmp(item.fn,item.mn,item.ln,item.id);  
}
    })
  })
  it('Search employee',()=>{
    const obj=new PIMSearchEmp();
    cy.fixture('dataForEmp').then((empList)=>{
      empList.emp.forEach(myFunction);
function myFunction(item) {
  obj.searchEmp(item.fn,item.id);  
}
    })
  })
  it('add user',()=>{
  const obj =new AdminAddUser();
  cy.fixture('dataForUser').then((userList)=>{
    userList.users.forEach(myFunction);
function myFunction(item) {
obj.addUser(item.name,item.passwd,item.empName,item.role,item.status);  
}
  })
})

it('Search user',()=>{
  const obj=new AdminSearchUser();
  cy.fixture('dataForUser').then((userList)=>{
    userList.users.forEach(myFunction);
function myFunction(item) {
obj.searchUser(item.name,item.empName,item.role,item.status);  
}
  })
})

it('Delete user',()=>{
  const obj=new DeleteUser();
  cy.fixture('dataForUser').then((userList)=>{
    userList.users.forEach(myFunction);
function myFunction(item) {
obj.deleteUser(item.name,item.empName,item.role,item.status);  
}
  })
})

it('Delete employee',()=>{
  const obj=new DeleteEmp();
  cy.fixture('dataForEmp').then((empList)=>{
    empList.emp.forEach(myFunction);
function myFunction(item) {
obj.deleteEmp(item.fn,item.id);  
}
  })
})
})