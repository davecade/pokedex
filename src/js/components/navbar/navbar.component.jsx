import React, { Fragment } from 'react';
import { SearchBar } from '../search-bar/search-bar.component'
import { LoadingBar } from '../loading-bar/loading-bar.component'
import { TypeSelector } from '../type-selector/type-selector.component'
import './navbar.styles.scss'

export const Navbar = ({length, title, handleChange}) => {
  if(length < 151) {
      return (
        <div className="navbar">
            <LoadingBar length={length}/>
        </div>
      )
    } else {
      return (
        <Fragment>
            <div className="navbar">
                <h1 className="title">{title}</h1>
                <SearchBar handleChange={handleChange} />
                <TypeSelector />
            </div>
        </Fragment>
      )
    }
}