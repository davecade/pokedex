import React, { Fragment } from 'react';
import { Card } from '../card/card.component'

export const CardList = props => {
    const iterator = new Array(props.stats.length).fill(1)

    return (
        <Fragment>
            <div className="card-list"> 
                <div className="card-list-container">
                    {
                        iterator.map((item, index) => (
                            <Card key={index} stat={props.stats[index]} pic={props.pics[index]}/>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )

}