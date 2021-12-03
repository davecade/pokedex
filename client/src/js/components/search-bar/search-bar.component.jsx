import React from 'react'
import './search-bar.styles.scss'
import { searchPokemon } from '../../redux/search/search.actions'
import { connect } from 'react-redux'

const SearchBar = ({ searchField, searchPokemon }) => {

    const handleChange = (e) => {
        let userInput = e.target.value
        searchPokemon(userInput)
    }

    return (
        <input className="searchbar" placeholder="Search Pokemon" value={searchField} onChange={handleChange} />
    )
}

const mapStateToProps = state => ({
    searchField: state.search.searchField
})

const mapDispatchToProps = dispatch => ({
    searchPokemon: userInput => dispatch(searchPokemon(userInput))
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)