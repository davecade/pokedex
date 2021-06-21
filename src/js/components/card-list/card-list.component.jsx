import React, { Fragment } from 'react';
import Card from '../card/card.component'
import './card-list.styles.scss'
import { connect } from 'react-redux'

const CardList = ({pokemonList, searchField, selectedType}) => {
    let filteredPokemon = pokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchField.toLowerCase()))

    if(selectedType!=='All Types') {
        filteredPokemon = filteredPokemon.filter(pokemon =>
            pokemon.type.includes(selectedType))
    }


    return (
        <Fragment>
            <div className="card-list"> 
                <div className="card-list-container">
                    {
                        filteredPokemon.map((pokemon, index) => {
                            return <Card key={index} pokemon={pokemon} evolveInfo={false}/>
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    pokemonList: state.pokemon.pokemonList,
    searchField: state.search.searchField,
    selectedType: state.search.type
})

export default connect(mapStateToProps)(CardList);