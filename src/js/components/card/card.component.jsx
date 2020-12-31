import React, { Fragment } from 'react';
import './card.styles.scss';

export const Card = ({pokemon , handleClickOnCard, id}) => (
    <div className="card-content" id={id} onClick={handleClickOnCard}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img} alt=""/>
    </div>
)