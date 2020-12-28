import React, { Fragment } from 'react';
import './modal.styles.scss';

export const Modal = () => (
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

                <h4>Register with us to get offers, support and more</h4>
                <input type="submit" className="submit-btn"/>
            </div>
        </div>
    </Fragment>
)