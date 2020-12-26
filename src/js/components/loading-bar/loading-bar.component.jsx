import React, { Fragment } from 'react';

export const LoadingBar = ({length}) => {

    // -- Runs loading bar if loading is in progress
    const loadingInProgress = () => {
        const LoadngBarEl = document.querySelector('.loading-bar')
        if(LoadngBarEl) {
            let currentLength = length
            let percent = Math.floor((currentLength/151)*100)
            LoadngBarEl.style = `width: ${percent}%`
        }
    }

    if(length<151) {
        loadingInProgress()
    }

    return (
        <Fragment>
            <h1>Loading Pokemon</h1>
            <div className="loading-container">
                <div className="loading-bar"></div>
            </div>
        </Fragment>
    )
}