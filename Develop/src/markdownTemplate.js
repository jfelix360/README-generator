const { renderLicenseBadge } = require("../utils/generateMarkdown")

const generateTemplate = userInput => {
    // Use template literals to format Markdown 
    return `
    ### ${renderLicenseBadge(userInput.license)}
    
    # ${userInput.project}

    ## Description
    ### ${userInput.description}

    ## Table of Contents
    ### ${userInput.toc}

    ## Installation
    ### ${userInput.install}

    ## Usage
    ### ${userInput.usage}

    ## Contributing 
    ### ${userInput.contributions}

    ## Tests
    ### ${userInput.tests}

    ## Questions
    ### Please contact me with questions concerning ${userInput.project} either through
    ### my github page: ${userInput.github} or at ${userInput.email}

    ## License 
    ### ${renderLicenseSection(userInput.license)}
    ### ${renderLicenseLink(userInput.license)}
    `
}