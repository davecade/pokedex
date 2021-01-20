import React, { Fragment } from 'react';
import './card.styles.scss';

export const Card = ({pokemon , handleClickOnCard}) => (
    <div className="card-content" id={pokemon.id} onClick={handleClickOnCard}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt=""/>
    </div>
)