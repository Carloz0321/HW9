function generateMarkdown(data) {
    const avatar = `https://github.com/${data.username}.png?size=50`
    const github = `https://img.shields.oi/badge/Github-${data.username}-4cbbb9`

    return `
    ${data.title}
    
    ##Description
    ${data.description}
    
    
    ## Installations
    ${data.installation}
    
    
    
    ## Usages
    ${data.usge}
    
    ## License
    ${data.license}
    
    
    ## Tests
    ${data.tests}
    
    
    ## Contributors
    ${data.contributer}
    
    ## Content
    ${github}
    ${avatar}
    ${data.url}
    ${data.email}`
}

module.exports = generateMarkdown