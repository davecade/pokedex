import React, { Fragment } from 'react';

export const CardList = (props) => (
    <Fragment>
        <div className="card-list">
            {
                props.pokemons.map((pokemon, index) => (
                    <img src={pokemon} alt=""/>
                ))
            }
        </div>
    </Fragment>
)