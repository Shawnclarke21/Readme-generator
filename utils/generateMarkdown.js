// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license!=="Apache-2.0"){
    return `[![License](https://img.shields.io/badge/License-${license}-Apache_2.0-blue.svg)]`  };
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license!=="Apache-2.0"){
    return 'https://opensource.org/licenses/Apache-2.0'
}else{
  return '';
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!=="Apache-2.0"){
    return `# License
    
              Licensed under ${data.license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.github}/${data.title}
  # Description
  ${data.description}
  # usage
  ${data.usage}
  # installation
  these following programs are necessary to install this program ${data.installation}
  # credits
  credits go to ${data.credits}
  # tests
  the following is needed to run tests ${data.tests}
  # License
  ${data.license}
  # Contribution
  ${data.contribution}

  if you have questions or suggests reach out to ${data.email}


`;
}

module.exports = generateMarkdown;
