import React, { Fragment } from 'react';
import { SearchBar } from '../search-bar/search-bar.component'
import { LoadingBar } from '../loading-bar/loading-bar.component'

export const Display = ({length, title, handleChange}) => {
  if(length < 151) {
      return <LoadingBar length={length}/>
    } else {
      return (
        <Fragment>
            <h1 className="title">{title}</h1>
            <SearchBar handleChange={handleChange} />
        </Fragment>
      )
    }
}