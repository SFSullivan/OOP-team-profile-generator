const Engineer = require('../lib/Engineer')

test("Creates a github.", () => {
    const testGithub = "GitUserName";
    const employeeTest = new Engineer("John", 3, "johndoe@gmail.com", testGithub);
    expect(employeeTest.github).toBe(testGithub);
});

test("getGithub will return github.", () => {
    const testGithub = "GitUserName";
    const employeeTest = new Engineer("John", 3, "johndoe@gmail.com", testGithub);
    expect(employeeTest.getGithub()).toBe(testGithub)
});

test("Testing to make sure role changes to engineer.", () => {
    const returnedValue = "Engineer";
    const employeeTest = new Engineer("John", 3, "johndoe@gmail.com", "GitUserName");
    expect(employeeTest.getRole()).toBe(returnedValue)
});