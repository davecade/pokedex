import React, { Fragment } from 'react';

export const Card = props => (
    <div className="card-content">
        <h2>{props.stat}</h2>
        <img src={props.pic} alt=""/>
    </div>
)