import React, { Fragment } from 'react';
import Card from '../card/card.component'
import './card-list.styles.scss'
import { connect } from 'react-redux'
import { names } from '../../data/pokemon.data'

const CardList = ({pokemonList, searchField, selectedType}) => {
    let filteredPokemon = names.filter(pokemon => 
        pokemon.toLowerCase().includes(searchField.toLowerCase()))

    //-- Fix types later
    // if(selectedType!=='All Types') {
    //     filteredPokemon = filteredPokemon.filter(pokemon =>
    //         pokemon.type.includes(selectedType))
    // }


    return (
        <Fragment>
            <div className="card-list"> 
                <div className="card-list-container">
                    {
                        filteredPokemon.map((pokemon, index) => {
                            return <Card key={index} pokemon={pokemon} dataID={index} evolveInfo={false}/>
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