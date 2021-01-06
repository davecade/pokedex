import React, { Fragment } from 'react';
import './modal.styles.scss';
import { CardView } from '../cardview/cardview.component'

export const Modal = ({clickedData, modalEnabled, disableModal}) => {
    let visibility
    let width

    document.onkeydown = function(e) {
        if(e.key == 'Escape') disableModal()
    };

    if(modalEnabled) {
        visibility = "visible";
        width = "1000px";
    } else {
        visibility = "hidden";
        width = "0px";
    }

    const toggleModal = (e) => {
        let test = e.target.closest('.modal-content')
        console.log(test)

        if(e.target.matches('.modal')) {
            disableModal()
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