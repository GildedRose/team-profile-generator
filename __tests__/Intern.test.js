const Intern = require("../lib/Intern");

test('creates an intern', () => {
    const intern = new Intern("Josie", "1", "sad@techfirm", "JosieJoSchool");

    expect(intern.getName()).toBe("Josie");
    expect(intern.getId()).toBe("1");
    expect(intern.getEmail()).toBe("sad@techfirm");
    expect(intern.getSchool()).toBe("JosieJoSchool");
    expect(intern.getRole()).toBe("Intern");
});