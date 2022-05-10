const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return `
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]  
    `;
  }
  else if (license === 'Boost') {
    return `
    [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]
    `;
  }
  else if (license === 'BSD 3-Clause') {
    return `
    [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]
    `;
  }
  else if (license === 'BSD 2-Clause') {
    return `
    [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]
    `;
  }
  else if (license === 'Creative Commons') {
    return `
    [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]
    `;
  }
  else if (license === 'Creative Commons') {
    return `
    [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]
    `;
  }
  else if (license === 'Eclipse') {
    return `
    [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]
    `;
  }
  else if (license === 'GNU GPL v3') {
    return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]
    `;
  }
  else if (license === 'GNU GPL v2') {
    return `
    [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]
    `;
  }
  else if (license === 'GNU AGPL v3') {
    return `
    [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]
    `;
  }
  else if (license === 'GNU LGPL v3') {
    return `
    [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]
    `;
  }
  else if (license === 'GNU FDL v1.3') {
    return `
    [![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)]
    `;
  }
  else if (license === 'The Hippocratic License 2.1') {
    return `
    [![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)]
    `;
  }
  else if (license === 'The Hippocratic License 3.0') {
    return `
    [![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)]
    `;
  }
  else if (license === 'IBM Public License Version 1.0') {
    return `
    [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]
    `;
  }
  else if (license === 'ISC License') {
    return `
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]
    `;
  }
  else if (license === 'MIT License') {
    return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
    `;
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `
    [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]
    `;
  }
  else if (license === 'Attribution License') {
    return `
    [![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]
    `;
  }
  else if (license === 'Open Database License') {
    return `
    [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]
    `;
  }
  else if (license === 'Public Domain Dedication and License') {
    return `
    [![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]
    `;
  }
  else if (license === 'Perl License') {
    return `
    [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]
    `;
  }
  else if (license === 'Artistic License 2.0') {
    return `
    [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]
    `;
  }
  else if (license === 'SIL Open Font License 1.1') {
    return `
    [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]
    `;
  }
  else if (license === 'The Unlicense') {
    return `
    [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]
    `;
  }
  else if (license === 'The Do What the Fuck You Want to Public License') {
    return `
    [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]
    `;
  }
  else if (license === 'The Zlib License') {
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
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return `
    (https://opensource.org/licenses/Apache-2.0)  
    `;
  }
  else if (license === 'Boost') {
    return `
    (https://www.boost.org/LICENSE_1_0.txt)
    `;
  }
  else if (license === 'BSD 3-Clause') {
    return `
    (https://opensource.org/licenses/BSD-3-Clause)
    `;
  }
  else if (license === 'BSD 2-Clause') {
    return `
    (https://opensource.org/licenses/BSD-2-Clause)
    `;
  }
  else if (license === 'Creative Commons') {
    return `
    (http://creativecommons.org/publicdomain/zero/1.0/)
    `;
  }
  else if (license === 'Eclipse') {
    return `
    (https://opensource.org/licenses/EPL-1.0)
    `;
  }
  else if (license === 'GNU GPL v3') {
    return `
    (https://www.gnu.org/licenses/gpl-3.0)
    `;
  }
  else if (license === 'GNU GPL v2') {
    return `
    (https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
    `;
  }
  else if (license === 'GNU AGPL v3') {
    return `
    (https://www.gnu.org/licenses/agpl-3.0)
    `;
  }
  else if (license === 'GNU LGPL v3') {
    return `
    (https://www.gnu.org/licenses/lgpl-3.0)
    `;
  }
  else if (license === 'GNU FDL v1.3') {
    return `
    (https://www.gnu.org/licenses/fdl-1.3)
    `;
  }
  else if (license === 'The Hippocratic License 2.1') {
    return `
    (https://firstdonoharm.dev)
    `;
  }
  else if (license === 'The Hippocratic License 3.0') {
    return `
    (https://firstdonoharm.dev)
    `;
  }
  else if (license === 'IBM Public License Version 1.0') {
    return `
    (https://opensource.org/licenses/IPL-1.0)
    `;
  }
  else if (license === 'ISC License') {
    return `
    (https://opensource.org/licenses/ISC)
    `;
  }
  else if (license === 'MIT License') {
    return `
    (https://opensource.org/licenses/MIT)
    `;
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `
    (https://opensource.org/licenses/MPL-2.0)
    `;
  }
  else if (license === 'Attribution License') {
    return `
    (https://opendatacommons.org/licenses/by/)
    `
  }
  else if (license === 'Open Database License') {
    return `
    (https://opendatacommons.org/licenses/odbl/)
    `;
  }
  else if (license === 'Public Domain Dedication and License') {
    return `
    (https://opendatacommons.org/licenses/pddl/)
    `;
  }
  else if (license === 'Perl License') {
    return `
    (https://opensource.org/licenses/Artistic-2.0)
    `;
  }
  else if (license === 'Artistic License 2.0') {
    return `
    (https://opensource.org/licenses/Artistic-2.0)
    `;
  }
  else if (license === 'SIL Open Font License 1.1') {
    return `
    (https://opensource.org/licenses/OFL-1.1)
    `;
  }
  else if (license === 'The Unlicense') {
    return `
    (http://unlicense.org/)
    `;
  }
  else if (license === 'The Do What the Fuck You Want to Public License') {
    return `
    (http://www.wtfpl.net/about/)
    `;
  }
  else if (license === 'The Zlib License') {
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
function renderLicenseSection(license) {
  if (license === 'This project is unlicensed') {
    return '';
  }
  
  else {
    return `
    This project is licensed under ${license}
    `
  };
};

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};


module.exports = {writeFile, renderLicenseBadge, renderLicenseLink, renderLicenseSection};

