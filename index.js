// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const path =require('path')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ {
    type:"input",
    message: "What is the project name?",
    name:"title",
    validate:(value)=>{if(value){return true}else {return'input needed'}}
},

{
    type:"input",
    message: "project description?",
    name:"description",
    validate:(value)=>{if(value){return true}else {return'input needed'}}
},

{
    type:"input",
    message: "table of contents?",
    name:"content",
    validate:(value)=>{if(value){return true}else {return'input needed'}}
},

{
    type:"input",
    message: "how to install and run the project?",
    name:"install",
    validate:(value)=>{if(value){return true}else {return'input needed'}}
},

{
    type:"input",
    message: "how is the project used",
    name:"usage",
    validate:(value)=>{if(value){return true}else {return'input needed'}}
},

{
    type:"input",
    message: "credits?",
    name:"credits",
    validate:(value)=>{if(value){return true}else {return'input needed'}}
},
{
    type:"checkbox",
    message: "What License are you using?",
    name:"license",
    choices:['AFL-3.0','Apache-2.0','MPL-2.0','Artistic-2.0','MIT', 'none'],
    validate:(value)=>{if(value){return true}else {return'input needed'}}
},
{
    type:"input",
    message: "What is your github username?",
    name:"github",
    validate:(value)=>{if(value){return true}else {return'input needed'}}
},
{
    type:"input",
    message: "What tests were ran?",
    name:"tests",
    validate:(value)=>{if(value){return true}else {return'input needed'}}
},
{
    type:"input",
    message: "What is your email?",
    name:"email",
    validate:(value)=>{if(value){return true}else {return'input needed'}}
},{
    type:"input",
    message: "who contributed? what did they do?",
    name:"contribution",
    validate:(value)=>{if(value){return true}else {return'input needed'}}
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName),data)}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=>{
        console.log('creating readme');
        writeToFile('./README.md',generateMarkdown({...responses}))
    })
}

// Function call to initialize app
init();
