import inquirer from "inquirer";
import fs from 'fs/promises'
import test from "node:test";

const {title, table_content, description, installation, contributions, license, tests, github} = await inquirer
    .prompt([
        {
            name: 'title',
            type:'input',
            message: "What is the name of your project? "
        },
        {
            name: 'table_content',
            type: 'checkbox',
            message: "Please select section headings for your table of content? ",
            choices:['Description','Installation','Usage','Contributions','License','Tests']
        },
        {
            name: 'description',
            default: 'Project description to follow.',
            type:'input',
            message: "Please enter a description of your project? "
        },
        {
            name: 'installation',
            default: 'Installation details to be provided later',
            type: 'input',
            message: "Please, enter installation details: "
        },
        {
            name: 'contributions',
            default: 'List of contributions will be provided here.',
            type: 'input',
            message: "Who has contributed to this project? "
        },
        {
            name: 'license',
            type:'list',
            message: "What is your linkedIn? ",
            choices:['GPL2.0','MIT','Apache2.0','GPL3.0','BSD2.0']
        },
        {
            name: 'tests',
            input: 'input',
            message: "Please enter details of any tests carried out? "
        },
        {
            name: 'github',
            input: 'input',
            message: "Please enter your github username? "
        }
])

console.log(title, table_content, description, installation, contributions, license, tests, github);


const readme =  `
# ${title}

![Github license](https://img.shields.io/badge/license-${license}-blue.svg)

## Table of content
    * ${table_content[0]}
    * ${table_content[1]}
    * ${table_content[2]}
    * ${table_content[3]}
    * ${table_content[4]}
    * ${table_content[5]}

## Description 
${description}


## Installation
${installation}

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Contributions
${contributions}
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## License
${license}

For open source projects, say how it is licensed.

##Tests 
${tests}

## Application
Click the link below to view the application.
https://${github}.github.io/Readme_Generator/

`

await fs.writeFile('README.md', readme)
