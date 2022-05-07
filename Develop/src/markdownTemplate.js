const { renderLicenseBadge } = require("../utils/generateMarkdown")

const generateTemplate = userInput => {
    // Use template literals to format Markdown 
    return `
    ### ${renderLicenseBadge(license)}
    
    # ${project}

    ## Description
    ### ${description}

    ## Table of Contents
    ### ${toc}

    ## Installation
    ### ${install}

    ## Usage
    ### ${usage}

    ## Contributing 
    ### ${contributions}

    ## Tests
    ### ${tests}

    ## Questions
    ### Please contact me with questions concerning ${project} either through
    ### my github page: ${github} or at ${email}

    ## License 
    ### ${renderLicenseSection}
    ### ${renderLicenseLink}
    `
}