import React, { Fragment } from 'react';

export const Card = ({pokemon}) => (
    <div className="card-content">
        <h2>{pokemon.stat}</h2>
        <img src={pokemon.img} alt=""/>
    </div>
)