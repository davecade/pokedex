import { ModalActionTypes } from '../modal/modal.types'

export const enableModal = () => ({
    type: ModalActionTypes.ENABLE_MODAL,
    payload: true
})

export const disableModal = () => ({
    type: ModalActionTypes.DISABLE_MODAL,
    payload: false
})