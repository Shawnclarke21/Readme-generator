// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license!=="none"){
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license!=="none"){
    return '';
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!=="none"){
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.github}/${data/title}
  # Description
  ${data.description}
  # Table of contents
  *[installation](#install)
  *[Usage](#usage)
  *[Credits](#credits)
  *[License](#license)
  *[tests](#tests)
  # installation
  these following programs are necessary to install this program
  # License
  This project is licensed under ${data.license}
  # credits
  credits go to ${data.credits}
  # tests
  the following is needed to run tests ${data.tests}

  if you have questions or suggests reach out to ${data.email}


`;
}

module.exports = generateMarkdown;
