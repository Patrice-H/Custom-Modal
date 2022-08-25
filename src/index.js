import React from 'react'
import closeModalBtn from 'assets/close-btn.png'

const hideModal = () => {
  const modal = document.getElementById('modal')
  modal.classList.add('hidden')
  window.location.reload()
}

const Modal = () => {
  return (
    <div id='modal' data-testid='modal' className='hidden'>
      <div id='confirmation'>
        <p>Employee Created!</p>
        <span
          id='close-modal-btn'
          data-testid='close-modal-btn'
          onClick={hideModal}
        >
          <img src={closeModalBtn} alt='Close Modal' />
        </span>
      </div>
    </div>
  )
}

export default Modal
