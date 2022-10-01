import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { ModalStyled } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root')


export const Modal = ({ onClose, children }) => {    

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => { window.removeEventListener('keydown', handleKeyDown) };
    });

    const handleKeyDown = e => {
        if (e.code === "Escape") {
            onClose();
        }
    }

    const handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }
    

    return createPortal(
            <ModalStyled onClick={handleBackDropClick}>
                <div>
                    {children}
                </div>
            </ModalStyled>,
            modalRoot
        );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
}