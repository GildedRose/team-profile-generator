const Employee = require("../lib/Employee");

test('creates an employee', () => {
    const employee = new Employee('Josie');

    expect(employee.name).toBe('Josie');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toHaveProperty('@techfirm');
    expect(employee.role).toBe('Manager');
});