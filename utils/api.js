const inquirer = require("Inquirer")
const axios = require("axios")


const api = {
    getUser(username) {
        inquirer
        .prompt({
            message: "What is your Github username?",
            name: "username"
        })

        .then(function({ username}){
            const queryUrl = `https://api.github.com/users/${username}`


            axios.get(queryUrl).then(function(res) {
                const avatarURL = res.data.avatar_url
                console.log(avatarURL)
            })
        })
    }
}


module.exports = api
