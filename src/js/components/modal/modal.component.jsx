import React, { Fragment } from 'react';
import './modal.styles.scss';
import { CardView } from '../cardview/cardview.component'

export const Modal = ({clickedData, modalEnabled, disableModal}) => {
    
    console.log("hello")
    if(modalEnabled) {
        return(
            <Fragment>
                <div 
                    className="modal"
                    onClick={disableModal}
                    style={
                        {visibility: "visible"}
                    }
                >
                    <div 
                        className="modal-content"
                        style={
                            {visibility: "visible", width: "1000px"}
                        }
                    >
                        <CardView pokemon={clickedData}/>
                    </div>
                </div>
            </Fragment>
        )
    } else {
        return(
            <Fragment>
                <div
                    className="modal"
                    style={
                        {visibility: "hidden"}
                    }
                >
                    <div
                        className="modal-content"
                        style={
                            {visibility: "hidden", width: "0px"}
                        }
                    >
                        <CardView pokemon={clickedData}/>
                    </div>
                </div>
            </Fragment>
        )
    }


}