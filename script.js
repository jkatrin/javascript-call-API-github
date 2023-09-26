var valorPassadoUsuario = ""

const apresentation = async () => {
    res.innerHTML = `<h1>Digite seu Login do GitHub<h1>`
    res.innerHTML += `<input type="text" name="nameUserGit" id="nameUserGit">`
    res.innerHTML += `<br><br><button onclick="getUserGitHubAPI()">Chamar API</button>`
}

const redirectToGithubUser = async () => {
    const url = 'https://github.com/'+valorPassadoUsuario

    window.location.href = url
}

const getUserGitHubAPI  = async () => {
    const nameUserGit = window.document.getElementById('nameUserGit').value

    if (nameUserGit != ""){
        valorPassadoUsuario=nameUserGit
        const APIResponse = await fetch('https://api.github.com/users/'.concat(nameUserGit));
        const gitHubUser = await APIResponse.json();
        res.innerHTML += `<h2>${gitHubUser.name}</h2>`
        res.innerHTML += `<img src=${JSON.stringify(gitHubUser.avatar_url)} >`
        res.innerHTML += `<br><button onclick="redirectToGithubUser()">Visite link do GitHub</button>`
    }
    
}

apresentation()

// {
//     "login": "jkatrin",
//     "id": 106546595,
//     "node_id": "U_kgDOBlnFow",
//     "avatar_url": "https://avatars.githubusercontent.com/u/106546595?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/jkatrin",
//     "html_url": "https://github.com/jkatrin",
//     "followers_url": "https://api.github.com/users/jkatrin/followers",
//     "following_url": "https://api.github.com/users/jkatrin/following{/other_user}",
//     "gists_url": "https://api.github.com/users/jkatrin/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/jkatrin/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/jkatrin/subscriptions",
//     "organizations_url": "https://api.github.com/users/jkatrin/orgs",
//     "repos_url": "https://api.github.com/users/jkatrin/repos",
//     "events_url": "https://api.github.com/users/jkatrin/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/jkatrin/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Jessica Xavier",
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": "Software Developer FrontEnd",
//     "twitter_username": null,
//     "public_repos": 10,
//     "public_gists": 0,
//     "followers": 1,
//     "following": 2,
//     "created_at": "2022-05-30T15:55:03Z",
//     "updated_at": "2023-09-23T18:26:18Z"
// }