import React, { Fragment } from 'react';
import './card.styles.scss';

export const Card = ({pokemon , handleClickOnCard, key}) => (
    <div className="card-content" id={key} onClick={handleClickOnCard}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img} alt=""/>
    </div>
)