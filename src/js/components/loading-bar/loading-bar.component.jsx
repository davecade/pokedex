import React, { Fragment } from 'react';
import './loading-bar.styles.scss';

export const LoadingBar = ({length}) => {
    let percent;

    // -- Runs loading bar if loading is in progress
    const widthPercent = () => {
        let currentLength = length
        percent = Math.floor((currentLength/151)*100)
        return percent
    }

    return (
        <Fragment>
            <h1>Loading Pokemon</h1>
            <h1>{widthPercent()}%</h1>
            <div className="loading-container">
                <div className="loading-bar" style={{width: `${widthPercent()}%`}}></div>
            </div>
        </Fragment>
    )
}