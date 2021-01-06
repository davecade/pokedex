import React, { Fragment } from 'react';
import { SearchBar } from '../search-bar/search-bar.component'
import { LoadingBar } from '../loading-bar/loading-bar.component'
import './display.styles.scss'

export const Display = ({length, title, handleChange}) => {
  if(length < 151) {
      return (
        <div className="display">
            <LoadingBar length={length}/>
        </div>
      )
    } else {
      return (
        <Fragment>
            <div className="display">
                <h1 className="title">{title}</h1>
                <SearchBar handleChange={handleChange} />
            </div>
        </Fragment>
      )
    }
}