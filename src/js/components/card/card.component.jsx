import React, { Fragment } from 'react';
import './card.styles.scss';

export const Card = ({pokemon, handleClickOnCard, evolveInfo, borderColor}) => {

    return (
        <div
            className={`card-content ${evolveInfo ? 'evolveInfo' : 'mainPage'}`}
            id={pokemon.id} onClick={handleClickOnCard}
            style={{border: `4px solid ${borderColor}`}}>

            {evolveInfo ? '' : <h2>{pokemon.name}</h2>}
            <img src={pokemon.image} alt=""/>
        </div>
    )
}

export default Card; 