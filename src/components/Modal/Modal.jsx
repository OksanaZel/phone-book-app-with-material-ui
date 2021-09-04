import React from "react";
import PropTypes from 'prop-types';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import Modal from '@material-ui/core/Modal';
// import ContactForm from "../ContactForm/ContactForm";
import { StyledBox, StyledIconButton } from "./Modal.styled";

function BasicModal({onClick, open, onClose, children}) {
  return (
    <div>
      {/* <Fab onClick={onClick} color="primary" aria-label="add">
        <AddIcon />
      </Fab> */}
          <Modal open={open} onClose={onClose} >
            <StyledBox>
                <StyledIconButton onClick={onClick} size="large" color="primary" aria-label="close">
                    <CancelIcon fontSize="large" color="primary" />
                </StyledIconButton> 
                {children}
            </StyledBox>           
      </Modal>
      
    </div>
  )
}

BasicModal.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default BasicModal;


// export default function BasicModal() {
//     const [isShowModal, setIsShowModal] = useState(false);
    
//     const toggleModal = () => {
//         setIsShowModal(!isShowModal);
//     }

//   return (
//     <>
//     <Fab onClick={toggleModal} color="primary" aria-label="add">
//         <AddIcon />
//       </Fab>
//           <Modal open={isShowModal} onClose={toggleModal} >
//             <StyledBox>
//                 <StyledIconButton onClick={toggleModal} size="large" color="primary" aria-label="close">
//                     <CancelIcon fontSize="large" color="primary" />
//                 </StyledIconButton> 
//                 <ContactForm />
//             </StyledBox>           
//       </Modal>
//     </>
//   );
// }