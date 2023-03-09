const Manager = require("../src/Manager");
const Employee = require("../src/Employee");

test("Can set office number via constructor argument", () => {
    const testValue = 69;
    const e = new Manager("Seve", 1, "seve@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Seve", 1, "test@test.com", 69);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 69;
    const e = new Manager("Seve", 1, "seve@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});