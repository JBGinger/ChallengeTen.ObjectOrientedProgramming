const Employee = require("../lib/employee");

test('Tests employee functions', () => {
    const newEmployee = new Employee('Test', 1, 'test@testemail.com', 'Employee');

    expect(newEmployee.getName()).toEqual('Test');
    expect(newEmployee.getId()).toEqual(1);
    expect(newEmployee.getEmail()).toEqual('test@testemail.com');
    expect(newEmployee.getRole()).toEqual('Employee');
})