const generateTemplate = userInput => {
    // Use template literals to format Markdown 
    return `
    ${renderLicenseBadge(userInput.license)}
    
    #${userInput.project}

    ## Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Contributing](#contributing)
    5. [Test](#tests)
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
}