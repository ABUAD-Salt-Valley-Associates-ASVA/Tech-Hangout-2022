import React from 'react'
import Book from './Form'
import './Modal.css'


const Modal = ({ visible, setVisible }) => {
    return (
        <>
            {visible && (
                <div className="modal">
                    <div class="modal__close" onClick={() => setVisible(false)}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="modal-container">
                        <div className="card">
                            <div className="card-content">
                                <Book />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )

}

export default Modal