const Employee = require("../lib/Employee");

test("Employee Object", () => {
  const employee = new Employee("Morgan", 2, "morgan@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
