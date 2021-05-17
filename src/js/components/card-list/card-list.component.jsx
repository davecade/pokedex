import React, { Fragment } from 'react';
import Card from '../card/card.component'
import './card-list.styles.scss'
import { connect } from 'react-redux'

const CardList = ({pokemonList, searchField}) => {

    const filterPokemon = pokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
        <Fragment>
            <div className="card-list"> 
                <div className="card-list-container">
                    {
                        filterPokemon.map((pokemon, index) => (
                            <Card key={index} pokemon={pokemon} evolveInfo={false}/>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    pokemonList: state.pokemon.pokemonList,
    searchField: state.search.searchField,
})

export default connect(mapStateToProps)(CardList);