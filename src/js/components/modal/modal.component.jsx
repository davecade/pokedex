import React, { Fragment } from 'react';
import './modal.styles.scss';
import { Card } from '../card/card.component'

export const Modal = ({clickedData}) => {
    return(
        <Fragment>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-title">
                        <h3>Sign Up</h3>
                        <div className="close">
                            <div className="first"></div>
                            <div className="second"></div>
                        </div>
                    </div>
                    <Card pokemon={{img: clickedData[0], stat: clickedData[1]}}/>
                </div>
            </div>
        </Fragment>
    )

}