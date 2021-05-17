import React, { Fragment } from 'react';
import './modal.styles.scss';
import CardView from '../cardview/cardview.component'
import { connect } from 'react-redux';
import { disableModal } from '../../redux/modal/modal.actions'

const Modal = ({modalEnabled, disableModal}) => {
    let visibility
    let width

    if(modalEnabled) {
        visibility = "visible";
        width = "1000px";
    } else {
        visibility = "hidden";
        width = "0px";
    }

    document.onkeydown = function(e) {toggleModal(e)}
    const toggleModal = (e) => {
        if(e.target.matches('.modal') || e.key === 'Escape') {
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
                    <CardView/>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    modalEnabled: state.modal.modalEnabled
})

const mapDispatchToProps = dispatch => ({
    disableModal: () => dispatch(disableModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)