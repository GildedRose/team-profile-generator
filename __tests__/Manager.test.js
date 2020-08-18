const Manager = require("../lib/Manager");

test('creates an manager', () => {
    const manager = new Manager("Josie", "1", "sad@techfirm", "1234");

    expect(manager.getName()).toBe("Josie");
    expect(manager.getId()).toBe("1");
    expect(manager.getEmail()).toBe("sad@techfirm");
    expect(manager.getOfficeNumber()).toBe("1234");
    expect(manager.getRole()).toBe("Manager");
});