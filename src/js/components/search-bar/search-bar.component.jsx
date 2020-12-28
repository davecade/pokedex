import React from 'react'
import './search-bar.styles.scss'

export const SearchBar = ({handleChange}) => {

    return (
        <input className="searchbar" placeholder="Search Pokemon" onChange={handleChange} />
    )
}