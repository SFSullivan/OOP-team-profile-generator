const Manager = require('../lib/Manager')

test("Test to make sure the office number is created.", () => {
    const officeNumberTest = 4;
    const employeeTest = new Manager("John", 3, "johndoe@gmail.com", officeNumberTest);
    expect(employeeTest.officeNumber).toBe(officeNumberTest);
});

test("Testing to make sure officeNumber returns the correct office number", () => {
    const officeNumberTest = 4;
    const employeeTest = new Manager("John", 3, "johndoe@gmail.com", officeNumberTest);
    expect(employeeTest.getOfficeNumber()).toBe(officeNumberTest);
});

test("Test to make sure the role is changed to Manager.", () => {
    const returnedValue = "Manager";
    const employeeTest = new Manager("John", 3, "johndoe@gmail.com", 4);
    expect(employeeTest.getRole()).toBe(returnedValue);
});