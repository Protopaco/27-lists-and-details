import React, { useParams, setState } from 'react';
import PropTypes from 'prop-types';
import { BiArrowBack } from "react-icons/bi";
import { useParams } from 'react-router-dom';
import { fetchCharacter } from '../../services/fetch.js'

export const CharacterDetail = () => {
    const [character, setCharacter] = setState();
    const CharacterName = useParams();


    return (
        <div>
            <BiArrowBack />
            <img src={image} alt={`image of ${name}`} />
            <p>{`Name: ${name}`}</p>
            <p>{`Occupation: ${occupation}`}</p>
            <p>{`Affiliations: ${affiliations}`}</p>
            <p>{`Description: ${description}`}</p>
            <p>{`Gender: ${gender}`}</p>
            <p>{`Born: ${born}`}</p>
            <p>{`Status: ${status}`}</p>
            <p>{`Potrayed By: ${portrayedby}`}</p>
        </div>
    )
}

CharacterDetail.propTypes = {
    affiliations: PropTypes.arrayOf(PropTypes.strings),
    born: PropTypes.string,
    catagories: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string.isRequired,
    gender: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string,
    portrayedby: PropTypes.string,
    rank: PropTypes.string,
    status: PropTypes.string
}

export default CharacterDetail;
