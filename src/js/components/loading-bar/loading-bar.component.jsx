import React, { Fragment } from 'react';

export const LoadingBar = ({length}) => {
    let percent;

    // -- Runs loading bar if loading is in progress
    const loadingInProgress = () => {
        const LoadngBarEl = document.querySelector('.loading-bar')
        if(LoadngBarEl) {
            let currentLength = length
            percent = Math.floor((currentLength/151)*100)
            LoadngBarEl.style = `width: ${percent}%`
        }
    }
    loadingInProgress()

    return (
        <Fragment>
            <h1>Loading Pokemon</h1>
            <h1>{percent}%</h1>
            <div className="loading-container">
                <div className="loading-bar"></div>
            </div>
        </Fragment>
    )
}