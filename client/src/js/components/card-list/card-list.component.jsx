import React, { Fragment } from 'react';
import Card from '../card/card.component'
import './card-list.styles.scss'
import { connect } from 'react-redux'
import { names, typeList } from '../../data/pokemon.data'



const CardList = ({ searchField, selectedType}) => {
    let filteredPokemon = []

    //-- adding pokemon as object
    names.forEach((pokemon, index) => {
        if(pokemon.toLowerCase().includes(searchField.toLowerCase())) {
            filteredPokemon.push({
                name: pokemon,
                id: index,
                types: typeList[index]
            })
        }
    })

    if(selectedType!=='All Types') {
        filteredPokemon = filteredPokemon.filter(pokemon => pokemon.types.includes(selectedType))
    }

    return (
        <Fragment>
            <div className="card-list"> 
                <div className="card-list-container">
                    {
                        filteredPokemon.map((pokemon, index) => {
                            return <Card key={index} pokemonID={pokemon.id} evolveInfo={false}/>
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    searchField: state.search.searchField,
    selectedType: state.search.type
})

export default connect(mapStateToProps)(CardList);