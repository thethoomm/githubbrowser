

class GitHubUser {
    constructor(login, name, id, bio, repos, followers, avatar_url) {
        this.login = login
        this.name = name
        this.id = id
        this.bio = bio
        this.repos = repos
        this.followers = followers
        this.avatar_url = avatar_url
    }
}

const searchBox = document.querySelector('#search-box')
const searchBtn = document.querySelector('#search-btn')



async function searchGitUser(response) {
    console.log('Estou procurando...')
    fetch(`https://api.github.com/users/${ searchBox.value }`)
        .then(async (response) => {
            const data = await response.json()
            const gitUser = new GitHubUser(data.login, data.name, data.id, data.bio, data.repos, data. followers, data.avatar_url)
            document.querySelector('#avatar').src = gitUser.avatar_url
            document.querySelector('#login').innerHTML = gitUser.login.toUpperCase()
            document.querySelector('#name').innerHTML = `Name: ${gitUser.name}`
            document.querySelector('#id').innerHTML = `ID: ${gitUser.id}`
            document.querySelector('#bio').innerHTML = `Bio: ${gitUser.bio}`
            document.querySelector('#repos').innerHTML = `Repos: ${gitUser.repos}` 
            document.querySelector('#followers').innerHTML = `Followers: ${gitUser.followers}`
            document.querySelector('#blind-msg').innerHTML = ''
        }).catch((error) => console.error(error) )

        
}