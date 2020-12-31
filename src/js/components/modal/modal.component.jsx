import React, { Fragment } from 'react';
import './modal.styles.scss';
import { CardView } from '../cardview/cardview.component'

export const Modal = ({clickedData}) => {
    return(
        <Fragment>
            <div className="modal">
                <div className="modal-content">
                    <CardView pokemon={{img: clickedData[1], name: clickedData[0]}}/>
                </div>
            </div>
        </Fragment>
    )

}