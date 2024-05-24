// TODO: Include packages needed for this application
// inquier packages 8.2.4
const inquier = require('inquirer');

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
        choices:[example,example2]
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
      const READMEPageContent = generateREADME(answers);
  
      fs.writeFile('README.md', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
      );
      
   
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
init()};
