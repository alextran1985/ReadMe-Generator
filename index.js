// TODO: Include packages needed for this application
// inquier packages 8.2.4
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description to your README?',
      },
      {
        type: 'input',
        name: 'table of contents',
        message: 'What is your table of contents?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are some installtion that you use?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are the usage for your README?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What are the License you use for your README?',
        choices:['']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What or Who contributed to you project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the tests you use?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Do you have any questions?',
      }, 
    ])
    .then((answers) => {
        console.log("Data Captured: ", answers);

      const READMEPageContent = generateMarkdown(answers);
      console.log("Generated Dataset: ", READMEPageContent);
      console.log("Data type: ", typeof READMEPageContent);  // string 
  
      fs.writeFile('README.md', READMEPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
      );
      
   
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   questions();
   
   /* promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('index.html', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
      */ 
}

// Function call to initialize app
//const init = () => {};
  
init();


// --- What Order should things(EVENTS) happen in our Program? -- // 

// 1) Capture User data --> use inquirer.prompt() --> questions() | handle a async PROMISE

// Once we HAVE DATA --> ?
//     we can store that data in a variable --> .then(answers)
// 2) What do we DO with the DATA --> we want to CREATE a README document (string object)

// 3) Lastly we SAVE --> WRITE that DATA to a file 
