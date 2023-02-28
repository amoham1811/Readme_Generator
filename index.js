import inquirer from "inquirer";
import fs from 'fs/promises'
import test from "node:test";

const {title, table_content, description, installation, contributions, license, tests, github,email} = await inquirer
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
        },
        {
            name: 'email',
            input: 'input',
            message: "Please enter your email address? "
        }
])

const readme =  `
# ${title}

![Github license](https://img.shields.io/badge/license-${license}-blue.svg)

## Table of content
    * ${table_content[1]}
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


## Contributions
${contributions}


## License
For more details on the licence, please click on the link below:   
https://opensource.org/licenses/${license}


## Tests 
${tests}

## Questions
Click the link below to author profile.
https://github.com/${github}

User email:${email}  
If you have any questions you can email at the above address or visit my page on Github page using the link above.

`

await fs.writeFile('README.md', readme)
