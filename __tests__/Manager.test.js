const Manager = require("../lib/Manager");

test("Manager Object", () => {
  const manager = new Manager("Terry", 1, "test@gmail.com", "8");

  expect(manager.getName()).toEqual(expect.any(String));
  expect(manager.getId()).toEqual(expect.any(Number));
  expect(manager.getEmail()).toEqual(expect.any(String));
  expect(manager.getOfficeNum()).toEqual(expect.any(String));
});
