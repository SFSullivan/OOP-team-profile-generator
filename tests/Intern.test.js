const Intern = require('../lib/Intern')

test("Test to see that School category is created", () => {
    const schoolTest = "Name of School";
    const employeeTest = new Intern("John", 3, "johndoe@gmail.com", schoolTest);
    expect(employeeTest.school).toBe(schoolTest)
});

test("Test to make sure getSchool returns the school.", () => {
    const schoolTest = "Name of School";
    const employeeTest = new Intern("John", 3, "johndoe@gmail.com", schoolTest);
    expect(employeeTest.getSchool()).toBe(schoolTest);
});

test("Testing to make sure role changes to engineer.", () => {
    const returnedValue = "Intern";
    const employeeTest = new Intern("John", 3, "johndoe@gmail.com", "Name of School");
    expect(employeeTest.getRole()).toBe(returnedValue)
});