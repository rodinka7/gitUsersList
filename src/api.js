const axios = require('axios');
let oauth;

const fetchRequest = query => {
    return axios({
        url: 'https://api.github.com/graphql',
        method: 'post',
        headers: oauth,
        data: { query }
    })
    .then(response => response.data)
    .catch(err => err);
}

export const getUserLocation = token => {
    oauth = {Authorization: `bearer ${token}`};
    return fetchRequest(`
        query {
            viewer {
                location
            }
        }`
    )
}

export const getUsersApi = location => {
    return fetchRequest(`
        query {
            search(query: "location:${location} sort:followers-desc", type: USER, first: 10) {
                nodes {
                    ... on User {
                        id
                        bio
                        email
                        avatarUrl
                        url
                        location
                        login
                        name
                        followers {
                            totalCount
                        }
                    }
                }
            }
        }`
    )
}