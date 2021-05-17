import React from 'react'
import './search-bar.styles.scss'
import { searchPokemon } from '../../redux/search/search.actions'
import { connect } from 'react-redux'

const SearchBar = ({ searchPokemon }) => {

    const handleChange = (e) => {
        searchPokemon(e.target.value)
    }

    return (
        <input className="searchbar" placeholder="Search Pokemon" onChange={handleChange} />
    )
}


const mapDispatchToProps = dispatch => ({
    searchPokemon: userInput => dispatch(searchPokemon(userInput))
})


export default connect(null, mapDispatchToProps)(SearchBar)