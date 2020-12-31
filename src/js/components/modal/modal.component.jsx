import React, { Fragment } from 'react';
import './modal.styles.scss';
import { Card } from '../card/card.component'

export const Modal = ({clickedData}) => {
    return(
        <Fragment>
            <div className="modal">
                <div className="modal-content">
                    <Card pokemon={{img: clickedData[1], stat: clickedData[0]}}/>
                </div>
            </div>
        </Fragment>
    )

}