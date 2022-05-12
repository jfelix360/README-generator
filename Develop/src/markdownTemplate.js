// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (licenseInput) => {
    // convert returned object from inquirer 'checkbox' to string variable
    let licenseInputString = licenseInput.toString();
  
    if (licenseInputString === 'Apache 2.0') {
      return `
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]  
      `;
    }
    else if (licenseInputString === 'Boost') {
      return `
[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]
      `;
    }
    else if (licenseInputString === 'BSD 3-Clause') {
      return `
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]
      `;
    }
    else if (licenseInputString === 'BSD 2-Clause') {
      return `
[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]
      `;
    }
    else if (licenseInputString === 'Creative Commons') {
      return `
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]
      `;
    }
    else if (licenseInputString === 'Creative Commons') {
      return `
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]
      `;
    }
    else if (licenseInputString === 'Eclipse') {
      return `
[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]
      `;
    }
    else if (licenseInputString === 'GNU GPL v3') {
      return `
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]
      `;
    }
    else if (licenseInputString === 'GNU GPL v2') {
      return `
[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]
      `;
    }
    else if (licenseInputString === 'GNU AGPL v3') {
      return `
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]
      `;
    }
    else if (licenseInputString === 'GNU LGPL v3') {
      return `
[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]
      `;
    }
    else if (licenseInputString === 'GNU FDL v1.3') {
      return `
[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)]
      `;
    }
    else if (licenseInputString === 'The Hippocratic License 2.1') {
      return `
[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)]
      `;
    }
    else if (licenseInputString === 'The Hippocratic License 3.0') {
      return `
[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)]
      `;
    }
    else if (licenseInputString === 'IBM Public License Version 1.0') {
      return `
[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]
      `;
    }
    else if (licenseInputString === 'ISC License') {
      return `
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]
      `;
    }
    else if (licenseInputString === 'MIT License') {
      return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
      `;
    }
    else if (licenseInputString === 'Mozilla Public License 2.0') {
      return `
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]
      `;
    }
    else if (licenseInputString === 'Attribution License') {
      return `
[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]
      `;
    }
    else if (licenseInputString === 'Open Database License') {
      return `
[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]
      `;
    }
    else if (licenseInputString === 'Public Domain Dedication and License') {
      return `
[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]
      `;
    }
    else if (licenseInputString === 'Perl License') {
      return `
[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]
      `;
    }
    else if (licenseInputString === 'Artistic License 2.0') {
      return `
[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]
      `;
    }
    else if (licenseInputString === 'SIL Open Font License 1.1') {
      return `
[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]
      `;
    }
    else if (licenseInputString === 'The Unlicense') {
      return `
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]
      `;
    }
    else if (licenseInputString === 'The Do What the Fuck You Want to Public License') {
      return `
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]
      `;
    }
    else if (licenseInputString === 'The Zlib License') {
      return `
[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]
      `;
    }
    else {
      return '';
    }
  };
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  const renderLicenseLink = (licenseInput) => {
    // convert returned object from inquirer 'checkbox' to string variable
    let licenseInputString = licenseInput.toString();
  
    if (licenseInputString === 'Apache 2.0') {
      return `
(https://opensource.org/licenses/Apache-2.0)  
      `;
    }
    else if (licenseInputString === 'Boost') {
      return `
(https://www.boost.org/LICENSE_1_0.txt)
      `;
    }
    else if (licenseInputString === 'BSD 3-Clause') {
      return `
(https://opensource.org/licenses/BSD-3-Clause)
      `;
    }
    else if (licenseInputString === 'BSD 2-Clause') {
      return `
(https://opensource.org/licenses/BSD-2-Clause)
      `;
    }
    else if (licenseInputString === 'Creative Commons') {
      return `
(http://creativecommons.org/publicdomain/zero/1.0/)
      `;
    }
    else if (licenseInputString === 'Eclipse') {
      return `
(https://opensource.org/licenses/EPL-1.0)
      `;
    }
    else if (licenseInputString === 'GNU GPL v3') {
      return `
(https://www.gnu.org/licenses/gpl-3.0)
      `;
    }
    else if (licenseInputString === 'GNU GPL v2') {
      return `
(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
      `;
    }
    else if (licenseInputString === 'GNU AGPL v3') {
      return `
(https://www.gnu.org/licenses/agpl-3.0)
      `;
    }
    else if (licenseInputString === 'GNU LGPL v3') {
      return `
(https://www.gnu.org/licenses/lgpl-3.0)
      `;
    }
    else if (licenseInputString === 'GNU FDL v1.3') {
      return `
(https://www.gnu.org/licenses/fdl-1.3)
      `;
    }
    else if (licenseInputString === 'The Hippocratic License 2.1') {
      return `
(https://firstdonoharm.dev)
      `;
    }
    else if (licenseInputString === 'The Hippocratic License 3.0') {
      return `
(https://firstdonoharm.dev)
      `;
    }
    else if (licenseInputString === 'IBM Public License Version 1.0') {
      return `
(https://opensource.org/licenses/IPL-1.0)
      `;
    }
    else if (licenseInputString === 'ISC License') {
      return `
(https://opensource.org/licenses/ISC)
      `;
    }
    else if (licenseInputString === 'MIT License') {
      return `
(https://opensource.org/licenses/MIT)
      `;
    }
    else if (licenseInputString === 'Mozilla Public License 2.0') {
      return `
(https://opensource.org/licenses/MPL-2.0)
      `;
    }
    else if (licenseInputString === 'Attribution License') {
      return `
(https://opendatacommons.org/licenses/by/)
      `
    }
    else if (licenseInputString === 'Open Database License') {
      return `
(https://opendatacommons.org/licenses/odbl/)
      `;
    }
    else if (licenseInputString === 'Public Domain Dedication and License') {
      return `
(https://opendatacommons.org/licenses/pddl/)
      `;
    }
    else if (licenseInputString === 'Perl License') {
      return `
(https://opensource.org/licenses/Artistic-2.0)
      `;
    }
    else if (licenseInputString === 'Artistic License 2.0') {
      return `
(https://opensource.org/licenses/Artistic-2.0)
      `;
    }
    else if (licenseInputString === 'SIL Open Font License 1.1') {
      return `
(https://opensource.org/licenses/OFL-1.1)
      `;
    }
    else if (licenseInputString === 'The Unlicense') {
      return `
(http://unlicense.org/)
      `;
    }
    else if (licenseInputString === 'The Do What the Fuck You Want to Public License') {
      return `
(http://www.wtfpl.net/about/)
      `;
    }
    else if (licenseInputString === 'The Zlib License') {
      return `
(https://opensource.org/licenses/Zlib)
      `;
    }
    else {
      return '';
    }
  };
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  const renderLicenseSection = (licenseInput) => {
    // convert returned object from inquirer 'checkbox' to string variable
    let licenseInputString = licenseInput.toString();
    
    if (licenseInputString === 'This project is unlicensed') {
      return '';
    }
    
    else {
      return `
This project is licensed under ${licenseInputString}
      `
    };
  };

module.exports  = userInput => {
    // Use template literals to format Markdown 
return `
${renderLicenseBadge(userInput.license)}
    
#${userInput.project}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
7. [License](#license)
    
## Description
${userInput.description}

## Installation
${userInput.install}

## Usage
${userInput.usage}

## Contributing 
${userInput.contributions}

## Tests
${userInput.tests}

## Questions
Please contact me with questions concerning ${userInput.project} either through
my github page: ${userInput.github} or at ${userInput.email}

## License 
${renderLicenseSection(userInput.license)}
${renderLicenseLink(userInput.license)}
`;
};

