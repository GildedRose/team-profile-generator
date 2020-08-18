const Employee = require("../lib/Employee");

test('creates an employee', () => {
    const employee = new Employee("Josie", "1", "sad@techfirm");

    expect(employee.getName()).toBe("Josie");
    expect(employee.getId()).toBe("1");
    expect(employee.getEmail()).toBe("sad@techfirm");
    expect(employee.getRole()).toBe("Employee");
});