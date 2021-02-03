import { fetchCharacters } from '../../services/fetch.js'
import React, { useState, useEffect } from 'react';
import CharacterPreview from '../../components/CharacterPreview/CharacterPreview.jsx';
import styles from './listPage.css'


const ListPage = () => {
    const [characterList, setCharacterList] = useState([])

    useEffect(async () => {
        const characterList = await fetchCharacters();
        setCharacterList(characterList);
    }, [])

    const characterMap = characterList.map(character => {
        return <li key={characterList.indexOf(character)}>
            <CharacterPreview {...character} />
        </li>
    })

    return (
        <div>
            {characterList ?
                <ul className={styles.listPage}>
                    {characterMap}
                </ul >
                :
                <p>LOADING</p>
            }
        </div>
    )
}


export default ListPage;
