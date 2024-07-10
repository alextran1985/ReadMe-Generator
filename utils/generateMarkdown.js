// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge(license) {
  switch (license) {
      case 'MIT':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'GPL':
          return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'Apache':
          return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      default:
          return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function getLicenseLink(licenseName) {
  // Define a map of licenses and their corresponding links
  const licenseMap = {
      "MIT": "https://opensource.org/licenses/MIT",
      "Apache-2.0": "https://www.apache.org/licenses/LICENSE-2.0",
      "GPL-3.0": "https://www.gnu.org/licenses/gpl-3.0.html",
      // Add more licenses as needed
  };

  // Check if the license name exists in the map
  if (licenseName && licenseMap.hasOwnProperty(licenseName)) {
      return licenseMap[licenseName];
  } else {
      return ""; // Return empty string if license is not found or not provided
  }
}

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
  
  
  ## Installation
  ${data.installation}
 
  ## Usage
  ${data.usage}
  
  ![alt text](assets/images/screenshot.png)
  
  ## Credits
  ${data.credits}
  
  
  ## License
  ${data.license}
  
  ## Badges

  ![${data.badges}](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  
  ## Questions
  This is my Github link https://github.com/${data.questions}.
  
  You can contact me at ${data.email} for any other questions.

  ## How to Contribute
  ${data.contributing}

  
  ## Tests
  ${data.tests}
  
  

`;
}


module.exports = generateMarkdown;
