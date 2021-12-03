import React, { Fragment } from 'react';
import TypeSelector from '../type-selector/type-selector.component'
import './navbar.styles.scss'
import SearchBar from '../search-bar/search-bar.component';
import Loader from '../loader/loader.component'
import { connect } from 'react-redux';

const Navbar = ({ loading }) => {

      return (
        <Fragment>
          {
            <div className="navbar">
              {
                loading ? <Loader />
                :
                <Fragment>
                  <h1 className="title">Dave's Pokedex</h1>
                  <div className="params">
                    <SearchBar />
                    <TypeSelector />
                  </div>
                </Fragment> 
              }

            </div>
          }

        </Fragment>
      )
    //}
}

const mapStateToProps = state => ({
  loading: state.pokemon.loading
})

export default connect(mapStateToProps)(Navbar)