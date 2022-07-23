const Employee = require('../lib/Employee')

test('can make employee object', () => {
    const example = new Employee()
    expect(typeof(example)).toBe('object')
})

test('name is being returned', () => {
    const example = new Employee('name')
    expect(example.name).toBe('name');
})

test('employee ID is entered properly', () => {
    const example = new Employee('name','id')
    expect(example.id).toBe('id');
})

test('employee entered email address properly', () => {
    const example = new Employee('name', 'id', 'email')
    expect(example.email).toBe('email');
})

test('testing to see if getName works', () => {
    const example = new Employee('name')
    expect(example.getName()).toBe('name')
})

test('testing the getId thing', () => {
    const example = new Employee('name', 'id')
    expect(example.getId()).toBe('id');
})