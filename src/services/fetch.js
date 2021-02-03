
const xFilesURL = 'https://xfiles-api.herokuapp.com/api/v1/';

const fetchCharacters = () => {
    return fetch(`${xFilesURL}characters`)
        .then(response => response.json())
        .then(data => { return data.results })
        .catch(err => { throw err })
}

const fetchCharacter = (characterName) => {
    return fetch(`${xFilesURL}characters/${characterName}`)
        .then(response => response.json())
        .then(data => { return data[0] })
        .catch(err => { throw err })
}


module.exports = { fetchCharacters, fetchCharacter }
