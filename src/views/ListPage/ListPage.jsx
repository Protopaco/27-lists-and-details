import { fetchCharacters } from '../../services/fetch.js'
import React, { useState, useEffect } from 'react';


export const ListPage = () => {
    const [characterList, setCharacterList] = useState([])

    useEffect(async () => {
        const characterList = await fetchCharacters();
        await setCharacterList(characterList)
        // console.log(characterList)
    }, [])


    return (
        <div>
            <ul>
                {characterList ?
                    characterList.map(character => {
                        return <li>{character.name}</li>
                    })
                    :
                    <li>loading!</li>
                }
            </ul>
        </div>
    )
}

export default ListPage;
