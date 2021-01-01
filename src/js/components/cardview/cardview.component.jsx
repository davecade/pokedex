import React, { Fragment } from 'react';
import './cardview.styles.scss'

export const CardView = ({pokemon}) => {
return (
        <div className="cardview">
            <div className="name-container">
                <h1 className="cardview-name">{pokemon.name}</h1>
            </div>
            <div className="cardview-content">
                <div className="cardview-stats">
                    <div className="stat-title">
                        <p>TYPE</p>
                        <p>HP</p>
                        <p>ATTACK</p>
                        <p>DEFENSE</p>
                        <p>SPEED</p>
                        <p>WEIGHT</p>
                    </div>
                    <div className="stat-value">
                        <p>{pokemon.type[0]} {pokemon.type[1] ? `and ${pokemon.type[1]}` : ''}</p>
                        <p>{pokemon.hp}</p>
                        <p>{pokemon.attack}</p>
                        <p>{pokemon.defense}</p>
                        <p>{pokemon.speed}</p>
                        <p>{pokemon.weight}</p>
                    </div>
                </div>
                <img src={pokemon.image} alt="" className="cardview-img"/>
            </div>
            <div className="red"></div>
        </div>
    )
}