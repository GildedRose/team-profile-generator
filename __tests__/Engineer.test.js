const Engineer = require("../lib/Engineer");

test('creates an engineer', () => {
    const engineer = new Engineer("Josie", "1", "sad@techfirm", "JosieJo");

    expect(engineer.getName()).toBe("Josie");
    expect(engineer.getId()).toBe("1");
    expect(engineer.getEmail()).toBe("sad@techfirm");
    expect(engineer.getGitHub()).toBe("JosieJo");
    expect(engineer.getRole()).toBe("Engineer");
});