import React, { Fragment } from 'react';
import './card.styles.scss';

export const Card = ({pokemon , handleClickOnCard}) => (
    <div className="card-content" onClick={handleClickOnCard}>
        <h2>{pokemon.stat}</h2>
        <img src={pokemon.img} alt=""/>
    </div>
)