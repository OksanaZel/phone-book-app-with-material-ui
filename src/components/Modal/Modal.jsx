import React, { useState} from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import Modal from '@material-ui/core/Modal';
import ContactForm from "../ContactForm/ContactForm";
import {StyledBox, StyledIconButton} from "./Modal.styled"

export default function BasicModal() {
    const [isShowModal, setIsShowModal] = useState(false);
    
    const toggleModal = () => {
        setIsShowModal(!isShowModal);
    }

  return (
    <>
    <Fab onClick={toggleModal} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
          <Modal open={isShowModal} onClose={toggleModal} >
            <StyledBox>
                <StyledIconButton onClick={toggleModal} size="large" color="primary" aria-label="close">
                    <CancelIcon fontSize="large" color="primary" />
                </StyledIconButton> 
                <ContactForm />
            </StyledBox>           
      </Modal>
    </>
  );
}