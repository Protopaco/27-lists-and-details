import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BiArrowBack } from "react-icons/bi";
import { fetchCharacter } from '../../services/fetch.js'
import { useParams, Link } from 'react-router-dom'

export const CharacterDetail = () => {
    const [chosenCharacter, setCharacter] = useState();
    const { name } = useParams();

    useEffect(async () => {
        const fetchedCharacter = await fetchCharacter(name)
        setCharacter(fetchedCharacter)
    }, [])

    return (
        <div>
            <Link to="/">
                <BiArrowBack />
            </Link>
            {chosenCharacter ?
                <div>
                    <img src={chosenCharacter.image} alt={`image of ${chosenCharacter.name}`} />
                    <p>{`Name: ${chosenCharacter.name}`}</p>
                    <p>{`Occupation: ${chosenCharacter.occupation}`}</p>
                    <p>{`Affiliations: ${chosenCharacter.affiliations}`}</p>
                    <p>{`Description: ${chosenCharacter.description}`}</p>
                    <p>{`Gender: ${chosenCharacter.gender}`}</p>
                    <p>{`Born: ${chosenCharacter.born}`}</p>
                    <p>{`Status: ${chosenCharacter.status}`}</p>
                    <p>{`Potrayed By: ${chosenCharacter.portrayedby}`}</p>
                </div >
                :
                <p>Loading</p>
            }
        </div>
    )
}


export default CharacterDetail;
