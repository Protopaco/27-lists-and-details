import PropTypes from 'prop-types';
import React from 'react';
import styles from './characterPreview.css'
import Link from 'react-router-dom'


const CharacterPreview = ({ image, name }) => (
    <Link to={`details/${name}`}>
        <figure
            className={styles.characterPreview}>
            <img src={image} className={styles.previewImage} />
            <figcaption className={styles.previewName}> {name} </figcaption>
        </figure>
    </Link>

);

CharacterPreview.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleDetail: PropTypes.func.isRequired
}

export default CharacterPreview;
