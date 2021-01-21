import React, { Fragment } from 'react';
import './cardview.styles.scss'

export const CardView = ({pokemon}) => {
    console.log("poke", pokemon)
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
                        <p>ATTACK / DEFENSE</p>
                        <p>SPEED</p>
                        <p>HEIGHT</p>
                        <p>WEIGHT</p>
                    </div>
                    <div className="stat-value">
                        <p>{pokemon.type[0] ? pokemon.type[0].toUpperCase() : ''} {pokemon.type[1] ? `and ${pokemon.type[1].toUpperCase()}` : ''}</p>
                        <p>{pokemon.hp}</p>
                        <p>{pokemon.attack} / {pokemon.defense}</p>
                        <p>{pokemon.speed}</p>
                        <p>{pokemon.height/10} m</p>
                        <p>{pokemon.weight/10} kg</p>
                    </div>
                </div>
                <img src={pokemon.image} alt="" className="cardview-img"/>
            </div>
            <div className="red"></div>
        </div>
    )
}