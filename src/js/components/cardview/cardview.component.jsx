import React, { Fragment } from 'react';
import './cardview.styles.scss'

export const CardView = ({pokemon}) => {
return (
        <div className="cardview">
            <h1 className="cardview-name">{pokemon.name}</h1>
            <div className="cardview-content">
                    <div className="cardview-stats">
                    <p>PUT</p>
                    <p>STATS</p>
                    <p>AND</p>
                    <p>DESCRIPTON</p>
                    <p>HERE</p>
                </div>
                <img src={pokemon.image} alt="" className="cardview-img"/>
            </div>
            <div className="red"></div>
        </div>
    )
}