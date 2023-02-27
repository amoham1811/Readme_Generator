import inquirer from "inquirer";
import fs from 'fs/promises'

const {title, description, table_content, installation, license, contributions, tests, github} = await inquirer
    .prompt([
        {
            name: 'title',
            type:'input',
            // input: 'input',
            message: "What is the name of your project? "
        },
        {
            name: 'description',
            type:'input',
            // input: 'input',
            message: "Please enter a description of your project? "
        },
        {
            name: 'table_content',
            type: 'checkbox',
            // input: 'input',
            message: "Please select items for your table of content? ",
            choices:['Description','Installation','Usage']
        },
        {
            name: 'installation',
            type: 'input',
            message: "Please, enter installation details: "
        },
        {
            name: 'license',
            type:'list',
            // input: 'input',
            message: "What is your linkedIn? ",
            choices:['license1','licence2','license3']
        },
        {
            name: 'contributions',
            type: 'input',
            message: "Who has contributed to this project? "
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

console.log(title, description, table_content, installation, license, contributions, tests, github);


//  await fs.writeFile('readne.md', readme)
