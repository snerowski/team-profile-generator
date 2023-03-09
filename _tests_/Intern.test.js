const Intern = require("../src/Intern");

test("Can set school via constructor", () => {
    const testValue = "Mississippi State";
    const e = new Intern("Seth", 1, "seth@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Seth", 1, "seth@test.com", "Mississippi State");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "Mississippi State";
    const e = new Intern("Seth", 1, "seth@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});