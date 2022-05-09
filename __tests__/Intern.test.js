const Intern = require("../lib/Intern");

test("Intern Object", () => {
  const intern = new Intern(
    "Jane Doe",
    4,
    "jane@yahoo.com",
    "Richmond University"
  );

  expect(intern.getName()).toEqual(expect.any(String));
  expect(intern.getId()).toEqual(expect.any(Number));
  expect(intern.getEmail()).toEqual(expect.any(String));
  expect(intern.getSchool()).toEqual(expect.any(String));
  expect(intern.getRole()).toBe("Intern");
});
