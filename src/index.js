import React from 'react'
import closeModalBtn from 'assets/close-btn.png'

/**
 * Customized modal component
 *
 * @component
 * @returns {JSX} The component
 */
const Modal = (props) => {
  return (
    <div
      id='modal-container'
      data-testid='modal'
      className={props.isOpen ? null : 'hidden-modal'}
    >
      <div id='modal-content'>
        <div id='modal-text'>{props.text}</div>
        <span
          id='close-modal-btn'
          data-testid='close-modal-btn'
          onClick={props.hideModal}
        >
          <img src={closeModalBtn} alt='Close Modal' />
        </span>
      </div>
    </div>
  )
}

export default Modal
