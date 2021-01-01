import React, { Fragment } from 'react';
import './modal.styles.scss';
import { CardView } from '../cardview/cardview.component'

export const Modal = ({clickedData, toggleModal}) => {
    return(
        <Fragment>
            <div className="modal" onClick={toggleModal}>
                <div className="modal-content">
                    <CardView pokemon={clickedData}/>
                </div>
            </div>
        </Fragment>
    )

}