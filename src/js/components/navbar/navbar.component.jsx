import React, { Fragment } from 'react';
import TypeSelector from '../type-selector/type-selector.component'
import './navbar.styles.scss'
import SearchBar from '../search-bar/search-bar.component';

const Navbar = () => {

      return (
        <Fragment>
            <div className="navbar">
                <h1 className="title">Dave's Pokedex</h1>
                <div className="params">
                  <SearchBar />
                  <TypeSelector />
                </div>

            </div>
        </Fragment>
      )
    //}
}


export default Navbar