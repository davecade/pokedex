import React, { Fragment } from 'react';
import { LoadingBar } from '../loading-bar/loading-bar.component'
import { TypeSelector } from '../type-selector/type-selector.component'
import './navbar.styles.scss'
import { connect } from 'react-redux';
import SearchBar from '../search-bar/search-bar.component';

const Navbar = ({ pokemonList }) => {

  let length = pokemonList.length

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
                <h1 className="title">Dave's Pokedex</h1>
                <SearchBar />
                <TypeSelector />
            </div>
        </Fragment>
      )
    }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemon.pokemonList
})

export default connect(mapStateToProps)(Navbar)