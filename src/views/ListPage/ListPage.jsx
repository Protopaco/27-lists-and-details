import { fetchCharacters } from '../../services/fetch.js'
import React, { useState, useEffect } from 'react';
import CharacterPreview from '../../components/CharacterPreview/CharacterPreview.jsx';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail.jsx';
import styles from './listPage.css'


export const ListPage = () => {
    const [characterList, setCharacterList] = useState([])
    const [chosenCharacter, setChosenCharacter] = useState({})
    const [showDetail, setShowDetail] = useState(false)

    useEffect(async () => {
        const characterList = await fetchCharacters();
        setCharacterList(characterList);
    }, [])


    const handleDetail = (chosenName) => {
        const chosenCharacter = characterList.find(character => character.name === chosenName);

        setChosenCharacter(chosenCharacter);
        setShowDetail(true);
    }

    const handleBack = () => {
        setShowDetail(false)
    }

    const characterMap = characterList.map(character => (
        <ul className={styles.listPage}>
            <li key={characterList.indexOf(character)}>
                <CharacterPreview
                    {...character}
                    handleDetail={handleDetail}
                />
            </li>
        </ul>
    ))




    return (
        <div>
            {showDetail ?
                <CharacterDetail {...chosenCharacter}
                    handleBack={handleBack}
                />
                :
                characterMap
            }
        </div>
    )
}


export default ListPage;
