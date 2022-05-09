// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-generator");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];

// Create function to write HTML file
const writeFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File Created!",
      });
    });
  });
};

// Creates a function that calls other employee functions to create the team object
const init = () => {
  return inquirer
    .prompt([
      {
        //capture Manager Name
        type: `input`,
        name: `name`,
        message: `What is the team manager's name?(Required)`,
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter the team manager's name!`);
            return false;
          }
        },
      },
      {
        // Capture Manager ID
        type: `input`,
        name: `id`,
        message: `What is the team manager's id?(Required)`,
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Please enter the team manager's id!`);
            return false;
          }
        },
      },
      {
        //Capture Manager Email
        type: `input`,
        name: `email`,
        message: `What is the team manager's email?(Required)`,
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter the team manager's email!`);
            return false;
          }
        },
      },
      {
        //Capture Manager Office Number
        type: `input`,
        name: `office`,
        message: `What is the team manager's office number?(Required)`,
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log(`Please enter the team manager's office number!`);
            return false;
          }
        },
      },
      {
        //Add another employee?
        type: `list`,
        name: `extraEmployee`,
        message: `Would you like to add another employee?`,
        choices: ["Add Engineer", "Add Intern", "Finish building my team"],
      },
    ]) // fulfill Promise
    .then((data) => {
      const { name, id, email, office, extraEmployee } = data;
      const manager = new Manager(name, id, email, office);

      employees.push(manager);

      return extraEmployee;
    });
};

const addEmployee = (data) => {
  if (data === "Add Engineer") {
    return inquirer
      .prompt([
        {
          // Engineer Name
          type: `input`,
          name: `name`,
          message: `What is the engineer's name?(Required)`,
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(`Please enter the engineer's name!`);
              return false;
            }
          },
        },
        {
          // Engineer ID
          type: `input`,
          name: `id`,
          message: `What is the engineer's id?(Required)`,
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log(`Please enter the engineer's id!`);
              return false;
            }
          },
        },
        {
          // Engineer Email
          type: `input`,
          name: `email`,
          message: `What is the engineer's email?(Required)`,
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log(`Please enter the engineer's email!`);
              return false;
            }
          },
        },
        {
          // Engineers Github
          type: `input`,
          name: `github`,
          message: `What is the engineer's GitHub username?(Required)`,
          validate: (githubInput) => {
            if (githubInput) {
              return true;
            } else {
              console.log(`Please enter the engineer's GitHub username!`);
              return false;
            }
          },
        },
        {
          // Add another employee?
          type: `list`,
          name: `extraEmployee`,
          message: `Would you like to add another employee?`,
          choices: ["Add Engineer", "Add Intern", "Finish building my team"],
        },
      ]) // fulfill promise
      .then((data) => {
        const { name, id, email, github, extraEmployee } = data;
        const engineer = new Engineer(name, id, email, github);

        employees.push(engineer);

        addEmployee(extraEmployee);
      });
  } else if (data === "Add Intern") {
    return inquirer
      .prompt([
        {
          // capture Interns Name
          type: `input`,
          name: `name`,
          message: `What is the intern's name?(Required)`,
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(`Please enter the intern's name!`);
              return false;
            }
          },
        },
        {
          //capture interns ID
          type: `input`,
          name: `id`,
          message: `What is the intern's id?(Required)`,
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log(`Please enter the intern's id!`);
              return false;
            }
          },
        },
        {
          // Capture interns Email
          type: `input`,
          name: `email`,
          message: `What is the intern's email?(Required)`,
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log(`Please enter the intern's email!`);
              return false;
            }
          },
        },
        {
          //Capture Interns School
          type: `input`,
          name: `school`,
          message: `What is the intern's school name?(Required)`,
          validate: (schoolInput) => {
            if (schoolInput) {
              return true;
            } else {
              console.log(`Please enter the intern's school name!`);
              return false;
            }
          },
        },
        {
          // Add another employee?
          type: `list`,
          name: `extraEmployee`,
          message: `Would you like to add another employee?`,
          choices: ["Add Engineer", "Add Intern", "Finish building my team"],
        },
      ]) // fulfill promise
      .then((data) => {
        const { name, id, email, school, extraEmployee } = data;
        const intern = new Intern(name, id, email, school);

        employees.push(intern);

        addEmployee(extraEmployee);
      });
  } else {
    // generate page
    const html = generatePage(employees);
    return writeFile(html);
  }
};

init()
  .then((data) => {
    addEmployee(data);
  })
  .catch((err) => {
    console.log(err);
  });
