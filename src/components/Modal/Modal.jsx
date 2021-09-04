import React from "react";
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import CancelIcon from '@material-ui/icons/Cancel';
import Modal from '@material-ui/core/Modal';
import { StyledBox, StyledIconButton } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

function BasicModal({onClick, open, onClose, children}) {
  return createPortal(
          <Modal open={open} onClose={onClose} >
            <StyledBox>
                <StyledIconButton onClick={onClick} size="large" color="primary" aria-label="close">
                    <CancelIcon fontSize="large" color="primary" />
                </StyledIconButton> 
                {children}
            </StyledBox>           
      </Modal>, modalRoot,
  )
}

BasicModal.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default BasicModal;