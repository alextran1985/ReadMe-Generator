// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }
  return "## Liscense"
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}<Your-Project-Title>

  
  ## Description
  ${data.description}


  
  ## Table of Contents (Optional)
  ${data.tableofcontents}
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ## Usage
  ${data.usage}
  Provide instructions and examples for use. Include screenshots as needed.
  
  
  ![alt text](assets/images/screenshot.png)
  
  ## Credits
  ${data.credits}
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  ${data.license}
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  ${data.badges}
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Questions
  ${data.questions}
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  ${data.contributing}
  
  If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  ${data.tests}
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
  

`;
}


module.exports = generateMarkdown;
