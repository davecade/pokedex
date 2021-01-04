import React, { Fragment } from 'react';
import './modal.styles.scss';
import { CardView } from '../cardview/cardview.component'

export const Modal = ({clickedData, modalEnabled, disableModal}) => {
    let visibility
    let width

    if(modalEnabled) {
        visibility = "visible";
        width = "1000px";
    } else {
        visibility = "hidden";
        width = "0px";
    }

    const toggleModal = (e) => {
        if(e.target.matches('.modal')) {
            return disableModal()
        }
    }
    

    return(
        <Fragment>
            <div 
                className="modal"
                onClick={toggleModal}
                style={{
                    visibility: visibility
                }}
            >
                <div 
                    className="modal-content"
                    style={{
                        visibility: visibility, 
                        width: width
                    }}
                >
                    <CardView pokemon={clickedData}/>
                </div>
            </div>
        </Fragment>
    )
}