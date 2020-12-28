import React, { Fragment } from 'react';
import { Card } from '../card/card.component'
import './card-list.styles.scss'

export const CardList = ({pokemon}) => {
    const iterator = new Array(pokemon.stats.length).fill(1)

    return (
        <Fragment>
            <div className="card-list"> 
                <div className="card-list-container">
                    {
                        iterator.map((item, index) => (
                            <Card key={index} pokemon={{img: pokemon.images[index], stat: pokemon.stats[index]}}/>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )

}