import React, { Fragment } from 'react';
import { Card } from '../card/card.component'
import './card-list.styles.scss'

export const CardList = ({pokemon, handleClickOnCard}) => {

    return (
        <Fragment>
            <div className="card-list"> 
                <div className="card-list-container">
                    {
                        pokemon.names.map((item, index) => (
                            <Card key={index} handleClickOnCard={handleClickOnCard} pokemon={{img: pokemon.images[index], name: pokemon.names[index], id: pokemon.ids[index]}}/>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )

}