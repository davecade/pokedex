import React, { Fragment } from 'react';
import './modal.styles.scss';
import CardView from '../cardview/cardview.component'
import { connect } from 'react-redux';
import { disableModal } from '../../redux/modal/modal.actions'

const Modal = ({modalEnabled, disableModal}) => {
    let visibility
    let width
    let max

    if(modalEnabled) {
        visibility = "visible";
        max = '1000px'
        width = "100%";
    } else {
        visibility = "hidden";
        max = '1000px'
        width = "0";
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
                        maxWidth: max,
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