// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   let licenseEl = renderLicenseLink(license);
   let imgLicense = `![license](${licenseEl})`;
   return imgLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let shieldBadge = `https://img.shields.io/badge/license-${license}-green`;
    return shieldBadge;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let section = "";
   license?  section = renderLicenseBadge(license): section = ""
   return section;
}
module.exports = {
    renderLicenseSection
}
// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
//   //return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;