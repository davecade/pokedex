import React from 'react'
import './type-selector.styles.scss'
import { connect } from 'react-redux'
import { updateTypeSelection } from '../../redux/search/search.actions'

const TypeSelector = ({updateTypeSelection}) => {

    //-- Checking the data
    // -- tHE POKEMON LIST should be the filtered data from search

    let listOfTypes = ["All Types", "grass", "poison", "fire", "flying", "water", "bug", "normal", "electric", "ground", "fairy", "fighting", "psychic", "rock", "steel", "ice", "ghost", "dragon"]

    const handleChange = (e) => {
        updateTypeSelection(e.target.value)
    }

    return(
        <div className="typeSelector">
            <div className="dropdown">
                <select className="dropbtn" onChange={handleChange}>
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

const mapDispatchToProps = dispatch => ({
    updateTypeSelection: type => dispatch(updateTypeSelection(type))
})

export default connect(null, mapDispatchToProps)(TypeSelector);