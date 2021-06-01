import React from 'react'
import './type-selector.styles.scss'

export const TypeSelector = ({pokemonList}) => {

    //-- Checking the data
    // -- tHE POKEMON LIST should be the filtered data from search

    let listOfTypes = ["All Types", "grass", "poison", "fire", "flying", "water", "bug", "normal", "electric", "ground", "fairy", "fighting", "psychic", "rock", "steel", "ice", "ghost", "dragon"]

    return(
        <div className="typeSelector">
            <div className="dropdown">
                <select className="dropbtn">
                    {
                        listOfTypes.map(type => {
                            return <option selected={type === "All Types" ? "selected" : ""} value={type}>{type.toUpperCase()}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}