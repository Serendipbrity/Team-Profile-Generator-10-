const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-generator');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { resolve } = require('path');
const employees = [];

// create function to write html file
const writeFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File  Created!'
            });
        });
    });
};

// create a function that calls other employee functions to create the team object
const init = () => {
    
}