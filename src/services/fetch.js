
const xFilesURL = 'https://xfiles-api.herokuapp.com/api/v1/';

const fetchCharacters = () => {
    return fetch(`${xFilesURL}characters`)
        .then(response => response.json())
        .then(data => { return data.results })
        .catch(err => { throw err })
}


module.exports = { fetchCharacters }
