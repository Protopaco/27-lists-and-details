import PropTypes from 'prop-types';
import React from 'react';
import styles from './characterPreview.css'
import { Link } from 'react-router-dom'


const CharacterPreview = ({ image, name }) => (

    <figure
        className={styles.characterPreview}>
        <Link to={`/details/${name}`}>
            <img src={image} className={styles.previewImage} />
            <figcaption className={styles.previewName}> {name} </figcaption>
        </Link>
    </figure>

);

CharacterPreview.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default CharacterPreview;
