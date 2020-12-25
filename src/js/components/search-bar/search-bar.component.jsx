import React from 'react'

export const SearchBar = ({handleChange}) => {

    return (
        <input className="searchbar" placeholder="Search Pokemon" onChange={handleChange} />
    )
}