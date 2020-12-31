import React from 'react';
import './cardview.styles.scss'

export const CardView = ({pokemon}) => {
    return (
        <div className="cardview">
            <h1 className="cardview-name">{pokemon.name}</h1>
            <div className="cardview-content">
                <img src={pokemon.img} alt="" className="cardview-img"/>
                <div className="cardview-stats">
                    <p>STATS</p>
                    <p>DESCRIPTON</p>
                </div>
            </div>
        </div>
    )
}