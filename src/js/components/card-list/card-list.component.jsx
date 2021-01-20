import React, { Fragment } from 'react';
import { Card } from '../card/card.component'
import './card-list.styles.scss'

export const CardList = ({pokemonList, handleClickOnCard}) => {

    return (
        <Fragment>
            <div className="card-list"> 
                <div className="card-list-container">
                    {
                        pokemonList.map((pokemon, index) => (
                            <Card key={index} handleClickOnCard={handleClickOnCard} pokemon={pokemon}/>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )

}